/**
 * Created by pnederlo on 16-3-2017.
 */
'use strict';

angular.module('ProductOverview',['UpdateCartService']);

angular.module('ProductOverview').controller('ProductController', '$scope', function ($scope, ProductFactory, CartService) {

    var vm = this;

    vm.listProducts = [];
    ProductFactory.query({}, function (products) {
        console.log("In de get products functie");
        vm.listProducts = products;
    });

    $scope.$watch.productCount = CartService.getProductCount();


    vm.addToCart = function (prod) {
        CartService.updateShoppingCart(prod);
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

});