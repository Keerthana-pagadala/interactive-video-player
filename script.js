const video = document.getElementById("video");
const playBtn = document.getElementById("play-btn");
const progress = document.getElementById("progress");
const speed = document.getElementById("speed");

playBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playBtn.textContent = "⏸️";
  } else {
    video.pause();
    playBtn.textContent = "▶️";
  }
});

video.addEventListener("timeupdate", () => {
  const percent = (video.currentTime / video.duration) * 100;
  progress.value = percent;
});

progress.addEventListener("input", () => {
  const time = (progress.value / 100) * video.duration;
  video.currentTime = time;
});

speed.addEventListener("change", () => {
  video.playbackRate = speed.value;
});
