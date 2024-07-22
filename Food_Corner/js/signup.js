import navbar from "../components/nav.js"

document.getElementById("navbar").innerHTML = navbar();

let SignupDetails = JSON.parse(localStorage.getItem("user"));


const SignupData = (e) => {
    e.preventDefault();

    let user = {

    username: document.getElementById("uname").value,
    email: document.getElementById("email").value ,
    password: document.getElementById("pass").value,
    Number: document.getElementById("no").value,
    city: document.getElementById("city").value

    }
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "/pages/login.html"
}

document.getElementById("SignupData").addEventListener("submit",SignupData)



