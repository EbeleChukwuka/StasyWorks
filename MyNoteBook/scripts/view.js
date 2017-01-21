/**
 * Created by Stasy on 14-Jan-17.
 */

angular.module ('NoteBook')
    .controller ('viewController', function ($scope, dbService) {
        console.log ('testing my view controller');
        $scope.ViewName='View Note';
        $scope.notes=[];


        $scope.loadNotes=function () {
            $scope.notes=dbService.read();
        };

        $scope.trashed = function (index, note) {
            note.trashed = true;
            note.dateTrashed = new Date();
            dbService.update(index, note);
        };
        

        $scope.loadNotes();

    });