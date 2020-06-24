$(function () {

   $(".rate-star").rateYo({
      rating: 5,
      starWidth: "12px",
      readOnly: true
   });

   $('.fslaider__box').slick({
      nextArrow: '<button class="slick-arrow slick-prev"><img src="images/next.svg" alt="1"></button>',
      prevArrow: '<button class="slick-arrow slick-next"><img src="images/prev.svg" alt="2"></button>',
      fade: true,
   });

   $('.followers__products-box').slick({
      nextArrow: '<button class="slick-arrow slick-prev"><img src="images/next.svg" alt="3"></button>',
      prevArrow: '<button class="slick-arrow slick-next"><img src="images/prev.svg" alt="4"></button>',
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3

   });


   var mixer = mixitup('.release__products-box');

});