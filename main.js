prediction_1 ="";
prediction_2 = "";
Webcam.set({
    width : 250,
    height : 250,
    image_format : 'png',
    image_quality : 90
});
Webcam.attach('#camera');
function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id = 'captured_img' src = "+data_uri+">";
    })
    speak();
}
console.log(ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/8vG5uGs8f/modal.json",modalLoaded);
 function modalLoaded(){
     console.log('modalLoaded')
 }
 function speak(){
    var voice_box = window.speechSynthesis;
    data_1 = "The first prediction is"+prediction_1;
    data_2 = "The second prediction is"+prediction_2;
    var voice_message = new SpeechSynthesisUtterance(data_1 + data_2);
    voice_box.speak(voice_message);
}