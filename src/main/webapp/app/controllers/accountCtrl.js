/**
 * Created by pnederlo on 3-4-2017.
 */
(function () {
    angular.module('myApp')
        .controller('accountCtrl',['RestService','$log', accountCtrl]);

    function accountCtrl(RestService, $log) {

        var vm = this;

        vm.account = {};
        vm.account.customer = {};
        vm.account.password = null;

        vm.submitAccount = function () {
            RestService.createAccount(vm.account)
                .then(submitAccountSuccess)
                .catch(submitAccountError)
        };

        function submitAccountSuccess(message) {
            $log.info(message);
        }

        function submitAccountError(errorMessage) {
            $log.error(errorMessage);
        }
    }
}());
