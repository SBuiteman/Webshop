/**
 * Created by pnederlo on 16-3-2017.
 */
'use strict';

angular.module('ProductOverview',['UpdateCartService', 'sharing']);

angular.module('ProductOverview').controller('ProductController',
    function (ProductFactory, CartService, sharingService) {

    var vm = this;

    vm.shoppingCart = CartService.getShoppingCart();

    vm.listProducts = [];
    ProductFactory.query({}, function (products) {
        sharingService.productList = products;
        vm.fillProductTable();
    });

    vm.fillProductTable = function () {
        vm.listProducts = sharingService.productList;
        vm.productCategory = sharingService.productCategory;
    };

    vm.getCount = function(){
        vm.productCount = CartService.getProductCount();
    };

    vm.addToCart = function (prod) {
        CartService.updateShoppingCart(prod);
        CartService.updateTotalPrice();
    };

    vm.getMessage = function(){
        vm.welcomeMessage = CartService.getWelcomeMessage();
    };
});