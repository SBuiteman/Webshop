/**
 * Created by pnederlo on 16-3-2017.
 */
'use strict';
var services = angular.module('Services', ['ngResource']);

services.factory('ProductFactory', function ($resource) {
    return $resource('/Webshop/products/all', {}, {
        query: {
            method: 'GET',
            params: {},
            isArray: false
        }
    })
    console.log('service log')
});