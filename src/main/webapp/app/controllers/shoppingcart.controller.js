/**
 * Created by pnederlo on 30-3-2017.
 */
angular.module('ShoppingCart',['UpdateCartService']);

angular.module('ShoppingCart').controller('ShoppingCartController', function (CartService) {

    var vm = this;

    vm.shoppingCart = CartService.getShoppingCart();

    vm.totalPrice = CartService.getTotalPrice();



});