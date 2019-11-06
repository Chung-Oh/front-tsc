<?php

declare(strict_types=1);

namespace App\Controllers;

use Src\Controller\Action;

class UserController extends Action
{
    /**
     * Aqui devo Renderizar a View e acessar o Model para levar dados a View
     */
    public function index()
    {
        $this->render(['name' => 'Daniel', 'date' => '04/11/2019']);
    }

    public function contacts()
    {
        $list = ['Daniel', 'Davi', 'Julia', 'Maria', 'Chul'];
        $this->render($list, false);
    }
}
