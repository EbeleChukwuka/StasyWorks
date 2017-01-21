/**
 * Created by Stasy on 14-Jan-17.
 */

angular.module ('NoteBook')
.controller ('addController', function ($scope, dbService) {
    console.log ('testing add controller');
    $scope.AddName='Add Note';
    $scope.formItem={
      title:"",
      note:""
    };
    $scope.message = "";


    $scope.addNote=function () {
        $scope.message = "";
        dbService.create(angular.copy($scope.formItem));
        alert("Created successfully!");

        $scope.formItem={};
        $scope.message = "Created successfully!";
    };

});
