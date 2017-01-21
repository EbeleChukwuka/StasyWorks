/**
 * Created by Stasy on 10-Dec-16.
 */

var Nbk = angular.module("NoteBook", ["ui.router"]);

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
            templateUrl:"views/note.html"
        })
        .state("edit", {
            url:"/edit/:id",
            templateUrl:"views/edit.html"
        })
        .state("add", {
            url:"/add",
            templateUrl:"views/add.html"
        })
        .state("view", {
            url:"/all-notes",
            templateUrl:"views/view.html"
        })
        .state("trashed", {
            url:"/trashed",
            templateUrl:"views/trash.html"
        });


});


Nbk.controller("mynotebookCtrl", function($scope){

});


