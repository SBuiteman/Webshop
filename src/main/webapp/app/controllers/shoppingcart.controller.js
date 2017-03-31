/**
 * Created by pnederlo on 30-3-2017.
 */
angular.module('ShoppingCart',['UpdateCartService']);

angular.module('ShoppingCart').controller('ShoppingCartController', function (CartService) {

    var vm = this;

    vm.shoppingCart = CartService.getShoppingCart();

    vm.sPrijs = 0;

    vm.haalPrijs = function(){
        vm.sPrijs = CartService.getTotalPrice();
    };


    //$scope.currentTotalPrice = CartService.totalPrice;

    //vm.totalPrice = CartService.totalPrice;

    // $scope.getPrice = function () {
    //     return $scope.totalPrice = CartService.getTotalPrice(vm.shoppingCart);
    // };
    // $scope.$watch('main.totalPrice', function (newVal, oldVal) {
    //     console.log("Watching");
    //     $scope.totalPrice = CartService.totalPrice;
    // });

    // $scope.$watch('main.totalPrice',function (newVal, oldVal) {
    //     console.log(oldVal, newVal)
    //     if(newVal != oldVal){
    //
    //     }
    // });

    // $scope.$watch(function () {
    //
    //     return $scope.totalPrice;},
    //     function(newVal, oldVal){
    //
    //     if (newVal != oldVal) {
    //         console.log("Watching");
    //         $scope.totalPrice = CartService.getTotalPrice(vm.shoppingCart);
    //     }
    //
    //
    // },true);

});