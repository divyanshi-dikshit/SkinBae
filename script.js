const products = [
  {
    id: 1,
    name: "Glow Radiance Serum",
    price: 549,
    skinType: "dry",
    description: "A hydrating serum that illuminates and nourishes dry skin.",
    ingredients: "Hyaluronic Acid, Vitamin C, Aloe Vera",
    image: "https://www.glowup.co.in/cdn/shop/files/Illuminance-Serum-Front.jpg?v=1718712167&width=1946?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Matte Control Moisturizer",
    price: 399,
    skinType: "oily",
    description: "Lightweight moisturizer that controls oil and reduces shine.",
    ingredients: "Niacinamide, Green Tea Extract, Zinc",
    image: "https://cdn.salla.sa/nGgdb/d2969cd6-768f-4395-adcf-0c533bd0922f-1000x1000-D6En3iYmI0xQdAMg7fV7F5uXIltvB9xMogX8XylC.png?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Blemish Clearing Gel",
    price: 239,
    skinType: "acne",
    description: "Targets acne-prone skin to reduce redness and breakouts.",
    ingredients: "Salicylic Acid, Tea Tree Oil, Chamomile",
    image: "https://img.tatacliq.com/images/i18//437Wx649H/MP000000022833315_437Wx649H_202407061018403.jpeg?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Balance Face Cream",
    price: 399,
    skinType: "combination",
    description: "Balances oily and dry zones for a smooth complexion.",
    ingredients: "Shea Butter, Jojoba Oil, Vitamin E",
    image: "https://m.media-amazon.com/images/I/51-2JUZE9jL._AC_UF1000,1000_QL80_.jpg?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Hydrating Face Mist",
    price: 349,
    skinType: "dry",
    description: "Refreshing mist to hydrate and soothe dry skin throughout the day.",
    ingredients: "Rose Water, Glycerin, Witch Hazel",
    image: "https://m.media-amazon.com/images/I/61itBdgD-ML.jpg?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Oil Control Face Wash",
    price: 249,
    skinType: "oily",
    description: "Gentle face wash that removes excess oil and impurities.",
    ingredients: "Charcoal, Aloe Vera, Salicylic Acid",
    image: "https://images.mamaearth.in/catalog/product/1/a/1a_white_bg.jpg?format=auto&height=600?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 7,
    name: "Acne Spot Treatment",
    price: 499,
    skinType: "acne",
    description: "Fast-acting treatment to reduce the size of pimples overnight.",
    ingredients: "Benzoyl Peroxide, Sulfur, Witch Hazel",
    image: "https://thesolvedskin.com/cdn/shop/files/1_f6dafceb-3504-47c0-8cdf-fb6689a45984.webp?v=1774621535&width=900?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "Revitalizing Night Cream",
    price: 699,
    skinType: "combination",
    description: "Nourishes skin overnight to restore balance and glow.",
    ingredients: "Retinol, Shea Butter, Vitamin E",
    image: "https://m.media-amazon.com/images/I/61Yy77RgEyL._AC_UF350,350_QL80_.jpg?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    name: "Gentle Cleansing Balm",
    price: 499,
    skinType: "dry",
    description: "Dissolves makeup and impurities leaving skin soft and hydrated.",
    ingredients: "Coconut Oil, Jojoba Oil, Chamomile",
    image: "https://m.media-amazon.com/images/I/614SsaxxLDL._AC_UF1000,1000_QL80_.jpg?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    name: "Purifying Clay Mask",
    price: 999,
    skinType: "oily",
    description: "Absorbs impurities and tightens pores for a matte finish.",
    ingredients: "Kaolin Clay, Bentonite, Tea Tree Oil",
    image: "https://m.media-amazon.com/images/I/61MnHuFviqL._AC_UF1000,1000_QL80_.jpg?auto=format&fit=crop&w=500&q=80",
  },
  {
  id: 11,
  name: "Vitamin-C Brightening Serum",
  price: 699,
  skinType: "dry",
  description: "Boosts radiance and evens out dull skin tone.",
  ingredients: "Vitamin C, Ferulic Acid, Hyaluronic Acid",
  image: "https://www.themancompany.com/cdn/shop/files/1_ea35f594-c4e7-4625-aef8-a88ae96ecda7.png?v=1775563437?auto=format&fit=crop&w=500&q=80",
},
{
  id: 12,
  name: "Oil-Free Sunscreen SPF 50 PA+++",
  price:369,
  skinType: "oily",
  description: "Lightweight sunscreen that protects without clogging pores.",
  ingredients: "Zinc Oxide, Niacinamide, Aloe Vera",
  image: "https://images-static.nykaa.com/media/catalog/product/8/e/8eff0baDRSHE00000073_04.jpg?tr=w-500?auto=format&fit=crop&w=500&q=80",
},
{
  id: 13,
  name: "Soothing Aloe Gel",
  price: 279,
  skinType: "acne",
  description: "Calms irritated skin and reduces redness instantly.",
  ingredients: "Aloe Vera, Cucumber Extract, Chamomile",
  image: "https://m.media-amazon.com/images/I/81l8Nyh8mtL._AC_UF1000,1000_QL80_.jpg?auto=format&fit=crop&w=500&q=80",
},
{
  id: 14,
  name: "Daily Hydration Cream",
  price: 199,
  skinType: "combination",
  description: "Maintains moisture balance without heaviness.",
  ingredients: "Glycerin, Ceramides, Vitamin E",
  image: "https://skininspired.in/cdn/shop/files/CeramideMoisturizer-02.webp?v=1774446561?auto=format&fit=crop&w=500&q=80",
},
{
  id: 15,
  name: "Gentle Exfoliating Scrub",
  price: 499,
  skinType: "oily",
  description: "Removes dead skin cells and unclogs pores.",
  ingredients: "Walnut Shell, Glycolic Acid, Aloe Vera",
  image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQaIfQDNx4-eNRdigU6p8FaRSfFiPwSlF0UuCEwRtsPmLIYICCVIBARFqQIjiwTN_ynxhnvXb4blPzijrKf4FrUXjQ8UAD8y-dclII-6WQeJ-wunB6gk-p65m36SBBfnURxmNQm0ltDtaY&usqp=CAc?auto=format&fit=crop&w=500&q=80",
},
{
  id: 16,
  name: "Hydra Repair Mask",
  price: 549,
  skinType: "dry",
  description: "Deep hydration mask for soft and plump skin.",
  ingredients: "Hyaluronic Acid, Shea Butter, Honey",
  image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ6YCnM8F0ULkUHb6wdJ4OqBsm0M-jZsPL7E4otJtINtoOLDlK9cmhW71TLiVaMAdguZJdK2qZzMzRnF_yedK4Ft9FPoQLb-V-Qyg8ZA8p1BqGCEDxg1oqSUg&usqp=CAc?auto=format&fit=crop&w=500&q=80",
},
{
  id: 17,
  name: "Anti-Acne Face Serum",
  price: 389,
  skinType: "acne",
  description: "Reduces breakouts and controls excess oil.",
  ingredients: "Salicylic Acid, Niacinamide, Tea Tree Oil",
  image: "https://www.dotandkey.com/cdn/shop/files/Artboard1copy_c9675994-8c27-4894-9bea-a1955aaa404f.jpg?v=1754039836?auto=format&fit=crop&w=500&q=80",
},
{
  id: 18,
  name: "Balancing Toner",
  price: 239,
  skinType: "combination",
  description: "Refines pores and balances skin pH.",
  ingredients: "Rose Water, Witch Hazel, Niacinamide",
  image: "https://m.media-amazon.com/images/I/71Zu-+vy9FL._AC_UF1000,1000_QL80_.jpg?auto=format&fit=crop&w=500&q=80",
},
{
  id: 19,
  name: "Under Eye Cream",
  price: 429,
  skinType: "dry",
  description: "Reduces dark circles and fine lines.",
  ingredients: "Caffeine, Peptides, Vitamin E",
  image: "https://m.media-amazon.com/images/I/51PpJZ9MNfL.jpg?auto=format&fit=crop&w=500&q=80",
},
{
  id: 20,
  name: "Detox Charcoal Mask",
  price: 189,
  skinType: "oily",
  description: "Draws out impurities and detoxifies the skin.",
  ingredients: "Activated Charcoal, Clay, Tea Tree Oil",
  image: "https://images-static.nykaa.com/media/catalog/product/8/6/860994cJOYXX00000024_4.jpg?tr=w-500?auto=format&fit=crop&w=500&q=80",
}
];

let cart = {};
let currentFilter = "all";

const productsGrid = document.getElementById("products-grid");
const cartCount = document.getElementById("cart-count");
const cartSidebar = document.getElementById("cart-sidebar");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalElem = document.getElementById("cart-total");
const cartIcon = document.getElementById("cart-icon");
const cartCloseBtn = document.getElementById("cart-close-btn");
const checkoutBtn = document.getElementById("checkout-btn");
const toast = document.getElementById("toast");

const searchInput = document.getElementById("search-input");
const categoryButtons = document.querySelectorAll(".category-btn");
const shopNowBtn = document.getElementById("shop-now-btn");

const productModal = document.getElementById("product-modal");
const modalCloseBtn = document.getElementById("modal-close");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalIngredients = document.getElementById("modal-ingredients");
const modalSkinType = document.getElementById("modal-skin-type");
const modalPrice = document.getElementById("modal-price");
const modalAddToCartBtn = document.getElementById("modal-add-to-cart");

const skinQuizForm = document.getElementById("skin-quiz");
const quizResults = document.getElementById("quiz-results");

function saveCart() {
  localStorage.setItem("skini-cart", JSON.stringify(cart));
}

function loadCart() {
  const saved = localStorage.getItem("skiniq-cart");
  cart = saved ? JSON.parse(saved) : {};
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

function formatPrice(price) {
  return "₹" + price.toLocaleString("en-IN");
}

function renderProducts(filter = "all", searchTerm = "") {
  productsGrid.innerHTML = "";
  const filtered = products.filter((p) => {
    const matchesFilter = filter === "all" || p.skinType === filter;
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    productsGrid.innerHTML =
      '<p style="text-align:center;color:#a45e56;">No products found.</p>';
    return;
  }

  filtered.forEach((p) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.tabIndex = 0;
    card.setAttribute("aria-label", `${p.name}, ${formatPrice(p.price)}`);

    card.innerHTML = `
      <div class="product-img-container">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
      </div>
      <h4 class="product-name">${p.name}</h4>
      <p class="product-price">${formatPrice(p.price)}</p>
      <button class="add-cart-btn" aria-label="Add ${p.name} to cart">Add to Cart</button>
    `;

    card.addEventListener("click", (e) => {
      if (e.target.classList.contains("add-cart-btn")) return;
      openProductModal(p.id);
    });
    card.addEventListener("keypress", (e) => {
      if ((e.key === "Enter" || e.key === " ") && !e.target.classList.contains("add-cart-btn")) {
        e.preventDefault();
        openProductModal(p.id);
      }
    });

    const addBtn = card.querySelector(".add-cart-btn");
    addBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      addToCart(p.id);
    });

    productsGrid.appendChild(card);
  });
}

function openProductModal(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  modalImg.src = product.image;
  modalImg.alt = product.name;
  modalTitle.textContent = product.name;
  modalDescription.textContent = product.description;
  modalIngredients.textContent = product.ingredients;
  modalSkinType.textContent = capitalize(product.skinType);
  modalPrice.textContent = `${formatPrice(product.price)}`;
  modalAddToCartBtn.dataset.productId = product.id;

  productModal.setAttribute("aria-hidden", "false");
  productModal.classList.add("show");
  modalAddToCartBtn.focus();
}

function closeProductModal() {
  productModal.setAttribute("aria-hidden", "true");
  productModal.classList.remove("show");
  modalAddToCartBtn.dataset.productId = "";
  modalImg.src = "";
}

function capitalize(str) {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1);
}

function addToCart(productId) {
  if (!cart[productId]) {
    cart[productId] = 1;
  } else {
    cart[productId]++;
  }
  saveCart();
  updateCartUI();
  showToast("Added to cart");
}

function removeFromCart(productId) {
  delete cart[productId];
  saveCart();
  updateCartUI();
}

function updateCartQuantity(productId, qty) {
  if (qty < 1) return;
  cart[productId] = qty;
  saveCart();
  updateCartUI();
}

function calculateTotal() {
  return Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = products.find((p) => p.id === +id);
    if (!product) return sum;
    return sum + product.price * qty;
  }, 0);
}

function updateCartUI() {
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  cartCount.textContent = count;
  if (count === 0) cartCount.style.display = "none";
  else cartCount.style.display = "inline-block";

  cartItemsContainer.innerHTML = "";
  if (count === 0) {
    cartItemsContainer.innerHTML =
      '<p style="text-align:center;color:#a45e56;">Your cart is empty.</p>';
    checkoutBtn.disabled = true;
    checkoutBtn.classList.remove("enabled");
  } else {
    checkoutBtn.disabled = false;
    checkoutBtn.classList.add("enabled");
    Object.entries(cart).forEach(([id, qty]) => {
      const product = products.find((p) => p.id === +id);
      if (!product) return;

      const itemDiv = document.createElement("div");
      itemDiv.className = "cart-item";
      itemDiv.setAttribute("role", "listitem");
      itemDiv.setAttribute("tabindex", "0");
      itemDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <div class="cart-item-info">
          <h5>${product.name}</h5>
          <p>${formatPrice(product.price)} x ${qty} = ${formatPrice(product.price * qty)}</p>
        </div>
        <div class="cart-item-controls">
          <button class="cart-btn decrease" aria-label="Decrease quantity of ${product.name}">−</button>
          <span class="cart-qty" aria-live="polite" aria-atomic="true">${qty}</span>
          <button class="cart-btn increase" aria-label="Increase quantity of ${product.name}">+</button>
          <button class="cart-btn remove" aria-label="Remove ${product.name} from cart" title="Remove">×</button>
        </div>
      `;

      const decBtn = itemDiv.querySelector(".decrease");
      const incBtn = itemDiv.querySelector(".increase");
      const remBtn = itemDiv.querySelector(".remove");

      decBtn.addEventListener("click", () => {
        if (cart[id] > 1) updateCartQuantity(+id, cart[id] - 1);
        else removeFromCart(+id);
      });
      incBtn.addEventListener("click", () => updateCartQuantity(+id, cart[id] + 1));
      remBtn.addEventListener("click", () => removeFromCart(+id));

      cartItemsContainer.appendChild(itemDiv);
    });
  }

 cartTotalElem.textContent = `${formatPrice(calculateTotal())}`;
}

function toggleCartSidebar(show) {
  if (show) {
    cartSidebar.setAttribute("aria-hidden", "false");
    cartSidebar.focus();
  } else {
    cartSidebar.setAttribute("aria-hidden", "true");
    cartIcon.focus();
  }
}

function processQuizAnswers(formData) {
  const responses = [formData.get("q1"), formData.get("q2"), formData.get("q3")];
  const countMap = {};
  responses.forEach((skin) => {
    if (!countMap[skin]) countMap[skin] = 0;
    countMap[skin]++;
  });

  let recommendedSkinType = "combination";
  let maxCount = 0;
  for (const [key, val] of Object.entries(countMap)) {
    if (val > maxCount) {
      maxCount = val;
      recommendedSkinType = key;
    }
  }

  const recProducts = products.filter((p) => p.skinType === recommendedSkinType);

  if (recProducts.length === 0) {
    quizResults.innerHTML = `<p>No recommendations found. Please try different answers.</p>`;
    return;
  }

 quizResults.innerHTML = `
  <p>Based on your answers, we recommend products for <strong>${capitalize(recommendedSkinType)} skin</strong>:</p>
  <div class="quiz-products-grid"></div>
`;

const grid = quizResults.querySelector(".quiz-products-grid");

recProducts.forEach((p) => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <div class="product-img-container">
      <img src="${p.image}" alt="${p.name}" />
    </div>
    <h4>${p.name}</h4>
    <p>${formatPrice(p.price)}</p>
    <button class="add-cart-btn">Add to Cart</button>
  `;

  card.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") return;
    openProductModal(p.id);
  });

  card.querySelector("button").addEventListener("click", (e) => {
    e.stopPropagation();
    addToCart(p.id);
  });

  grid.appendChild(card);
});

  const recItems = quizResults.querySelectorAll(".quiz-product");
  recItems.forEach((el) => {
    el.addEventListener("click", () => {
      const id = +el.dataset.id;
      openProductModal(id);
      window.scrollTo({top:0,behavior:"smooth"});
    });
    el.addEventListener("keypress", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const id = +el.dataset.id;
        openProductModal(id);
      }
    });
  });
}

function setupEventListeners() {
  cartIcon.addEventListener("click", () => toggleCartSidebar(true));
  cartIcon.addEventListener("keypress", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleCartSidebar(true);
    }
  });

  cartCloseBtn.addEventListener("click", () => toggleCartSidebar(false));

  modalCloseBtn.addEventListener("click", closeProductModal);
  productModal.addEventListener("click", (e) => {
    if (e.target === productModal) closeProductModal();
  });

  modalAddToCartBtn.addEventListener("click", () => {
    const id = +modalAddToCartBtn.dataset.productId;
    if (id) {
      addToCart(id);
    }
  });

  searchInput.addEventListener("input", () => {
    const term = searchInput.value.trim();
    renderProducts(currentFilter, term);
  });

  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("active")) return;
      categoryButtons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      currentFilter = btn.dataset.filter || "all";
      const term = searchInput.value.trim();
      renderProducts(currentFilter, term);
    });
  });

  skinQuizForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(skinQuizForm);
    if (
      !formData.get("q1") ||
      !formData.get("q2") ||
      !formData.get("q3")
    ) {
      alert("Please answer all questions.");
      return;
    }
    processQuizAnswers(formData);
  });

  shopNowBtn.addEventListener("click", () => {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (productModal.classList.contains("show")) {
        closeProductModal();
      }
      if (cartSidebar.getAttribute("aria-hidden") === "false") {
        toggleCartSidebar(false);
      }
    }
  });
}

function init() {
  loadCart();
  renderProducts();
  updateCartUI();
  setupEventListeners();
}

init();
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("skin-test-btn");
  const section = document.getElementById("bareface");

  if (!btn) {
    console.log("Button not found ❌");
    return;
  }

  if (!section) {
    console.log("Bareface section not found ❌");
    return;
  }

  btn.addEventListener("click", () => {
    section.scrollIntoView({ behavior: "smooth" });
  });
});
