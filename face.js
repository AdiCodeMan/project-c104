Webcam.set({
    width:300,
    height:250,
    image_format : 'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

    console.log('m15 version:', m15.version);

    classifier = m15.imageClassifier('https://unpkg.com/ml5@0.4.3/dist/ml5.min.js',modelLoaded);

    function modelLoaded()
    {
        console.log("model is Loaded")
    }