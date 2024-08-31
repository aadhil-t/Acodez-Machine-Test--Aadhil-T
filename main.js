// script.js
let scrollPosition = 0;

document.getElementById("moveLeft").addEventListener("click", function () {
  const container = document.getElementById("course-scroll");
  if (container) {
    const newScrollPosition = scrollPosition - container.offsetWidth * 0.4;
    scrollPosition = newScrollPosition;
    container.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  }
});

document.getElementById("moveRight").addEventListener("click", function () {
  const container = document.getElementById("course-scroll");
  if (container) {
    const newScrollPosition = scrollPosition + container.offsetWidth * 0.4;
    scrollPosition = newScrollPosition;
    container.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  }
});
