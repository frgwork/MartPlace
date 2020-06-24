$(function () {

   $(".rate-star").rateYo({
      rating: 5,
      starWidth: "12px",
      readOnly: true
   });

   $('.fslaider__box').slick ({
      nextArrow: '<button class="slick-arrow slick-prev"><img src="images/next.svg" alt="1"></button>',
      prevArrow: '<button class="slick-arrow slick-next"><img src="images/prev.svg" alt="2"></button>',
      fade: true,
   });

});