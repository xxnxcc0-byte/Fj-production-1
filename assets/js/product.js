const products = getProducts().filter(product => product.available !== false);
const params = new URLSearchParams(window.location.search);
const product = productById(params.get("id"), products) || products[0];

function initProductPage() {
  document.getElementById("year").textContent = new Date().getFullYear();
  initNav();
  initWhatsappLinks();
  if (!product) {
    document.getElementById("productDetail").innerHTML = `<div class="container"><div class="empty-state"><h1>Product not found</h1><p>Please return to the shop and choose a product.</p><a class="btn btn-primary" href="index.html#shop">Back to Shop</a></div></div>`;
    return;
  }
  document.title = `${product.name} | FJ Production`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", `${product.name} - ${product.price}. Order from FJ Production through WhatsApp.`);
  document.getElementById("crumbName").textContent = product.name;
  renderProductDetail(product);
  renderRelated(product);
}

function initNav() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (!menuToggle || !navLinks) return;
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
}

function initWhatsappLinks() {
  const url = createWhatsappUrl();
  ["headerWhatsapp", "footerWhatsapp", "floatWhatsapp"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = url;
  });
}

function renderProductDetail(product) {
  const gallery = uniqueImages([product.image, ...(product.gallery || [])]);
  const variantOptions = (product.variants || []).map((variant, index) => `<option value="${index}">${safeText(variant.label)} — ${safeText(variant.price)}</option>`).join("");
  const firstVariant = product.variants?.[0];
  const firstMessagePrice = firstVariant?.messagePrice || product.price;

  document.getElementById("productDetail").innerHTML = `
    <div class="container detail-layout">
      <div class="detail-gallery">
        <img class="detail-main-image" id="mainProductImage" src="${safeText(gallery[0])}" alt="${safeText(product.name)} large product image" />
        <div class="thumb-row" id="thumbRow">
          ${gallery.map((src, index) => `<button class="thumb-btn ${index === 0 ? "active" : ""}" type="button" data-src="${safeText(src)}" aria-label="View product image ${index + 1}"><img src="${safeText(src)}" alt="${safeText(product.name)} thumbnail ${index + 1}" loading="lazy" /></button>`).join("")}
        </div>
      </div>

      <article class="detail-info">
        <span class="eyebrow">${safeText(product.category)}</span>
        <h1>${safeText(product.name)}</h1>
        <div class="detail-price" id="detailPrice">${safeText(product.price)}</div>
        <p class="detail-description">${safeText(product.description)}</p>

        <div class="detail-controls">
          <div class="field">
            <label for="variantSelect">Available size / option</label>
            <select id="variantSelect">${variantOptions}</select>
          </div>
          <div class="field">
            <label for="quantityInput">Quantity</label>
            <input id="quantityInput" class="qty-input" type="number" min="1" max="99" value="1" />
          </div>
        </div>

        <a class="btn btn-primary btn-block" id="detailOrderButton" href="${createWhatsappUrl({ productName: product.name, productPrice: firstMessagePrice, quantity: 1, variant: firstVariant?.label || "" })}" target="_blank" rel="noopener">ORDER ON WHATSAPP</a>

        <div class="info-panel">
          <h2>Key features</h2>
          <ul>${(product.features || []).map(item => `<li>${safeText(item)}</li>`).join("")}</ul>
        </div>

        <div class="info-panel">
          <h2>How to use</h2>
          <ol>${(product.howToUse || []).map(item => `<li>${safeText(item)}</li>`).join("")}</ol>
        </div>
      </article>
    </div>`;

  document.getElementById("thumbRow").addEventListener("click", event => {
    const button = event.target.closest(".thumb-btn");
    if (!button) return;
    document.getElementById("mainProductImage").src = button.dataset.src;
    document.querySelectorAll(".thumb-btn").forEach(btn => btn.classList.toggle("active", btn === button));
  });

  const variantSelect = document.getElementById("variantSelect");
  const quantityInput = document.getElementById("quantityInput");
  const orderButton = document.getElementById("detailOrderButton");

  function updateOrderLink() {
    const selected = product.variants?.[Number(variantSelect.value)] || product.variants?.[0];
    const quantity = Math.max(1, Number(quantityInput.value || 1));
    const messagePrice = selected?.messagePrice || product.price;
    orderButton.href = createWhatsappUrl({ productName: product.name, productPrice: messagePrice, quantity, variant: selected?.label || "" });
  }

  variantSelect.addEventListener("change", updateOrderLink);
  quantityInput.addEventListener("input", updateOrderLink);
}

function renderRelated(current) {
  const related = products
    .filter(item => item.id !== current.id && item.category === current.category)
    .slice(0, 4);
  document.getElementById("relatedGrid").innerHTML = related.length ? related.map((product, index) => relatedCard(product, index)).join("") : `<div class="empty-state"><p>No related products in this category yet.</p></div>`;
}

function relatedCard(product, index) {
  const detailUrl = `product.html?id=${encodeURIComponent(product.id)}`;
  const firstVariant = product.variants?.[0];
  const delay = Math.min(index * 45, 180);
  return `
    <article class="product-card" style="animation-delay:${delay}ms">
      <a class="product-image-wrap" href="${detailUrl}">
        <span class="badge">${safeText(product.category)}</span>
        <img src="${safeText(product.image)}" alt="${safeText(product.name)}" loading="lazy" />
      </a>
      <div class="card-body">
        <div class="product-meta"><span>${safeText(product.type)}</span><span>Available</span></div>
        <h3><a href="${detailUrl}">${safeText(product.name)}</a></h3>
        <div class="product-price">${safeText(product.price)}</div>
        <p class="product-desc">${safeText(product.description)}</p>
        <a class="btn btn-outline btn-small" href="${detailUrl}">View Details</a>
        <a class="btn btn-primary btn-small" href="${createWhatsappUrl({ productName: product.name, productPrice: firstVariant?.messagePrice || product.price, quantity: 1, variant: firstVariant?.label || "" })}" target="_blank" rel="noopener">Order on WhatsApp</a>
      </div>
    </article>`;
}

function uniqueImages(images) {
  return [...new Set(images.filter(Boolean))];
}

initProductPage();
