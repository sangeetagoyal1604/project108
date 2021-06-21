Webcam.set({
    image_format:'png',
    height:350,
   width:300,
   png_quality:90
   });
   Webcam.attach(document.getElementById("camera"));
   function imagecapture() {
 Webcam.snap(function (url) {
document.getElementById("result").innerHTML="<img id='photo' src="+url+">";
       });
   }
   classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ERgh82vdo/model.json',modelloaded);
   function modelloaded() {
       console.log("modelloaded");
   }
   function speak() {
    var sync=window.speechSynthesis;
    var speak1="first prediction is "+p1;
    var speak2="second prediction is "+p2;
    var utter=new SpeechSynthesisUtterance(speak1+speak2);
    sync.speak(utter);
   }
 function predict() {
    var photo=document.getElementById("photo");
    classifier.classify(photo,gotResult);   
   }
   function gotResult(error,results) {
       if (error) {
          console.error(error); 
       } else {
           console.log(results);
       document.getElementById("resultname").innerHTML=results[0].label;
    document.getElementById("resultname2").innerHTML=results[1].label;  
     p1=results[0].label;
     p2=results[1].label; 
   if (p1=="you are amazing") {
    document.getElementById("resultemoji").innerHTML="&#128076;"; 
   
   }
   if (p1=="well done") {
       document.getElementById("resultemoji").innerHTML="&#128079;"; 
   }
       if (p1=="love and care") {
           document.getElementById("resultemoji").innerHTML="&#128080;"; 
   }
   if (p1=="all the best") {
       document.getElementById("resultemoji").innerHTML="&#128077;"; }

       if (p1=="give me high five") {
        document.getElementById("resultemoji").innerHTML="&#128400;"; }
        
        if (p1=="you are bad") {
            document.getElementById("resultemoji").innerHTML="&#128078;"; 
 }

 if (p2=="you are amazing") {
    document.getElementById("resultemoji2").innerHTML="&#128076;"; 
   
   }
   if (p2=="well done") {
       document.getElementById("resultemoji2").innerHTML="&#128079;"; 
   }
       if (p2=="love and care") {
           document.getElementById("resultemoji2").innerHTML="&#128080;"; 
   }
   if (p2=="all the best") {
       document.getElementById("resultemoji2").innerHTML="&#128077;"; }

       if (p2=="give me high five") {
        document.getElementById("resultemoji2").innerHTML="&#128400;"; }
        
        if (p2=="you are bad") {
            document.getElementById("resultemoji2").innerHTML="&#128078;"; 
 }
   
    speak();  
   }
   } 