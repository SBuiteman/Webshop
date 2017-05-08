/**
 * Created by pnederlo on 16-3-2017.
 */
(function () {
    angular.module('myApp')
        .controller('ProductController', ['RestService','$route','CartService', ProductController]);

        function ProductController(RestService, $route, CartService) {

        var vm = this;

        vm.shoppingCart = CartService.getShoppingCart();

        RestService.getAllProducts()
            .then(getProductsSuccess)
            .catch(errorCallback)
            .finally();

        function getProductsSuccess(products) {
             vm.listProducts = products;
        }

        function errorCallback(errorMessage) {
                console.log('Error message: '+ errorMessage);
            }

        RestService.getAllCategories()
            .then(getAllCategoriesSuccess)
            .catch(errorCallback);

        function getAllCategoriesSuccess(categories) {
            vm.categories = categories;
        }

        vm.showProductsByCategory = function (category) {

            RestService.getProductsByCategory(category)
                .then(getProductsByCategorySuccess)
                .catch(errorCallback);
        }

        function getProductsByCategorySuccess(listByCategory) {
            vm.listProducts = listByCategory;
        }

        vm.showAllProducts = function () {
            $route.reload();
        };

        vm.getProductCount = function () {

                vm.productCount = 0;
                vm.shoppingCart.forEach(function (product) {
                    vm.productCount += product.amount;
                });

                return vm.productCount;
            };

        vm.addToCart = function (product) {

            CartService.updateShoppingCart(product);

        };
    }
}());
