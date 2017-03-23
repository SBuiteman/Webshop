/**
 * Created by pnederlo on 16-3-2017.
 */
"use strict";
var services = angular.module('ProductViewer', ['wsResource']);

services.factory('UserFactory', function ($resource) {
    return $resource('webshop', {}, {
        query: {
            method: 'GET',
            params: {},
            isArray: true
        }
    })
});