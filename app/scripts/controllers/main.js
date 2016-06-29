'use strict';

/**
 * @ngdoc function
 * @name messimapaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the messimapaApp
 */
angular.module('messimapaApp')
  .controller('MainCtrl', function ($scope,$http) {
    

    $scope.clientes = [];

    $scope.agregar = function(){
      $http.post('/messimapa/app/php/carga.php', {
        'codigo' : $scope.codigo,
        'cliente' : $scope.cliente ,
        'direccion' : $scope.direccion ,
        'latitud' : $scope.latitud ,
        'longitud' : $scope.longitud ,
        'repartidor' : $scope.repartidor ,
        'diareparto' : $scope.diareparto ,
    }).success(function(data,status,headers,config){
      console.log("Data correctly sended to DB");
      datapass.displayClients();
    })  
    .error(function(data,status,headers,config){
      console.log("Failed to add data to DB");
    });
    };

  	$scope.map = { center: { latitude: -32.9501231, longitude: -60.6624545 }, zoom: 14 };

  	$scope.bounds =  {
            sw: {
                latitude: -32.949763,
                longitude: -60.6842127
            },
            ne: {
                latitude: -32.926686,
                longitude: -60.648949
            }
        };


        $scope.polygons = [
            {
                id: 1,
                path: [
                    {
                        latitude: -32.951386,
                longitude: -60.673745
                    },
                    {
                        latitude: -32.954490,
                        longitude: -60.655858
                    },
                    {
                        latitude: -32.930597,
                        longitude: -60.650008
                    },
                    {
                        latitude: -32.929661, 
                longitude: -60.661981	
                    },
                    {
                    	latitude:-32.933425,
                    	longitude:-60.669234
                    }
                ],
                stroke: {
                    color: '#6060FB',
                    weight: 2
                },
                editable: true,
                draggable: false,
                geodesic: false,
                visible: true,
                fill: {
                    color: '#ff0000',
                    opacity: 0.4
                }
            }
        ];
        $scope.polygonsgreen = [
            {
                id: 2,
                path: [
                    {
                        latitude: -32.954490,
                        longitude: -60.655858
                    },
                    {
                        latitude: -32.957615,
                        longitude: -60.638173
                    },
                    {
                        latitude: -32.942454,
                longitude: -60.634096
                    },
                    {
                        latitude: -32.930597,
                        longitude: -60.650008	
                    }
                ],
                stroke: {
                    color: '#6060FB',
                    weight: 2
                },
                editable: true,
                draggable: false,
                geodesic: false,
                visible: true,
                fill: {
                    color: 'green',
                    opacity: 0.4
                }
            }
        ];
        $scope.polygonsyellow = [
            {
                id: 3,
                path: [
                    
                    {
                        latitude: -32.957615,
                        longitude: -60.638173
                    },
                    {
                        latitude: -32.942454,
                longitude: -60.634096
                    },
                    {
                        latitude: -32.950809,
                longitude:  -60.626414
                    },
                    {
                        latitude: -32.960712,
                        longitude: -60.621307
                    },
                    
                ],
                stroke: {
                    color: '#6060FB',
                    weight: 2
                },
                editable: true,
                draggable: false,
                geodesic: false,
                visible: true,
                fill: {
                    color: 'yellow',
                    opacity: 0.3
                }
            }
        ];



  });
