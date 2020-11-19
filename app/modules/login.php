<?php

    function listar_login($request,$con){
        $response = array();
        $query_login = "SELECT *FROM tb_users WHERE username='".$request['username']."' AND password = sha1('".$request['password']."')";
        $result_login = mysqli_query($con, $query_login);
        if(mysqli_num_rows($result_login)>0){
            $response["result"] = "success"; 
            while($resultado = mysqli_fetch_assoc($result_login)){
                $cod_user = $resultado["cod_user"];
                $user_array[] = $resultado;
                $_SESSION["cod_user"] = $cod_user;
            }
            $response["usuario"] = json_encode($user_array);
        }else{
            $response["result"] = "error";
        }
        return $response;
    }

?>