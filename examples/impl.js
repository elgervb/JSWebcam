document.addEventListener('DOMContentLoaded', function () {

	document.getElementById('image').style.display = 'none';
	document.getElementById('thumb').style.display = 'none';

	var webcam = new Webcam('#video');

	document.getElementById('stop').addEventListener('click', function(e){
		e.preventDefault();
		webcam.stop();
		document.getElementById('image').style.display = 'none';
		document.getElementById('thumb').style.display = 'none';
	}, false);
	document.getElementById('start').addEventListener('click', function(e){
		e.preventDefault();
		if (webcam.isSupported()) {
		    webcam.start({video: true, audio: false}, function(stream) {
		      // success function, video is streaming...
		    }, function(e) {
		      alert('Oops, something went wrong');
		    });
		}
		else {
		    alert('API is not supported by your browser');
		}
	}, false);
	
	document.getElementById('picture').addEventListener('click', function(e){
		e.preventDefault();
		if (webcam.isStarted()){
			// now take an picture using the webcam
		    var pic = webcam.takePicture();

		    // and assign it to an image
		    document.querySelector('#image').src = pic;
		    document.querySelector('#image').style.display = 'inline';

		    // now take an picture using the webcam and make a square centered thumb
		    var pic = webcam.takePicture(function(ctx, canvas){
		        var min = Math.min(canvas.width,canvas.height);
		        var max = Math.max(canvas.width,canvas.height);
		        canvas.width = min;
		        canvas.height = min;
		        ctx.drawImage(webcam.element(), (max-min)/2, 0, min,min, 0,0,min,min);
		      });

		    // and assign it to an image
		    document.querySelector('#thumb').src = pic;
		    document.querySelector('#thumb').style.display = 'inline';
	    }
	}, false);
});