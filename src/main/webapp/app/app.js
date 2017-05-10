/**
 * Created by sbuitema on 22-3-2017.
 */
'use strict';
(function () {
    var app = angular.module('myApp',['ngRoute','ngResource','ngCookies']);

    app.config(['$routeProvider', function ($routeProvider, $resource, $httpProvider) {
        $routeProvider
            .when('/welkom', {
                templateUrl: 'app/views/productOverview.html',
                controller: 'ProductController',
                controllerAs: 'products'
            })
            .when('/winkelwagen', {
                templateUrl: 'app/views/shoppingCart.html',
                controller: 'ShoppingCartController',
                controllerAs: 'cart'
            })
            .when('/account', {
                templateUrl: 'app/views/createAccount.html',
                controller: 'accountCtrl',
                controllerAs: 'createAccount'
            })
            .when('api/database',{

            })
            .otherwise({
                redirectTo: '/welkom'
            })
    }])
}());


// angular.module('myApp',['ngRoute',
//                         'sharing',
//                         'MessageService',
//                         'ProductService',
//                         'UpdateCartService',
//                         'ProductOverview',
//                         'Categories',
//                         'ShoppingCart',
//                         'Account',
//                         'AccountService',
//                         'OrderService'
// ]);
//
// angular.module('myApp').config(['$routeProvider', function ($routeProvider) {
//
//     $routeProvider
//         .when('/welkom', {
//             templateUrl: 'app/views/productOverview.html',
//             controller: 'ProductController',
//             controllerAs: 'main'
//         })
//         .when('/winkelwagen', {
//             templateUrl: 'app/views/shoppingCart.html',
//             controller: 'ShoppingCartController',
//             controllerAs: 'main'
//         })
//         .when('/account', {
//             templateUrl: 'app/views/createAccount.html',
//             controller: 'MainController',
//             controllerAs: 'main'
//         })
//         .when('api/database',{
//
//         })
//         .otherwise({
//             redirectTo: '/welkom'
//         })
// }]);