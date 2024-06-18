
import nav from "../cōmpōnents/nav.js";

let SignupDetails = JSON.parse(localStorage.getItem("user"));

const LoginData = (e)=>{
    e.preventDafault()

    let loguser= {
        email: document.getElementById("email").value,
        password: document.getElementById("pass").value
    }


    if(SignupDetails){

        if(SignupDetails.email != loguser.email){
            alert("Email Doesn't Exist!!" + loguser.email);
        }

        else if(SignupDetails.password != loguser.password){
            alert("Incorrect Password" + loguser.password);
        }
        else{
            alert("LogIn..." + loguser.email);
            window.location.href = "/Local_Session_Storage/LocalStorage_Project/index.html"
        }
    }
    else{
        alert("Please SignUp First!!")
        window.location.href = "/Local_Session_Storage/LocalStorage_Project/pages/signup.html"
    }
}
// console.log(SignupDetails);
document.getElementById("LoginData").addEventListener("submit" , LoginData);

document.getElementById("nav").innerHTML = nav();

