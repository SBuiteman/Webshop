"use strict";

angular.module('ProductService', ['ngResource']);

angular.module('ProductService').factory('ProductFactory', function ($resource) {
    console.log("Posting or Getting");
    return $resource('http://localhost:8080/webshop/api/product', {}, {

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

// angular.module('ProductService').factory('ShoppingFactory', function ($resource) {
//
//     return $resource('http://localhost:8080/webshop/api/product', {}, {
//
//         create: {
//             method: 'POST'
//         }
//     });
// });