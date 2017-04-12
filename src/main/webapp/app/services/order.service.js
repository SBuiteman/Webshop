/**
 * Created by SBUITEMA on 11-4-2017.
 */
"use strict";

angular.module('OrderService', ['ngResource']);

var baseUrl = 'http://localhost:8080/webshop/api/';

angular.module('OrderService').factory('OrderFactory', function ($resource) {

    return $resource(baseUrl + 'product/order', {}, {

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