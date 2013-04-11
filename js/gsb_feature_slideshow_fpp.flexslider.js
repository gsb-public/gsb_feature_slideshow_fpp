(function ($) {

Drupal.behaviors.gsb_feature_slideshow_fpp_flexslider = {
  attach: function (context, settings) {
    $('.slideshow-wrapper').flexslider({
      animation: 'slide',
      pauseOnHover: true,
      touch: true,
      slideshowSpeed: 10000,
      animationSpeed: 600,
      selector: '.slideshow-items > li'
    });
  }
};

}(jQuery));
