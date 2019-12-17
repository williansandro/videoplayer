const song = document.querySelector(".song");
const play1 = document.querySelector(".play1");
const play2 = document.querySelector(".play2");
const play3 = document.querySelector(".play3");
const replay = document.querySelector(".replay");
const video = document.querySelector(".vid-container video");
const mostrar = document.querySelector(".vid-container");


const sounds = document.querySelectorAll(".sound-picker button");

sounds.forEach(sound => {
    sound.addEventListener("click", function () {
        song.src = this.getAttribute("data-sound");
        video.src = this.getAttribute("data-video");

    });
});

play1.addEventListener("click", () => {
    if (video.paused) {
        video.play();

    } else {
        video.pause();

    }
});

play2.addEventListener("click", () => {
    video.play();
});

play3.addEventListener("click", () => {
    video.play();
});

replay.addEventListener("click", () => {
    restartSong(video);

});



const restartSong = song => {
    let currentTime = song.currentTime;
    song.currentTime = 0;
    console.log("ciao")

}

function visivel() {
    mostrar.style.display = "block";

}






