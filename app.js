const image = document.getElementById("IMG");
const IMGBg = document.getElementById("IMG-bg");
const swipeBtn = document.getElementById("swipe-btn");

const images = [
  "./assets/woman-3567600_1920.jpg",
  "./assets/woman-3083453_1920.jpg",
  "./assets/woman-7203801_1920.jpg",
  "./assets/woman-8378634_1920.jpg",
  "./assets/woman-9264738_1920.jpg",
  "./assets/young-woman-4266712_1920.jpg"
];

let track = 0;

function changeSlide() {
  const currentImage = images[track % images.length];
  image.src = currentImage;
  IMGBg.src = currentImage;
  track++;
}

// Auto change every 2 seconds
const autoSlide = setInterval(changeSlide, 2000);

// Optional: also change image when user clicks the button (or anywhere)
document.addEventListener("click", changeSlide);


