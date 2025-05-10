const products = [
                {
                    id : "1",
                    name: "SAMSUNG Galaxy A16 5G",
                    img: "https://m.media-amazon.com/images/I/61Lp1UcxeLL._AC_SX679_.jpg",
                    description: "SAMSUNG Galaxy A16 5G A Series Cell Phone, Unlocked Android Smartphone, Large AMOLED Display...",
                    oldPrice: "EGP8,070.00",
                    newPrice: "EGP7,399.00",
                    discount: "9% OFF"
                },
                {
                    id : "2",
                    name: "LED Light Bar",
                    img: "https://m.media-amazon.com/images/I/61GwqKyW1PL._AC_SY879_.jpg",
                    description: "LED Light Bar, Music Sync RGB Light Bar, USB Ambient Lamp, Color Changing...",
                    oldPrice: "EGP1,000.00",
                    newPrice: "EGP800.00",
                    discount: "20% OFF"
                },
                {
                    id : "3",
                    name: "CTIME 3-Tier Medicine Organizer",
                    img: "https://m.media-amazon.com/images/I/71d2okjshqL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
                    description: "Portable Medicine Cabinet with Leather Handle, Empty First Aid Kit for Home...",
                    oldPrice: "EGP2,000.00",
                    newPrice: "EGP1,850.00",
                    discount: "7.5% OFF"
                }
            ];
    
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
