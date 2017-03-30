"use strict";

angular.module('ProductService', ['ngResource']);

angular.module('ProductService').factory('ProductFactory', function ($resource) {

    return $resource('http://localhost:8080/webshop/api/product', {}, {

        query: {
            method: 'GET',
            params: {},
            isArray: true
        }
    });
});