import nav from "../cōmpōnents/nav.js";

document.getElementById("nav").innerHTML = nav()

let SignupDetails = JSON.parse(localStorage.getItem("user"));


if (SignupDetails) {
    document.getElementById("nav").innerHTML = nav("logout", SignupDetails.username)
}
else {
    document.getElementById("nav").innerHTML = nav()
}



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



