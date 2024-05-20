/* FOR SALE */

let countDownDate = new Date("May 20, 2024 10:15:00").getTime();

let time = setInterval(() => {

    let now = new Date("May 20, 2024 10:15:00").getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let SetTime = document.getElementById("Time");

    if (SetTime) {
        SetTime.innerHTML = days + "Day " + hours + "Hrs "
            + minutes + "Min " + seconds + "Sec ";
    }

    if (distance < 0) {
        clearInterval(time);
        document.getElementById("Time").innerHTML = "EXPIRED";
    }
}, 1000);


/* Products */


