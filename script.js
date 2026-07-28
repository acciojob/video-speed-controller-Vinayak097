const video = document.querySelector(".player__video");

const playButton = document.querySelector(".player__button");

const progress = document.querySelector(".progress");

const volume = document.querySelector(".volume");

const playbackSpeed = document.querySelector(".playbackSpeed");

const skipBack = document.querySelector(".skip-back");

const skipForward = document.querySelector(".skip-forward");


// Play / Pause toggle
function togglePlay(){

    if(video.paused){
        video.play();
        playButton.textContent = "❚ ❚";
    }
    else{
        video.pause();
        playButton.textContent = "►";
    }

}


playButton.addEventListener("click", togglePlay);

video.addEventListener("click", togglePlay);


// Update progress bar
video.addEventListener("timeupdate", () => {

    const percent = (video.currentTime / video.duration) * 100;

    progress.value = percent;

});


// Seek video using progress bar

progress.addEventListener("input", () => {

    const time = (progress.value / 100) * video.duration;

    video.currentTime = time;

});


// Volume control

volume.addEventListener("input", () => {

    video.volume = volume.value;

});


// Playback speed control

playbackSpeed.addEventListener("input", () => {

    video.playbackRate = playbackSpeed.value;

});


// Rewind 10 seconds

skipBack.addEventListener("click", () => {

    video.currentTime -= 10;

});


// Forward 25 seconds

skipForward.addEventListener("click", () => {

    video.currentTime += 25;

});


// Reset button when video ends

video.addEventListener("ended", () => {

    playButton.textContent = "►";

});