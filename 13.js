avtoSlider ();
var left =0;
var timer;

function avtoSlider () {
    timer = setTimeout(function () {
    var polosa = document.getElementById("polosa");
    left = left - 128;
    if(left < -640) {
        left = 0;
        clearTimeout(timer);
    }
    polosa.style.left = left +"px";
    avtoSlider ();  
        
    }, 1000); 
}

