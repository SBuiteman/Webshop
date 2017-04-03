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
        vm.shoppingCart.forEach(function (product) {
            vm.singleItem = {
                productName: product.name,
                productAmount: product.amount,
                clientMail: 'email@mail.com'
            };
            vm.orderContent.push(vm.singleItem);
        })
        ProductFactory.save(vm.orderContent);
    };

});