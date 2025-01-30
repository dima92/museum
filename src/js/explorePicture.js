// explore
export function explore() {
  const wrapperRight = document.querySelector(".wrapper-right");
  const wrapperRightBefore = wrapperRight.querySelector(
    ".wrapper-right-img-before"
  );
  const wrapperRightSlider = wrapperRight.querySelector(
    ".wrapper-right-slider"
  );

  function initComparisons(event) {
    const wrapperRightCoords = wrapperRight.getBoundingClientRect();
    const leftLimit = wrapperRightCoords.left;
    const sliderHalfWidth = wrapperRightSlider.offsetWidth / 2;
    let sliderPosition = event.clientX - sliderHalfWidth - leftLimit;
    if (
      sliderPosition < 0 - sliderHalfWidth ||
      sliderPosition > wrapperRightCoords.width - sliderHalfWidth
    ) {
      return false;
    }
    wrapperRightSlider.style.left = sliderPosition + "px";
    wrapperRightBefore.style.width = sliderPosition + sliderHalfWidth + "px";
  }

  wrapperRightSlider.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    document.addEventListener("pointermove", initComparisons);
  });

  document.addEventListener("pointerup", () => {
    document.removeEventListener("pointermove", initComparisons);
  });

  wrapperRightSlider.addEventListener("touchstart", (event) => {
    event.preventDefault();
    document.addEventListener("touchmove", initComparisons);
  });

  document.addEventListener("touchend", () => {
    document.removeEventListener("touchmove", initComparisons);
  });
}
