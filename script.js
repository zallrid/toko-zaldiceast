// Data Katalog Produk Jualan
const products = [
  { id:1, name:"BMW M3 GTR", series:"Premium", category:"Europe", image:"https://down-id.img.susercontent.com/file/sg-11134201-8260v-mj45zqqwnnrb3c", icon:"", price:200000, badge:"new", scale:"1:64", color:"Silver" },
  { id:2, name:"Porsche 993 GT2", series:"Premium", category:"Europe", image:"https://i.ebayimg.com/images/g/IfIAAeSwSVZp0am2/s-l1200.webp", icon:"", price:175000, badge:"new", scale:"1:64", color:"Silver" },
  { id:3, name:"Porsche 935", series:"Silver", category:"Europe", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU0BMweRSLSWvp8B1wMyueytYSPhlXYIGIfg&s", icon:"🟡", price:75000, badge:"", scale:"1:64", color:"Merah" },
  { id:4, name:"Nissan Silvia s13 ", series:"JDM Legends", category:"jdm", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRriOc7tycWTtp0boOSPY5OAq1Ca5jXYxkojw&s", icon:"🐎", price:55000, badge:"", scale:"1:64", color:"Kuning" },
  { id:5, name:"Optimus Prime", series:"Film", category:"Truck", image:"https://i.ebayimg.com/images/g/CssAAeSwufBoXVYT/s-l1200.jpg", icon:"⚡", price:45000, badge:"loose", scale:"1:64", color:"Red & Blue" },
  { id:6, name:"Porsche 911 Carrera RS", series:"Premium", category:"premium", image:"", icon:"🏁", price:145000, badge:"", scale:"1:64", color:"Putih" },
  { id:7, name:"Chevrolet Camaro ZL1", series:"Muscle Mania", category:"muscle", image:"", icon:"🔥", price:50000, badge:"", scale:"1:64", color:"Orange" },
  { id:8, name:"'70 Dodge Charger R/T", series:"Super Treasure Hunt", category:"supertreasure", image:"", icon:"💎", price:350000, badge:"rare", scale:"1:64", color:"Hitam" },
  { id:9, name:"Honda Civic Type R FK8", series:"JDM Legends", category:"jdm", image:"", icon:"🏮", price:75000, badge:"new", scale:"1:64", color:"Merah" },
  { id:10, name:"Ferrari F40", series:"Premium", category:"premium", image:"", icon:"🐴", price:165000, badge:"", scale:"1:64", color:"Merah Ferrari" },
  { id:11, name:"Mazda RX-7 FD", series:"JDM Legends", category:"jdm", image:"", icon:"🌀", price:80000, badge:"", scale:"1:64", color:"Putih" },
  { id:12, name:"'69 Ford Mustang Boss 302", series:"Super Treasure Hunt", category:"supertreasure", image:"", icon:"⭐", price:400000, badge:"rare", scale:"1:64", color:"Hijau" },
  { id:13, name:"BMW M4 G82", series:"Mainline", category:"mainline", image:"", icon:"🔵", price:40000, badge:"new", scale:"1:64", color:"Biru M" },
  { id:14, name:"Subaru WRX STI", series:"Rally Legends", category:"themed", image:"", icon:"🌧️", price:60000, badge:"", scale:"1:64", color:"Biru WRX" },
  { id:15, name:"McLaren 720S", series:"Premium", category:"premium", image:"", icon:"🚀", price:155000, badge:"", scale:"1:64", color:"Orange McLaren" },
  { id:16, name:"Mitsubishi Lancer Evo X", series:"JDM Legends", category:"jdm", image:"", icon:"🦅", price:70000, badge:"", scale:"1:64", color:"Putih" },
  { id:17, name:"Pontiac GTO '65", series:"Mainline", category:"mainline", image:"", icon:"🎯", price:42000, badge:"", scale:"1:64", color:"Merah Maroon" },
  { id:18, name:"Dodge Viper ACR", series:"Muscle Mania", category:"muscle", image:"", icon:"🐍", price:58000, badge:"", scale:"1:64", color:"Hitam-Merah" },
  { id:19, name:"Audi R8 V10 Plus", series:"Premium", category:"premium", image:"", icon:"💠", price:135000, badge:"new", scale:"1:64", color:"Putih" },
  { id:20, name:"'55 Chevy Bel Air Gasser", series:"Super Treasure Hunt", category:"supertreasure", image:"", icon:"👑", price:450000, badge:"rare", scale:"1:64", color:"Hijau Metalik" },
];

// ==========================================
// FITUR BARU: DATA & FUNGSI KOLEKSI LANGKA
// ==========================================

// Anda bisa menambahkan foto koleksi pribadi Anda di sini.
// Masukkan nama file foto di bagian `image: "namagambar.jpg"`.
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
    // Jika gambar tersedia, pakai tag <img>. Jika tidak, pakai icon emoji
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
// FUNGSI LAMA (TIDAK DIUBAH)
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
  const p = products.find(x => x.id === id);
  if (!p) return;
  if (cart[id]) {
    cart[id].qty++;
  } else {
    cart[id] = { ...p, qty: 1 };
  }
  updateCart();
  renderProducts();
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

// Init
renderProducts();
updateCart();
renderRareCollection(); // PANGGIL FUNGSI KOLEKSI LANGKA