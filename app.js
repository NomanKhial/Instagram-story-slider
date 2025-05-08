const image = document.getElementById("IMG")
const IMGBg = document.getElementById("IMG-bg")
const swipeBtn = document.getElementById("swipe-btn")

const images = ["./assets/woman-3083453_1920.jpg", "./assets/woman-3567600_1920.jpg", "./assets/woman-7203801_1920.jpg", "./assets/woman-8378634_1920.jpg", "./assets/woman-9264738_1920.jpg", "./assets/young-woman-4266712_1920.jpg"];


function swiper() {

  const random = Math.floor(Math.random() * images.length)
  image.src = images[random]
  IMGBg.src = images[random]

}

setInterval(() => {
  swiper()
}, 5000);


let track = 0
function changeSlide() {
  image.src = images[track % images.length]
  IMGBg.src = images[track % images.length]
  track += 1
}

document.addEventListener("click", changeSlide)
