/**
 * Created by SBUITEMA on 7-4-2017.
 */
angular.module('Categories', ['sharing']);

angular.module('Categories').controller('CategoryController',
    function (CategoryFactory, sharingService) {

    var catControl = this;
    catControl.myCategory = 'test';
    catControl.filteredListProducts = [];

    catControl.filterByCategory = function (category) {
        CategoryFactory.query({category: category}, function (filteredProducts) {
            catControl.filteredListProducts = filteredProducts;
            sharingService.productList = catControl.filteredListProducts;
        });
        sharingService.setCategoryName(category);
    };

    // catControl.showSelectedCategory = function () {
    //     if (catControl.myCategory === '' || typeof catControl.myCategory === 'undefined' || catControl.myCategory === 'test') {
    //         catControl.selectedCategory = 'Alle Producten'
    //     } else {
    //         catControl.selectedCategory = catControl.myCategory + ' producten';
    //     }
    //
    // }
});