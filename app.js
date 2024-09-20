let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cart.push({ productName, price });
    totalPrice += price;
    displayCart();
}

function displayCart() {
    let cartItems = document.getElementById('cartItems');
    let total = document.getElementById('total');
    cartItems.innerHTML = '';
    
    cart.forEach((item, index) => {
        cartItems.innerHTML += `<p>${item.productName}: $${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button></p>`;
    });

    total.textContent = totalPrice.toFixed(2);
}

function removeFromCart(index) {
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    displayCart();
}

function checkout() {
    alert('Checkout complete! Thank you for your order.');
    cart = [];
    totalPrice = 0;
    displayCart();
}
