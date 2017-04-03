/**
 * Created by pnederlo on 3-4-2017.
 */
"use strict";

angular.module('Account', []);

angular.module('Account').controller('MainController', function(){

    var vm = this;

    vm.user = {

    };

    vm.submitForm = function(form){

        if (form.$valid){
            window.alert('Passed.');
        } else {
            window.alert('Failed.');
        }
    };

});