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
        breakpoint: 640,
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
  $('.study-tour__slide').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
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
  


 // Intersection Observer for animations
 const animatedElements = document.querySelectorAll('.animatedParent');

 const observerOptions = {
   root: null, // viewport
   rootMargin: '0px',
   threshold: 0.1 // 10% of the element is visible
 };

 const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
     if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
       console.log('Element is in view:', entry.target);
       entry.target.classList.add('animate', 'animated');
       observer.unobserve(entry.target); // Stop observing after animation
     } else {
       console.log('Element is not in view:', entry.target);
     }
   });
 };

 const observer = new IntersectionObserver(observerCallback, observerOptions);

 animatedElements.forEach(element => {
   observer.observe(element);
 });

  // ... existing code ...
});