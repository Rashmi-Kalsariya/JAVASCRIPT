const createWeatherCard = (data) => {
    let Div = document.getElementById("data");
    Div.innerHTML = '';

    let card = document.createElement("div");
    card.classList.add("weather-card");

    let weatherImage = getWeatherImage(data.weather[0].main);
    let weatherDescription = data.weather[0].main;

    card.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>

        <p>${new Date().toLocaleString()}</p>
        <p id="type">${weatherDescription}</p>

        <img src="${weatherImage}" alt="Weather Icon" class="weather-icon">

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

    Div.append(card);
}

const getWeatherImage = (weather) => {
    if (weather.includes('Clear')) {
        return 'https://cdn-icons-png.flaticon.com/512/3222/3222807.png';
    } else if (weather.includes('Clouds')) {
        return 'https://www.pngarts.com/files/3/White-Clouds-PNG-Pic.png';
    } else if (weather.includes('Rain')) {
        return 'http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-showers-day-icon.png';
    } else if (weather.includes('Snow')) {
        return 'https://cdn-icons-png.freepik.com/512/6635/6635585.png';
    } else if (weather.includes('Thunderstorm')) {
        return 'https://icons.veryicon.com/png/o/weather/weather-fill/weather-thunderstorm-5.png';
    } else if (weather.includes('Drizzle')) {
        return 'https://www.clipartmax.com/png/middle/182-1822480_rain-icon-rainy-weather-icon.png';
    } else if (weather.includes('Mist') || weather.includes('Smoke') || weather.includes('Haze') || 
               weather.includes('Dust') || weather.includes('Fog') || weather.includes('Sand') || 
               weather.includes('Ash') || weather.includes('Squall') || weather.includes('Tornado')) {
        return 'https://cdn.icon-icons.com/icons2/1370/PNG/512/if-weather-30-2682821_90800.png';
    } else {
        return 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtNTM1LXN1bi0wNy1hLnBuZw.png';
    }
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

document.getElementById("form").addEventListener("submit", HandleData);


/* SNOW FLAKES */

class Flake {
    constructor(m, x, y, c) {
        this.mass = m;
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.c = color(c);
    }
    applyForce(force) {
        const f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(0.5);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    display() {
        noStroke();
        fill(this.c);
        ellipse(this.position.x, this.position.y, this.mass, this.mass);
    }

    checkEdges() {
        if (this.position.x > (width + this.mass / 2)) {
            this.position.x = (0 - this.mass / 2);
        }
        if (this.position.y > (height + this.mass / 2)) {
            this.position.y = (0 - this.mass / 2);
            this.position.x = (random(0, width) - this.mass / 2);
        }
    }
}

const flakes = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 70; i++) {
        flakes.push(new Flake(random(3, 10), random(width), random(height), random(50, 200)));
    }
}

function draw() {
    background(10);

    for (let i = 0; i < flakes.length; i++) {
        const wind = (i % 2 === 0) ? createVector(0.1 * flakes[i].mass, 0) : createVector(-0.03 * flakes[i].mass, 0);
        const gravity = createVector(0, 0.5 * flakes[i].mass);

        flakes[i].applyForce(wind);
        flakes[i].applyForce(gravity);

        flakes[i].update();
        flakes[i].display();
        flakes[i].checkEdges();
    }
}
