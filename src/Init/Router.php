<?php

declare(strict_types=1);

namespace Src\Init;

class Router implements \ArrayAccess
{
    private $routes = [];

    public function offsetExists($offset): bool
    {
        return isset($offset);
    }

    public function offsetGet($offset): mixed
    {
        return $this->routes[$offset];
    }

    public function offsetSet($offset, $value): void
    {
        $this->routes[$offset] = $value;
    }

    public function offsetUnset($offset): void
    {
        unset($this->routes[$offset]);
    }

    public function handler()
    {
        $path = $this->validateUri();

        foreach ($this->routes as $key => $values) {
            if ($key == $path) {
                $class      = '\\App\\Controllers\\' .  $values['class'];
                $action     = $values['action'];
                $controller = new $class();
                $controller->$action();
                exit();
            }
        }

        http_response_code(404);
        echo 'Essa página não existe.';
        exit();
    }

    private function validateUri()
    {
        $path = $_SERVER['REQUEST_URI'] ?? '/';
        $end  = substr($path, -1);

        if (strlen($path) > 1 && $end == '/') {
            $pathTemp = explode('/', $path);
            $path = '';
            foreach ($pathTemp as $value) {
                if (strlen($value) > 0) {
                    $path .= '/' . $value;
                }
            }
        }

        return $path;
    }
}
