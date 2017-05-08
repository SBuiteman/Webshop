/**
 * Created by pnederlo on 31-3-2017.
 */
(function () {
    angular.module('myApp')
        .factory('CartService',[CartService]);

    function CartService() {

    var vm = this;

    vm.shoppingCart = [];

    return {
        updateShoppingCart: updateShoppingCart,
        getShoppingCart: getShoppingCart,
        removeProductFromCart: removeProductFromCart,
        removeOneProductItemFromCart: removeOneProductItemFromCart

    };

    function removeProductFromCart(target) {
        var targetId = target.id;

        vm.shoppingCart.forEach(function (product) {
            if(targetId === product.id){
                var index = vm.shoppingCart.indexOf(target);
                vm.shoppingCart.splice(index,1);
            }
        })
    }

    function updateShoppingCart(product) {
            vm.productCount++;

            function search(nameKey, myArray){
                for (var i=0; i < myArray.length; i++) {
                    if (myArray[i].name === nameKey) {
                        return i;
                    }
                }
                return -1;
            }

            var indexOfProduct = search(product.name, vm.shoppingCart);

        if (indexOfProduct!==-1){
            var target = vm.shoppingCart[indexOfProduct];
            target.amount++;
            target.total = target.amount * target.price;
        } else {
            product['amount'] = 0;
            product.amount++;
            product['total'] = 0;
            product.total =  product.amount * product.price;
            vm.shoppingCart.push(product);
        }
    }

        function getShoppingCart() {
        return vm.shoppingCart;
    }

        function removeOneProductItemFromCart(target){

            var targetId = target.id;
            vm.shoppingCart.forEach(function (product) {
                if(targetId === product.id){
                    product.amount -= 1;
                    product.total = product.amount * product.price;
                    if(product.amount === 0){
                        var index = vm.shoppingCart.indexOf(product);
                        vm.shoppingCart.splice(index, 1);
                    }
                }

            });
        }


    }
}());

// "use strict";
//
// angular.module('UpdateCartService', []);
//
// angular.module('UpdateCartService').service('CartService', function ($timeout) {
//     var vm = this;
//
//     vm.productCount = 0;
//     vm.shoppingCart = [];
//     vm.totalPrijs = 0;
//
//     vm.shoppingCartStatus = function () {
//         return vm.shoppingCart.length;
//     };
//
//     vm.updateShoppingCart = function(prod){
//         vm.productCount++;
//
//         function search(nameKey, myArray){
//             for (var i=0; i < myArray.length; i++) {
//                 if (myArray[i].name === nameKey) {
//                     return i;
//                 }
//             }
//             return -1;
//         }
//
//         var indexOfProduct = search(prod.name, vm.shoppingCart);
//
//         if(indexOfProduct===-1) {
//             prod['amount'] = 0;
//             prod.amount++;
//             prod['total'] = 0;
//             prod.total =  prod.amount * prod.price;
//             vm.shoppingCart.push(prod);
//
//         } else {
//             var target = vm.shoppingCart[indexOfProduct];
//             target.amount++;
//             target.total = target.amount * target.price;
//         }
//     };
//
//     vm.removeOneProductItemFromCart = function(target){
//         vm.productCount--;
//         var targetId = target.id;
//         vm.shoppingCart.forEach(function (product) {
//             if(targetId === product.id){
//                 product.amount -= 1;
//                 product.total = product.amount * product.price;
//                 if(product.amount === 0){
//                     var index = vm.shoppingCart.indexOf(product);
//                     vm.shoppingCart.splice(index, 1);
//                 }
//             }
//
//         });
//     };
//
//     vm.emptyCart = function () {
//         vm.shoppingCart.forEach(function (product) {
//             var index = vm.shoppingCart.indexOf(product);
//             vm.shoppingCart.splice(index);
//         });
//         vm.productCount = 0;
//         vm.totalPrijs = 0;
//     };
//
//     vm.updateTotalPrice = function(){
//
//         vm.totalPrijs = 0;
//         var temp = 0;
//         vm.shoppingCart.forEach(function(prod){
//            temp += prod.total;
//         });
//         this.totalPrijs += temp;
//         vm.totaal = vm.totalPrijs;
//     };
//
//     vm.getProductCount = function () {
//         return vm.productCount;
//     };
//
//     vm.getShoppingCart = function () {
//         return vm.shoppingCart;
//     };
//
//     vm.getTotalPrice = function(){
//         return vm.totalPrijs;
//     };
//
//     vm.getToggleValue = function () {
//         return vm.value;
//     };
//     vm.value = true;
//
//     vm.toggleSwitch = function(){
//         console.log("in toggleSwitch function");
//         vm.value = vm.value === false;
//     };
//
//     vm.welcomeMessage = 'Bestel hier uw dierbenodigdheden!';
//
//     vm.getWelcomeMessage = function () {
//         return vm.welcomeMessage;
//     };
//
//     var timeoutPromise = null;
//     vm.delay = 4000;
//
//     vm.setWelcomeMessage = function(){
//         vm.welcomeMessage = '';
//         vm.welcomeMessage += 'Bedankt voor uw Bestelling!';
//
//         timeoutPromise = $timeout(function(){
//             vm.welcomeMessage = '';
//             vm.welcomeMessage += 'Bestel hier uw dierbenodigdheden!';
//             timeoutPromise = null;
//         }, vm.delay, true);
//     };
//
// });