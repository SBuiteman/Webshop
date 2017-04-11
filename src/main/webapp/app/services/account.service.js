/**
 * Created by pnederlo on 4-4-2017.
 */
"use strict";

angular.module('AccountService', ['ngResource']);

angular.module('AccountService').factory('AccountFactory', function ($resource) {

    return $resource('http://localhost:8080/webshop/api/product/account', {}, {

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