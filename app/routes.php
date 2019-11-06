<?php

/**
 * Onde define-se todas as rotas da aplicação
 */

use Src\Init\Router;

$routes = new Router();

$routes['/'] = [
    'class'  => 'IndexController',
    'action' => 'index'
];

$routes['/home'] = [
    'class'  => 'IndexController',
    'action' => 'home'
];

$routes['/user'] = [
    'class'  => 'UserController',
    'action' => 'index'
];

$routes['/user/show'] = [
    'class'  => 'UserController',
    'action' => 'contacts'
];

return $routes;
