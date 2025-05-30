// Image carousel for each project
document.addEventListener("DOMContentLoaded", function () {
  const projectContainers = document.querySelectorAll(".project-image-container");

  projectContainers.forEach(container => {
    const images = container.querySelectorAll(".carousel-image");
    const leftArrow = container.querySelector(".carousel-arrow.left");
    const rightArrow = container.querySelector(".carousel-arrow.right");

    let currentIndex = 0;

    function updateCarousel(index) {
      images.forEach((img, i) => {
        img.classList.remove("active");
        img.style.display = i === index ? "block" : "none";
      });

       if (i === index) {
      img.classList.add("active");
    }};

    // Initialize carousel
    updateCarousel(currentIndex);

    rightArrow.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel(currentIndex);
    });

    leftArrow.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel(currentIndex);
    });
  });
});