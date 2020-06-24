$(function () {

   $(".rate-star").rateYo({
      rating: 5,
      starWidth: "12px",
      readOnly: true
   });

   $('.fslaider__box').slick({
      nextArrow: '<button class="slick-arrow slick-prev"></button>',
      prevArrow: '<button class="slick-arrow slick-next"></button>',
      fade: true,
   });

   $('.followers__products-box').slick({
      nextArrow: '<button class="slick-arrow slick-prev"></button>',
      prevArrow: '<button class="slick-arrow slick-next"></button>',
      infinite: true,
      speed: 300,
      variableWidth: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      readOnly: true

   });


   var mixer = mixitup('.release__products-box');

});