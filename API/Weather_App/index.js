const createWeatherCard = (data) => {
    const dataDiv = document.getElementById("data");
    dataDiv.innerHTML = '';

    const card = document.createElement("div");
    card.classList.add("weather-card");

    const weatherImage = getWeatherImage(data.weather[0].main);

    card.innerHTML = `
        <div class="weather-card-header">
            <h2>${data.name}</h2>
            <img src="${weatherImage}" alt="Weather Icon" class="weather-icon">
            <p class="temperature">${data.main.temp} °C</p>
        </div>
        <div class="weather-card-body">
            <div class="weather-info">
                <div class="weather-box">
                    <p>Real feel</p>
                    <p>${data.main.feels_like} °C</p>
                </div>
                <div class="weather-box">
                    <p>Humidity</p>
                    <p>${data.main.humidity} %</p>
                </div>
                <div class="weather-box">
                    <p>Pressure</p>
                    <p>${data.main.pressure} hPa</p>
                </div>
                <div class="weather-box">
                    <p>Wind</p>
                    <p>${data.wind.speed} km/h ${data.wind.deg}°</p>
                </div>
            </div>
            <p>Weather: ${data.weather[0].description}</p>
        </div>
    `;

    dataDiv.appendChild(card);
}

const getWeatherImage = (weather) => {
    const weatherLower = weather.toLowerCase();
    if (weatherLower.includes('clear')) {
        return 'https://openweathermap.org/img/wn/01d.png';
    } else if (weatherLower.includes('cloud')) {
        return 'https://openweathermap.org/img/wn/03d.png';
    } else if (weatherLower.includes('rain')) {
        return 'https://openweathermap.org/img/wn/09d.png';
    } else if (weatherLower.includes('snow')) {
        return 'https://openweathermap.org/img/wn/13d.png';
    } else if (weatherLower.includes('thunderstorm')) {
        return 'https://openweathermap.org/img/wn/11d.png';
    } else if (weatherLower.includes('drizzle')) {
        return 'https://openweathermap.org/img/wn/10d.png';
    } else if (weatherLower.includes('mist') || weatherLower.includes('smoke') || weatherLower.includes('haze') || 
               weatherLower.includes('dust') || weatherLower.includes('fog') || weatherLower.includes('sand') || 
               weatherLower.includes('ash') || weatherLower.includes('squall') || weatherLower.includes('tornado')) {
        return 'https://openweathermap.org/img/wn/50d.png';
    } else {
        return 'https://openweathermap.org/img/wn/01d.png';
    }
}

const getData = async (city) => {
    const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=0fdc88f1a67d09059c9e313b7d58d6bc&q=${city}&units=metric`);
    const res = await req.json();
    createWeatherCard(res);
}

const handleData = (e) => {
    e.preventDefault();
    const city = document.getElementById("city").value;
    getData(city);
}

document.getElementById("form").addEventListener("submit", handleData);




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
