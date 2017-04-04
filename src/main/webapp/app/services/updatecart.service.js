/**
 * Created by pnederlo on 31-3-2017.
 */
"use strict";

angular.module('UpdateCartService', []);

angular.module('UpdateCartService').service('CartService', function () {
    var vm = this;

    vm.productCount = 0;
    vm.shoppingCart = [];
    vm.totalPrijs = 0;

    vm.updateShoppingCart = function(prod){
        vm.productCount++;

        function search(nameKey, myArray){
            for (var i=0; i < myArray.length; i++) {
                if (myArray[i].name === nameKey) {
                    return i;
                }
            }
            return -1;
        }

        var indexOfProduct = search(prod.name, vm.shoppingCart);

        if(indexOfProduct===-1) {
            prod['amount'] = 0;
            prod.amount++;
            prod['total'] = 0;
            prod.total =  prod.amount * prod.price;
            vm.shoppingCart.push(prod);

        } else {
            var target = vm.shoppingCart[indexOfProduct];
            target.amount++;
            target.total = target.amount * target.price;
        }
    };

    vm.removeProductFromCart = function(target){
        vm.productCount--;
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
    };

    vm.removeAllProducts = function () {
        vm.shoppingCart.forEach(function (product) {
            var index = vm.shoppingCart.indexOf(product);
            vm.shoppingCart.splice(index);
        });
        vm.productCount = 0;
        vm.totalPrijs = 0;
    };

    vm.updateTotalPrice = function(){

        vm.totalPrijs = 0;
        var temp = 0;
        vm.shoppingCart.forEach(function(prod){
           temp += prod.total;
        });
        this.totalPrijs += temp;
        console.log(vm.totalPrijs);
        vm.totaal = vm.totalPrijs;
    };

    vm.getProductCount = function () {
        return vm.productCount;
    };

    vm.getShoppingCart = function () {
        return vm.shoppingCart;
    };

    vm.getTotalPrice = function(){
        return vm.totalPrijs;
    };
});