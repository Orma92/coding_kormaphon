    var env = "dev";//prod
    var servidor = "";
    
    if(env == "dev"){ servidor = ""; }
    else{ servidor = ""; }

    function get_usuario(){
        if("usuario" in localStorage){
            return JSON.parse(window.localStorage.getItem("usuario"));
        }
    }

    function set_usuario(usuario){
        usuario = JSON.stringify(usuario);
        window.localStorage.setItem("usuario",usuario);
    }

    function set_rol(rol){
        window.localStorage.setItem("rol",rol);
    }

    function get_rol(){
        return window.localStorage.getItem("rol");
    }

    function validate_user(ruta){
        if(!("usuario" in localStorage) || get_usuario()==""){
            window.location = ruta;
        }
    }

    function validate_login(ruta){
        if(("usuario" in localStorage) && !(get_usuario()=="")){
            window.location = ruta;
        }
    }

    function cerrarSesionMain(parametros){
        console.log("CERRAR SESION");
        window.location = parametros;
        set_usuario("");
        set_rol("");
        localStorage.setItem('SolcitTemps','');
    }