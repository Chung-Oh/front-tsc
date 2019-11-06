<?php

declare(strict_types=1);

namespace Src\Controller;

class Action
{
    protected $model;
    protected $view;

    public function __construct()
    {
        // $this->view = new \stdClass();
    }

    public function render(array $model, bool $layout = true)
    {
        $this->view = $this->handlerView();
        require __DIR__ . '../../../app/View/' . $this->view;
        // print_r($view);
        die('<br>Fim Action...');
    }

    private function handlerView()
    {
        $this->view = $this->className() . '/' . $this->resource();
        return $this->view;
    }

    private function className()
    {
        $firstName = get_class($this);
        $firstName = explode('\\', $firstName);
        $firstName = array_pop($firstName);
        $firstName = strtolower(str_replace('Controller', '', $firstName));

        return $firstName;
    }

    private function resource()
    {
        $uri = explode('/', $_SERVER['REQUEST_URI']);
        $resource = 'index';

        if (count($uri) > 1) {
            foreach ($uri as $file) {
                strlen($file) > 0 && $resource = $file;
            }
            return $resource;
        }

        return $resource;
    }
}
