/**
 * Created by pnederlo on 30-3-2017.
 */
angular.module('ShoppingCart',['UpdateCartService','AccountService']);

angular.module('ShoppingCart').controller('ShoppingCartController', function (CartService, ProductFactory, AccountFactory) {

    var vm = this;

    vm.user = {

    };

    vm.shoppingCart = CartService.getShoppingCart();

    vm.sPrijs = 0;

    vm.removeAll = function () {
        CartService.emptyCart();
    };

    vm.getPrice = function(){
        vm.sPrijs = CartService.getTotalPrice();
    };

    vm.addProduct = function(product){
        CartService.updateShoppingCart(product);
        CartService.updateTotalPrice();
    };

    vm.removeOneProduct = function (product) {
        CartService.removeOneProductFromCart(product);
        CartService.updateTotalPrice();
    };

    vm.removeProductFromCart = function (product) {
        var x = product.amount;
        for(var i=0; i<x; i++){
            CartService.removeOneProductFromCart(product);
        }
        CartService.updateTotalPrice();
    };

    vm.sendCart = function(){
        vm.orderContent = [];
        vm.productNames = [];
        vm.productAmounts = [];
        vm.shoppingCart.forEach(function (product) {
            vm.productNames.push(product.name);
            vm.productAmounts.push(product.amount);
        });

        vm.orderContent = {
            productName: vm.productNames.toString(),
            productAmount: vm.productAmounts.toString(),
            clientMail: vm.user.email
        };

        ProductFactory.save(vm.orderContent);
    };

    vm.submitForm = function(){
        AccountFactory.save(vm.user);
    };

    vm.isCartEmpty = function () {
        var itemsInCart = CartService.shoppingCartStatus();

    }
});