/**
 * Created by SBUITEMA on 7-4-2017.
 */
angular.module('Categories', ['sharing']);

angular.module('Categories').controller('CategoryController',
    function (CategoryFactory, sharingService) {

    var vm = this;
    vm.myCategory = 'test';
    vm.filteredListProducts = [];

    vm.filterByCategory = function (category) {
        CategoryFactory.query({category: category}, function (filteredProducts) {
            vm.filteredListProducts = filteredProducts;
            sharingService.productList = vm.filteredListProducts;
        });
        sharingService.setCategoryName(category);
    };
});