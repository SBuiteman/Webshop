/**
 * Created by sbuitema on 22-3-2017.
 */
'use strict';
angular.module('myApp',['ngRoute','ProductService', 'UpdateCartService', 'ProductOverview', 'ShoppingCart']);

angular.module('myApp').config(function ($routeProvider) {

    $routeProvider
        .when('/welkom', {
            templateUrl: 'app/views/welkom.html',
            controller: 'ProductController',
            controllerAs: 'main'
        })
        .when('/winkelmandje', {
            templateUrl: 'app/views/winkelmand.html',
            controller: 'ShoppingCartController',
            controllerAs: 'cart'
        })
        .otherwise({
            redirectTo: '/welkom'
        })
});