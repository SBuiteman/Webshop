/**
 * Created by SBUITEMA on 10-4-2017.
 */
"use strict";

angular.module('MessageService', []);

angular.module('MessageService').service('Messaging', function ($timeout) {
    var vm = this;
    var timeoutPromise = null;
    vm.delay = 8000;
    vm.welcomeMessage = 'Bestel hier uw dierbenodigdheden!';

    vm.setConfirmMessage = function(){
        vm.welcomeMessage = '';
        vm.welcomeMessage = 'Bedankt voor uw bestelling!';

        timeoutPromise = $timeout(function(){
            vm.welcomeMessage = '';
            vm.welcomeMessage = 'Bestel hier uw dierbenodigdheden!';
            timeoutPromise = null;
        }, vm.delay, true);
    };

    vm.setConfirmAccountMessage = function(){
        vm.welcomeMessage = '';
        vm.welcomeMessage += 'Bedankt voor het aanmaken van uw account!';

        timeoutPromise = $timeout(function(){
            vm.welcomeMessage = '';
            vm.welcomeMessage += 'Bestel hier uw dierbenodigdheden!';
            timeoutPromise = null;
        }, vm.delay, true);
    };
});