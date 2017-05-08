(function () {
    angular.module('myApp')
        .factory('RestService',['$resource', '$http', '$q', RestService]);

    function RestService($resource, $http, $q) {

        var baseUrl = 'http://localhost:8080/webshop/api/product/';

        return{
            getAllProducts: getAllProducts,
            getAllCategories: getAllCategories,
            getProductsByCategory: getProductsByCategory
        };

        function getAllProducts (){

            return $http({
                method: 'GET',
                url: baseUrl,
                cache: true
            })
                .then(sendResponseData)
                .catch(getProductsError);
        }

        function getAllCategories() {
            return $http({
                method: 'GET',
                url: baseUrl + 'category/allCategories',
                cache: true
            })
                .then(sendResponseData)
                .catch(getProductsError)

        }

        function sendResponseData(response) {
            return response.data;
        }

        function getProductsError(response) {
            return $q.reject('Error getting products. (HTTP status: '+response.status+')');
        }

        function getProductsByCategory(category) {
            return $http({
                method: 'GET',
                url: baseUrl+category,
                cache: true
            })
                .then(sendResponseData)
                .catch(getProductsError)
        }
    }

}());

// "use strict";
//
// angular.module('ProductService', ['ngResource','$http']);
//
// var baseUrl = 'http://localhost:8080/webshop/api/';
//
// angular.module('ProductService').factory('ProductFactory', function ($resource, $http) {
//
//     // var vm = this;
//
//     // vm.getAllBooks = function() {
//         return $resource(baseUrl + 'product', {}, {
//
//             query: {
//                 method: 'GET',
//                 params: {},
//                 isArray: true
//             },
//             create: {
//
//                 method: 'POST'
//             }
//         });
//         return $http({
//             method: 'GET',
//             url: baseUrl+'product'
//         });
//     }
// });
//
// angular.module('ProductService').factory('CategoryFactory', function ($resource) {
//
//     return $resource(baseUrl + 'product/:category', {}, {
//
//         query: {
//             method: 'GET',
//             param: {category: '@category'},
//             isArray: true
//         }
//     })
// });
