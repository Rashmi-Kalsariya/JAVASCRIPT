import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let products = JSON.parse(localStorage.getItem("products")) || [];
let SignupDetails = JSON.parse(localStorage.getItem("user"));


const PlaceData = (e) => {
    e.preventDefault();

    if (SignupDetails) {
        let product = {
            id: Date.now().toString(),
            title: document.getElementById("title").value,
            img: [
                document.getElementById("img1").value,
                document.getElementById("img2").value,
                document.getElementById("img3").value
            ],
            price: document.getElementById("cost").value,
            Description: document.getElementById("desc").value,
            likes: 0,
            comments: []
        };

        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));
        alert("Place Added Successfully!!!");
        window.location.href = "/JAVASCRIPT/Local_Session_Storage/Tourist_Place/index.html";
    }
    else {
        alert("SignUp First!!!");
        window.location.href = "/JAVASCRIPT/Local_Session_Storage/Tourist_Place/pages/signup.html";
    }


};

document.getElementById("addplaces").addEventListener("submit", PlaceData);
