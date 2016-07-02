'use strict';

/**
 * @ngdoc function
 * @name messimapaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the messimapaApp
 */
angular.module('messimapaApp')
  .controller('MainCtrl', function ($scope,$http,$routeParams,datapass) {
    
    
  
    $scope.agregar = function(){
          $http.post('/messimapa/app/php/carga.php', {
            'codigo' : $scope.codigo,
            'cliente' : $scope.cliente ,
            'direccion' : $scope.direccion ,
            'observacion' : $scope.observacion ,
            'latitud' : $scope.latitud ,
            'longitud' : $scope.longitud ,
            'repartidor' : $scope.repartidor ,
            'diareparto' : $scope.diareparto ,
        }).success(function(){
          console.log('Data correctly sended to DB');
        })  
        .error(function(){
            console.log('Failed to add data to DB');
        });
    };

    $scope.clientespre = [{"id":"9","codigo":"DS-001","cliente":"PARTICULAR","direccion":"CERRITO 876","observacion":"NOEMI","latitud":"-32.96232200","longitud":"-60.63895700","repartidor":"Diego","diareparto":"Sabado"},{"id":"17","codigo":"DS-002","cliente":"EDIFICIO","direccion":"CORRIENTES 972","observacion":"P.9 A","latitud":"-32.94772400","longitud":"-60.64287500","repartidor":"Diego","diareparto":"Sabado"},{"id":"18","codigo":"DS-003","cliente":"EDIFICIO","direccion":"CORRIENTES 972","observacion":"P.9 C","latitud":"-32.94772400","longitud":"-60.64287500","repartidor":"Diego","diareparto":"Sabado"},{"id":"19","codigo":"DS-004","cliente":"EDIFICIO","direccion":"CORRIENTES 972","observacion":"P.2 B","latitud":"-32.94772400","longitud":"-60.64287500","repartidor":"Diego","diareparto":"Sabado"},{"id":"20","codigo":"DS-005","cliente":"EDIFICIO","direccion":"CORRIENTES 972","observacion":"P.1 B PORTERO","latitud":"-32.94772400","longitud":"-60.64287500","repartidor":"Diego","diareparto":"Sabado"},{"id":"21","codigo":"DS-006","cliente":"PARTICULAR","direccion":"RIOJA 1235","observacion":"P.8 A 15624569","latitud":"-32.94731800","longitud":"-60.64024200","repartidor":"Diego","diareparto":"Sabado"},{"id":"22","codigo":"DS-007","cliente":"FC","direccion":"CORDOBA 1189","observacion":"MISTRAL","latitud":"-32.94633500","longitud":"-60.63882100","repartidor":"Diego","diareparto":"Sabado"},{"id":"23","codigo":"DS-008","cliente":"EDIFICIO","direccion":"MITRE 744","observacion":"P.4 D.15 MARQUEZ PESOA","latitud":"-32.94546100","longitud":"-60.63935700","repartidor":"Diego","diareparto":"Sabado"},{"id":"25","codigo":"DS-009","cliente":"EDIFICIO","direccion":"MITRE 744","observacion":"CARLOS 155804783","latitud":"-32.94546100","longitud":"-60.63935700","repartidor":"Diego","diareparto":"Sabado"},{"id":"26","codigo":"DS-010","cliente":"EDIFICIO","direccion":"MITRE 737","observacion":"MARIO ESTACIONAMIENTO","latitud":"-32.94533200","longitud":"-60.63895600","repartidor":"Diego","diareparto":"Sabado"},{"id":"27","codigo":"DS-011","cliente":"PARTICULAR","direccion":"SANTA FE 1247","observacion":"P.3 B CRISTINA - 3994222","latitud":"-32.94533200","longitud":"-60.63895600","repartidor":"Diego","diareparto":"Sabado"},{"id":"28","codigo":"DS-012","cliente":"PARTICULAR","direccion":"SARMIENTO 723","observacion":"P.2 G","latitud":"-32.94550700","longitud":"-60.63791800","repartidor":"Diego","diareparto":"Sabado"},{"id":"29","codigo":"DS-013","cliente":"BAR","direccion":"CORDOBA 1110","observacion":"KAVANNA","latitud":"-32.94642600","longitud":"-60.63829900","repartidor":"Diego","diareparto":"Sabado"},{"id":"30","codigo":"DS-014","cliente":"PARTICULAR","direccion":"SARMIENTO 846","observacion":"P.6 1","latitud":"-32.94698800","longitud":"-60.63832000","repartidor":"Diego","diareparto":"Sabado"},{"id":"31","codigo":"DS-015","cliente":"PARTICULAR","direccion":"SARMIENTO 920","observacion":"TATOO - 6909206","latitud":"-32.94798200","longitud":"-60.63870700","repartidor":"Diego","diareparto":"Sabado"},{"id":"32","codigo":"DS-016","cliente":"PARTICULAR","direccion":"SARMIENTO 935","observacion":"EL CISNE","latitud":"-32.94831800","longitud":"-60.63862900","repartidor":"Diego","diareparto":"Sabado"},{"id":"33","codigo":"DS-017","cliente":"PARTICULAR","direccion":"URQUIZA 1358","observacion":"P.\"10\" 2 CARLOS","latitud":"-32.94233200","longitud":"-60.64091600","repartidor":"Diego","diareparto":"Sabado"},{"id":"34","codigo":"DS-018","cliente":"PARTICULAR","direccion":"SANTA FE 1322","observacion":"COMIDA CHINA ALEX EL CISNE BLA","latitud":"-32.94446300","longitud":"-60.64103900","repartidor":"Diego","diareparto":"Sabado"},{"id":"35","codigo":"DS-019","cliente":"PARTICULAR","direccion":"SANTA FE 1446","observacion":"P.2 C","latitud":"-32.94416800","longitud":"-60.64268400","repartidor":"Diego","diareparto":"Sabado"},{"id":"36","codigo":"DS-020","cliente":"PARTICULAR","direccion":"SANTA FE 1559","observacion":"P.1 A GALLO","latitud":"-32.94396000","longitud":"-60.64420800","repartidor":"Diego","diareparto":"Sabado"},{"id":"37","codigo":"DS-021","cliente":"PARTICULAR","direccion":"ROCA 231","observacion":"00\/01 MELISA 155761858","latitud":"-32.93857500","longitud":"-60.64343500","repartidor":"Diego","diareparto":"Sabado"},{"id":"38","codigo":"DS-022","cliente":"PARTICULAR","direccion":"SALTA 1615","observacion":"P.10 G MIGUEL 11hs PORTERO","latitud":"-32.93828000","longitud":"-60.64349900","repartidor":"Diego","diareparto":"Sabado"}];

          $scope.clientes = $scope.clientespre.map(function(objeto){
          return {
            cliente: objeto.cliente,
            id:objeto.codigo,
            location: {
                latitude: objeto.latitud,
                longitude: objeto.longitud
              }
            
          }
        });
        
        $scope.loc = { 
            latitude: -32.9501231,
            longitude: -60.6624545 
        };
        $scope.zoom = 14;
    $scope.gotoLocation = function (lat, lon) {
        if ($scope.lat != lat || $scope.lon != lon) {
            $scope.loc = { latitude: lat, longitude: lon };
            if (!$scope.$$phase) $scope.$apply("loc");
        }
    };

    $scope.search = "";
    $scope.geoCode = function () {
        if ($scope.search && $scope.search.length > 0) {
            if (!this.geocoder) this.geocoder = new google.maps.Geocoder();
            this.geocoder.geocode({ 'address': $scope.search }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var loc = results[0].geometry.location;
                    $scope.search = results[0].formatted_address;
                    $scope.gotoLocation(loc.lat(), loc.lng());
                } else {
                    alert("Busqueda no encontrada");
                }
            });
        }
    };
    

          /*
    datapass.getClients().success(function(data){
        $scope.clientes = data;
    });

    $scope.$on('handleSharedClients', function(events,clientes){
        $scope.clientes = clientes;
        
    });
*/

        console.log($scope.clientes);


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
