(function ($) {

Drupal.behaviors.gsb_feature_slideshow_fpp_flexslider = {
  attach: function (context, settings) {
    $('.field-name-field-slideshow-item .field-item').flexslider();
  }
};

}(jQuery));
