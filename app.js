const image = document.getElementById("IMG");
const IMGBg = document.getElementById("IMG-bg");
const swipeBtn = document.getElementById("swipe-btn");

const images = [
  "./assets/woman-7203801_1920.jpg",
  "./assets/woman-3567600_1920.jpg",
  "./assets/woman-3083453_1920.jpg",
  "./assets/woman-8378634_1920.jpg",
  "./assets/woman-9264738_1920.jpg",
  "./assets/young-woman-4266712_1920.jpg"
];

let track = 0;
let autoSlide;

// Start slideshow
function startSlideShow() {
  autoSlide = setInterval(changeSlide, 4000);
}

// Stop slideshow
function stopSlideShow() {
  clearInterval(autoSlide);
}

function changeSlide() {
  const currentImage = images[track % images.length];
  image.src = currentImage;
  IMGBg.src = currentImage;
  track++;
}

// Start slideshow when page is visible
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    startSlideShow();
  } else {
    stopSlideShow();
  }
});

// Manual trigger on click (optional)
document.addEventListener("click", changeSlide);

// Start slideshow initially
startSlideShow();

// Optional cleanup if you're changing pages/components dynamically
window.addEventListener("beforeunload", stopSlideShow);
