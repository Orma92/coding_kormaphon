<?php 

function listar_rolesUsuario($request, $con){
    $response = array();
    if(isset($_SESSION["cod_user"])){
        $query_role = "SELECT r.cod_rol,r.name_rol,r.description_rol FROM tb_user_roles p
                       INNER JOIN tb_roles r ON r.cod_rol = p.cod_rol
                       WHERE p.cod_user = '".$_SESSION["cod_user"]."' 
                       AND r.cod_rol NOT IN('2','3','4')";

                     //  echo $query_role; die();

        $result_role = mysqli_query($con, $query_role);
        if(mysqli_num_rows($result_role)>0){
            $response["result"] = "success";
            while($resultado = mysqli_fetch_assoc($result_role)){
                $resultado["btnslrol"] = '<a data_id="'.$resultado['cod_rol'].'" class="btnrol btn btn-w-md btn-primary">SELECCIONAR</a>';
                $array_role[] = $resultado;
            }
            $response["roles"] = json_encode($array_role);
        }else{
            $response["result"] = "error";
        }
    }else{
        $response["result"] = "error";
    }
       return $response;
       
}

?>