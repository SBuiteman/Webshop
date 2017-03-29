/**
 * Created by pnederlo on 16-3-2017.
 */
'use strict';
// var services = angular.module('Services', ['ngResource']);
//
// services.factory('ProductFactory', function ($resource) {
//     // return $resource('/Webshop/products/all', {}, {
//     //     query: {
//     //         method: 'GET',
//     //         params: {},
//     //         isArray: false
//     //     }
//     // })
//     console.log('service log')
// });
//
// var app = angular.module('ProductViewer', ['ngResource']);
// app.controller('JSONController', ['$scope', 'ProductFactory', function ($scope, UserFactory) {
//     UserFactory.get({}, function (userFactory) {
//
//             $scope.products = userFactory.name;
//         })
//         console.log('test in JSONctrl');
//     }
// ]);

angular.module('ProductViewer', ['ngResource'])
    .factory('myService', function ($resource) {
        return $resource('rest/Webshop/products/all', {}, {
            query: {
                method: 'GET',
                params: {},
                isArray: false
            }
        })
    })
    .controller('JSONController', ['$scope', 'myService', function ($scope, myService) {
        myService.get({}, function (myservice) {
            console.log('in service get')
        })
        console.log('test in JSONctrl');
    }
    ]);

// app.controller('ProductController', ['$scope', function ($scope) {
//
//     $scope.producten = [
//         {product: 'Kattenvoer', price: '20', description: 'Mix van zalm en zeebaars.'},
//         {product: 'Hondenvoer', price: '30', description: 'Hormoonvrij echt rundvlees.'},
//         {product: 'Muizen', price: '10', description: 'Uw slang gaat er van smullen.'}
//     ]
//
//     $scope.orderList = function (product) {
//         this
//     }
//
//
// }]);




// angular.module('ProductViewer').factory('UserFactory', function ($resource) {
//     return $resource('http://localhost:3306/pet_supplies');
//
// });