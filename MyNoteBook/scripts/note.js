/**
 * Created by Stasy on 14-Jan-17.
 */
angular.module ('NoteBook')
    .controller ('noteController', function ($scope, dbService, $stateParams, $state) {
        $scope.id = $stateParams.id;
        console.log ('testing my note controller for ', $scope.id);
        $scope.NoteName='Displaying My Note';
        $scope.note={};


        $scope.loadNote=function () {
            $scope.note=dbService.read($scope.id);
        };

        $scope.trashed = function (index, note) {
            note.trashed = true;
            note.dateTrashed = new Date();
            dbService.update(index, note);
            alert ("Trashed successfully.!");
            $state.go ("trashed");
        };

        $scope.loadNote();

    });