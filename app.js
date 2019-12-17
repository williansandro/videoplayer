const song = document.querySelector(".song");
const play = document.querySelector(".play");
const replay = document.querySelector(".replay");
const video = document.querySelector(".vid-container video");

const sounds = document.querySelectorAll(".sound-picker button");

sounds.forEach(sound => {
    sound.addEventListener("click", function() {
      song.src = this.getAttribute("data-sound");
      video.src = this.getAttribute("data-video");
      
    });
  });
  
  play.addEventListener("click", () => {
    song.play();
  });

  replay.addEventListener("click", function() {
    restartSong(song);
    
  });


  const restartSong = song =>{
    let currentTime = song.currentTime;
    song.currentTime = 0;
    console.log("ciao")

}

const checkPlaying = song => {
    if (song.paused) {
      song.play();
      video.play();
      play.src = "./svg/pause.svg"
    } else {
      song.pause();
      video.pause();
      
    }
  };
