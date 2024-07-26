import navbar from "../components/nav.js";

document.getElementById("navbar").innerHTML = navbar();

const getData = async (city) => {
    let response = await fetch(`https://json-server-mdhl.onrender.com/foodData?city=${city}`, { method: 'GET' });
    let data = await response.json();
    console.log("data", data);
    return data;
}

const FoodItems = (items) => {
    const foodList = document.getElementById('food-list');
    foodList.innerHTML = '';

    items.length === 0
        ? foodList.innerHTML = '<p>No food items available for your location.</p>'
        : items.map(item => {
            const foodItem = document.createElement('div');
            foodItem.className = 'food-item';
            foodItem.innerHTML = `
                <img src="${item.image}" alt="${item.foodName}" style="width: 100px;">
                <h3>${item.foodName}</h3>
                <p>Category: ${item.category}</p>
                <p>Price: $${item.price.toFixed(2)}</p>
                <p>Rating: ${item.rating}</p>
                <button onclick="addToCart(${JSON.stringify(item).replace(/"/g, '&quot;')})">Add to Cart</button>
            `;
            foodList.append(foodItem);
        });
}


const getCityName = async (lat, lng) => {
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`);
    const data = await res.json();
    return `${data.address.city}`;
};

const displayLocationMessage = (city) => {
    const locationInfo = document.getElementById('location-info');
    locationInfo.textContent = city ? `Location: ${city}` : "Unable to retrieve location.";
}

let currentCity = '';
let cart = JSON.parse(localStorage.getItem('cart')) || []; // Load cart from local storage

const addToCart = (item) => {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
        cartItems[existingItemIndex].quantity++;
    } else {
        cartItems.push({ ...item, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert('Item added to cart');
};


// Expose addToCart function to the global scope
window.addToCart = addToCart;

document.addEventListener('DOMContentLoaded', async () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async position => {
                let { latitude, longitude } = position.coords;
                let city = await getCityName(latitude, longitude);
                console.log("City:", city);
                if (city === "સુરત") {
                    city = "Surat";
                }
                currentCity = city;
                const foodData = await getData(city);
                console.log("foodData", foodData);
                displayLocationMessage(city);

                FoodItems(foodData);
                filterItems();
            },
            () => {
                displayLocationMessage("");
                FoodItems([]);
            }
        );
    } else {
        displayLocationMessage("");
        FoodItems([]);
    }
});

const filterItems = () => {
    const category = document.querySelector('.category-btn.active')?.id || 'all';
    const sortValue = document.getElementById('sort-dropdown').value;
    const searchQuery = document.getElementById('search-input').value.toLowerCase();

    if (currentCity) {
        getData(currentCity).then(items => {
            if (category !== 'all') {
                items = items.filter(item => item.category.toLowerCase() === category.toLowerCase());
            }

            if (searchQuery) {
                items = items.filter(item => item.foodName.toLowerCase().includes(searchQuery));
            }

            if (sortValue === 'price-asc') {
                items.sort((a, b) => a.price - b.price);
            } else if (sortValue === 'price-desc') {
                items.sort((a, b) => b.price - a.price);
            } else if (sortValue === 'rating-asc') {
                items.sort((a, b) => a.rating - b.rating);
            } else if (sortValue === 'rating-desc') {
                items.sort((a, b) => b.rating - a.rating);
            }

            FoodItems(items);
        });
    } else {
        console.error("City is not determined. Unable to filter items.");
    }
}

document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.category-btn').forEach(button => button.classList.remove('active'));
        btn.classList.add('active');
        filterItems();
    });
});

document.getElementById('sort-dropdown').addEventListener('change', filterItems);

document.getElementById('search-input').addEventListener('input', filterItems);

document.addEventListener('DOMContentLoaded', filterItems);
