const updateCheckout = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const checkoutList = document.getElementById('checkout-list');
    checkoutList.innerHTML = '';

    if (cartItems.length === 0) {
        checkoutList.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    let totalPrice = 0;

    cartItems.forEach(item => {
        totalPrice += item.price * item.quantity;
        const checkoutItem = document.createElement('div');
        checkoutItem.className = 'checkout-item';
        checkoutItem.innerHTML = `
            <img src="${item.image}" alt="${item.foodName}" style="width: 100px;">
            <h3>${item.foodName}</h3>
            <p>Price: $${item.price.toFixed(2)}</p>
            <p>Quantity: ${item.quantity}</p>
            <p>Total: $${(item.price * item.quantity).toFixed(2)}</p>
        `;
        checkoutList.append(checkoutItem);
    });

    document.getElementById('total-price').textContent = `Total Price: $${totalPrice.toFixed(2)}`;

    document.getElementById('confirm-order').addEventListener('click', () => {
        alert('Order confirmed! Thank you for shopping with us.');
        localStorage.removeItem('cart');
        window.location.href = '/index.html';
    });
};

updateCheckout();
