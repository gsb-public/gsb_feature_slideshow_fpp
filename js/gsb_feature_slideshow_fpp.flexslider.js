(function ($) {

Drupal.behaviors.gsb_feature_slideshow_fpp_flexslider = {
  attach: function (context, settings) {
    $('.slideshow-wrapper').flexslider({
      selector: ".slideshow-items > li",
      animation: "slide",
      slideshow: false,
      animationSpeed: 600,

      // Usability features
      pauseOnHover: true,
      useCSS: true,
      touch: false,
      video: false,

      // Primary Controls
      controlNav: false,
      directionNav: true,

      // Secondary Navigation
      keyboard: true,

      // Special properties
      controlsContainer: ".slide-text-wrapper",
    });
  }
};

}(jQuery));
