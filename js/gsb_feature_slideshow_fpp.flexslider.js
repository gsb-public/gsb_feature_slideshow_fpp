(function ($) {

Drupal.behaviors.gsb_feature_slideshow_fpp_flexslider = {
  attach: function (context, settings) {
    $('.slideshow-wrapper').flexslider({
      animation: 'slide',
      selector: '.slideshow-items > li'
    });
  }
};

}(jQuery));
