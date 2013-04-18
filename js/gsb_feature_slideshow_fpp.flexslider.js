(function ($) {

Drupal.behaviors.gsb_feature_slideshow_fpp_flexslider = {
  attach: function (context, settings) {
    $('.slideshow-wrapper').flexslider({
      animation: 'slide',
      pauseOnHover: true,
      touch: true,
      animationSpeed: 600,
      video: true,
      slideshow: false,
      selector: '.slideshow-items > li'
    });
  }
};

}(jQuery));
