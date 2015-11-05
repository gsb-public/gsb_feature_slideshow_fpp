(function ($) {

Drupal.behaviors.gsb_feature_slideshow_fpp_flexslider = {
  attach: function (context, settings) {
    $('.slideshow-wrapper').flexslider({
      selector: '.slideshow-items > li',
      animation: 'slide',
      animationLoop: true,
      animationSpeed: 600,
      slideshow: false,

      // Usability features
      pauseOnHover: true,
      useCSS: true,
      touch: true,
      video: false,

      // Primary Controls
      controlNav: false,
      directionNav: true,

      // Secondary Navigation
      keyboard: true,

      // Special properties
      controlsContainer: '.slide-text-wrapper',
    });
  }
};

}(jQuery));
