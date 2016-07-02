<?php

include('conexion.php');

$query="SELECT * FROM mapa";
$rs = $dbhandle->query($query);

while($row = $rs->fetch_assoc()){
	$data[]=$row;
}

print json_encode($data);


?>