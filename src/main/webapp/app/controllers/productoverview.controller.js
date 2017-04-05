/**
 * Created by pnederlo on 16-3-2017.
 */
'use strict';

angular.module('ProductOverview',['UpdateCartService']);

angular.module('ProductOverview').controller('ProductController', function (ProductFactory, CartService) {

    var vm = this;

    vm.shoppingCart = CartService.getShoppingCart();

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

    vm.getPrice = function(){
        vm.sPrijs = CartService.getTotalPrice();
    };
    vm.isLastProduct = function () {
        var itemsInCart = CartService.shoppingCartStatus();
        if (itemsInCart ===0){
            return true;
        } else {
            return false;
        }
    }

    vm.toggle = function () {
        return CartService.getToggleValue();
    };
});