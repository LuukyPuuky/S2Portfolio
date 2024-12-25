// const slider = document.getElementById("slider");
// const afterImage = document.querySelector(".after-image");

// slider.addEventListener("input", (event) => {
//   const percentage = event.target.value; // Get slider value (0-100)
//   afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`; // Dynamically adjust the clip-path
// });

const slider = document.getElementById("slider");
const afterImage = document.querySelector(".after-image");

// Disable transition while slider is moving
slider.addEventListener("input", (event) => {
  const percentage = event.target.value;
  afterImage.style.transition = "none"; // Remove transition for real-time response
  afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
});

// Re-enable transition after slider stops moving
slider.addEventListener("change", () => {
  afterImage.style.transition = "clip-path 0.3s ease-out"; // Add transition back
});
