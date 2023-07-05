$(document).ready(function () {

  var swiperTeachers = new Swiper('.general_section .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 15300
    },
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.general_section .swiper-pagination',
      type: 'bullets',
      clickable: true
    },

  });

  $('.js-anchor-link').click(function (e) {
    e.preventDefault();
    $('.mobile__menu').removeClass('active')
    $('body').removeClass('opened')

    var target = $($(this).attr('href'));
    if (target.length) {
      var scrollTo = target.offset().top;
      $('body, html').animate({ scrollTop: scrollTo + 'px' }, 800);
    }
  });


  $(window).scroll(function () {
    if ($(this).scrollTop() > $(window).height() / 2) {
      $('.scrollup').addClass('showed');
    } else {
      $('.scrollup').removeClass('showed');
    }
  });
  function getToday() {
    const local = new Date();
    local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
  }
  $('input[type=date]').val(getToday());

  $('.scrollup').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });



  $("body").click(function (e) {
    if (
      !$(e.target).is(
        ".mobile__menu .right_block, .mobile__menu .right_block *"
      )
    ) {
      $('.mobile__menu').removeClass('active')
      $('body').removeClass('opened')

    }
  });

  $(document).on('click', '.open_sidebar', function () {
    $('.mobile__menu').addClass('active')
    $('body').addClass('opened')
  })

  $(document).on('click', '.mobile__menu .close', function () {
    $('.mobile__menu').removeClass('active')
    $('body').removeClass('opened')
  })

});
