const afterImage = document.querySelector(".after-image");
let isDragging = false;

// Mouse events for desktop dragging
const imageWrapper = document.querySelector(".image-wrapper");
imageWrapper.addEventListener("mousedown", (e) => {
  isDragging = true;
  updateClipPathFromEvent(e);
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    updateClipPathFromEvent(e);
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

// Touch events for mobile dragging
imageWrapper.addEventListener("touchstart", (e) => {
  isDragging = true;
  updateClipPathFromEvent(e.touches[0]);
});

document.addEventListener("touchmove", (e) => {
  if (isDragging) {
    updateClipPathFromEvent(e.touches[0]);
  }
});

document.addEventListener("touchend", () => {
  isDragging = false;
});

// Function to update the clip-path based on mouse/touch position
function updateClipPathFromEvent(e) {
  const rect = imageWrapper.getBoundingClientRect();
  const mouseX = (e.clientX || e.touches[0].clientX) - rect.left; // Get mouse or touch position relative to the image wrapper
  const percentage = (mouseX / rect.width) * 100; // Calculate the percentage of the image covered
  updateClipPath(percentage); // Update the clip-path
}

// Function to update the clip-path based on the percentage
function updateClipPath(percentage) {
  afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
}
