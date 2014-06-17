<?php
/**
 * @file
 * gsb_feature_slideshow_fpp.features.filter.inc
 */

/**
 * Implements hook_filter_default_formats().
 */
function gsb_feature_slideshow_fpp_filter_default_formats() {
  $formats = array();

  // Exported format: Slideshow.
  $formats['slideshow'] = array(
    'format' => 'slideshow',
    'name' => 'Slideshow',
    'cache' => 1,
    'status' => 1,
    'weight' => 0,
    'filters' => array(
      'filter_html' => array(
        'weight' => -10,
        'status' => 1,
        'settings' => array(
          'allowed_html' => '<strong> <br>',
          'filter_html_help' => 0,
          'filter_html_nofollow' => 0,
        ),
      ),
    ),
  );

  return $formats;
}
