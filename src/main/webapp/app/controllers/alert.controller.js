/**
 * Created by SBUITEMA on 4-4-2017.
 */

angular.module('AlertModule', []).controller('AlertDemoCtrl', function ($scope) {

    $scope.alert = { type: 'danger', msg: "Er is iets fout gegaan bij het plaatsen van uw bestelling, " +
    "probeer het opnieuw."}


    $scope.alerts = [
        { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
        { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
    ];

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
});