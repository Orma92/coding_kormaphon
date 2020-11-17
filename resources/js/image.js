var cropper = '';

function uploimg(inputfile, divimg, modal){
    console.log(inputfile);
    document.getElementById(inputfile).addEventListener('change', function(e) {
        if(cropper != ''){
            cropper.destroy();
            cropper = '';
        }
        var files = e.target.files;
        getBase64(files[0],divimg,modal);
    });
}

function getBase64(file,divimg,modal) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        var image = document.getElementById(divimg);
        image.src = reader.result;
        cropperimg(image,divimg,modal);
    };
    reader.onerror = function(error){
    };
}

function cropperimg(image,divimg,modal){
    var y = image.height;

    $('#'+divimg).parent().parent().parent().height(y);
    if(modal == 'SI'){
        $('.cuplofo').height(y);
    }

    cropper = new Cropper(image,{
        aspectRatio: 1 / 1,
        movable: false,
        zoomable: false,
        rotatable: false,
        scalable: false
    }); 
 }

 
$('#modaluploadfoto').on('hidden.bs.modal',function(){
    if(cropper != ''){
        cropper.destroy();
        cropper = '';
    }
});