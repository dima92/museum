export function modalPopup() {
  // Modal
  const popup = document.querySelector(".popup");
  const amountBtn = document.querySelector(".buy-button");
  const popupClose = popup.querySelector(".popup-close");
  const popupCloseOverlay = popup.querySelector(".popup-close-area");

  function openPopup() {
    popup.style.transform = "translateX(0)";
  }

  function closePopup(event) {
    popup.style.transform = "translateX(-100%)";
    event.preventDefault();
  }

  amountBtn.addEventListener("click", openPopup);
  popupClose.addEventListener("click", closePopup);
  popupCloseOverlay.addEventListener("click", closePopup);
}
