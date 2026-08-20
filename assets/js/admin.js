let adminProducts = getProducts();
let selectedId = adminProducts[0]?.id || null;

const adminEls = {
  list: document.getElementById("adminProductList"),
  form: document.getElementById("productForm"),
  newBtn: document.getElementById("newProductBtn"),
  resetBtn: document.getElementById("resetBtn"),
  deleteBtn: document.getElementById("deleteBtn"),
  exportBtn: document.getElementById("exportBtn"),
  downloadBtn: document.getElementById("downloadBtn"),
  importBtn: document.getElementById("importBtn"),
  jsonOutput: document.getElementById("jsonOutput"),
  imageUpload: document.getElementById("imageUpload"),
  imagePreview: document.getElementById("imagePreview")
};

function initAdmin() {
  document.getElementById("year").textContent = new Date().getFullYear();
  initNav();
  initWhatsappLinks();
  renderAdminList();
  loadProduct(selectedId);
  bindAdminEvents();
}

function initNav() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (!menuToggle || !navLinks) return;
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
}

function initWhatsappLinks() {
  const url = createWhatsappUrl();
  ["headerWhatsapp", "floatWhatsapp"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = url;
  });
}

function bindAdminEvents() {
  adminEls.list.addEventListener("click", event => {
    const btn = event.target.closest(".admin-product-btn");
    if (!btn) return;
    selectedId = btn.dataset.id;
    renderAdminList();
    loadProduct(selectedId);
  });

  adminEls.newBtn.addEventListener("click", () => {
    selectedId = null;
    adminEls.form.reset();
    setValue("id", "");
    setValue("name", "");
    setValue("category", "Face Wash");
    setValue("type", "Face Care");
    setValue("price", "");
    setValue("minPrice", "");
    setValue("image", "");
    setValue("gallery", "");
    setValue("variants", "");
    setValue("description", "");
    setValue("features", "Owner-provided product image\nOrder directly through WhatsApp");
    setValue("howToUse", "Use as directed on the product label.\nContact FJ Production on WhatsApp for guidance before ordering.");
    setValue("available", "true");
    updatePreview("");
    renderAdminList();
  });

  document.getElementById("name").addEventListener("input", () => {
    if (!selectedId && !getValue("id")) setValue("id", slugify(getValue("name")));
  });

  document.getElementById("image").addEventListener("input", event => updatePreview(event.target.value));

  adminEls.imageUpload.addEventListener("change", event => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setValue("image", reader.result);
      updatePreview(reader.result);
    };
    reader.readAsDataURL(file);
  });

  adminEls.form.addEventListener("submit", event => {
    event.preventDefault();
    saveCurrentProduct();
  });

  adminEls.deleteBtn.addEventListener("click", () => {
    if (!selectedId) return alert("Select a saved product to delete.");
    const product = productById(selectedId, adminProducts);
    if (!confirm(`Delete ${product?.name || "this product"}?`)) return;
    adminProducts = adminProducts.filter(item => item.id !== selectedId);
    saveProducts(adminProducts);
    selectedId = adminProducts[0]?.id || null;
    renderAdminList();
    loadProduct(selectedId);
  });

  adminEls.resetBtn.addEventListener("click", () => {
    if (!confirm("Reset all local product edits and restore default products?")) return;
    resetProducts();
    adminProducts = getProducts();
    selectedId = adminProducts[0]?.id || null;
    renderAdminList();
    loadProduct(selectedId);
    adminEls.jsonOutput.value = "";
  });

  adminEls.exportBtn.addEventListener("click", () => {
    adminEls.jsonOutput.value = JSON.stringify(adminProducts, null, 2);
    adminEls.jsonOutput.focus();
  });

  adminEls.downloadBtn.addEventListener("click", () => {
    const data = adminEls.jsonOutput.value || JSON.stringify(adminProducts, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "fj-production-products.json";
    a.click();
    URL.revokeObjectURL(url);
  });

  adminEls.importBtn.addEventListener("click", () => {
    try {
      const parsed = JSON.parse(adminEls.jsonOutput.value);
      if (!Array.isArray(parsed)) throw new Error("JSON must be an array of products.");
      adminProducts = parsed;
      saveProducts(adminProducts);
      selectedId = adminProducts[0]?.id || null;
      renderAdminList();
      loadProduct(selectedId);
      alert("Product data imported locally.");
    } catch (error) {
      alert(`Import failed: ${error.message}`);
    }
  });
}

function renderAdminList() {
  adminEls.list.innerHTML = adminProducts.map(product => `
    <button type="button" class="admin-product-btn ${product.id === selectedId ? "active" : ""}" data-id="${safeText(product.id)}">
      <strong>${safeText(product.name)}</strong>
      <span>${safeText(product.category)} · ${safeText(product.price)}</span>
    </button>
  `).join("") || `<div class="empty-state"><p>No products yet. Click Add product.</p></div>`;
}

function loadProduct(id) {
  const product = productById(id, adminProducts);
  if (!product) {
    adminEls.form.reset();
    updatePreview("");
    return;
  }
  setValue("name", product.name);
  setValue("id", product.id);
  setValue("category", product.category);
  setValue("type", product.type);
  setValue("price", product.price);
  setValue("minPrice", product.minPrice);
  setValue("available", String(product.available !== false));
  setValue("image", product.image);
  setValue("gallery", (product.gallery || []).join("\n"));
  setValue("variants", (product.variants || []).map(variant => `${variant.label || ""} | ${variant.price || ""} | ${variant.messagePrice || ""}`).join("\n"));
  setValue("description", product.description || "");
  setValue("features", (product.features || []).join("\n"));
  setValue("howToUse", (product.howToUse || []).join("\n"));
  updatePreview(product.image);
}

function saveCurrentProduct() {
  const id = slugify(getValue("id") || getValue("name"));
  if (!id) return alert("Product ID is required.");
  const product = {
    id,
    name: getValue("name"),
    category: getValue("category"),
    type: getValue("type"),
    price: getValue("price"),
    minPrice: Number(getValue("minPrice") || 0),
    variants: parseVariants(getValue("variants"), getValue("price")),
    image: getValue("image"),
    gallery: lines(getValue("gallery")),
    description: getValue("description"),
    features: lines(getValue("features")),
    howToUse: lines(getValue("howToUse")),
    available: getValue("available") === "true"
  };

  const existingIndex = adminProducts.findIndex(item => item.id === selectedId || item.id === id);
  if (existingIndex >= 0) adminProducts[existingIndex] = product;
  else adminProducts.unshift(product);
  selectedId = id;
  saveProducts(adminProducts);
  renderAdminList();
  loadProduct(selectedId);
  adminEls.jsonOutput.value = JSON.stringify(adminProducts, null, 2);
  alert("Product saved locally. Preview the shop to see changes in this browser.");
}

function parseVariants(value, fallbackPrice) {
  const parsed = lines(value).map(line => {
    const [label = "", price = "", messagePrice = ""] = line.split("|").map(part => part.trim());
    return { label, price: price || fallbackPrice, messagePrice: messagePrice || `${price || fallbackPrice} ${label}`.trim() };
  }).filter(variant => variant.label || variant.price);
  return parsed.length ? parsed : [{ label: "Default", price: fallbackPrice, messagePrice: fallbackPrice }];
}

function lines(value) {
  return String(value || "").split(/\r?\n/).map(line => line.trim()).filter(Boolean);
}

function setValue(id, value) {
  const el = document.getElementById(id);
  if (el) el.value = value ?? "";
}
function getValue(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : "";
}
function updatePreview(src) {
  adminEls.imagePreview.src = src || "";
  adminEls.imagePreview.style.display = src ? "block" : "none";
}

initAdmin();
