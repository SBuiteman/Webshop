/**
 * Created by pnederlo on 30-3-2017.
 */
angular.module('ShoppingCart',['UpdateCartService','AccountService','MessageService', 'OrderService']);

angular.module('ShoppingCart').controller('ShoppingCartController',
    function (CartService, ProductFactory, AccountFactory, Messaging, OrderFactory) {

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
        vm.order = {};
        vm.order.customer = vm.user;
        vm.order.order_lines = [];
        vm.shoppingCart.forEach(function (product) {
            vm.order.order_lines.push({
                ordered_product_id: product.id,
                amount_ordered: product.amount
            });
        });
        vm.submitForm(vm.order);
    };

    vm.submitForm = function(order){
        OrderFactory.save(order);
        Messaging.setWelcomeMessage();
    };

    vm.isLastProduct = function () {

        var itemsInCart = CartService.shoppingCartStatus();

        return itemsInCart === 1;
    };

    vm.toggle = function () {
        CartService.toggleSwitch();
    };
});