export function slider() {
  // Slider(Welcome)
  const prev = document.querySelector(".left");
  const next = document.querySelector(".right");
  const slides = document.querySelectorAll(".sliderImage");
  const slider = document.querySelector(".slider");
  const dots = document.querySelectorAll(".paginator-list-item");
  const current = document.querySelector(".current");

  let index = 0;
  let startPosX, startPosY, endPosX, endPosY;

  const activeSlide = (n) => {
    current.textContent = "0" + (index + 1);
    for (let slide of slides) {
      slide.classList.remove("active");
    }
    slides[n].classList.add("active");
  };

  const activeDot = (n) => {
    for (let dot of dots) {
      dot.classList.remove("active");
    }
    dots[n].classList.add("active");
  };

  const prepareCurrentSlide = (ind) => {
    activeSlide(ind);
    activeDot(ind);
  };

  const nextSlide = () => {
    if (index === slides.length - 1) {
      index = 0;
      prepareCurrentSlide(index);
    } else {
      index++;
      prepareCurrentSlide(index);
    }
  };

  const prevSlide = () => {
    if (index === 0) {
      index = slides.length - 1;
      prepareCurrentSlide(index);
    } else {
      index--;
      prepareCurrentSlide(index);
    }
  };

  dots.forEach((item, indexDot) => {
    item.addEventListener("click", () => {
      index = indexDot;
      prepareCurrentSlide(index);
    });
  });

  const pointerDown = (e) => {
    startPosX = e.clientX;
    startPosY = e.clientY;
  };

  const pointerUp = (e) => {
    endPosX = e.clientX;
    endPosY = e.clientY;
    if (startPosX - endPosX > 50 || startPosY - endPosY > 50) nextSlide();
    if (startPosX - endPosX < -50 || startPosY - endPosY < -50) prevSlide();
  };

  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlide);
  document.addEventListener("pointerdown", pointerDown);
  document.addEventListener("pointerup", pointerUp);

  document.addEventListener("keyup", (e) => {
    if (e.code === "ArrowRight") {
      nextSlide();
    }
  });

  document.addEventListener("keyup", (e) => {
    if (e.code === "ArrowLeft") {
      prevSlide();
    }
  });
}
