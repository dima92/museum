// Ripple effect
export function ripple() {
  const buyButton = document.querySelector(".book-button");

  buyButton.addEventListener("click", (event) => {
    event.preventDefault();
    ripple(event);
  });

  function ripple(event) {
    const eventX = event.clientX;
    const eventY = event.clientY;
    const coords = event.target.getBoundingClientRect();

    const xInside = eventX - coords.x;
    const yInside = eventY - coords.y;

    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    ripple.style.top = yInside + "px";
    ripple.style.left = xInside + "px";

    event.target.appendChild(ripple);

    setTimeout(() => ripple.remove(), 500);
  }
}
