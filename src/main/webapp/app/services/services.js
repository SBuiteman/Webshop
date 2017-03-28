/**
 * Created by pnederlo on 16-3-2017.
 */
"use strict";
var services = angular.module('ProductViewer', ['ngResource']);

services.factory('UserFactory', function ($resource) {
    return $resource('com.sogeti.webshop/common/products', {}, {
        query: {
            method: 'GET',
            params: {},
            isArray: true
        }
    })
});