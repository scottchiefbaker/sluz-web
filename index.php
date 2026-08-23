<?php

require("latest/sluz.class.php");

$sluz         = new sluz();
$sluz_version = $sluz->version;

$sluz->assign('sluz_version', $sluz_version);
$sluz->assign('min_php_version', "8.x");

print $sluz->fetch("tpls/index.stpl");
