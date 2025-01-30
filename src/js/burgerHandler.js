export function burger() {
  // Burger handler
  (function () {
    const burgerItem = document.querySelector(".burger");
    const menu = document.querySelector(".navigation");
    const menuCloseItem = document.querySelector(".header__nav-close");
    const menuLinks = document.querySelectorAll(".nav-list-item-link");
    const innerContainer = document.querySelector(".inner-container");

    burgerItem.addEventListener("click", () => {
      menu.classList.add("navigation-active");
      innerContainer.style.opacity = "0";
    });
    menuCloseItem.addEventListener("click", () => {
      menu.classList.remove("navigation-active");
      innerContainer.style.opacity = "1";
    });
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener("click", () => {
        menu.classList.remove("navigation-active");
        innerContainer.style.opacity = "1";
      });
    }
  })();
}
