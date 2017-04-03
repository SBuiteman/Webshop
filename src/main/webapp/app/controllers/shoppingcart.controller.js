/**
 * Created by pnederlo on 30-3-2017.
 */
angular.module('ShoppingCart',['UpdateCartService']);

angular.module('ShoppingCart').controller('ShoppingCartController', function (CartService) {

    var vm = this;

    vm.shoppingCart = CartService.getShoppingCart();

    vm.sPrijs = 0;

    vm.getPrice = function(){
        vm.sPrijs = CartService.getTotalPrice();
    };

    vm.addProduct = function(){

    };

    vm.removeProduct = function () {

    };

    // vm.sendCart = function(){
    //     ShoppingFactory.create(vm.shoppingCart);
    // };
});