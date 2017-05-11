/**
 * Created by pnederlo on 9-5-2017.
 */
(function () {
    angular.module('myApp')
        .controller('orderCtrl',['RestService','cart','$location','$log','currentCustomerSvc', orderCtrl]);

    function orderCtrl(RestService, cart, $location, $log, currentCustomerSvc) {

        var vm = this;

        vm.order = {};

        vm.order.customer = currentCustomerSvc.getCurrentCustomer();
        vm.order.order_lines = [];

        vm.shoppingCart = cart.shoppingCart;

        vm.shoppingCart.forEach(function (product) {
            vm.order.order_lines.push({
                ordered_product_id: product.id,
                amount_ordered: product.amount
            });
        });

        vm.sendOrders = function () {
            RestService.sendOrder(vm.order)
                .then(sendOrderSuccess)
                .catch(sendOrderError);
            $location.path('/');
            cart.emptyCart();
        };

        function sendOrderSuccess(message) {
            $log.info(message);

        }

        function sendOrderError(errorMessage) {
            $log.error(errorMessage);

        }
    }
}());