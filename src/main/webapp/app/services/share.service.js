/**
 * Created by SBUITEMA on 6-4-2017.
 */

app = angular.module('sharing',[]);

app.service('sharingService', function () {
    this.productList = {};
    this.productCategory = 'Alle producten';

    this.setCategoryName = function (category) {
        if (category === '') {
            this.productCategory = 'Alle producten';
        } else {
            this.productCategory = category + ' producten';
        }
    }
});