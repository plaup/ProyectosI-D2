/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('alumnoApp',['ui.router','ngResource','alumnoApp.controllers','alumnoApp.services']);

angular.module('alumnoApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('alumnos',{
        url:'/alumnos',
        templateUrl:'partials/alumnos.html',
        controller:'AlumnoListController'
    }).state('viewAlumno',{
       url:'/alumnos/:dni/view',
       templateUrl:'partials/alumno-view.html',
       controller:'AlumnoViewController'
    }).state('newAlumno',{
        url:'/alumnos/new',
        templateUrl:'partials/alumno-add.html',
        controller:'AlumnoCreateController'
    }).state('editAlumno',{
        url:'/alumnos/:dni/edit',
        templateUrl:'partials/alumno-edit.html',
        controller:'AlumnoEditController'
    });
}).run(function($state){
   $state.go('alumnos');
});