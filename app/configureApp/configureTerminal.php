<?php 

include("connectInit.php");

function conectar(){
    $user = "root";
    $pass = "";
    $con = connect($user,$pass);
    return $con;
}

function fecha(){
    date_default_timezone_set('America/Guayaquil');
    $time = time();
    $fecha = date("Y-m-d", $time);	
    return $fecha;
}

function hora(){
    date_default_timezone_set('America/Guayaquil');
    $time = time();
    $hora = date("G-i", $time);
    return $hora;
    
}

?>