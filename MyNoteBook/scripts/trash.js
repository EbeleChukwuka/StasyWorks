/**
 * Created by Stasy on 14-Jan-17.
 */

angular.module ('NoteBook')
    .controller ('trashController', function ($scope, dbService) {
        console.log ('testing my trash controller');
        $scope.ViewName='Trashed Note';
        $scope.notes=[];


        $scope.loadNotes=function () {
            $scope.notes=dbService.read();
            console.log ('display the record for this page');
        };

        $scope.restore = function (index, note) {
            note.trashed = false;
            note.dateTrashed = new Date();
            dbService.update(index, note);
        };

        $scope.delete = function (index) {
            if(!confirm ("Are you sure you want to delete this record?"))
                return;
            console.log("continue delete");

            dbService.delete(index);

        };


        $scope.loadNotes();

    });