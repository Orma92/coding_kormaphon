<?php

include("../configureApp/configureTerminal.php");
include("../configureApp/parametros.php");
//funciones de gestion
include("../modules/login.php");
include("../modules/personal.php");

session_start();
$func = $request['func'];

switch($func){
    //login.php
    case "lislog": 
    $listar = listar_login($request, $con); 
    echo json_encode($listar);
    break;

    //personal.php
    case "lisrol":
    $listar = listar_rolesUsuario($request, $con);
    echo json_encode($listar);
    break;

    //login.php
    case "lisexi":
    $listar = existe_rol($request, $con);
    echo json_encode($listar);
    break;
}

?>