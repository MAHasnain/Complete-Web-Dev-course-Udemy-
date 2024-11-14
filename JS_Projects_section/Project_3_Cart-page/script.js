document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product1", price: 29.99 },
    { id: 2, name: "Product2", price: 49.99 },
    { id: 3, name: "Product3", price: 19.99 },
  ];

  const cart = [];

  const productList = document.querySelector(".product-list");
  const emptyMsg = document.querySelector(".empty-msg");
  const checkOutBtn = document.querySelector(".checkOut-btn");
  const cartTotalMsg = document.querySelector("#cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const cartItems = document.querySelector("#cart-items");

  //   const totalPrice = document.getElementById('total-price')

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `<span>${product.name} - ${product.price.toFixed(
      2
    )}</span>
    <button data-id = ${product.id}>Add to Cart</button>`;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
      cartItemsSaveLS(product)
    }
  });

  function addToCart(product) {
    cart.push(product);
    renderCart(cart);
  }

  function renderCart() {
    cartItems.innerHTML = "";
    let totalPrice = 0;

    if (cart.length > 0) {
      emptyMsg.classList.add("hidden");
      cartTotalMsg.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerText = `${item.name} - ${item.price.toFixed(2)}
        `;
        // `<button>Remove</button>`
        let removeBtn = document.createElement("button");
        removeBtn.addEventListener("click", () => {
          cartItem.remove();
          totalPriceDisplay.textContent = `$${(totalPrice -= item.price.toFixed(2))}`;
          cart.length = 0;
          // emptyMsg.classList.remove("hidden");
        });
        
        removeBtn.innerHTML = "Remove";
        cartItem.appendChild(removeBtn);

        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `${totalPrice}`;
      });
    } else {
      emptyMsg.classList.remove("hidden");
    }
  }

  function cartItemsSaveLS(product  ) {
    localStorage.setItem('cartItem', JSON.stringify(product))
    
  }

  checkOutBtn.addEventListener("click", () => {
    cart.length = 0;
    alert("Check Out successfully");
    renderCart();
    totalPriceDisplay.textContent = `$0.00`;
  });
});
