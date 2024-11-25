$(document).ready(function(){
  
  $('.slider-teacher').slick({
      infinite: true,
      loop: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: false,
      autoplaySpeed: 500, 
      speed: 500, 
      cssEase: 'linear', 
      arrows: true,
      dots: true,
      responsive: [
          {
              breakpoint: 767,
              settings: {
                  slidesToShow: 1,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
              }
          }
      ]
  });
});