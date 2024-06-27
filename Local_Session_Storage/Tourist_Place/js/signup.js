import navbar from "../components/navbar.js"

document.getElementById("navbar").innerHTML = navbar();

let SignupDetails = JSON.parse(localStorage.getItem("user"));


const SignupData = (e) => {
    e.preventDefault();

    let user = {

    username: document.getElementById("uname").value,
    email: document.getElementById("email").value ,
    password: document.getElementById("pass").value

    }
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "/Local_Session_Storage/Tourist_Place/index.html"
}

document.getElementById("SignupData").addEventListener("submit",SignupData)



