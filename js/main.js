$(document).ready(function () {
  $(".slider-teacher").slick({
    infinite: true,
    loop: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 500,
    speed: 500,
    cssEase: "linear",
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
    ],
  });

  $(".timeline-slider").slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    loop: true,
    speed: 1000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
   // Fancybox Initialization
  $('[data-fancybox]').fancybox({
    buttons: ["slideShow", "share", "zoom", "fullScreen", "close"],
    loop: true,
  });

  // Isotope Initialization
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
  });

  // Filter Buttons
  $('.filter-buttons').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    $('.filter-buttons button').removeClass('active');
    $(this).addClass('active');
  });
  
});
