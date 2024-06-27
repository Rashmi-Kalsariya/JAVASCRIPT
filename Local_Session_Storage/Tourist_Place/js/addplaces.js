import navbar from "../components/navbar.js"

document.getElementById("navbar").innerHTML = navbar();

let products = JSON.parse(localStorage.getItem("products")) || [];

const PlaceData = (e) => {
    e.preventDefault()

    let product = {
        title: document.getElementById("title").value,
        img: document.getElementById("img1").value,
        price: document.getElementById("cost").value,
        Description: document.getElementById("desc").value,
    }

    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    alert("Product Added Successfully!!!")
    window.location.href = "/Local_Session_Storage/Tourist_Place/index.html"

}

document.getElementById("addplaces").addEventListener("submit", PlaceData)



