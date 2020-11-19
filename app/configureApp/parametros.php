<?php 

$con = conectar();
$fecha = fecha();

$entorno = 'desarrollo';
$request;

if($entorno == 'desarrollo'){
    $request = $_GET;
}else{
    $request = $_POST;
}

if(isset($_POST['image'])){
    $request = $_POST;
}

?>