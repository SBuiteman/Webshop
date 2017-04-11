/**
 * Created by pnederlo on 3-4-2017.
 */
"use strict";

angular.module('Account', ['AccountService', 'MessageService']);

angular.module('Account').controller('MainController', function(AccountFactory, Messaging){

    var vm = this;

    vm.user = {

    };

    vm.submitForm = function(){
        AccountFactory.save(vm.user);
        Messaging.setConfirmAccountMessage();
    };

});