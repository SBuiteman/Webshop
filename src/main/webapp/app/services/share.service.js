/**
 * Created by SBUITEMA on 6-4-2017.
 */

app = angular.module('sharing',['AccountService']);

app.service('sharingService', function (AccountFactory) {
    this.productList = {};
    var userAccount = {};
    this.productCategory = 'Alle producten';

    this.setCategoryName = function (category) {
        if (category === '') {
            this.productCategory = 'Alle producten';
        } else {
            this.productCategory = category + ' producten';
        }
    };

    this.getAccount = function (username, password) {
        console.log(username + " & " + password);
        AccountFactory.query({username: username, password: password}, function (account) {
            userAccount = account;
            console.log("ga ik hier dood2?" + userAccount.clientFirstName);
            if (typeof userAccount==='undefined'){
                return null;
            }
        });
        return userAccount;
    };

    this.getLoginAccount = function () {
        return userAccount;
    };
});