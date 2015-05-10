
JSWebcam
========

Make use of the webcam in the browser, using an optional fallback to use the camera of mobile devices or to upload pictures from disc.


Fork me on GitHub https://github.com/elgervb/JSWebcam
Example on: http://elgervanboxtel.nl/site/blog/capturing-webcam-with-getusermedia-and-canvas


Methods
-------

| Method      | Description                                               |
|-------------|-----------------------------------------------------------|
| element     | Returns the actual video HTMLElement                      |
| fallback    | Fallback mechanism to select files. Use this when you want to take pics from a mobile device or upload pictures from disc |
| isStarted   | Checks whether the webcam is started                      |
| isSupported | Checks whether or not the API is supported by the browser |
| start       | Enables the webcam, will ask the user to share his webcam |
| stop        | Stops the Webcam object                                   |
| takePicture | Take a still image of the webcam, returns a Blob          |
| uriToBlob   | Takes in a dataUri and transforms it into a Blob          |
| useFallback | Sets if a fallback mechanism should be in place to select files. Set this to true when you want to take pics from a mobile device or upload pictures from dics |


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

Reading material
-----
* http://dev.w3.org/2011/webrtc/editor/archives/20140619/getusermedia.html
* http://dev.w3.org/2009/dap/camera/
* https://developer.mozilla.org/en-US/docs/NavigatorUserMedia.getUserMedia
* https://developer.mozilla.org/en-US/docs/Web/Guide/API/WebRTC
* http://www.html5rocks.com/en/tutorials/getusermedia/intro/
