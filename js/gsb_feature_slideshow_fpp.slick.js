(function ($) {

Drupal.behaviors.gsb_feature_slideshow_fpp_slick = {
  attach: function (context, settings) {
    //debugger;
    $('.slideshow-wrapper').slick({
      swipe: false,
      prevArrow: '<a class="flex-prev" href="#">Previous</a>',
      nextArrow: '<a class="flex-next" href="#">Next</a>',
    });
  }
};

}(jQuery));
