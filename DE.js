document.addEventListener("DOMContentLoaded", function () {
  const projectContainers = document.querySelectorAll(".project-image-container");
  let activeCarousel = null;

  projectContainers.forEach(container => {
    const images = container.querySelectorAll(".carousel-image");
    const leftArrow = container.querySelector(".carousel-arrow.left");
    const rightArrow = container.querySelector(".carousel-arrow.right");

    let currentIndex = 0;

    function updateCarousel(index) {
      images.forEach((img, i) => {
        img.classList.remove("active");
        img.style.display = i === index ? "block" : "none";
        if (i === index) img.classList.add("active");
      });
    }

    // ✅ Initialize the carousel
    updateCarousel(currentIndex);

    // ✅ Add click listeners (check for existence)
    if (leftArrow) {
      leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel(currentIndex);
      });
    }

    if (rightArrow) {
      rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel(currentIndex);
      });
    }

    // ✅ Track active carousel for arrow key use
    container.addEventListener("click", () => {
      activeCarousel = { container, updateCarousel, images, currentIndex };
    });
  });

  // ✅ Global key listener for left/right arrow key control
  document.addEventListener("keydown", (e) => {
    if (!activeCarousel) return;

    if (e.key === "ArrowRight") {
      activeCarousel.currentIndex = (activeCarousel.currentIndex + 1) % activeCarousel.images.length;
      activeCarousel.updateCarousel(activeCarousel.currentIndex);
    } else if (e.key === "ArrowLeft") {
      activeCarousel.currentIndex = (activeCarousel.currentIndex - 1 + activeCarousel.images.length) % activeCarousel.images.length;
      activeCarousel.updateCarousel(activeCarousel.currentIndex);
    }
  });
});
