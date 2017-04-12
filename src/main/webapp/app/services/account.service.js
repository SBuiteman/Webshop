/**
 * Created by pnederlo on 4-4-2017.
 */
"use strict";

angular.module('AccountService', ['ngResource']);

var baseUrl = 'http://localhost:8080/webshop/api/';

angular.module('AccountService').factory('AccountFactory', function ($resource) {

    return $resource(baseUrl + 'account/:username/:password', {}, {

        query: {
            method: 'GET',
            params: {username: '@username', password: '@password'},
            isArray: true
        },
        create: {
            method: 'POST'
        }

    });
});