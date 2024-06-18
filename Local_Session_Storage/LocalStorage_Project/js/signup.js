import nav from "../cōmpōnents/nav.js";


const SignupData = (e) => {
    e.preventDefault();

    let user = {

    username: document.getElementById("uname").value,
    email: document.getElementById("email").value ,
    password: document.getElementById("pass").value

    }
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "/Local_Session_Storage/LocalStorage_Project/index.html"
}

document.getElementById("SignupData").addEventListener("submit",SignupData)



document.getElementById("nav").innerHTML = nav();