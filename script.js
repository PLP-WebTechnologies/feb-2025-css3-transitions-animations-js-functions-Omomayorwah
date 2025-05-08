const image = document.getElementById("smile");
const pauseButton = document.getElementById("stop");
const resumeButton = document.getElementById("start");

pauseButton.addEventListener("click", () => {
  image.style.animationPlayState = "paused";
});

resumeButton.addEventListener("click", () => {
  image.style.animationPlayState = "running";
});