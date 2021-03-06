/**
 * Created by Stasy on 10-Dec-16.
 */

var Nbk = angular.module("NoteBook", ["ui.router", "Database"]); /*ui.router and Database are been declared here and
can be called anywhere else*/

Nbk.config(function ($stateProvider, $urlRouterProvider) {

    ///This goes directly to this link.
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("home", {
            url:"/",
            templateUrl:"views/home.html"
        })
        .state("note", {
            url:"/note/:id",
            templateUrl:"views/note.html",
            controller:"noteController"
        })
        .state("edit", {
            url:"/edit/:id",
            templateUrl:"views/edit.html",
            controller:"editController"
        })
        .state("add", {
            url:"/add",
            templateUrl:"views/add.html",
            controller:"addController"
        })
        .state("view", {
            url:"/all-notes",
            templateUrl:"views/view.html",
            controller:"viewController"
        })
        .state("trashed", {
            url:"/trashed",
            templateUrl:"views/trash.html",
            controller:"trashController"
        });


});


Nbk.controller("mynotebookCtrl", function($scope){

});


