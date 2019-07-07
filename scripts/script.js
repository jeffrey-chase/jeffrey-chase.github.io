$(() => {

  $('#navbutton').click(() => {
    $('nav').toggleClass('show');
  })

  /*
   Creates a bar in the 'barchart'
  */
  function addBar(size, num) {
    // Container to hold the bar
    let newBarContainer = $('<span></span>')
      .attr('id', 'bar-' + num)
      .attr('class', 'bar-container')
      .css('height', (size) + '%');

    // The bar to be added
    let newBar = $('<span></span>')
      .attr('class', 'bar')
    newBarContainer.append(newBar);
    $('#bar-charts').append(newBarContainer);
  }

  /* 
   Adds 5 bars to the animated-graphs-intro div
  */

  const BAR_INIT_DELAY = 1000;

  function barLogoInit() {
    $('#animated-graphs-intro')
      .append($('<div></div>').attr('id', 'bar-charts'));
    let maxHeight = $("#bar-charts").innerHeight();
    ([1, 1, 1, 1, 1]).forEach((e, i) => {
      // Random size between 0 and 90
      addBar(Math.random() * 90, i);
    });

  }
  window.setTimeout(barLogoInit, BAR_INIT_DELAY); // Initialize after 1 second


  const TIME_TO_CHANGE_BARS = 3000;
  const BAR_UPDATE_FREQUENCY = 500;
  const TIME_TO_END = 5000;
  // After 3 seconds, start changing the bars
  window.setTimeout(() => {
    const maxHeight = 90;

    let interval = window.setInterval(() => {
      $('.bar-container').each(function () {
        let noise = Math.random() * maxHeight + 10;
        let prev = parseFloat($(this).css('height'))
        let newHeight =
          prev + noise > maxHeight || prev + noise < 10 ?
          prev - noise : prev + noise;
        $(this)
          .css('height', newHeight + '%');
      })
    }, BAR_UPDATE_FREQUENCY);

    // Ends the animation and shows the main page
    window.setTimeout(() => {
      $(document.body).removeClass('intro');
    }, TIME_TO_END)
    
  }, TIME_TO_CHANGE_BARS);


  function hasBeenScrolledTo(e) {
    let element = $(e);

    if (element.hasClass('pre')) {
      let top = element[0].getBoundingClientRect().top;
      if (top < $(window).innerHeight()) {
        return true
      }
    }
    return false;
  }

  let allContent = $('.content, .row, h2, h3, h4');
  allContent.addClass('pre');

  window.setTimeout(() => $('#introduction').children().removeClass('pre'), TIME_TO_CHANGE_BARS + TIME_TO_END + 500);

  $(window).scroll((e) => {
    let next = $('.pre').first();


    if (hasBeenScrolledTo(next)) {
      next.removeClass('pre');
    }

    const header = $('header');
    const headerSwitch = header.outerHeight() * 0.9;

    if (parseFloat(window.scrollY) > 70 && !header.hasClass('stuck')) {
      header.addClass('stuck');
    } else if (parseFloat(window.scrollY) < 70) {
      header.removeClass('stuck');
    }
  });

})
