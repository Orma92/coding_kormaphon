<?php

include("../configureApp/configureGeneral.php");
include("../configureApp/parametros.php");
//funciones de gestion
include("../modules/login.php");

session_start();
$func = $request['func'];

switch($func){
    case "lislog": $listar = listar_login($request, $con); echo json_encode($listar);
}

?>