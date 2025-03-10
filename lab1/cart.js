// Функція для відображення товарів у кошику
function renderCart() {
  const cartContainer = document.getElementById("cart-items");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Ваш кошик порожній.</p>";
  } else {
    cart.forEach((item, index) => {
      cartContainer.innerHTML += `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.title}" class="cart-item-image">
          <p>${item.title} - ${item.author} - ${item.price} </p>
          <input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)">
          <img src="cancel.svg" alt="Видалити" class="remove-icon" onclick="removeFromCart(${index})">
        </div>
      `;
    });
  }
}

// Функція для оновлення кількості товару
function updateQuantity(index, newQuantity) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  cart[index].quantity = parseInt(newQuantity);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Функція для видалення товару з кошика
function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Функція для очищення всього кошика
document.getElementById("clear-cart").addEventListener("click", () => {
  localStorage.removeItem("cart");
  renderCart();
});

// Спочатку відображаємо кошик
document.addEventListener("DOMContentLoaded", renderCart);
