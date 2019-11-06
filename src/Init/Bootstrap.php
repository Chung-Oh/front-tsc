<?php

require __DIR__ . '../../../vendor/autoload.php';
require __DIR__ . '../../../app/routes.php';

echo '<pre>';
$routes->handler();
// die('<br>Fim Bootstrap...');
