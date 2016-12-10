/**
 * Created by Stasy on 11/12/2016.
 */

var myApp = angular.module("route", ["ui.router", "Facebook", "Register"]);

myApp.config(function ($stateProvider, $urlRouterProvider) {

   ///This goes directly to this link. $urlRouterProvider.otherwise("/Facebook");

    $stateProvider
        .state("facebook", {
            url:"/Facebook",
            templateUrl:"html/Facebook.html"
        })
        .state("register", {
            url:"/Register",
            templateUrl:"html/Register.html"
        });

});

myApp.controller ("routeCtrl", function ($scope) {
    console.log("This is my Index Controller.");




});



