/**
 * Created by pnederlo on 11-5-2017.
 */
(function () {
    angular.module('myApp')
        .value('currentCustomerSvc',{
            currentCustomer: {},
            getCurrentCustomer: function () {
                return this.currentCustomer;
            },
            setCurrentCustomer: function (customer) {
                this.currentCustomer = customer
            }


        })
}());