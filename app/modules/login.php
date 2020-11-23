<?php

//function login
function listar_login($request, $con){
	$response = array();
	$query_login = "SELECT *FROM tb_user 
					WHERE username_user = '".$request['username']."' AND password_user = md5('".$request['password']."') LIMIT 1";

	$result_query_login = mysqli_query($con, $query_login);
	if(mysqli_num_rows($result_query_login)>0){
		$response["result"] = "success";
		while($result = mysqli_fetch_assoc($result_query_login)){
			$cod_user = $result["cod_user"];
			$array_login[] = $result;
			$_SESSION["cod_user"] = $cod_user;
		}

		$response["usuario"] = json_encode($array_login);
	}else{
		$response["result"] = "error";
	}
	return $response;
}

//verify exist role

function existe_rol($request, $con){
	 $response=array();
    if(isset($_SESSION["cod_user"])){
        $sql_exi = "SELECT * FROM tb_user_roles p WHERE p.cod_user = '".$_SESSION["cod_user"]."' 
                    AND p.cod_rol = '".$request["cod_rol"]."'"; 
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