includejs('../resources/js/parametros.js','jsroles');
includejs('../resources/js/general.js','jsroles');

validate_user('../../');

//***********************PROFILE LIST*********************
function get_role(){
	var parametros = {"func":"lisrol"};
	var webservices = "../app/Controllers/listar.php";
	var accion = "rolelist";
	sendajaxtoserver(parametros, webservices, accion);
}

function rolelist(response){
	if(response.result=="success"){

		var roles = JSON.parse(response.roles);
		var tb_profiles_roles = $("#tbl_roles tbody");
		tbl_roles.empty();

		roles.map(function(rol,key,array){
			var tr = '<tr>'+
	                      '<td>'+rol['name_rol']+'</td>'+
	                      '<td>'+rol['description_rol']+'</td>'+
	                      '<td>'+rol['name_user'].toUpperCase()+'</td>'+
			 			  '<td>'+rol['username_user']+'</td>'+
	                      '<td>'+rol['btnslrol']+'</td>'+
                  	 '</tr>';
               tbl_roles.append(tr);
		});
	}else{
		toastr.error('the profile not exist','ROLE ERRORS');
	}
}
//***********************END PROFILE LIST*********************






//***********************EXIST ROLES*************************
$(document).on('click','.btnrol',function(e){
	e.preventDefault();
    var rol = $(this).attr('data_id');
    localStorage.setItem("rol", rol); 
    if(rol.trim() != ''){
      var parametros = {"func":"lisexi", "cod_rol": rol};
      var ws = "../app/Controllers/listar.php";
      var accion = 'comprobaroles';
      sendajaxtoserver(parametros, ws, accion);
    }
});

function comprobaroles(response){
    if(response.result == 'success'){
       alert("success");
    }else{

    }
}
//***********************END EXIST ROLES*********************