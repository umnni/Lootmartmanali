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
  const imageData = card.getAttribute("data-images");

  if (!imageData) return;

  const images = imageData
    .split(",")
    .map((img) => img.trim())
    .filter((img) => img !== "");

  const mainImg = card.querySelector(".main-product-img");
  const thumbsBox = card.querySelector(".product-thumbs");

  if (!mainImg || !thumbsBox || images.length === 0) return;

  mainImg.src = images[0];
  thumbsBox.innerHTML = "";

  images.forEach((imgSrc, index) => {
    const thumb = document.createElement("img");

    thumb.src = imgSrc;
    thumb.alt = "Bag Image";

    thumb.className =
      "product-gallery-thumb w-20 h-20 rounded-2xl object-cover border-2 border-slate-200 cursor-pointer shrink-0 bg-white p-1 transition duration-300 hover:scale-105";

    if (index === 0) {
      thumb.classList.add("border-lootOrange");
    }

    thumb.addEventListener("click", () => {
      mainImg.src = imgSrc;

      thumbsBox.querySelectorAll("img").forEach((item) => {
        item.classList.remove("border-lootOrange");
      });

      thumb.classList.add("border-lootOrange");
    });

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