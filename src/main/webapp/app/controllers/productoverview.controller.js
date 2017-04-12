/**
 * Created by pnederlo on 16-3-2017.
 */
'use strict';

angular.module('ProductOverview',['UpdateCartService', 'sharing', 'MessageService', 'AccountService']);

angular.module('ProductOverview').controller('ProductController',
    function (ProductFactory, CartService, sharingService, Messaging, AccountFactory) {

    var vm = this;

    vm.welcomeMessage = 'test';

    vm.shoppingCart = CartService.getShoppingCart();

    vm.listProducts = [];
    ProductFactory.query({}, function (products) {
        sharingService.productList = products;
        vm.fillProductTable();
    });

    vm.fillProductTable = function () {
        vm.listProducts = sharingService.productList;
        vm.productCategory = sharingService.productCategory;
    };

    vm.getCount = function(){
        vm.productCount = CartService.getProductCount();
    };

    vm.addToCart = function (prod) {
        CartService.updateShoppingCart(prod);
        CartService.updateTotalPrice();
    };

    vm.getMessage = function(){
        console.log(vm);
        vm.welcomeMessage = Messaging.getWelcomeMessage();
        console.log(Messaging.getWelcomeMessage());
        //welcomeMessage = 'hallo';
    };

    vm.getAccount = function () {
        console.log(vm.user.username + " & " + vm.user.password);
        AccountFactory.query({username: vm.user.username, password: vm.user.password}, function (account) {
            if (account) {
                console.log("komt ie terug" + account)
            }
            //var acc = account;
            console.log("ga ik hier dood2?" + acc);
        });
        console.log("ga ik hier dood?");
        console.log(vm);
    };
});