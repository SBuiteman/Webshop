/**
 * Created by pnederlo on 16-3-2017.
 */

var app = angular.module('webshop.controllers', []);

app.controller('ProductListCtrl', ['$scope', 'UserFactory', function ($scope, UserFactory) {
    UserFactory.get({}, function (userFactory) {
        $scope.products = userFactory;

        $log(userFactory);
    })
}]);