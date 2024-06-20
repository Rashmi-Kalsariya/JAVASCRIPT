import nav from "../cōmpōnents/nav.js";

let SignupDetails = JSON.parse(localStorage.getItem("user"));
document.getElementById("nav").innerHTML = nav()



const LoginData = (e) => {
    e.preventDefault();
    let user = {
        email: document.getElementById("email").value,
        password: document.getElementById("pass").value
    }


    if (SignupDetails) {

        if (SignupDetails.email != user.email) {
            alert("Email Doesn't Exists " + user.email);
        }
        else if (SignupDetails.password != user.password) {
            alert("Incorrect Password " + user.password);
        }
        else {
            alert("logged in " + user.email);
            document.getElementById("nav").innerHTML = nav("logout", SignupDetails.username)
            window.location.href = "/Local_Session_Storage/LocalStorage_Project/index.html"
            // localStorage.setItem("isLogin", true)
        }
    }
    else {
        alert("SignUp First!!")
        window.location.href = "/Local_Session_Storage/LocalStorage_Project/pages/signup.html"

    }
}


document.getElementById("LoginData").addEventListener("submit", LoginData)