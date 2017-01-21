/**
 * Created by Stasy on 27-Dec-16.
 */

var Fk = angular.module("FaceBook", ["ui.router"]);

Fk.config(function ($stateProvider, $urlRouterProvider) {

    ///This goes directly to this link.
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("home", {
            url:"/",
            templateUrl:"html/home.html"
        })
        .state("facebookreg", {
            url:"/facebookreg",
            templateUrl:"html/facebookreg.html"
        });


});


Fk.controller("facebookCtrl", function($scope){

});


