/**
 * Created by pnederlo on 16-3-2017.
 */
"use strict";

angular.module('ProductViewer', []);
angular.module('ProductViewer').controller('ProductController', ['$scope', function ($scope) {

    $scope.Producten = [
        {Product: 'catfood', Price: '20,-', Description: 'Mix of peas and salmon.'},
        {Product: 'dogfood', Price: '30,-', Description: 'Real cow meat.'},
        {Product: 'mice', Price: '10,-', Description: 'Our snake will love them.'},
    ]
}])

angular.module('ProductsJSON', []);
angular.module('ProductsJSON').controller('JSONController', ['$scope', 'UserFactory', function ($scope, UserFactory) {

    UserFactory.get('UserFactory', function (userFactory) {
        $scope.jsonArray = [userFactory];
    })
}])


