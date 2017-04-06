"use strict";

angular.module('ProductService', ['ngResource']);

var baseUrl = 'http://localhost:8080/webshop/api/';

angular.module('ProductService').factory('ProductFactory', function ($resource) {

    return $resource(baseUrl + 'product', {}, {

        query: {
            method: 'GET',
            params: {},
            isArray: true
        },
        create: {

            method: 'POST'
        }
    });
});

angular.module('ProductService').factory('CategoryFactory', function ($resource) {

    return $resource(baseUrl + 'product/:category', {}, {

        query: {
            method: 'GET',
            param: {category: '@category'},
            isArray: true
        }
    })
});

// angular.module('ProductService').factory('ShoppingFactory', function ($resource) {
//
//     return $resource('http://localhost:8080/webshop/api/product', {}, {
//
//         create: {
//             method: 'POST'
//         }
//     });
// });