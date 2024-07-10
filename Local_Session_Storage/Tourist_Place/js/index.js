import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let products = JSON.parse(localStorage.getItem("products")) || [];

products.map(product => {
    product.likes = localStorage.getItem(`likes_${product.id}`) || 0;
});

const ProductItems = (data) => {
    document.getElementById("productList").innerHTML = "";

    data.map((e) => {
        let img = document.createElement("img");
        img.src = e.img[0];

        let title = document.createElement("h2");
        title.innerHTML = e.title;

        let price = document.createElement("p");
        price.innerHTML = e.price;

        let Description = document.createElement("p");
        Description.innerHTML = e.Description;

        let btn1 = document.createElement("button");
        btn1.innerHTML = `LIKE ${e.likes}`;

        btn1.addEventListener("click", () => {
            e.likes++;
            localStorage.setItem(`likes_${e.id}`, e.likes);
            btn1.innerHTML = `LIKE ${e.likes}`;
        });

        let btn2 = document.createElement("button");
        btn2.innerHTML = "WISHLIST";
        btn2.addEventListener("click", () => {
            localStorage.setItem("Wishlist", JSON.stringify(products));
            alert('Added to Wishlist!');
        });

        let div = document.createElement("div");

        div.append(img, title, price, Description, btn1, btn2);

        div.addEventListener("click", () => {
            localStorage.setItem("id", e.id);
            window.location.href = "/JAVASCRIPT/Local_Session_Storage/Tourist_Place/pages/Details.html";
        });

        document.getElementById("productList").append(div);
    });
};

ProductItems(products);

const HandleCost = (order) => {
    if (order === "priceLTH") {
        let temp = products.sort((a, b) => a.price - b.price);
        ProductItems(temp);
    } else {
        let temp = products.sort((a, b) => b.price - a.price);
        ProductItems(temp);
    }
};

const HandleLikes = (order) => {
    if (order === "likesLTH") {
        let temp = products.sort((a, b) => a.likes - b.likes);
        ProductItems(temp);
    } else {
        let temp = products.sort((a, b) => b.likes - a.likes);
        ProductItems(temp);
    }
};

document.getElementById("likesLTH").addEventListener("click", () => HandleLikes("likesLTH"));
document.getElementById("likesHTL").addEventListener("click", () => HandleLikes("likesHTL"));

document.getElementById("priceLTH").addEventListener("click", () => HandleCost("priceLTH"));
document.getElementById("priceHTL").addEventListener("click", () => HandleCost("priceHTL"));
