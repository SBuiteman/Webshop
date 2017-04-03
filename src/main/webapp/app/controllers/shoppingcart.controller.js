/**
 * Created by pnederlo on 30-3-2017.
 */
angular.module('ShoppingCart',['UpdateCartService']);

angular.module('ShoppingCart').controller('ShoppingCartController', function (CartService, ProductFactory) {

    var vm = this;

    vm.shoppingCart = CartService.getShoppingCart();

    vm.sPrijs = 0;

    vm.getPrice = function(){
        vm.sPrijs = CartService.getTotalPrice();
    };

    vm.addProduct = function(product){
        CartService.updateShoppingCart(product);
        CartService.updateTotalPrice();
    };

    vm.removeProduct = function (product) {
        CartService.removeProductFromCart(product);
        CartService.updateTotalPrice();
    };

    vm.sendCart = function(){
        vm.orderContent = [];
        vm.productNames = [];
        vm.productAmounts = [];

        vm.shoppingCart.forEach(function (product) {


            vm.productNames.push(product.name);
            vm.productAmounts.push(product.amount);
        })

        vm.orderContent = {
            productName: vm.productNames.toString(),
            productAmount: vm.productAmounts.toString(),
            clientMail: 'email@mail.com'
        };
        //vm.orderContent.push(vm.singleItem);


        ProductFactory.save(vm.orderContent);
    };


    vm.user = {

    };

    vm.submitForm = function(form){

        if (form.$valid){
                window.alert('Passed.');
        } else {
            window.alert('Failed.');
        }
    };



});