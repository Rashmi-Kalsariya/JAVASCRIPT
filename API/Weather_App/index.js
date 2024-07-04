let ImgData = {
    Rain: "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-showers-day-icon.png",
    Clouds: "https://www.pngarts.com/files/3/White-Clouds-PNG-Pic.png",
    Snow: "https://cdn-icons-png.freepik.com/512/6635/6635585.png",
    Clear: "https://cdn-icons-png.flaticon.com/512/3222/3222807.png",
    Thunderstorm: "https://icons.veryicon.com/png/o/weather/weather-fill/weather-thunderstorm-5.png",
    Drizzle: "https://www.clipartmax.com/png/middle/182-1822480_rain-icon-rainy-weather-icon.png",
    Haze: "https://cdn.icon-icons.com/icons2/1370/PNG/512/if-weather-30-2682821_90800.png",
    Sun: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtNTM1LXN1bi0wNy1hLnBuZw.png",
    Others: "https://cdn.icon-icons.com/icons2/1370/PNG/512/if-weather-30-2682821_90800.png"
};

let BgData = {
    Rain: "url('https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=600')",
    Clouds: "url('https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?auto=compress&cs=tinysrgb&w=600')",
    Snow: "url('https://images.pexels.com/photos/4969844/pexels-photo-4969844.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')",
    Clear: "url('https://images.pexels.com/photos/5326741/pexels-photo-5326741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    Thunderstorm: "url('https://images.pexels.com/photos/2531709/pexels-photo-2531709.jpeg?auto=compress&cs=tinysrgb&w=600')",
    Drizzle: "url('https://images.pexels.com/photos/7485212/pexels-photo-7485212.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')",
    Haze: "url('https://images.pexels.com/photos/691574/pexels-photo-691574.jpeg?auto=compress&cs=tinysrgb&w=600')",
    Sun: "url('https://images.pexels.com/photos/7093517/pexels-photo-7093517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    Others: "url('https://images.pexels.com/photos/1165991/pexels-photo-1165991.jpeg?auto=compress&cs=tinysrgb&w=600')"
};


const createWeatherCard = (data) => {
    let div = document.getElementById("data");
    div.innerHTML = '';

    let card = document.createElement("div");
    card.classList.add("weather-card");

    let weatherDescription = data.weather[0].main;
    
    let weatherImageKey = ["Mist", "Dust", "Smoke", "Fog", "Sand", "Ash", "Squall", "Tornado"].includes(weatherDescription) ? "Others" : weatherDescription;
    let weatherImage = ImgData[weatherImageKey] || ImgData.Others;
    let backgroundImage = BgData[weatherImageKey] || BgData.Others;

    document.body.style.backgroundImage = backgroundImage;

    card.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>

        <p>${new Date().toLocaleString()}</p>
        <p id="type">${weatherDescription}</p>
        <img src="${weatherImage}" alt="${weatherDescription}" class="weather-image">

        <p class="temperature">${Math.round(data.main.temp)}°</p>
        <p>Min: ${Math.round(data.main.temp_min)}° Max: ${Math.round(data.main.temp_max)}°</p>

        <div class="weather-info">
            <div class="weather-box">
                <p><img src="https://img.icons8.com/ios/50/000000/temperature.png" alt="" class="info-icon"> Real Feel</p>
                <p>${Math.round(data.main.feels_like)}°</p>
            </div>
            <div class="weather-box">
                <p><img src="https://img.icons8.com/ios/50/000000/hygrometer.png" alt="" class="info-icon"> Humidity</p>
                <p>${data.main.humidity}%</p>
            </div>
            <div class="weather-box">
                <p><img src="https://img.icons8.com/ios/50/000000/wind.png" alt="" class="info-icon"> Wind</p>
                <p>${data.wind.speed} m/s</p>
            </div>
            <div class="weather-box">
                <p><img src="https://img.icons8.com/ios/50/000000/barometer.png" alt="" class="info-icon"> Pressure</p>
                <p>${data.main.pressure} hPa</p>
            </div>
        </div>
    `;

    div.append(card);
}

const getData = async (city) => {
    let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=0fdc88f1a67d09059c9e313b7d58d6bc&q=${city}&units=metric`);
    let res = await req.json();
    createWeatherCard(res);
}

const HandleData = (e) => {
    e.preventDefault();
    let city = document.getElementById("city").value;
    getData(city);
}

const getWeather = async (lat, long) => {
    let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=0fdc88f1a67d09059c9e313b7d58d6bc&units=metric`);
    let res = await req.json();
    createWeatherCard(res);
}

const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
        position => {
            console.log(position);
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            console.log(lat, long);
            getWeather(lat, long);
        },
        error => {
            console.error(error);
            alert("Unable to retrieve your location. Please enter the city name manually.");
        }
    );
}

getLocation();

document.getElementById("form").addEventListener("submit", HandleData);