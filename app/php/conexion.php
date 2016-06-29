<?php
//Ajustes de MySQL

	global $DB_HOST;
	global $DB_USER;
	global $DB_PASSWORD;
	global $DB_NAME;

	/** Host de MySQL **/


	$DB_HOST = 'localhost';
	$DB_USER = 'root';
	$DB_PASSWORD = '';
	$DB_NAME = 'app';

	$dbhandle = mysqli_connect($DB_HOST,$DB_USER,$DB_PASSWORD,$DB_NAME) or die("Unable to connect DB");


?>