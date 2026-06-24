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
    thumb.alt = "Hoodie Image";

    thumb.className =
      "w-20 h-20 rounded-2xl object-contain border-2 border-slate-200 cursor-pointer shrink-0 bg-white p-1 transition duration-300 hover:scale-105";

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
// SEARCH PRODUCT FILTER
// ===============================

function filterProducts(value) {
  const searchValue = value.toLowerCase().trim();

  document.querySelectorAll(".product-card").forEach((card) => {
    const productText = card.innerText.toLowerCase();

    if (productText.includes(searchValue)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

const searchInput = document.getElementById("searchInput");
const mobileSearchInput = document.getElementById("mobileSearchInput");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    filterProducts(searchInput.value);
  });
}

if (mobileSearchInput) {
  mobileSearchInput.addEventListener("input", () => {
    filterProducts(mobileSearchInput.value);
  });
}

// ===============================
// SMOOTH SCROLLING
// ===============================

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId === "#") return;

    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      e.preventDefault();

      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
}); 