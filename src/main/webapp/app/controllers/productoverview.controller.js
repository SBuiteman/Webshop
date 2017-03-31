/**
 * Created by pnederlo on 16-3-2017.
 */
'use strict';

angular.module('ProductOverview',['UpdateCartService']);

angular.module('ProductOverview').controller('ProductController', function ($route, ProductFactory, CartService) {

    var vm = this;

    vm.listProducts = [];
    ProductFactory.query({}, function (products) {
        vm.listProducts = products;
    });

    vm.productCount = 0;

    vm.getCount = function(){
        vm.productCount = CartService.getProductCount();
    };


    vm.addToCart = function (prod) {
        CartService.updateShoppingCart(prod);
        CartService.updateTotalPrice();
    };




    // vm.producten = [
    //     {product: 'Kattenvoer', price: '20', description: 'Mix van zalm en zeebaars.'},
    //     {product: 'Hondenvoer', price: '30', description: 'Hormoonvrij echt rundvlees.'},
    //     {product: 'Muizen', price: '10', description: 'Uw slang gaat er van smullen.'}
    // ];

});