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



    vm.getCount = function(){
        vm.productCount = CartService.getProductCount();
    };

    vm.addToCart = function (prod) {
        CartService.updateShoppingCart(prod);
        CartService.updateTotalPrice();
    };



    vm.isLastProduct = function () {
        var itemsInCart = CartService.shoppingCartStatus();
        if (itemsInCart ===0){
            return true;
        } else {
            return false;
        }
    }

    //vm.welcomeMessage = '';
    vm.getMessage = function(){
        vm.welcomeMessage = CartService.getWelcomeMessage();
    };
});

angular.module('ProductOverview').controller('ProductController', '$scope',
    function (CategoryFactory, $scope) {

    $scope.filterByCategory = function (category) {
        CategoryFactory.query({ category: category});
    };
});