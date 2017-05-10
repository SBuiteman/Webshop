/**
 * Created by pnederlo on 16-3-2017.
 */
(function () {
    angular.module('myApp')
        .controller('ProductController', ['RestService','$route','cart', ProductController]);

        function ProductController(RestService, $route, cart) {

        var vm = this;

        vm.shoppingCart = cart.shoppingCart;

        vm.productCount = cart.productCount;

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


        vm.addToCart = function (product) {

            cart.addProduct(product);
            // cart.setCartTotal();
            vm.productCount = cart.productCount;
        };

    }
}());
