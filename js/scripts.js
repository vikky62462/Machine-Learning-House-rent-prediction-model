$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(500).fadeOut('slow');
})


$(function () {
//    console.log("things works");
//    $("#user-reviews-slider").owlCarousel({
//        items: 1,
//        autoplay: true,
//        smartSpeed: 700,
//        loop: true,
//        autoplayHoverPause: true,
//        nav: true,
//        dots: true,
//        navtext: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
//    });
    
    var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

});
