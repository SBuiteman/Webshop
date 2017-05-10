/**
 * Created by pnederlo on 9-5-2017.
 */
(function () {
    angular.module('myApp')
        .directive('customerInfo',[customerInfo]);

    function customerInfo() {

        return {
            restrict: 'E',
            templateUrl: 'app/views/customerInfo.html',
            controller: 'orderCtrl',
            controllerAs: 'customerOrder'
        }
    }

}());