(function ($) {

Drupal.behaviors.gsb_feature_slideshow_fpp_slick = {
  attach: function (context, settings) {
    if ($('.panels-ipe-editing').length > 0) {
      return;
    }
    if ($('#page-manager-edit').length > 0) {
      return;
    }
    $('.slideshow-wrapper').slick({
      swipe: false,
      easing: 'slide',
      prevArrow: '<a class="flex-prev" href="#">Previous</a>',
      nextArrow: '<a class="flex-next" href="#">Next</a>',
    });
  }
};

}(jQuery));
