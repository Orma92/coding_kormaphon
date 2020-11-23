<?php

    function listar_login($request,$con){
        $response = array();
        $query_login = "SELECT *FROM tb_user WHERE username_user='".$request['username_user']."' AND password_user = MD5('".$request['password']."')";
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



    function existe_rol($request,$con){
        $response=array();
        if(isset($_SESSION["cod_user"])){
            $sql_exi = "SELECT * FROM tb_user_roles p 
                        WHERE p.cod_user = '".$_SESSION["cod_user"]."' 
                        AND p.cod_rol = '".$request["cod_rol"]."'"; //pasando variables del get
            $res_exi=mysqli_query($con,$sql_exi);
            if(mysqli_num_rows($res_exi)>0){
                $response["result"]="success";
                $_SESSION["cod_rol"] = $request["cod_rol"];
            }
            else{
                $response["result"]="error";
            }
        }else{
            $response["result"]="error";
        }
        return $response;
    }
    
  

?>