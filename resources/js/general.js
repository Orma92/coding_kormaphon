//Solo fotos hasta dejar los ws en POST
function sendajaxtoserverfoto(parametros, ws, accion){
    $.ajax({
        data:  parametros,
        url:   ws,
        type:  'POST',
        success: function(response) {
            ajaxevalresponse(response,accion);
        },
        error: function() {

        }
    });
}

//Conexion ajax
function sendajaxtoserver(parametros, ws, accion){
    $.ajax({
        data:  parametros,
        url:   ws,
        type:  'get',
        success: function(response) {
            ajaxevalresponse(response,accion);
        },
        error: function() {

        }
    });
}

//Evalua el response del ajax que se ejecuta
function ajaxevalresponse(response,accion){
    var response = JSON.parse(response)
    self[accion](response);
}

//devuelve un array con los parametros que pasemos por url de una pagina a otra
function getParUrl(){
	  var loc = document.location.href;
	  if(loc.indexOf('?')>0)
	  {
  		  var getString = loc.split('?')[1];
  		  var GET = getString.split('&');
  		  var get = {};
  		  for(var i = 0, l = GET.length; i < l; i++){
    			  var tmp = GET[i].split('=');
    			  get[tmp[0]] = unescape(decodeURI(tmp[1]));
  		  }
  		  return get;
	  }
}

//Permite obtener fecha formateada
function get_fecha(fecha){
  if(fecha !=''){
      var fecha = new Date(fecha);
  }else{
      var fecha = new Date();
  }

  var anio=fecha.getFullYear();
  var mes=fecha.getMonth()+1;
  var dia=fecha.getDate();
  if(mes<10){
      mes = "0"+mes;
  }
  if(dia<10){
      dia = "0"+dia;
  }
  return anio+"-"+mes+"-"+dia;
}

//inicializar los toasters para los alerts
$(document).ready(function () {
    toastr.options = {
      "debug": false,
      "newestOnTop": false,
      "positionClass": "toast-top-right",
      "closeButton": true,
      "progressBar": false
    };
  
});
/*$('#tb_clientes_carreras').DataTable({
          "order": [[ 0, "desc" ]]
        });*/

//Aniade el datatable a una tabla formulada
function asignardatatable(id){
    var table;
    if (id == "#tb_clientes_carreras"){
        table = $(id).DataTable({
            "order": [[ 0, "desc" ]],
            dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>tp",
            "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
            buttons: [
                {extend: 'copy', className: 'btn-sm'},
                {extend: 'csv', title: 'ExampleFile', className: 'btn-sm'},
                {extend: 'pdf', title: 'ExampleFile', className: 'btn-sm'},
                {extend: 'print', className: 'btn-sm'}
            ],
                "bDeferRender": true,
                "oLanguage": {
                "sEmptyTable": "NO HAY REGISTROS DISPONIBLES",
                "sInfo": "HAY _TOTAL_ REGISTROS. Mostrando de (_START_ a _END_)",
                "sLoadingRecords": "POR FAVOR ESPERE... - CARGANDO...",
                "sSearch": "BÚSQUEDA:",
                "sLengthMenu": "MOSTRAR _MENU_",
                "oPaginate": {
                "sLast": "ÚLTIMA PÁGINA",
                "sFirst": "PRIMERA",
                "sNext": "SIGUIENTE",
                "sPrevious": "ANTERIOR",
                }
                }
        });
    }else{
        table = $(id).DataTable({
            dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>tp",
            "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
            buttons: [
                {extend: 'copy', className: 'btn-sm'},
                {extend: 'csv', title: 'ExampleFile', className: 'btn-sm'},
                {extend: 'pdf', title: 'ExampleFile', className: 'btn-sm'},
                {extend: 'print', className: 'btn-sm'}
            ],
                "bDeferRender": true,
                "oLanguage": {
                "sEmptyTable": "NO HAY REGISTROS DISPONIBLES",
                "sInfo": "HAY _TOTAL_ REGISTROS. Mostrando de (_START_ a _END_)",
                "sLoadingRecords": "POR FAVOR ESPERE... - CARGANDO...",
                "sSearch": "BÚSQUEDA:",
                "sLengthMenu": "MOSTRAR _MENU_",
                "oPaginate": {
                "sLast": "ÚLTIMA PÁGINA",
                "sFirst": "PRIMERA",
                "sNext": "SIGUIENTE",
                "sPrevious": "ANTERIOR"
                }
                }
        });
    }
    return table;
}

function asignardatatablesolicitudtemporal(id){
    var table = $(id).DataTable({
        dom: "<'col-sm-4'l>",
        buttons: [  
        ],
    });
    return table;
}

//---------------------------para las estadisticas-------------------------------------
function asignardatatable_estadisticas(id){
    var table = $(id).DataTable({
        "order": [[ 1, "desc" ]],
        dom:  "<'col-sm-4'>",   //"<'col-sm-4'l>",
        "lengthMenu": [[5, 10, 25, -1], [5, 10, 25, "Mostrar Todo"]],
        buttons: [
           
                 ]
    });
    return table;
}

//select 2

function inicializar_select2_vehiculo(elemento){

    elemento.select2({
        placeholder: 'Selecciona la unidad a buscar',
        minimumInputLength:1,
        allowClear:true,
        selectOnClose: true,
        language: {
            noResults: function() {
              return "No hay resultado";        
            },
            searching: function() {
              return "Buscando..";
            }
          },
          ajax: {
            url: "../../app/Controllers/listar.php",
            dataType: 'json',
            type: "GET",
            quietMillis: 50,
            data: function (term) {
                return {
                    term: term,
                    func: 'liscodvehunisup'
                };
            },
            processResults: function (data) {
                console.log(data);
                return {
                  results: data
                };
            },
            cache:true
         }
    });

}


//--------------------------------------------------------------------------------------

//Function que mediante la asignacion de una misma clase a los componentes de un formulario
//permite validar que todos los campos esten llenos
function validate_forms(clase){
    var validate = 0;
    $(clase).map(function(cl,key,array){
        if($(this).val().trim() == '' && validate == 0){
            toastr.info($(this).attr('placeholder'));
            validate = 1;
        }
    });
    return validate;
}

function limpiar_forms(clase){
    $(clase).map(function(cl,key,array){
        $(this).val('');
    });
}

function soloNumeros(e) {
    var tecla = (document.all) ? e.keyCode : e.which; // 2
    if (tecla == 8 || tecla == 32 || tecla == 0 || tecla == 13) return true; // 3
    patron = /[0-9\s]/; // 4
    te = String.fromCharCode(tecla); // 5
    return patron.test(te); // 6
}



