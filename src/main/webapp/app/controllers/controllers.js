/**
 * Created by pnederlo on 16-3-2017.
 */
'use strict';

angular.module('myApp',['ngResource']);

angular.module('myApp').factory('Products', function ($resource) {
   return $resource('http://localhost:8080/webshop/api/product');
});

angular.module('myApp').controller('MainController', ['Products', function (Products) {

    var vm = this;

    vm.test = null;

    vm.productList = Products.query();
    vm.listProducts = [];
    this.getProducts = function () {
        console.log("In de get products functie");
        vm.listProducts = Products.query();
        //vm.test = Products.query();
    };

    vm.productCount = 0;
    vm.shoppingCart = [];
    vm.updateShoppingCart = function(prod){
        vm.productCount++;

        function search(nameKey, myArray){
            for (var i=0; i < myArray.length; i++) {
                if (myArray[i].name === nameKey) {
                    return true;
                }
            }
            return false;
        }

        if(!(search(prod.name, vm.shoppingCart))) {
            prod['amount'] = 0;
            prod.amount++;
            prod['total'] = 0;
            prod.total =  prod.amount * prod.price;
            vm.shoppingCart.push(prod);

        } else {
            prod.amount++;
            prod.total = prod.amount * prod.price;
        }
    };

    vm.totalPrice = 0;

   vm.calculateTotalPrice = function(){
           vm.totalPrice = 0;
           vm.shoppingCart.forEach(function(prod){

               vm.totalPrice += prod.total;
           });


   };





    vm.makePartHidden = function () {
        vm.styleHide = {
            display: 'none'
        };
    };

    vm.toggle = true;
    vm.toggleSwitch = function () {
        vm.toggle = vm.toggle === false ? true : false;

    };

    // vm.producten = [
    //     {product: 'Kattenvoer', price: '20', description: 'Mix van zalm en zeebaars.'},
    //     {product: 'Hondenvoer', price: '30', description: 'Hormoonvrij echt rundvlees.'},
    //     {product: 'Muizen', price: '10', description: 'Uw slang gaat er van smullen.'}
    // ];

}]);




// angular.module('myApp', ['ngResource'])
//     .factory('myService', function ($resource) {
//         return $resource('http://localhost:8080/Webshop/', {}, {
//             query: {
//                 method: 'GET',
//                 params: {},
//                 isArray: false
//             }
//         })
//     })
//     .controller('MainController', ['$scope', 'myService', function ($scope, myService) {
//         var vm = this;
//         vm.listProd = {};
//         myService.get({}, function (myservice) {
//             console.log('in service get');
//             vm.listProd = myservice;
//         })
//         console.log('test in JSONctrl');
//     }
// ]);


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