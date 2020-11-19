<?php

    function connect($user, $pass){
        $mysql_hostname = "localhost";
        $mysqli_user = $user;
        $mysqli_password = $pass;
        $mysqli_database = "app_database";

        $conexion = mysqli_connect($mysql_hostname, $mysqli_user, $mysqli_password, $mysqli_database) 
        or die("FAILED CONNECTION - ERROR 404");

        return $conexion;
    }

?>