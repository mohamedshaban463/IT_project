            let cartCount = 0;
    
            function addToCart(product) {
                cartCount++;
                alert(`${product.name} has been added to your cart!`);
                document.getElementById("cart-count").innerText = cartCount;
            };
    
            function createProductCard(product) {
                const card = document.createElement("div");
                card.className = "product-card";
    
                card.innerHTML = `
                    <a href="product_page.html?id=${product.id}" class="product-link">
                        <img id="product-img" src="${product.img}" alt="${product.name}">
                    </a>
                    <h3 style="overflow: hidden; text-overflow: ellipsis;" id="product-name">${product.name}</h3>
                    <p style="overflow: hidden; text-overflow: ellipsis;" id="product-desc">${product.description}</p>
                    <p>
                        <s id="product-old-price">${product.oldPrice}</s> 
                        <strong id="product-new-price">${product.newPrice}</strong> 
                        <span style="color:red">${product.discount}</span>
                    </p>
                    <button class="cart-button" onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})">Add to Cart</button>
                    <button class="buy-button">Buy now</button>
                `;
                return card;
            }
    
            document.addEventListener("DOMContentLoaded", () => {
                const container = document.getElementById("row-0");
                products.forEach(product => {
                    const card = createProductCard(product);
                    container.appendChild(card);
                });
    
                const hamburger = document.querySelector(".hamburger");
                const navLinks = document.querySelector(".nav-links");
    
                hamburger.addEventListener("click", () => {
                    hamburger.classList.toggle("active");
                    navLinks.classList.toggle("active");
                });
            });
const button = document.getElementById("toggleMode");
  button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
if (sessionStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
  }