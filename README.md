
JSWebcam
========

Make use of the webcam in the broser

Methods
-------

| Method      | Description                                               |
|-------------|-----------------------------------------------------------|
| element     | Returns the actual video HTMLElement                      |
| start       | Enables the webcam, will ask the user to share his webcam |
| isStarted   | Checks whether the webcam is started                      |
| isSupported | Checks whether or not the API is supported by the browser |
| stop        | Stops the Webcam object                                   |
| takePicture | Take a still image of the webcam, returns a Blob          |
| uriToBlob   | Takes in a dataUri and transforms it into a Blob          |


Usage
-----

```javascript
var webcam = new Webcam('#video');
if (webcam.isSupported()) {
	webcam.start({video: true, audio: false}, function(stream) {
      // success function, video is streaming...
    }, function(e) {
      alert('Oops, something went wrong');
    });

    // now take an picture using the webcam
    var pic = webcam.takePicture();

    // and assign it to an image
    document.querySelector('#img').src = pic;
}
else {
	alert('API is not supported by your browser');
}
```

Links
-----
https://developer.mozilla.org/en-US/docs/NavigatorUserMedia.getUserMedia
https://developer.mozilla.org/en-US/docs/Web/Guide/API/WebRTC