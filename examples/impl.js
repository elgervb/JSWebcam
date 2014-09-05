document.addEventListener('DOMContentLoaded', function () {

	document.getElementById('image').style.display = 'none';


	var webcam = new Webcam('#video');
	if (webcam.isSupported()) {
	    webcam.enable({video: true, audio: false}, function(stream) {
	      // success function, video is streaming...
	    }, function(e) {
	      alert('Oops, something went wrong');
	    });
	}
	else {
	    alert('API is not supported by your browser');
	}


	document.getElementById('picture').addEventListener('click', function(e){
		e.preventDefault();
		if (webcam.isEnabled()){
			// now take an picture using the webcam
		    var pic = webcam.takePicture();

		    // and assign it to an image
		    document.querySelector('#image').src = pic;
		    document.querySelector('#image').style.display = 'inline';
	    }
	}, false);



		

});