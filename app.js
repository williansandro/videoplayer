var myVideo1 = document.getElementById("videos1");
var myVideo2 = document.getElementById("videos2");
var myVideo3 = document.getElementById("videos3");

var pause1 = myVideo1;
var pause2 = myVideo2;
var pause3 = myVideo3;

function pauses1(){
    if(myVideo1.play)
    pause1.pause();
}

function pauses2(){

    if(myVideo2.play)
    pause2.pause();
}

function pauses3(){
    if(myVideo3.play)
    pause3.pause();
}

function playPause1() {
    if (myVideo1.paused)
        myVideo1.play();
    else
        myVideo1.pause();
}

function playPause2() {
    if (myVideo2.paused)
        myVideo2.play();
    else
        myVideo2.pause();
}

function playPause3() {
    if (myVideo3.paused)
        myVideo3.play();
    else
        myVideo3.pause();
} 
