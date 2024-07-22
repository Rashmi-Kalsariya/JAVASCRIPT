import navbar from "../components/nav.js";

document.getElementById("navbar").innerHTML = navbar();

const getData = async () => {
    let response = await fetch("http://localhost:8118/foodData", { method: 'GET' });
    let data = await response.json();
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
                <button>${item.buyButton}</button>
            `;
            foodList.append(foodItem);
        });
}

const filterByLocation = (items, city) => {
    return items.filter(item => item.city.toLowerCase() === city.toLowerCase());
}

const getCityName = async (lat, lng) => {
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`);
    const data = await res.json();
    return `${data.address.city || ''}, ${data.address.state || ''}, ${data.address.country || ''}`;
};

const displayLocationMessage = (city) => {
    const locationInfo = document.getElementById('location-info');
    locationInfo.textContent = city ? `Location: ${city}` : "Unable to retrieve location.";
}

document.addEventListener('DOMContentLoaded', async () => {
    const foodData = await getData();
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async position => {
                const { latitude, longitude } = position.coords;
                const city = await getCityName(latitude, longitude);
                displayLocationMessage(city);
                
                const filteredItems = filterByLocation(foodData, city.split(',')[0].trim()); // Extract city from location
                FoodItems(filteredItems);
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

    getData().then(items => {
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
