// js/glasses.js

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
    .filter(Boolean);

  const mainImg = card.querySelector(".main-product-img");
  const thumbsBox = card.querySelector(".product-thumbs");

  if (!mainImg || !thumbsBox || images.length === 0) return;

  mainImg.src = images[0];
  thumbsBox.innerHTML = "";

  images.forEach((imgSrc, index) => {
    const thumb = document.createElement("img");
    thumb.src = imgSrc;
    thumb.alt = "Sunglasses Product Image";

    thumb.className =
      "w-20 h-20 rounded-2xl object-contain border-2 border-slate-200 cursor-pointer shrink-0 bg-white p-2 transition duration-300 hover:scale-105";

    if (index === 0) {
      thumb.classList.remove("border-slate-200");
      thumb.classList.add("border-lootOrange");
    }

    thumb.addEventListener("click", () => {
      mainImg.src = imgSrc;

      thumbsBox.querySelectorAll("img").forEach((item) => {
        item.classList.remove("border-lootOrange");
        item.classList.add("border-slate-200");
      });

      thumb.classList.remove("border-slate-200");
      thumb.classList.add("border-lootOrange");
    });

    thumbsBox.appendChild(thumb);
  });
});

// ===============================
// SEARCH PRODUCTS
// ===============================
const searchInputs = [
  document.getElementById("searchInput"),
  document.getElementById("mobileSearchInput"),
];

searchInputs.forEach((input) => {
  if (!input) return;

  input.addEventListener("input", () => {
    const searchValue = input.value.toLowerCase().trim();

    document.querySelectorAll(".product-card").forEach((card) => {
      const productText = card.innerText.toLowerCase();

      if (productText.includes(searchValue)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});


// ===============================
// SMOOTH SCROLL
// ===============================
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});