(function () {
    angular.module('myApp')
        .factory('RestService',['$http', '$q','$log', RestService]);

    function RestService($http, $q, $log) {

        var baseUrl = 'http://localhost:8080/webshop/api/product/';

        return{
            getAllProducts: getAllProducts,
            getAllCategories: getAllCategories,
            getProductsByCategory: getProductsByCategory,
            sendOrder: sendOrder,
            createAccount: createAccount
        };

        function getAllProducts (){

            return $http({
                method: 'GET',
                url: baseUrl,
                cache: true
            })
                .then(sendResponseData)
                .catch(getProductsError);
        }

        function getAllCategories() {
            return $http({
                method: 'GET',
                url: baseUrl + 'category/allCategories',
                cache: true
            })
                .then(sendResponseData)
                .catch(getAllCategoriesError)

        }

        function getProductsByCategory(category) {
            return $http({
                method: 'GET',
                url: baseUrl+category,
                cache: true
            })
                .then(sendResponseData)
                .catch(getProductsByCategoryError)
        }

        function sendResponseData(response) {
            return response.data;
        }

        function getProductsError(response) {
            return $q.reject('Error getting products. (HTTP status: '+response.status+')');
        }

        function getAllCategoriesError(response) {
            return $q.reject('Error getting all categories. (HTTP status: '+response.status+')');
        }

        function getProductsByCategoryError(response) {
            return $q.reject('Error getting products by category. (HTTP status: '+response.status+')');
        }

        function sendOrder(order){
            return $http({
                method: 'POST',
                url: baseUrl+'order',
                data: order
            })
                .then(sendOrderSuccess)
                .catch(sendOrderError)
        }

        function sendOrderSuccess(response) {
            return 'Order send for client: ' + response.config.data.customer.clientLastName;
        }

        function sendOrderError(response){
            return $q.reject('Error sending order. (HTTP status: '+ response.status + ')');
        }

        function createAccount(account) {
            return $http({
                method: 'POST',
                url: 'http://localhost:8080/webshop/api/account',
                data: account
            })
                .then(createAccountSuccess)
                .catch(createAccountError);
        }

        function createAccountSuccess(response) {
            return 'Account created for: '+ response.config.data.customer.clientLastName;
        }

        function createAccountError(response) {
            console.log('in creatAccountError');
            return $q.reject('Error creating account. (HTTP status: '+response.status + ')');
        }
    }
}());

