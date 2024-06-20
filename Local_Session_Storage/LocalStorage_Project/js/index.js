
import nav from "../cōmpōnents/nav.js";

document.getElementById("nav").innerHTML = nav();
let SignupDetails = JSON.parse(localStorage.getItem("user"));


if (SignupDetails) {
    document.getElementById("nav").innerHTML = nav("logout", SignupDetails.username)
}
else {
    document.getElementById("nav").innerHTML = nav()
}