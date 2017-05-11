/**
 * Created by pnederlo on 30-3-2017.
 */
(function () {

    angular.module('myApp')
        .controller('ShoppingCartController',['$location','cart','currentCustomerSvc', ShoppingCartController]);

    function ShoppingCartController($location, cart, currentCustomerSvc) {

        var vm = this;

        vm.shoppingCart = cart.shoppingCart;

        vm.cartTotal = cart.cartTotal;

        // vm.order.customer = currentCustomerSvc.getCurrentCustomer();


        vm.removeOneProductItemFromCart = function(product){
            cart.removeProductItem(product);
            vm.cartTotal = cart.cartTotal;
            // cart.setCartTotal();
            if (cart.shoppingCart.length === 0){
                $location.path('/');
            }
        };

        vm.removeProductFromCart = function (product) {
            cart.removeProduct(product);
            vm.cartTotal = cart.cartTotal;
            // cart.setCartTotal();
            if (vm.shoppingCart.length === 0){
                $location.path('/');
            }
        };


        vm.addToCart = function (product) {

            cart.addProduct(product);
            vm.cartTotal = cart.cartTotal;
            // cart.setCartTotal();
            vm.productCount = cart.productCount;

        };

    }

}());


// angular.module('ShoppingCart',['UpdateCartService','AccountService','MessageService', 'OrderService', 'sharing']);
//
// angular.module('ShoppingCart').controller('ShoppingCartController',
//     function (CartService, ProductFactory, AccountFactory, Messaging, OrderFactory, sharingService) {
//
//     var vm = this;
//
//     vm.user = {};
//
//     if(sharingService.getLoginAccount() ) {
//         vm.user = sharingService.getLoginAccount();
//         delete vm.user.customerId;
//     }
//
//     vm.shoppingCart = CartService.getShoppingCart();
//
//     vm.sPrijs = 0;
//
//     vm.removeAll = function () {
//         CartService.emptyCart();
//     };
//
//     vm.getPrice = function(){
//         vm.sPrijs = CartService.getTotalPrice();
//     };
//
//     vm.addProduct = function(product){
//         CartService.updateShoppingCart(product);
//         CartService.updateTotalPrice();
//     };
//
//     vm.removeOneProduct = function (product) {
//         CartService.removeOneProductItemFromCart(product);
//         CartService.updateTotalPrice();
//         console.log(sharingService.getLoginAccount());
//     };
//
//     vm.removeProductFromCart = function (product) {
//         var x = product.amount;
//         for(var i=0; i<x; i++){
//             CartService.removeOneProductItemFromCart(product);
//         }
//         CartService.updateTotalPrice();
//     };
//
//     vm.sendCart = function(){
//         vm.order = {};
//         vm.order.customer = vm.user;
//         vm.order.order_lines = [];
//         vm.shoppingCart.forEach(function (product) {
//             vm.order.order_lines.push({
//                 ordered_product_id: product.id,
//                 amount_ordered: product.amount
//             });
//         });
//         vm.submitForm(vm.order);
//     };
//
//     vm.submitForm = function(order){
//         Messaging.setConfirmMessage();
//         OrderFactory.save(order);
//     };
//
//     vm.isLastProduct = function () {
//
//         var itemsInCart = CartService.shoppingCartStatus();
//
//         return itemsInCart === 1;
//     };
//
//     vm.toggle = function () {
//         CartService.toggleSwitch();
//     };
// });