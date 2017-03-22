/**
 * Created by pnederlo on 16-3-2017.
 */

var services = angular.module('services', ['wsResource']);

services.factory('UserFactory', function ($resource) {
    return $resource('webshop/user', {}, {
        query: {
            method: 'GET',
            params: {},
            isArray: true
        }
    })
});