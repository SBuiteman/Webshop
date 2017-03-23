/**
 * Created by pnederlo on 16-3-2017.
 */
"use strict";

angular.module('ProductViewer', []);
angular.module('ProductViewer').controller('ProductController', ['$scope', function ($scope) {

    $scope.producten = [
        {product: 'catfood', price: '20', description: 'Mix of peas and salmon.'},
        {product: 'dogfood', price: '30', description: 'Real cow meat.'},
        {product: 'mice', price: '10', description: 'Your snake will love them.'}
    ]
}]);


angular.module('ProductViewer').controller('JSONController', ['$scope', 'UserFactory', function ($scope, UserFactory) {

    UserFactory.get('UserFactory', function (userFactory) {
        $scope.jsonArray = [userFactory];
    })
}]);


