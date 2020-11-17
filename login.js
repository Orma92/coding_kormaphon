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
});