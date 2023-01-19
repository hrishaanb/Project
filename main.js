var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start () {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    if (content == "take my selfie") {
        console.log("taking selfie");
        speaking();
    }
}

function speaking () {
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout (function () {
        img_id = "selfie1";
        if (img_id == "selfie1") {
            take_snapshot();
            speak_data = "Taking your next selfie in 10 seconds";
            save();
        }

    }, 5000);
}

Webcam.set ({
    width : 360,
    height : 250,
    image_format : 'png',
    png_quality : 90
});

camera = document.getElementById("camera");

function take_snapshot () {
    Webcam.snap(function (data_uri) {
        if (img_id == "selfie1") {
            document.getElementById("result1").innerHTML = "<img id='selfie1' src='" + data_uri + "'>";
        }
        if (img_id == "selfie2") {
            document.getElementById("result2").innerHTML = "<img id='selfie2' src='" + data_uri + "'>";
        }
        if (img_id == "selfie3") {
            document.getElementById("result3").innerHTML = "<img id='selfie3' src='" + data_uri + "'>";
        }
    });
}

function save () {
    link = document.getElementById("link");
    img1 = document.getElementById("selfie1").src;
    img2 = document.getElementById("selfie2").src;
    img3 = document.getElementById("selfie3").src;
    link.href = img1;
    link.href = img2;
    link.href = img3;
    link.click();
}