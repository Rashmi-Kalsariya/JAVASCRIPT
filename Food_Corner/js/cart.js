// cart.js

const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

const updateCart = () => {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';

    if (cartItems.length === 0) {
        cartList.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    let totalPrice = 0;

    cartItems.forEach(item => {
        totalPrice += item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.foodName}" style="width: 100px;">
            <h3>${item.foodName}</h3>
            <p>Price: $${item.price.toFixed(2)}</p>
            <p>Category: ${item.category}</p>
            <div class="quantity">
                <button class="quantity-btn" data-id="${item.id}" data-action="decrement">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" data-id="${item.id}" data-action="increment">+</button>
            </div>
            <button class="remove-btn" data-id="${item.id}">Remove</button>
        `;
        cartList.append(cartItem);
    });

    document.getElementById('total-price').textContent = `Total Price: $${totalPrice.toFixed(2)}`;

    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemId = e.target.dataset.id;
            const action = e.target.dataset.action;
            updateQuantity(itemId, action);
        });
    });

    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemId = e.target.dataset.id;
            removeFromCart(itemId);
        });
    });

    document.getElementById('checkout-btn').addEventListener('click', () => {
        window.location.href = '/pages/checkout.html';
    });
};

const updateQuantity = (id, action) => {
    const itemIndex = cartItems.findIndex(item => item.id === id);
    if (itemIndex === -1) return;

    if (action === 'increment') {
        cartItems[itemIndex].quantity++;
    } else if (action === 'decrement') {
        if (cartItems[itemIndex].quantity > 1) {
            cartItems[itemIndex].quantity--;
        } else {
            removeFromCart(id);
        }
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCart();
};

const removeFromCart = (id) => {
    const itemIndex = cartItems.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        cartItems.splice(itemIndex, 1);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        updateCart();
    }
};

// Initial call to populate the cart
updateCart();
