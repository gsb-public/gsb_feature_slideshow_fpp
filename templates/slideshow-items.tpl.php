<ul class="<?php print $classes; ?>">
  <?php foreach ($slides as $slide) { ?>
    <li><?php print $slide; ?></li>
  <?php } ?>
</ul>
<ul>
  <li><?php print t('Previous'); ?></li>
  <li><?php print t('Next'); ?></li>
</ul>
