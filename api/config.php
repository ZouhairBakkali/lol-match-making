<?php

ini_set('display_errors', 1); 
error_reporting(E_ALL);

abstract class Config {
    /**
     * Returns the base URL
     * @return String
     */
    static function base_url() {
        return 'http://'.$_SERVER['HTTP_HOST'].'/';
    }

    /**
     * Generates a REST request URL
     * @param $path The path to the method
     * @return String
     */
    static function request_url($path) {
        return Config::base_url().'REST.php/'.$path;
    }
}