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
            //console.log("Total: "+prod.total);
        }
    };

    vm.removeFromCart = function(product){

    };

    vm.updateTotalPrice = function(){

        console.log("eerste keer inde functie " +vm.totalPrijs);
        vm.totalPrijs = 0;
        console.log(vm.totalPrijs);
        var temp = 0;
        vm.shoppingCart.forEach(function(prod){
            console.log("In for each function");
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