<?php
/**
 * @file
 * gsb_feature_slideshow_fpp.features.field_instance.inc
 */

/**
 * Implements hook_field_default_field_instances().
 */
function gsb_feature_slideshow_fpp_field_default_field_instances() {
  $field_instances = array();

  // Exported field_instance: 'fieldable_panels_pane-slideshow-field_slideshow_slides'
  $field_instances['fieldable_panels_pane-slideshow-field_slideshow_slides'] = array(
    'bundle' => 'slideshow',
    'custom_add_another' => '',
    'custom_remove' => '',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => '',
    'display' => array(
      'default' => array(
        'label' => 'hidden',
        'module' => 'gsb_feature_slideshow_fpp',
        'settings' => array(
          'conditions' => array(),
          'view_mode' => 'gsb_slideshow',
        ),
        'type' => 'gsb_slideshow_default_format',
        'weight' => 3,
      ),
      'ical' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'ds_extras_field_template' => '',
    'entity_type' => 'fieldable_panels_pane',
    'field_name' => 'field_slideshow_slides',
    'label' => 'Slides',
    'required' => 1,
    'settings' => array(
      'custom_add_another' => '',
      'custom_remove' => '',
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 0,
      'module' => 'field_collection',
      'settings' => array(
        'maxlength_js_label' => 'Content limited to @limit characters, remaining: <strong>@remaining</strong>',
      ),
      'type' => 'field_collection_embed',
      'weight' => -4,
    ),
    'workbench_access_field' => 0,
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Slides');

  return $field_instances;
}
