/**
 * Created by sbuitema on 22-3-2017.
 */
'use strict';
angular.module('Webshop', ['ngRoute', 'ProductViewer', 'Services']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/',{
            templateUrl : 'index.html',
            controller : 'JSONController'
        })
}]);