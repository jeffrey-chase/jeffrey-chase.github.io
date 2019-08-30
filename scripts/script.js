$(() => {

  $('#navbutton').click(() => {
    $('nav').toggleClass('show');
  })


  const BAR_DELAY = 1000;
  const TIME_TO_END = 7000;
  // After 3 seconds, start changing the bars
  // Ends the animation and shows the main page

  $('.bar-holder div').hide()

  window.setTimeout(() => {
    $('.bar-holder div').show();
  }, BAR_DELAY)
  window.setTimeout(() => {
    $(document.body).removeClass('intro');
  }, TIME_TO_END)



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
})
