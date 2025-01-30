export function videoPlayer() {
  // video
  const video = document.querySelector("video");
  const videoProgress = document.querySelector(".progress-video");
  const volumeProgress = document.querySelector(".progress-volume");
  const bigButtonPlay = document.querySelector(".play-button");
  const playButton = document.querySelector(".control-play");
  const volumeButton = document.querySelector(".control-volume");
  const fullscreenButton = document.querySelector(".control-fullscreen");
  const videoProgressText = document.querySelector(".video-progress-text");
  const playbackRateElem = document.querySelector(".playback-rate");
  const rewind = document.querySelector(".rewind");
  const playSVG = 'url("assets/svg/video-controls/play.svg")';
  const pauseSVG = 'url("assets/svg/video-controls/pause.svg")';
  const volSVG = 'url("assets/svg/video-controls/volume.svg")';
  const muteSVG = 'url("assets/svg/video-controls/mute.svg")';
  const forwardSVG = 'url("assets/svg/video-controls/forward-10.svg")';
  const rewindSVG = 'url("assets/svg/video-controls/rewind-10.svg")';
  let videoDuration;
  let videoLengthMinutes;
  let videoLengthSeconds;
  let videoFullLength;
  let currentTime;
  let timer;
  video.volume = 0.43;
  volumeProgress.value = video.volume;
  volumeProgress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${
    volumeProgress.value * 100
  }%,
                      #c4c4c4 ${volumeProgress.value * 100}%, #c4c4c4 100%)`;

  const HOTKEYS = {
    KeyM: () => {
      volumeControl();
    },
    KeyF: () => {
      fullScreen();
    },
    KeyJ: (event) => {
      video.currentTime = video.currentTime - 10;
      showRewind(event);
    },
    KeyL: (event) => {
      video.currentTime = video.currentTime + 10;
      showRewind(event);
    },
    Space: () => {
      videoControl();
    },
    Comma: (evt) => {
      if (evt.shiftKey) {
        video.playbackRate =
          video.playbackRate === 0.25
            ? video.playbackRate
            : video.playbackRate - 0.25;
        showPlaybackRate();
      }
    },
    Period: (evt) => {
      if (evt.shiftKey) {
        video.playbackRate =
          video.playbackRate === 2.5
            ? video.playbackRate
            : video.playbackRate + 0.25;
        showPlaybackRate();
      }
    },
    ArrowUp: () => {
      video.volume = video.volume > 0.95 ? 1 : video.volume + 0.05;
      updateVolume();
    },
    ArrowDown: () => {
      video.volume = video.volume < 0.05 ? 0 : video.volume - 0.05;
      updateVolume();
    },
  };

  video.addEventListener("loadedmetadata", () => {
    videoDuration = video.duration;
    videoLengthMinutes =
      Math.floor(videoDuration / 60) < 10
        ? `0${Math.floor(videoDuration / 60)}`
        : Math.floor(videoDuration / 60);
    videoLengthSeconds =
      Math.floor(videoDuration % 60) < 10
        ? `0${Math.floor(videoDuration % 60)}`
        : Math.floor(videoDuration % 60);
    videoFullLength = `${videoLengthMinutes}:${videoLengthSeconds}`;
    videoProgress.setAttribute("max", videoDuration);
    videoProgressText.textContent = `00:00/${videoFullLength}`;
  });

  playButton.addEventListener("click", videoControl);
  bigButtonPlay.addEventListener("click", videoControl);
  video.addEventListener("play", () => {
    timer = setInterval(updateCurrentTime, 1000);
  });

  videoProgress.addEventListener("change", () => {
    video.currentTime = videoProgress.value;
    let progressPercent = (video.currentTime / videoDuration) * 100;
    videoProgress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${progressPercent}%, #c4c4c4 ${progressPercent}%, #c4c4c4 100%)`;
  });

  volumeButton.addEventListener("click", volumeControl);

  volumeProgress.addEventListener("pointermove", () => {
    video.volume = volumeProgress.value;
    updateVolume();
  });

  function updateVolume() {
    volumeProgress.value = video.volume;
    volumeProgress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${
      volumeProgress.value * 100
    }%, #c4c4c4 ${volumeProgress.value * 100}%, c4c4c4 100%)`;
    if (video.volume === 0) {
      volumeButton.style.backgroundImage = muteSVG;
    } else {
      volumeButton.style.backgroundImage = volSVG;
    }
  }

  function updateCurrentTime() {
    currentTime = video.currentTime;
    videoProgress.value = currentTime;
    let progressPercent = (video.currentTime / videoDuration) * 100;
    let currentMinutes =
      Math.floor(currentTime / 60) < 10
        ? `0${Math.floor(currentTime / 60)}`
        : Math.floor(currentTime / 60);
    let currentSeconds =
      Math.floor(currentTime % 60) < 10
        ? `0${Math.floor(currentTime % 60)}`
        : Math.floor(currentTime % 60);
    videoProgress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${progressPercent}%, #c4c4c4 ${progressPercent}%, #c4c4c4 100%)`;
    videoProgressText.textContent = `${currentMinutes}:${currentSeconds}/${videoFullLength}`;
    if (video.currentTime === video.duration) {
      playButton.classList.toggle("playing");
      playButton.style.backgroundImage = playSVG;
      videoProgress.value = 0;
      videoProgressText.textContent = `00:00/${videoFullLength}`;
      videoProgress.style.background = `linear-gradient(to right, #710707 0%, #710707 0%, #c4c4c4 0%, #c4c4c4 100%)`;
      clearInterval(timer);
    }
  }

  function videoControl() {
    playButton.classList.toggle("playing");
    bigButtonPlay.classList.toggle("playing");
    if (
      playButton.classList.contains("playing") ||
      bigButtonPlay.classList.contains("playing")
    ) {
      bigButtonPlay.style.display = "none";
      playButton.style.backgroundImage = pauseSVG;
      video.play();
    } else {
      bigButtonPlay.style.display = "block";
      playButton.style.backgroundImage = playSVG;
      video.pause();
    }
  }

  function volumeControl() {
    volumeButton.classList.toggle("active");
    if (volumeButton.classList.contains("active")) {
      volumeButton.style.backgroundImage = volSVG;
      video.muted = false;
    } else {
      volumeButton.style.backgroundImage = muteSVG;
      video.muted = true;
    }
  }

  function fullScreen() {
    if (!document.fullscreenElement) {
      video.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  fullscreenButton.addEventListener("click", () => fullScreen());

  document.addEventListener("keydown", (evt) => {
    const pressedKey = evt.code;
    if (Object.keys(HOTKEYS).includes(pressedKey)) {
      HOTKEYS[pressedKey](evt);
    }
  });

  function showPlaybackRate() {
    playbackRateElem.textContent = `${video.playbackRate}x`;
    if (!playbackRateElem.classList.contains("visible")) {
      playbackRateElem.classList.toggle("visible");
      setTimeout(() => playbackRateElem.classList.toggle("visible"), 3000);
    }
  }

  function showRewind(event) {
    if (event.code === "KeyL") {
      rewind.style.backgroundImage = forwardSVG;
      if (!rewind.classList.contains("visible")) {
        rewind.classList.toggle("visible");
        setTimeout(() => rewind.classList.toggle("visible"), 3000);
      }
    } else {
      rewind.style.backgroundImage = rewindSVG;
      if (!rewind.classList.contains("visible")) {
        rewind.classList.toggle("visible");
        setTimeout(() => rewind.classList.toggle("visible"), 3000);
      }
    }
  }
}
