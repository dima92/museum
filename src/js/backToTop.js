export function up() {
  const arrowTop = document.querySelector(".arrowTop");

  arrowTop.addEventListener("click", () => {
    scrollTo(pageYOffset, 0);
  });

  addEventListener("scroll", () => {
    arrowTop.hidden = pageYOffset < document.documentElement.clientHeight;
  });
}
