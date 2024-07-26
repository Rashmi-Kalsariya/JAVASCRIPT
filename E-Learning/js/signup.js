import navbar from "../components/nav.js";
import { userAPI } from "../API/user.api.js";

document.getElementById("navbar").innerHTML = navbar();

let SignupDetails = JSON.parse(localStorage.getItem("user"));

const handleUserDetails = async (e) => {

    e.preventDefault();

    let user = {
        username: document.getElementById("uname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("pass").value,
        option: document.getElementById("opts").value,
    };

    localStorage.setItem("user", JSON.stringify(user));
    window.location.href="/pages/login.html"

    userAPI.post(user);
};

document.getElementById("SignupData").addEventListener("submit", handleUserDetails)

