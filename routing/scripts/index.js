/**
 * Created by Stasy on 11/12/2016.
 */

var myApp = angular.module("route", ["ui.router", "Home", "Messages", "User"]);

myApp.config(function ($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise("/Home");

    $stateProvider
        .state("messsge", {
            url:"/Messages",
            templateUrl:"views/Messages.html"
        })
        .state("user", {
                url:"/User",
            templateUrl:"views/User.html"
        })
        .state("home", {
            url: "/Home",
            templateUrl: "views/Home.html",
            controller: "homeCtrl"
        });

});

myApp.controller ("routeCtrl", function ($scope) {
    console.log("This is my Index Controller.");




});



