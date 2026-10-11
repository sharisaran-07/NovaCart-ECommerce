const products = [
{id:1,name:"iPhone 16",brand:"Apple",category:"Mobiles",price:69900,image:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600",description:"Premium smartphone"},
{id:2,name:"Galaxy S Series",brand:"Samsung",category:"Mobiles",price:64999,image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",description:"Android smartphone"},
{id:3,name:"OnePlus Phone",brand:"OnePlus",category:"Mobiles",price:39999,image:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600",description:"Smooth display"},
{id:4,name:"Redmi Phone",brand:"Xiaomi",category:"Mobiles",price:14999,image:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600",description:"Everyday smartphone"},
{id:5,name:"OPPO Phone",brand:"OPPO",category:"Mobiles",price:21999,image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",description:"Stylish smartphone"},
{id:6,name:"realme Phone",brand:"realme",category:"Mobiles",price:17999,image:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600",description:"Everyday entertainment"},
{id:7,name:"HP Pavilion",brand:"HP",category:"Laptops",price:56990,image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",description:"Work and study laptop"},
{id:8,name:"Dell Inspiron",brand:"Dell",category:"Laptops",price:62990,image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600",description:"Everyday computing"},
{id:9,name:"MacBook Air",brand:"Apple",category:"Laptops",price:99900,image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600",description:"Slim productivity laptop"},
{id:10,name:"ASUS Gaming Laptop",brand:"ASUS",category:"Laptops",price:84990,image:"https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600",description:"Gaming performance"},
{id:11,name:"Lenovo IdeaPad",brand:"Lenovo",category:"Laptops",price:49990,image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",description:"Versatile laptop"},
{id:12,name:"Acer Aspire",brand:"Acer",category:"Laptops",price:45990,image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600",description:"Student laptop"},
{id:13,name:"Sony Headphones",brand:"Sony",category:"Audio",price:8999,image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",description:"Immersive sound"},
{id:14,name:"JBL Speaker",brand:"JBL",category:"Audio",price:3499,image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",description:"Portable speaker"},
{id:15,name:"Galaxy Earbuds",brand:"Samsung",category:"Audio",price:4999,image:"https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600",description:"Wireless listening"},
{id:16,name:"Apple Watch",brand:"Apple",category:"Wearables",price:29999,image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",description:"Smart everyday watch"},
{id:17,name:"Fitness Watch",brand:"Amazfit",category:"Wearables",price:5999,image:"https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600",description:"Fitness tracking"},
{id:18,name:"Gaming Mouse",brand:"Logitech",category:"Gaming",price:2499,image:"https://images.unsplash.com/photo-1527814050087-3793815479db?w=600",description:"Precise gaming control"},
{id:19,name:"Mechanical Keyboard",brand:"Redragon",category:"Gaming",price:3299,image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600",description:"Tactile keyboard"},
{id:20,name:"Gaming Controller",brand:"Sony",category:"Gaming",price:5999,image:"https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=600",description:"Comfortable gaming controls"},
{id:21,name:"Canon Camera",brand:"Canon",category:"Cameras",price:55990,image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",description:"Photography and video"},
{id:22,name:"Action Camera",brand:"GoPro",category:"Cameras",price:28990,image:"https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600",description:"Adventure camera"},
{id:23,name:"Backpack",brand:"Skybags",category:"Accessories",price:1499,image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",description:"College and travel"},
{id:24,name:"Running Shoes",brand:"Nike",category:"Fashion",price:4999,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",description:"Everyday running shoes"},
{id:25,name:"iPhone 15",brand:"Apple",category:"Mobiles",price:54900,image:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600",description:"Apple smartphone"},
{id:26,name:"Galaxy A Series",brand:"Samsung",category:"Mobiles",price:22999,image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",description:"Everyday smartphone"},
{id:27,name:"Pixel Phone",brand:"Google",category:"Mobiles",price:39999,image:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600",description:"Smart photography"},
{id:28,name:"Nothing Phone",brand:"Nothing",category:"Mobiles",price:32999,image:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600",description:"Minimalist design"},
{id:29,name:"MSI Gaming Laptop",brand:"MSI",category:"Laptops",price:94990,image:"https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600",description:"Gaming laptop"},
{id:30,name:"ThinkPad",brand:"Lenovo",category:"Laptops",price:72990,image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600",description:"Productivity laptop"},
{id:31,name:"ASUS Vivobook",brand:"ASUS",category:"Laptops",price:52990,image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",description:"Portable laptop"},
{id:32,name:"OnePlus Earbuds",brand:"OnePlus",category:"Audio",price:2999,image:"https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600",description:"Wireless audio"},
{id:33,name:"Studio Headphones",brand:"Sennheiser",category:"Audio",price:11999,image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",description:"Detailed listening"},
{id:34,name:"Party Speaker",brand:"JBL",category:"Audio",price:4999,image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",description:"Portable party sound"},
{id:35,name:"Smart Band",brand:"Xiaomi",category:"Wearables",price:2499,image:"https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600",description:"Activity tracking"},
{id:36,name:"Galaxy Watch",brand:"Samsung",category:"Wearables",price:18999,image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",description:"Smart watch"},
{id:37,name:"Gaming Headset",brand:"HyperX",category:"Gaming",price:4499,image:"https://images.unsplash.com/photo-1599669454699-248893623440?w=600",description:"Gaming audio"},
{id:38,name:"Mouse Pad",brand:"Logitech",category:"Gaming",price:999,image:"https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600",description:"Smooth gaming surface"},
{id:39,name:"Gaming Monitor",brand:"Acer",category:"Gaming",price:15999,image:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600",description:"Large display"},
{id:40,name:"Sony Mirrorless Camera",brand:"Sony",category:"Cameras",price:79990,image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",description:"Creative photography"},
{id:41,name:"Camera Lens",brand:"Canon",category:"Cameras",price:22990,image:"https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=600",description:"Photography lens"},
{id:42,name:"Instant Camera",brand:"Fujifilm",category:"Cameras",price:6999,image:"https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=600",description:"Instant photos"},
{id:43,name:"Travel Backpack",brand:"American Tourister",category:"Accessories",price:1999,image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",description:"Travel storage"},
{id:44,name:"Wireless Charger",brand:"Belkin",category:"Accessories",price:1799,image:"https://images.unsplash.com/photo-1591290619762-c588c8a4d8f4?w=600",description:"Wireless charging"},
{id:45,name:"USB-C Hub",brand:"Anker",category:"Accessories",price:2499,image:"https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600",description:"Extra laptop ports"},
{id:46,name:"Adidas Sneakers",brand:"Adidas",category:"Fashion",price:3999,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",description:"Casual footwear"},
{id:47,name:"Sunglasses",brand:"Ray-Ban",category:"Fashion",price:5999,image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",description:"Classic eyewear"},
{id:48,name:"Casual Hoodie",brand:"Puma",category:"Fashion",price:1999,image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",description:"Comfortable clothing"},
{id:49,name:"4K Smart TV",brand:"LG",category:"Home",price:32990,image:"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600",description:"Home entertainment"},
{id:50,name:"Robot Vacuum",brand:"Ecovacs",category:"Home",price:24990,image:"https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600",description:"Automated cleaning"}
];

let cart = [];
let selectedCategory = "All";

function displayProducts(list) {
    const grid = document.getElementById("productGrid");

    if (!list.length) {
        grid.innerHTML = "<p>No matching products found.</p>";
        return;
    }

    grid.innerHTML = list.map(product => `
        <article class="productCard">
            <div class="productImage" onclick="previewProduct(${product.id})">
                <img src="${product.image}" alt="${product.name}" loading="lazy"
                     style="width:100%;height:190px;object-fit:contain"
                     onerror="this.alt='Image unavailable'">
            </div>
            <p>${product.brand} · ${product.category}</p>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">₹${product.price.toLocaleString("en-IN")}</div>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
            <button class="previewButton" onclick="previewProduct(${product.id})">View Product</button>
        </article>
    `).join("");
}

function searchProducts() {
    const keyword = document.getElementById("searchInput").value.trim().toLowerCase();

    displayProducts(products.filter(product =>
        (selectedCategory === "All" || product.category === selectedCategory) &&
        [product.name, product.brand, product.category, product.description]
            .some(value => value.toLowerCase().includes(keyword))
    ));
}

function filterCategory(category) {
    selectedCategory = category;
    searchProducts();
}

function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) existing.quantity++;
    else cart.push({...product, quantity: 1});

    document.getElementById("cartCount").textContent =
        cart.reduce((sum, item) => sum + item.quantity, 0);

    alert(product.name + " added to cart!");
}

function showCart() {
    if (!cart.length) {
        alert("Your cart is empty!");
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const details = cart.map(item =>
        `${item.name} × ${item.quantity}: ₹${(item.price * item.quantity).toLocaleString("en-IN")}`
    ).join("\n");

    alert("YOUR CART\n\n" + details +
        "\n\nTotal: ₹" + total.toLocaleString("en-IN"));
}

function previewProduct(productId) {
    const product = products.find(item => item.id === productId);
    if (!product) return;

    document.getElementById("productPreview").innerHTML = `
        <img src="${product.image}" alt="${product.name}"
             style="width:min(100%,420px);height:260px;object-fit:contain">
        <button onclick="show3DPreview(${product.id})">Open 3D Preview</button>
    `;

    document.getElementById("previewName").textContent =
        `${product.brand} ${product.name} — ₹${product.price.toLocaleString("en-IN")}`;

    document.getElementById("viewer").scrollIntoView({behavior: "smooth"});
}

function show3DPreview(productId) {
    const product = products.find(item => item.id === productId);
    if (!product) return;

    document.getElementById("productPreview").innerHTML = `
        <model-viewer
            src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
            alt="Sample 3D model"
            camera-controls
            auto-rotate
            shadow-intensity="1"
            style="width:100%;height:360px;background:#f1f5f9;border-radius:16px">
        </model-viewer>
        <p>Sample 3D model only; not the exact product.</p>
        <button onclick="previewProduct(${product.id})">Back to Product Photo</button>
    `;
}

document.getElementById("searchInput").addEventListener("input", searchProducts);
displayProducts(products);