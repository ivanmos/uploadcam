    window.addEventListener('load', function(){
    	// Wait for PhoneGap to load
   		document.addEventListener("deviceready", arrancar, false);
    }, false);
    
  
    // PhoneGap is ready
    function arrancar() {
    	var startBtn = $('#startBtn');
    	
    	
    	startBtn.click(function(){
    		sacarFoto();
    	});
    	
		
	}
    
    // Start watching the compass
    function sacarFoto() {
	navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI
	});
    
	
	 }
	 
	 function onSuccess(imageData) {
    var image = document.getElementById('myImage');
    image.src = imageData;
	var options = new FileUploadOptions();
options.fileKey = "file";
options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
options.chunkedMode = false;


	var ft = new FileTransfer();
ft.upload(imageData, encodeURI("http://www.nicolascoletto.com/camarita/upload.php"), cargaok, cargano, options);
}

function cargaok(r) {
	
	var mensaje = document.getElementById("mensaje");
	mensaje.innerHTML="Archivo subido";

}

function cargano(error) {
	var mensaje = document.getElementById("mensaje");
	mensaje.innerHTML="Aimsori, no se subio nada";
}

function onFail(message) {
    alert('Fallo porque: ' + message);
}