/**
 * Created by pnederlo on 9-5-2017.
 */

(function () {
    angular.module('myApp')
        .directive('psLogin',[psLogin]);

    function psLogin() {
        return {
            restrict: 'E',
            // template: '<p>TEST</p>'
            templateUrl: 'app/views/loginFields.html'
            // controller: 'ProductController',
            // controllerAs: 'pc'
        }

    }
}());