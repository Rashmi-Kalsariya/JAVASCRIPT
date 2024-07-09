let ImgData = {
    Rain: "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-showers-day-icon.png",
    Clouds: "https://www.pngarts.com/files/3/White-Clouds-PNG-Pic.png",
    Snow: "https://cdn-icons-png.freepik.com/512/6635/6635585.png",
    Clear: "https://cdn-icons-png.flaticon.com/512/3222/3222807.png",
    Thunderstorm: "https://icons.veryicon.com/png/o/weather/weather-fill/weather-thunderstorm-5.png",
    Drizzle: "https://cdn-icons-png.flaticon.com/256/8047/8047144.png",
    Haze: "https://cdn.icon-icons.com/icons2/1370/PNG/512/if-weather-30-2682821_90800.png",
    Sun: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtNTM1LXN1bi0wNy1hLnBuZw.png",
    Others: "https://cdn.icon-icons.com/icons2/1370/PNG/512/if-weather-30-2682821_90800.png"
};

let BgData = {
    Rain: "url('https://cdn141.picsart.com/272298469002201.jpg')",
    Clouds: "url('https://getwallpapers.com/wallpaper/full/5/6/c/30132.jpg')",
    Snow: "url('https://img.freepik.com/premium-photo/fantastic-winter-landscape-trodden-trails-that-lead-into_146671-14688.jpg?w=2000')",
    Clear: "url('https://wallpapers.com/images/hd/sunny-day-wallpaper-f21ok5dhnkco3i5n.jpg')",
    Thunderstorm: "url('https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    Drizzle: "url('https://i.pinimg.com/originals/7d/6e/bd/7d6ebd1c4517d40f1319315d50a8f79e.gif')",
    Haze: "url('https://www.edenproject.com/sites/default/files/2021-06/rainforest-clouds-above.jpg')",
    Sun: "url('https://images.pexels.com/photos/7093517/pexels-photo-7093517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    Others: "url('https://w.forfun.com/fetch/fc/fc7f9578c01047e6a06f2435ad332e27.jpeg')"
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
        <p>Min: ${Math.round(data.main.temp_min

            
        )}° Max: ${Math.round(data.main.temp_max)}°</p>

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
