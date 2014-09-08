document.addEventListener('DOMContentLoaded', function () {

	document.getElementById('image').style.display = 'none';
	document.getElementById('thumb').style.display = 'none';
	document.getElementById('video').style.display = 'none';

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
		      document.getElementById('video').style.display = 'block';
		    }, function(e) {
		      alert('Oops, something went wrong');
		    });
		}
		else {
			if (window.navigator.userAgent.match(/Mobi/)){ // mobile browser...
				webcam.useFallback(true);
			}
		    else{
		    	alert('API is not supported by your browser');
		    }
		}
	}, false);

	document.getElementById('picture').addEventListener('click', function(e){
		e.preventDefault();
		if (webcam.isStarted()){
			// now take an picture using the webcam
		    webcam.takePicture(function(pic){
		    	// and assign it to an image
			    document.querySelector('#image').src = pic;
			    document.querySelector('#image').style.display = 'inline';
		    });

		    // now take an picture using the webcam and make a square centered thumb
		    webcam.takePicture(function(pic){
		    	document.getElementById('video').style.display = 'none';
		    	// and assign it to an image
			    document.querySelector('#thumb').src = pic;
			    document.querySelector('#thumb').style.display = 'inline';
		    },function(ctx, canvas){
		        var min = Math.min(canvas.width,canvas.height);
		        var max = Math.max(canvas.width,canvas.height);
		        canvas.width = min;
		        canvas.height = min;
		        ctx.drawImage(webcam.element(), (max-min)/2, 0, min,min, 0,0,min,min);
		      });
	    }
	}, false);

	document.getElementById('fallback').addEventListener('click', function(e){

		// now take an picture using the webcam and make a square centered thumb
	    webcam.fallback(function(pic){
	    	document.getElementById('video').style.display = 'none';
	    	// and assign it to an image
		    document.querySelector('#thumb').src = pic;
		    document.querySelector('#thumb').style.display = 'inline';
	    },function(ctx, canvas){
	        var min = Math.min(canvas.width,canvas.height);
	        var max = Math.max(canvas.width,canvas.height);
	        canvas.width = min;
	        canvas.height = min;
	        ctx.drawImage(webcam.element(), (max-min)/2, 0, min,min, 0,0,min,min);
	    });

	}, false);
});