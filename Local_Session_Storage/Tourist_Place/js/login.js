import navbar from "../components/navbar.js"

document.getElementById("navbar").innerHTML = navbar();

let SignupDetails = JSON.parse(localStorage.getItem("user"));


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
            window.location.href = "/Local_Session_Storage/Tourist_Place/index.html"
        }
    }
    else {
        alert("SignUp First!!")
        window.location.href = "/Local_Session_Storage/Tourist_Place/pages/signup.html"

    }
}


document.getElementById("LoginData").addEventListener("submit", LoginData)