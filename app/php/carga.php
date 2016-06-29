<?php 
include('conexion.php');


    $data = json_decode(file_get_contents("php://input")); 
    $codigo      = $dbhandle -> real_escape_string($data->codigo);    
    $cliente      =$dbhandle ->  real_escape_string($data->cliente);    
    $direccion     =$dbhandle ->  real_escape_string($data->direccion);
    $latitud      =$dbhandle ->  real_escape_string($data->latitud);  
    $longitud      = $dbhandle -> real_escape_string($data->longitud);    
    $repartidor     =$dbhandle ->  real_escape_string($data->repartidor);
    $diareparto      =$dbhandle ->  real_escape_string($data->diareparto);  
   

    $query = 'INSERT INTO mapa (codigo,cliente,direccion,latitud,longitud,repartidor,diareparto) VALUES ("' . $codigo  . '","' . $cliente . '","' . $direccion . '","' . $latitud . '","' . $longitud . '","' . $repartidor . '","' . $diareparto . '")';

    $dbhandle->query($query);


?>