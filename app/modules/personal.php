<?php 

function listar_rolesUsuario($request, $con){

	$response = array();
	if(isset($_SESSION["cod_user"])){
		$query_role = "SELECT r.cod_rol, r.name_rol, r.description_rol FROM tb_user_roles ur INNER JOIN tb_roles r ON (r.cod_rol = ur.cod_rol) 
					   WHERE ur.cod_user = '".$_SESSION['cod_user']."'";

		//echo $query_role; die();
		$result_role = mysqli_query($con, $query_role);
		if(mysqli_num_rows($result_role)>0){
			$response["result"] = "success";
			while($result = mysqli_fetch_assoc($result_role)){
				$result['btnslrol'] = '<a data_id="'.$result['cod_rol'].'" class="btnrol btn btn-w-md btn-info">SELECCIONAR</a>';
				$array_role[] = $result;
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