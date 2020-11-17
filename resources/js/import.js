function includejs(ruta,id){
    var ctrl = 0;
    $('script').each(function(index){
        if($(this).attr("src") == ruta){
            ctrl = 1;
        }
    });
    if(ctrl == 0){
        $( '<script type="text/javascript" src="'+ruta+'"></script>' ).insertBefore( "#"+id );
    }
}
