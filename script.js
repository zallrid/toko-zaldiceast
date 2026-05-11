// ==========================================
// DATA KATALOG PRODUK UTAMA
// ==========================================
const products = [
  { id:1, name:"BMW M3 GTR", series:"Premium", category:"premium", image:"https://down-id.img.susercontent.com/file/sg-11134201-8260v-mj45zqqwnnrb3c", icon:"", price:200000, badge:"new", scale:"1:64", color:"Silver" },
  { id:2, name:"Porsche 993 GT2", series:"Premium", category:"premium", image:"https://i.ebayimg.com/images/g/IfIAAeSwSVZp0am2/s-l1200.webp", icon:"", price:175000, badge:"new", scale:"1:64", color:"Silver" },
  { id:3, name:"Porsche 935", series:"Silver", category:"premium", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU0BMweRSLSWvp8B1wMyueytYSPhlXYIGIfg&s", icon:"🟡", price:75000, badge:"new", scale:"1:64", color:"Merah" },
  { id:4, name:"Nissan Silvia s13", series:"JDM Legends", category:"jdm", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRriOc7tycWTtp0boOSPY5OAq1Ca5jXYxkojw&s", icon:"🐎", price:55000, badge:"new", scale:"1:64", color:"Kuning" },
  { id:5, name:"Optimus Prime", series:"Film", category:"Truck", image:"https://i.ebayimg.com/images/g/CssAAeSwufBoXVYT/s-l1200.jpg", icon:"⚡", price:45000, badge:"loose", scale:"1:64", color:"Red & Blue" }
];

// ==========================================
// DATA & FUNGSI CUSTOM PARTS
// ==========================================
// Pastikan "category" sesuai dengan nama di filter (engine, velg, figur)
const customParts = [
  { id: 101, name: "Engine bay Supra", series: "Custom Parts", category: "engine", image: "supra.jpg", icon: "🛞", price: 8000, badge: "new raw", scale: "1:64", color: "raw" },
  { id: 102, name: "Engine Civic Eg", series: "Custom Parts", category: "engine", image: "eg.jpg", icon: "🛞", price: 15000, badge: "new raw", scale: "1:64", color: "raw" },
  { id: 103, name: "Engine R34", series: "Custom Parts", category: "engine", image: "r34.jpg", icon: "🛞", price: 18000, badge: "new raw", scale: "1:64", color: "raw" },
  
  // Contoh Tambahan Data Velg & Figur
  { id: 104, name: "Velg TE37 Bronze", series: "Rims", category: "velg", image: "", icon: "🛞", price: 12000, badge: "new", scale: "1:64", color: "Bronze" },
  { id: 105, name: "Mini Figur Mekanik", series: "Diorama", category: "figur", image: "", icon: "🧍", price: 10000, badge: "", scale: "1:64", color: "Painted" }
];

// Variabel untuk menyimpan status filter Custom Part (default: 'all')
let activeCustomFilter = 'all';

// Fungsi saat tombol filter Custom Part diklik
function setCustomFilter(cat, btn) {
  activeCustomFilter = cat;
  
  // Hapus class 'active' dari semua tombol filter di dalam Custom Part
  document.getElementById('custom-filters').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  
  // Tambahkan class 'active' ke tombol yang sedang diklik
  btn.classList.add('active');
  
  // Render ulang produknya
  renderCustomParts();
}

// Fungsi untuk menampilkan Custom Part
function renderCustomParts() {
  const grid = document.getElementById('custom-parts-grid');
  if (!grid) return;

  // Saring data berdasarkan filter yang aktif
  const filtered = customParts.filter(p => {
    return activeCustomFilter === 'all' || p.category === activeCustomFilter;
  });

  // Jika produk kosong setelah difilter
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="no-results"><div class="no-results-icon">🔍</div><p>Part tidak ditemukan.</p></div>`;
    return;
  }

  // Tampilkan HTML-nya
  grid.innerHTML = filtered.map(p => {
    const inCart = cart[p.id];
    const badgeHTML = p.badge ? `<div class="product-badge ${p.badge}">${p.badge}</div>` : '';
    const btnText = inCart ? '✓ Di Keranjang' : '+ Keranjang';
    const btnClass = inCart ? 'add-btn added' : 'add-btn';
    
    const visualHTML = p.image 
      ? `<img src="${p.image}" alt="${p.name}" class="product-photo">` 
      : `<span style="font-size: 50px;">${p.icon}</span>`;

    return `
      <div class="product-card">
        <div class="product-img">
          ${badgeHTML}
          ${visualHTML}
        </div>
        <div class="product-info">
          <div class="product-series">${p.series}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-scale">Skala ${p.scale} · ${p.color}</div>
          <div class="product-footer">
            <div class="product-price">${formatRp(p.price)}</div>
            <button class="${btnClass}" onclick="addToCart(${p.id})">${btnText}</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================
// DATA & FUNGSI KOLEKSI LANGKA (TIDAK DIJUAL)
// ==========================================
const rareCollection = [
  { id: 1, title: "Custom s13 & Custom Supra Castrol", image: "putih.jpg", icon: "📸", desc: "Perfect detail for decal and nice colour." },
  { id: 2, title: "Custom porsche 911 Rexy", image: "pink.jpg", icon: "📸", desc: "Super rare decal Rexy in Hotwheels." },
  { id: 3, title: "Civic type R & Supra Mk5 & toyota Corolla", image: "kuning.jpg", icon: "📸", desc: "Hotwheels Premium." },
  { id: 4, title: "Porsche Cayman & Civic EK9 & BMW M2", image: "ungu.jpg", icon: "📸", desc: "Cutom colour spectraflame ungu & nice fiten for porsche." },
  { id: 5, title: "Toyota 86 Pandem & Porsche Cayman", image: "poce.jpg", icon: "📸", desc: "Nice fitment." }
];

function renderRareCollection() {
  const grid = document.getElementById('rare-grid');
  if (!grid) return;

  grid.innerHTML = rareCollection.map(item => {
    const visualHTML = item.image 
      ? `<img src="${item.image}" alt="${item.title}" class="rare-photo">` 
      : `<span style="font-size: 50px;">${item.icon}</span>`;

    return `
      <div class="rare-card">
        <div class="rare-img-wrapper">
          ${visualHTML}
        </div>
        <div class="rare-info">
          <div class="rare-title">${item.title}</div>
          <div class="rare-desc">${item.desc}</div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================
// FUNGSI SISTEM (KERANJANG, FILTER, CHECKOUT)
// ==========================================
let cart = {};
let activeFilter = 'all';

function formatRp(n) {
  return 'Rp ' + n.toLocaleString('id-ID');
}

function setFilter(cat, btn) {
  activeFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts();
}

function renderProducts() {
  const q = document.getElementById('search-input').value.toLowerCase();
  const grid = document.getElementById('products-grid');
  if(!grid) return;
  
  const filtered = products.filter(p => {
    const matchFilter = activeFilter === 'all' || p.category === activeFilter;
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.series.toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="no-results"><div class="no-results-icon">🔍</div><p>Produk tidak ditemukan.</p></div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const inCart = cart[p.id];
    const badgeHTML = p.badge
      ? `<div class="product-badge ${p.badge}">${p.badge === 'new' ? 'Baru' : p.badge === 'rare' ? 'Langka' : 'Habis'}</div>`
      : '';
    const btnText = inCart ? '✓ Di Keranjang' : '+ Keranjang';
    const btnClass = inCart ? 'add-btn added' : 'add-btn';
    
    const visualHTML = p.image 
      ? `<img src="${p.image}" alt="${p.name}" class="product-photo">` 
      : `<span>${p.icon}</span>`;

    return `
      <div class="product-card">
        <div class="product-img">
          ${badgeHTML}
          ${visualHTML}
        </div>
        <div class="product-info">
          <div class="product-series">${p.series}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-scale">Skala ${p.scale} · ${p.color}</div>
          <div class="product-footer">
            <div class="product-price">${formatRp(p.price)}</div>
            <button class="${btnClass}" onclick="addToCart(${p.id})">${btnText}</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function addToCart(id) {
  // Cari di array produk utama ATAU array custom parts
  const p = products.find(x => x.id === id) || customParts.find(x => x.id === id);
  if (!p) return;
  
  if (cart[id]) {
    cart[id].qty++;
  } else {
    cart[id] = { ...p, qty: 1 };
  }
  
  updateCart();
  renderProducts();
  renderCustomParts();
  showToast(`${p.name} ditambahkan ke keranjang!`);
}

function updateCart() {
  const items = Object.values(cart);
  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  document.getElementById('cart-count').textContent = count;
  document.getElementById('cart-total').textContent = formatRp(total);
  document.getElementById('checkout-btn').disabled = count === 0;

  const container = document.getElementById('cart-items');
  if (items.length === 0) {
    container.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛒</div><p>Keranjang masih kosong</p></div>`;
    return;
  }
  
  container.innerHTML = items.map(item => {
    const cartVisual = item.image 
      ? `<img src="${item.image}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;">`
      : item.icon;

    return `
    <div class="cart-item">
      <div class="cart-item-icon">${cartVisual}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatRp(item.price * item.qty)}</div>
      </div>
      <div class="cart-qty">
        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
      </div>
    </div>
  `}).join('');
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) delete cart[id];
  updateCart();
  renderProducts();
  renderCustomParts();
}

function openCart() {
  document.getElementById('cart-overlay').classList.add('open');
  document.getElementById('cart-sidebar').classList.add('open');
}

function closeCart() {
  document.getElementById('cart-overlay').classList.remove('open');
  document.getElementById('cart-sidebar').classList.remove('open');
}

function openCheckout() {
  closeCart();
  const items = Object.values(cart);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const summary = document.getElementById('order-summary');
  summary.innerHTML = `
    <h3>Ringkasan Pesanan</h3>
    ${items.map(i => `<div class="order-item"><span>${i.name} x${i.qty}</span><span>${formatRp(i.price * i.qty)}</span></div>`).join('')}
    <hr class="order-divider">
    <div class="order-total"><span>Total</span><span>${formatRp(total)}</span></div>
  `;
  document.getElementById('form-screen').style.display = '';
  document.getElementById('success-screen').style.display = 'none';
  document.getElementById('modal-overlay').classList.add('open');
}

function closeCheckout() {
  document.getElementById('modal-overlay').classList.remove('open');
}

function closeAll() {
  closeCheckout();
  cart = {};
  updateCart();
  renderProducts();
  renderCustomParts();
}

function placeOrder() {
  const fname = document.getElementById('fname').value.trim();
  const lname = document.getElementById('lname').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  const city = document.getElementById('city').value.trim();
  const postal = document.getElementById('postal').value.trim();
  const payment = document.getElementById('payment').value;
  const courier = document.getElementById('courier').value;

  if (!fname || !phone || !address || !city || !payment || !courier) {
    showToast('⚠️ Mohon lengkapi semua data!');
    return;
  }

  const total = Object.values(cart).reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('success-msg').innerHTML =
    `Terima kasih, <strong>${fname} ${lname}</strong>!<br>Pesanan senilai <strong>${formatRp(total)}</strong> telah diterima.<br>Tim kami akan menghubungi <strong>${phone}</strong> via WhatsApp untuk konfirmasi.`;

  document.getElementById('form-screen').style.display = 'none';
  document.getElementById('success-screen').style.display = '';
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ==========================================
// INIT (MENJALANKAN SEMUA FUNGSI SAAT WEB DIBUKA)
// ==========================================
renderProducts();
renderCustomParts(); 
renderRareCollection(); 
updateCart();