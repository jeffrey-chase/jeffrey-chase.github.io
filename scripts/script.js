$(() => {

  // Set hamburger menu click action
  $('#navbutton').click(() => {
    $('nav').toggleClass('show');
  })

  // Time between window load and bar moving
  const BAR_DELAY = 1000;
  const TIME_TO_END = 7000;
  // Ends the animation and shows the main page

  // Hide the bar holder so it can be shown after the delay
  $('.bar-holder div').hide()

  // Show the barholder after the delay
  window.setTimeout(() => {
    $('.bar-holder div').show();
  }, BAR_DELAY)

  // Show the main content and hide the animation after a delay
  window.setTimeout(() => {
    $(document.body).removeClass('intro');
  }, TIME_TO_END)


  // Function to determine if an element has been scrolled to
  function hasBeenScrolledTo(e) {
    let element = $(e);

    if (element.hasClass('pre')) { // hasn't been scrolled to yet
      let top = element[0].getBoundingClientRect().top;
      if (top < $(window).innerHeight()) {
        return true;
      }
    }
    return false;
  }

  let allContent = $('.content, .row, h2, h3, h4');
  allContent.addClass('pre');

  window.setTimeout(() => $('#introduction').children().removeClass('pre'), BAR_DELAY + TIME_TO_END + 500);

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

  let tabButtonHolder = $('.tab-holder');
  let tabTitles = [];
  $('.tab .title').each((i, e) => tabTitles.push($(e).text()));


  tabTitles.forEach((e, i) => {
    let newTab = $('<div></div>').addClass('tab-button').text(""+(i+1));
    if (i === 0) newTab.addClass('tab-selected');
    newTab.appendTo(tabButtonHolder);
  })



  let tabButtons = $('.tab-button');
  let tabButtonArray = [...tabButtons];

  let tabs = $('.tab')
  let tabsArray = [...tabs];

  tabButtons.click((e) => {

    $('.tab-selected').removeClass('tab-selected');
    let toHide = $('.tab-show').removeClass('tab-show');

    let delay = parseInt(toHide.css('transiton-delay'));
    delay += parseInt(toHide.css('transition-duration'));


    let index = tabButtonArray.indexOf(e.target);

    let toShow = tabsArray[index];
    console.log(toShow);
    $(toShow).addClass('tab-show');

    $(tabButtonArray[index]).addClass('tab-selected');

    window.setTimeout(() => {
      $(toShow).addClass('tab-show');
    }, delay);
  })

})
