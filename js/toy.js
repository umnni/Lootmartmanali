// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// ===============================
// PRODUCT IMAGE GALLERY
// ===============================

document.querySelectorAll(".product-card").forEach((card) => {

  // Get all images from data-images
  const imageData = card.getAttribute("data-images");

  if (!imageData) return;

  const images = imageData
    .split(",")
    .map((img) => img.trim())
    .filter((img) => img !== "");

  // Main image
  const mainImg = card.querySelector(".main-product-img");

  // Thumbnail container
  const thumbsBox = card.querySelector(".product-thumbs");

  if (!mainImg || !thumbsBox || images.length === 0) return;

  // Set first image
  mainImg.src = images[0];

  // Clear old thumbnails
  thumbsBox.innerHTML = "";

  // Create thumbnails
  images.forEach((imgSrc, index) => {

    const thumb = document.createElement("img");

    thumb.src = imgSrc;

    thumb.alt = "Product Image";

    thumb.className =
      "w-20 h-20 rounded-2xl object-cover border-2 border-slate-200 cursor-pointer shrink-0 bg-white p-1 transition duration-300 hover:scale-105";

    // Active thumbnail
    if (index === 0) {
      thumb.classList.add("border-lootOrange");
    }

    // Click event
    thumb.addEventListener("click", () => {

      // Change main image
      mainImg.src = imgSrc;

      // Remove active border from all
      thumbsBox.querySelectorAll("img").forEach((item) => {
        item.classList.remove("border-lootOrange");
      });

      // Add active border
      thumb.classList.add("border-lootOrange");
    });

    // Add thumbnail
    thumbsBox.appendChild(thumb);

  });

});

// ===============================
// CART
// ===============================

let cart = 0;

function addToCart() {

  cart++;

  const cartCount = document.getElementById("cartCount");

  if (cartCount) {
    cartCount.innerText = cart;
  }

  alert("Product added to cart!");

}