        const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
const product = products.find(p => p.id === productId);
if (product) {
    document.getElementById("product-img").src = product.img;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-desc").textContent = product.description;
    document.getElementById("product-price").innerHTML =
        `<s>${product.oldPrice}</s> <strong>${product.newPrice}</strong> <span style="color:red">${product.discount}</span>`;
} else {
    document.body.innerHTML = "<p>Product not found.</p>";
}
function createProductCard(product) {
            const card = document.createElement("div");
            card.className = "product-card";

            card.innerHTML = `
                <a href="product_page.html"class="product-link"><img id="product-img" src="${product.img}" alt="${product.name}" ></a>
                <h3 id="product-name">${product.name}</h3>
                <p id="product-desc">${product.description}</p>
                <p><s id="product-old-price">${product.oldPrice}</s id="product-new-price"> <strong>${product.newPrice}</strong> <span style="color:red">${product.discount}</span></p>
                <button onclick="products.forEach(productt => if(product.name=productt.name){ {addToCart(${product}});}" style="bottom:20px;">Add to Cart</button>
                <button class="buy-button">Buy now</button>
            `;
            return card;
        }
        document.addEventListener("DOMContentLoaded", () => {
            const container = document.getElementById(`row-${rowscount}`);
            products.forEach(product => {
                const card = createProductCard(product);
                container.appendChild(card);
            });
        });
const button = document.getElementById("toggleMode");
  button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
