let products = JSON.parse(localStorage.getItem('products')) || [];

const delProducts = (id)=>{
    console.log(id);
    products.splice(id,1);
    uiMaker(products);
    localStorage.setItem("products", JSON.stringify(products));
}


const uiMaker = (data)=>{
    document.getElementById("products").innerHTML = "";
    data.map((e , index)=>{

        let img = document.createElement('img');
        img.src = e.img;

        let title = document.createElement('h2');
        title.innerHTML = e.title;

        let price = document.createElement('p');

        let category = document.createElement('span');
        category.innerHTML = e.category;

        let btn1 = document.createElement('button');
        btn1.innerHTML = "Delete";
        btn1.addEventListener('click', ()=> delProducts(index))

        let btn2 = document.createElement('button');
        btn2.innerHTML = "Buy";

        let div = document.createElement('div');
        div.append(img , title , price , category , btn1 , btn2);

        document.getElementById("products").append(div);
    })
}

uiMaker(products);