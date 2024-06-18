let products = JSON.parse(localStorage.getItem('products')) || [];


const Data = (e)=>{
    e.preventDefault();

    let product = {
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        img: document.getElementById("img").value,
        category: document.getElementById("category").value
    }

    products.push(product);
    localStorage.setItem("products", JSON.stringify(products))
    window.location.href = "/Local_Session_Storage/FormData_Storage/index.html"
}

document.getElementById("form").addEventListener("submit", Data);