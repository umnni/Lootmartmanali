// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// CATEGORY STRIP
const categories = [
  "Bags",
  "Boots",
  "Bottles",
  "Diaries",
  "Glasses",
  "Toys",
  "Hoodies",
  "Watches",
  "Tool Kits",
  "Home Furnishing"
];

const categoryStrip = document.getElementById("categoryStrip");

if (categoryStrip) {
  categories.forEach((category) => {
    const button = document.createElement("button");

    button.className =
      "px-5 py-3 rounded-full border border-slate-200 bg-white hover:bg-lootBlue hover:text-white transition whitespace-nowrap font-semibold";

    button.innerText = category;

    categoryStrip.appendChild(button);
  });
}

// SEARCH FILTER
const searchInput = document.getElementById("searchInput");
const mobileSearchInput = document.getElementById("mobileSearchInput");

function handleSearch(value) {
  const cards = document.querySelectorAll(".product-card, .category-card");

  cards.forEach((card) => {
    const text = card.innerText.toLowerCase();

    if (text.includes(value.toLowerCase())) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    handleSearch(e.target.value);
  });
}

if (mobileSearchInput) {
  mobileSearchInput.addEventListener("input", (e) => {
    handleSearch(e.target.value);
  });
}

// MODAL
const messageModal = document.getElementById("messageModal");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");
const modalOkBtn = document.getElementById("modalOkBtn");

function showComingSoon(title, link) {
  if (!messageModal || !modalText) return;

  modalText.innerHTML = `
    <span class="font-bold text-lootBlue">${title}</span> page is coming soon.
    <br><br>
    We are updating products and collections for better shopping experience.
  `;

  messageModal.classList.remove("hidden");
}

if (closeModal) {
  closeModal.addEventListener("click", () => {
    messageModal.classList.add("hidden");
  });
}

if (modalOkBtn) {
  modalOkBtn.addEventListener("click", () => {
    messageModal.classList.add("hidden");
  });
}

window.addEventListener("click", (e) => {
  if (e.target === messageModal) {
    messageModal.classList.add("hidden");
  }
});

// CART COUNT DEMO
const cartCount = document.getElementById("cartCount");

if (cartCount) {
  let count = localStorage.getItem("lootmart-cart-count") || 0;
  cartCount.innerText = count;
}

// LOGIN TEXT CHANGE DEMO
const loginLink = document.getElementById("loginLink");
const mobileLoginLink = document.getElementById("mobileLoginLink");

const isLoggedIn = localStorage.getItem("lootmart-user");

if (isLoggedIn) {
  if (loginLink) loginLink.innerText = "My Account";
  if (mobileLoginLink) mobileLoginLink.innerText = "My Account";
}