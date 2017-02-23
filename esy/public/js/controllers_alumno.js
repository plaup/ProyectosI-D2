/**
 * Created by Sandeep on 01/06/14.
 */
angular.module('alumnoApp.controllers',[]).controller('AlumnoListController',function($scope,$state,popupService,$window,Alumno){

    $scope.alumnos=Alumno.query();

    $scope.deleteAlumno=function(alumno){
        if(popupService.showPopup('Really delete this?')){
            alumno.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('AlumnoViewController',function($scope,$stateParams,Alumno){

    $scope.alumno=Alumno.get({dni:$stateParams.dni});
    $scope.alumno.fechaNacimiento=Date($scope.alumno.fechaNacimiento);

}).controller('AlumnoCreateController',function($scope,$state,$stateParams,Alumno){

    $scope.alumno=new Alumno();

    $scope.addAlumno=function(){
        $scope.alumno.$save(function(){
            $state.go('alumnos');
        });
    }

}).controller('AlumnoEditController',function($scope,$state,$stateParams,Alumno){

    $scope.updateAlumno=function(){
        $scope.alumno.$update(function(){
            $state.go('alumnos');
        });
    };

    $scope.loadAlumno=function(){
        $scope.alumno=Alumno.get({dni:$stateParams.dni});
    };

    $scope.loadAlumno();
});