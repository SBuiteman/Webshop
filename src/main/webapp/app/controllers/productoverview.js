/**
 * Created by pnederlo on 16-3-2017.
 */
'use strict';

angular.module('ProductOverview',[]);

angular.module('ProductOverview').controller('MainController', function (ProductFactory) {

    var vm = this;

    vm.listProducts = [];
    ProductFactory.query({}, function (products) {
        console.log("In de get products functie");
        vm.listProducts = products;
    });

    vm.productCount = 0;
    vm.shoppingCart = [];
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

    vm.totalPrice = 0;

    vm.calculateTotalPrice = function(){

        vm.totalPrice = 0;
        var temp = 0;
        vm.shoppingCart.forEach(function(prod){

            temp += prod.total;
        });
        vm.totalPrice += temp;
    };

    vm.makePartHidden = function () {
        vm.styleHide = {
            display: 'none'
        };
    };

    vm.toggle = true;
    vm.toggleSwitch = function () {
        vm.toggle = vm.toggle === false ? true : false;
    };

    // vm.producten = [
    //     {product: 'Kattenvoer', price: '20', description: 'Mix van zalm en zeebaars.'},
    //     {product: 'Hondenvoer', price: '30', description: 'Hormoonvrij echt rundvlees.'},
    //     {product: 'Muizen', price: '10', description: 'Uw slang gaat er van smullen.'}
    // ];

});