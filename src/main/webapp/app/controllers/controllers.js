/**
 * Created by pnederlo on 16-3-2017.
 */
"use strict";

angular.module('ProductViewer', ['ngResource']);
angular.module('ProductViewer').controller('ProductController', ['$scope', function ($scope) {

    $scope.producten = [
        {product: 'Kattenvoer', price: '20', description: 'Mix van zalm en zeebaars.'},
        {product: 'Hondenvoer', price: '30', description: 'Hormoonvrij echt rundvlees.'},
        {product: 'Muizen', price: '10', description: 'Uw slang gaat er van smullen.'}
    ]

    $scope.orderList = function (product) {
        this
    }


}]);

var app = angular.module("Productenlijst", []);
app.controller('JSONController', ['$scope', 'UserFactory', function ($scope, UserFactory) {


}]);


angular.module('ProductViewer').factory('UserFactory', function ($resource) {
    return $resource('http://localhost:3306/pet_supplies');

});