<?php

include("../configureApp/configureTerminal.php");
include("../configureApp/parametros.php");
//funciones de gestion
include("../modules/login.php");

session_start();
$func = $request['func'];

switch($func){
    //login.php
    case "lislog": 
    $listar = listar_login($request, $con); 
    echo json_encode($listar);
    break;


}

?>