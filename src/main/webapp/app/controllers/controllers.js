/**
 * Created by pnederlo on 16-3-2017.
 */
"use strict";
// var app = angular.module('webshop.controllers', []);
//
// app.controller('ProductListCtrl', ['$scope', 'UserFactory', function ($scope, UserFactory) {
//     UserFactory.get({}, function (userFactory) {
//         $scope.products = userFactory;
//
//         $log(userFactory);
//     })
// }]);

angular.module("ProductViewer", []);
angular.module('ProductViewer').controller('ProductController', ['$scope', function ($scope) {

    $scope.Producten = [
        {Product: 'catfood', Price: '20,-', Descrition: 'Mix of peas and salmon.'},
        {Product: 'dogfood', Price: '30,-', Descrition: 'Real cow meat.'},
        {Product: 'mice', Price: '10,-', Descrition: 'Our snake will love them.'},
    ]
}])


