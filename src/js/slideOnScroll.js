export function slideScroll() {
  // Scroll
  const galleryItems = document.querySelectorAll(".gallery-section-item");

  if (galleryItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);

    function animOnScroll() {
      for (let i = 0; i < galleryItems.length; i++) {
        const galleryItem = galleryItems[i];
        const galleryItemHeight = galleryItem.offsetHeight;
        const galleryItemOffset = offset(galleryItem).top;
        const galleryStart = 4;

        let galleryItemPoint =
          window.innerHeight - galleryItemHeight / galleryStart;

        if (galleryItemHeight > window.innerHeight) {
          galleryItemPoint =
            window.innerHeight - window.innerHeight / galleryStart;
        }

        if (
          pageYOffset > galleryItemOffset - galleryItemPoint &&
          pageYOffset < galleryItemOffset + galleryItemHeight
        ) {
          galleryItem.classList.add("active");
        } else {
          galleryItem.classList.remove("active");
        }
      }
    }

    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    animOnScroll();
  }
}
