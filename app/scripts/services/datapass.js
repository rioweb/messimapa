'use strict';

/**
 * @ngdoc service
 * @name messimapaApp.datapass
 * @description
 * # datapass
 * Service in the messimapaApp.
 */
angular.module('messimapaApp')
  .service('datapass',['$rootScope','$http', function ($rootScope,$http) {
    
    var clientespre = [];
  	var clientes = [];

  		// Public API here
    return {
      getClients : function(){
        return $http.get('/messimapa/app/php/getclients.php').success(function(data) {
          clientespre = data;

          var clientes = clientespre.map(function(objeto){
          return {
            cliente: objeto.cliente,
            
            location: {
                latitude: objeto.latitud,
                longitude: objeto.longitud
              }
            
          }
        })

        $rootScope.$broadcast('handleSharedClients',clientes);
        return clientes;
      });
    }
	};
   }]);
