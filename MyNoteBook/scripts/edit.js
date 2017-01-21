/**
 * Created by Stasy on 14-Jan-17.
 */
angular.module('NoteBook')
    .controller('editController', function ($scope, dbService, $stateParams, $state) {
        $scope.id = $stateParams.id;
        console.log('testing edit and update controller', $scope.id);
        $scope.AddName = 'Edit & Update Note';

        $scope.note = {};
        $scope.message = "";


        $scope.editNote = function () {
            $scope.message = "";
            dbService.update($scope.id, angular.copy($scope.note));
            alert("Updated successfully!");
            $scope.message = "Updated successfully!";
        };

        $scope.trashed = function (index, note) {
            note.trashed = true;
            note.dateTrashed = new Date();
            dbService.update(index, note);
            alert ("Trashed successfully.!");
            $state.go ("trashed");
        };

        $scope.loadNote = function () {
            $scope.note = dbService.read($scope.id);
        };


        $scope.loadNote();
    });