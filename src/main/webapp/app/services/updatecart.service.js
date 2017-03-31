/**
 * Created by pnederlo on 31-3-2017.
 */
"use strict";

angular.module('UpdateCartService', []);

angular.module('UpdateCartService').service('CartService', function () {
    var vm = this;

    vm.productCount = 0;
    vm.shoppingCart = [];
    vm.totalPrice = 0;

    vm.updateShoppingCart = function(prod){
        vm.productCount++;

        function search(nameKey, myArray){
            for (var i=0; i < myArray.length; i++) {
                if (myArray[i].name === nameKey) {
                    return true;
                }
            }
            return false;
        }

        if(!(search(prod.name, vm.shoppingCart))) {
            prod['amount'] = 0;
            prod.amount++;
            prod['total'] = 0;
            prod.total =  prod.amount * prod.price;
            vm.shoppingCart.push(prod);

        } else {
            prod.amount++;
            prod.total = prod.amount * prod.price;
        }
    };

    vm.getProductCount = function () {
        return vm.productCount;
    };

    vm.getShoppingCart = function () {
        return vm.shoppingCart;
    };

    vm.getTotalPrice = function(){

        vm.totalPrice = 0;
        var temp = 0;
        vm.shoppingCart.forEach(function(prod){

            temp += prod.total;
        });
        vm.totalPrice += temp;
        return vm.totalPrice;
    };

});