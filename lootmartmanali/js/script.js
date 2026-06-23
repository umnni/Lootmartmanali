// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// Product Image Change
function changeImage(mainId, imgSrc) {
  const mainImg = document.getElementById(mainId);

  if (mainImg) {
    mainImg.src = imgSrc;
  }
}

// Cart Count
let cart = 0;

function addToCart() {
  cart++;

  const cartCount = document.getElementById("cartCount");

  if (cartCount) {
    cartCount.innerText = cart;
  }

  alert("Product added to cart!");
}
// Hero Small Carousels
document.querySelectorAll(".hero-carousel").forEach((carousel) => {
  const imgTag = carousel.querySelector(".carousel-img");
  const images = carousel
    .getAttribute("data-images")
    .split(",")
    .map((img) => img.trim())
    .filter((img) => img !== "");

  if (!imgTag || images.length === 0) return;

  let index = 0;
  imgTag.src = images[index];

  setInterval(() => {
    index = (index + 1) % images.length;

    imgTag.style.opacity = "0";

    setTimeout(() => {
      imgTag.src = images[index];
      imgTag.style.opacity = "1";
    }, 300);
  }, 5000);
});