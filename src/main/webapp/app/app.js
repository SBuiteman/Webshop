/**
 * Created by sbuitema on 22-3-2017.
 */
'use strict';
angular.module('myApp',['ngRoute',
                        'sharing',
                        'ProductService',
                        'UpdateCartService',
                        'ProductOverview',
                        'Categories',
                        'ShoppingCart',
                        'Account',
                        'AccountService']);

angular.module('myApp').config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/welkom', {
            templateUrl: 'app/views/welkom.html',
            controller: 'ProductController',
            controllerAs: 'main'
        })
        .when('/winkelwagen', {
            templateUrl: 'app/views/winkelwagen.html',
            controller: 'ShoppingCartController',
            controllerAs: 'main'
        })
        .when('/account', {
            templateUrl: 'app/views/account.html',
            controller: 'MainController',
            controllerAs: 'main'
        })
        .otherwise({
            redirectTo: '/welkom'
        })
}]);