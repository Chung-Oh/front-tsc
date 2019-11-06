<?php

declare(strict_types=1);

namespace App\Controllers;

use Src\Controller\Action;

class IndexController extends Action
{
    /**
     * Aqui devo Renderizar a View e acessar o Model para levar dados a View
     */
    public function index()
    {
        $this->render(['store' => 'Google']);
        // print_r($_SERVER);
        // die('<br>Fim IndexController...');
    }

    public function home()
    {
        $this->render(['store' => 'Google', 'data' => '04/11/2019'], false);
        // print_r(__METHOD__);
        // die('<br>Fim IndexController...');
    }
}
