/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('alumnoApp.services',[]).factory('Alumno',function($resource){
    return $resource('/profesoresRest/:dni',{dni:'@dni'},{
        update: {
            method: 'PUT'
        },
        delete: {
        	method: 'DELETE',
        	params:{id:'@dni'}
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});