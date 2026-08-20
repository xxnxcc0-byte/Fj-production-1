const state = {
  products: getProducts().filter(product => product.available !== false),
  search: "",
  category: "all",
  type: "all",
  price: "all"
};

const els = {
  navLinks: document.getElementById("navLinks"),
  menuToggle: document.getElementById("menuToggle"),
  productGrid: document.getElementById("productGrid"),
  productCount: document.getElementById("productCount"),
  searchInput: document.getElementById("searchInput"),
  categoryFilter: document.getElementById("categoryFilter"),
  typeFilter: document.getElementById("typeFilter"),
  priceFilter: document.getElementById("priceFilter"),
  clearFilters: document.getElementById("clearFilters"),
  categoryChips: document.getElementById("categoryChips"),
  ownerGallery: document.getElementById("ownerGallery")
};

function init() {
  document.getElementById("year").textContent = new Date().getFullYear();
  initNav();
  initWhatsappLinks();
  populateFilters();
  renderCategoryChips();
  bindFilters();
  renderProducts();
  renderOwnerGallery();
  initReveal();
}

function initNav() {
  if (!els.menuToggle || !els.navLinks) return;
  els.menuToggle.addEventListener("click", () => {
    const open = els.navLinks.classList.toggle("open");
    els.menuToggle.setAttribute("aria-expanded", String(open));
  });
  els.navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      els.navLinks.classList.remove("open");
      els.menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initWhatsappLinks() {
  const url = createWhatsappUrl();
  ["headerWhatsapp", "heroWhatsapp", "contactWhatsapp", "footerWhatsapp", "floatWhatsapp"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = url;
  });
}

function populateFilters() {
  getCategories(state.products).forEach(category => {
    els.categoryFilter.insertAdjacentHTML("beforeend", `<option value="${safeText(category)}">${safeText(category)}</option>`);
  });
  getTypes(state.products).forEach(type => {
    els.typeFilter.insertAdjacentHTML("beforeend", `<option value="${safeText(type)}">${safeText(type)}</option>`);
  });
}

function renderCategoryChips() {
  const categories = getCategories(state.products);
  els.categoryChips.innerHTML = [
    `<button class="category-chip active" type="button" data-category="all">All Products</button>`,
    ...categories.map(category => `<button class="category-chip" type="button" data-category="${safeText(category)}">${safeText(category)}</button>`)
  ].join("");

  els.categoryChips.addEventListener("click", event => {
    const chip = event.target.closest(".category-chip");
    if (!chip) return;
    state.category = chip.dataset.category;
    els.categoryFilter.value = state.category;
    els.categoryChips.querySelectorAll(".category-chip").forEach(btn => btn.classList.toggle("active", btn === chip));
    renderProducts();
    document.getElementById("shop").scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function bindFilters() {
  els.searchInput.addEventListener("input", event => {
    state.search = event.target.value.trim().toLowerCase();
    renderProducts();
  });
  els.categoryFilter.addEventListener("change", event => {
    state.category = event.target.value;
    syncCategoryChips();
    renderProducts();
  });
  els.typeFilter.addEventListener("change", event => {
    state.type = event.target.value;
    renderProducts();
  });
  els.priceFilter.addEventListener("change", event => {
    state.price = event.target.value;
    renderProducts();
  });
  els.clearFilters.addEventListener("click", () => {
    state.search = "";
    state.category = "all";
    state.type = "all";
    state.price = "all";
    els.searchInput.value = "";
    els.categoryFilter.value = "all";
    els.typeFilter.value = "all";
    els.priceFilter.value = "all";
    syncCategoryChips();
    renderProducts();
  });
}

function syncCategoryChips() {
  els.categoryChips.querySelectorAll(".category-chip").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === state.category);
  });
}

function filteredProducts() {
  const [min, max] = state.price === "all" ? [0, Infinity] : state.price.split("-").map(Number);
  return state.products.filter(product => {
    const searchable = [product.name, product.category, product.type, product.price, product.description].join(" ").toLowerCase();
    const matchesSearch = !state.search || searchable.includes(state.search);
    const matchesCategory = state.category === "all" || product.category === state.category;
    const matchesType = state.type === "all" || product.type === state.type;
    const matchesPrice = product.minPrice >= min && product.minPrice <= max;
    return matchesSearch && matchesCategory && matchesType && matchesPrice;
  });
}

function renderProducts() {
  const products = filteredProducts();
  els.productCount.innerHTML = `Showing <strong>${products.length}</strong> of <strong>${state.products.length}</strong> products`;
  if (!products.length) {
    els.productGrid.innerHTML = `<div class="empty-state"><h3>No products found</h3><p>Try clearing filters or searching another product name.</p></div>`;
    return;
  }
  els.productGrid.innerHTML = products.map((product, index) => productCard(product, index)).join("");
}

function productCard(product, index) {
  const firstVariant = product.variants?.[0];
  const productPrice = firstVariant?.messagePrice || product.price;
  const detailUrl = `product.html?id=${encodeURIComponent(product.id)}`;
  const delay = Math.min(index * 45, 360);
  return `
    <article class="product-card" style="animation-delay:${delay}ms">
      <a class="product-image-wrap" href="${detailUrl}" aria-label="View ${safeText(product.name)} details">
        <span class="badge">${safeText(product.category)}</span>
        <img src="${safeText(product.image)}" alt="${safeText(product.name)}" loading="lazy" />
      </a>
      <div class="card-body">
        <div class="product-meta"><span>${safeText(product.type)}</span><span>${safeText(product.available === false ? "Unavailable" : "Available")}</span></div>
        <h3><a href="${detailUrl}">${safeText(product.name)}</a></h3>
        <div class="product-price">${safeText(product.price)}</div>
        <p class="product-desc">${safeText(product.description)}</p>
        <div class="card-controls">
          <input class="qty-input" type="number" min="1" max="99" value="1" aria-label="Quantity for ${safeText(product.name)}" data-qty-for="${safeText(product.id)}" />
          <a class="btn btn-primary btn-small" href="${createWhatsappUrl({ productName: product.name, productPrice, quantity: 1, variant: firstVariant?.label || "" })}" target="_blank" rel="noopener" data-order-product="${safeText(product.id)}">Order on WhatsApp</a>
        </div>
        <div class="card-actions">
          <a class="btn btn-outline btn-small" href="${detailUrl}">View Details</a>
        </div>
      </div>
    </article>`;
}

document.addEventListener("input", event => {
  const qtyInput = event.target.closest("[data-qty-for]");
  if (!qtyInput) return;
  const id = qtyInput.dataset.qtyFor;
  const product = productById(id, state.products);
  const orderLink = document.querySelector(`[data-order-product="${CSS.escape(id)}"]`);
  if (!product || !orderLink) return;
  const qty = Math.max(1, Number(qtyInput.value || 1));
  const firstVariant = product.variants?.[0];
  orderLink.href = createWhatsappUrl({
    productName: product.name,
    productPrice: firstVariant?.messagePrice || product.price,
    quantity: qty,
    variant: firstVariant?.label || ""
  });
});

function renderOwnerGallery() {
  const images = OWNER_GALLERY_IMAGES;
  els.ownerGallery.innerHTML = images.map((src, index) => `
    <a class="gallery-item" href="${safeText(src)}" target="_blank" rel="noopener" aria-label="Open provided product image ${index + 1}">
      <img src="${safeText(src)}" alt="FJ Production owner-provided product image ${index + 1}" loading="lazy" />
    </a>
  `).join("");
}

function initReveal() {
  const revealItems = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach(item => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
}

init();
