includejs('../resources/js/parametros.js','jsroles');
includejs('../resources/js/general.js','jsroles');

validate_user("../../");

get_rolesws();
function get_rolesws(){
    //enviamos los parametros necesarios por ajax
    var parametros = {"func":"lisrol"};
    var ws = "../app/Controllers/listar.php";
    var accion = 'elegirroles';
    sendajaxtoserver(parametros, ws, accion);
}

function elegirroles(response){
      
    if(response.result=="success"){
      //location.href = '../index.html';
      var roles = JSON.parse(response.roles);
      var tb_roles = $('#tbl_roles tbody');
      tb_roles.empty();

      roles.map(function(rol,key,array){
          var tr = '<tr>'+
                      '<td>'+rol['name_rol']+'</td>'+
                      '<td>'+rol['description_rol']+'</td>'+
                      '<td>'+rol['btnslrol']+'</td>'+
                   '</tr>';
          tb_roles.append(tr);
      });
    }
    else {
      toastr.error('El usuario no posee ningun perfil');
      window.location = '../';
    }
}


$(document).on('click','.btnrol',function(){
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
       // window.location = '../modules/solicitud/registrar_solicitud.html';
       alert('success');
    }else{

    }
}


