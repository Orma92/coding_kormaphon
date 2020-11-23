//añado las librerias de acuerdo con los archivos y su respectivo ID de archivo.html
includejs("resources/js/parametros.js","jslogin");
includejs("resources/js/general.js","jslogin");

$("#iniciar").on('click', function(e){
    e.preventDefault();
    var username = $("#username").val();
    var password = $("#password").val();

    if(username.trim()==0){
        toastr.info('Empty Data','FIELD USER');
        return;
    }

    if(password.trim()==0){
        toastr.info('Empty Data','FIELD PASSWORD');
        return;
    }

   login();
  
});

function login(){
    var parametros = $("#frm_reg_log").serialize()+'&func=lislog';
    var webservice = "app/Controllers/listar.php";
    var acction = "listlogin";
    sendajaxtoserver(parametros,webservice,acction);
}

function listlogin(response){
    if(response.result=="success"){
        var usuario = JSON.parse(response.usuario)[0];
        set_usuario(usuario);
        window.location = 'roles/roles.html'
    }else{
        toastr.error('User not register','Failed Users');
    }
}
   