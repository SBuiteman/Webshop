/**
 * Created by pnederlo on 11-5-2017.
 */
(function () {
    angular.module('myApp')
        .controller('loginCtrl',['RestService','currentCustomerSvc', loginCtrl]);

    function loginCtrl(RestService, currentCustomerSvc){

        var vm = this;

        // vm.account.userName = '';
        // vm.account.password = '';

        vm.currentCustomer = {};

        vm.submitLoginInformation = function () {
            RestService.getLoginInformation(vm.account.userName, vm.account.password)
                .then(getLoginInformationSuccess)
                .catch(getLoginInformationError);
        };

        function getLoginInformationSuccess (customer) {
            vm.currentCustomer = customer;
            vm.toggle = true;
            currentCustomerSvc.setCurrentCustomer(customer);
        }

        function getLoginInformationError(message){
            console.log('Wrong credentials');
        }
    }
}());