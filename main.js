function preload() {
    classifier = ml5.imageClassifier('DoodleNet')
}

function setup() {
    canvas = createCanvas(280, 280);
    background("peachpuff")
    canvas.position(600, 410)
    //a function is called when we do mousedown on the canvas
    canvas.mouseReleased(classifyCanvas)
    synth = window.speechSynthesis;
}

function draw() {
    stroke("purple");
    strokeWeight(10);
    //mouseIsPressed is binary(boolean) function and returns value as TRUE/FALSE
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
        //p= previous
    }
}

function cc() {
    background("peachpuff");
}
function classifyCanvas() {
    classifier.classify(canvas, gotResults)
}
function gotResults(error, results) {
if(error){
    console.error(error)
}
else{
    console.log(results);
    dn= results[0].label;
    da= results[0].confidence;
    document.getElementById("o_n").innerHTML= dn;
    document.getElementById("acc").innerHTML= Math.round(da*100)+"%";
    utterThis= new SpeechSynthesisUtterance(dn);
synth.speak(utterThis)
}
}