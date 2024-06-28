
const ApiData = (data) => {
    data.map((ele) => {
        let image = document.createElement('img');
        image.src = ele.image;

        let title = document.createElement('h2');
        title.innerHTML = ele.title;

        let price = document.createElement("p")
        price.innerHTML = ele.price;

        let category = document.createElement("p")
        category.innerHTML = ele.category;

        let btn1 = document.createElement("button");
        btn1.innerHTML = "BUY"

        let btn2 = document.createElement("button");
        btn2.innerHTML = "CART"

        let div = document.createElement("div")
        div.append(image, title, price, category, btn1, btn2)

        document.getElementById("products").append(div)
    });
}



const getData = async () => {
    let req = await fetch("https://fakestoreapi.com/products");
    let res = await req.json();
    ApiData(res);
}


getData();
