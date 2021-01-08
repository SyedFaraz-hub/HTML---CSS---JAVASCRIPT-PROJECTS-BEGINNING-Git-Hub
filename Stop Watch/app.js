
var minheading = document.getElementById("min");
var secheading = document.getElementById("sec");
var msecheading = document.getElementById("msec");

var min = 0;
var sec = 0;
var msec = 0;

function stopwatch(){
    msec++
    msecheading.innerHTML = msec
    if(msec >= 100){
        sec++
       secheading.innerHTML = sec;
       msec = 0; 
    }
    else if(sec >= 60) {
        min++
        minheading.innerHTML = min;
        sec = 0;
    }    
}

function start(){
 interval = setInterval(stopwatch,10)
}
function pause(){
 clearInterval(interval)
}
function reset(){
    var min = 0;
    var sec = 0;
    var msec = 0;

    minheading.innerHTML = min;
    secheading.innerHTML = sec;
    msecheading.innerHTML = msec;

}