import navbar from "../components/navbar.js"

document.getElementById("navbar").innerHTML = navbar();


let products = JSON.parse(localStorage.getItem("products")) || [];


const ProductItems = (data) => {
    document.getElementById("productList").innerHTML = "";

    data.map((e) => {
        let img = document.createElement("img")
        img.src = e.img

        let title = document.createElement("h2")
        title.innerHTML = e.title

        let price = document.createElement("p")
        price.innerHTML = e.price

        let Description = document.createElement("p")
        Description.innerHTML = e.Description

        let count = 0;

        let btn1 = document.createElement("button");
        btn1.innerHTML = "LIKE " + count;

        btn1.addEventListener("click", () => {
            count++;
            localStorage.setItem("count", count);
            btn1.innerHTML = "LIKE " + count;
            // alert('You Liked This Place!!');
        });

        let btn2 = document.createElement("button");
        btn2.innerHTML = "WISHLIST";
        btn2.addEventListener("click", () => {
            localStorage.setItem("Wishlist" , JSON.stringify(products));
            alert('Added to Wishlist!');
        });


        let div = document.createElement("div")

        div.append(img, title, price, Description, btn1, btn2)

        document.getElementById("productList").append(div);
    })
}

ProductItems(products);


const HandleCost=(order)=>{

    if(order == "priceLTH"){

        let temp = products.sort((a,b) => a.price - b.price)
        ProductItems(temp)
    }
    else{
        let temp = products.sort((a,b) => b.price - a.price)
        ProductItems(temp)
    }
}

document.getElementById("priceLTH").addEventListener("click" , ()=>HandleCost("priceLTH"))
document.getElementById("priceHTL").addEventListener("click" , ()=>HandleCost("priceHTL"))



const handleLikes = (order) => {
    let sortedProducts = [...products];
    if (order === "likesLTH") {
        sortedProducts.sort((a, b) => a.likes - b.likes);
    } else {
        sortedProducts.sort((a, b) => b.likes - a.likes);
    }
    ProductItems(sortedProducts);
};

document.getElementById("likesLTH").addEventListener("click", () => handleLikes("likesLTH"));
document.getElementById("likesHTL").addEventListener("click", () => handleLikes("likesHTL"));


