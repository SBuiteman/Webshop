/**
 * Created by pnederlo on 3-4-2017.
 */
"use strict";

angular.module('Account', ['AccountService', 'MessageService']);

angular.module('Account').controller('MainController', function(AccountFactory, Messaging){

    var vm = this;

    vm.account = {};

    vm.user = {

    };

    vm.security = {};

    vm.account = vm.security;

    vm.account.customer = vm.user;



    vm.submitForm = function(){
        AccountFactory.save(vm.account);
        Messaging.setConfirmAccountMessage();
    };

});