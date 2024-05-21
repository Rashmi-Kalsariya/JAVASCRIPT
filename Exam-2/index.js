/* FOR SALE */

const Count = ()=> {
    let countDownDate = new Date().getTime() + (15 * 60 * 1000); 

    let time = setInterval(() => {
        let now = new Date().getTime();
        let distance = countDownDate - now;

        if (distance > (15 * 60 * 1000)) {
            countDownDate = now + (15 * 60 * 1000); 
            distance = countDownDate - now; 
        }

        let minutes = Math.floor(distance / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("Time").innerHTML = "Sale 50% Off" + "<br>" + minutes + " min " + seconds + " sec left" + "<br>" + "BUY NOW";

        if (distance <= 0) {
            clearInterval(time);
            document.getElementById("Time").innerHTML = "EXPIRED";
        }
    }, 1000);
}

Count(); 


/* Products */


let products = []

const uiMaker = () => {
    document.getElementById("Products").innerHTML = ""
    products.map((ele, i) => {

        let title = document.createElement("h3")
        title.innerHTML = ele.title
        title.style.color = "white"

        let img = document.createElement("img")
        img.src = ele.img

        let price = document.createElement("p")
        price.innerHTML = ele.price
        price.style.color = "white"


        let div = document.createElement("div")
        let Del = document.createElement("button");
        Del.innerHTML = "Delete";
        Del.style.cursor = "pointer";
        Del.style.height = "30px";
        Del.style.width = "60px"
        Del.style.padding = "5px"
        Del.style.margin = "5px"
        Del.style.backgroundColor = "red"
        Del.style.color = "white"
        Del.style.fontWeight = "700"
        Del.addEventListener("click", () => {
            products.splice(i, 1);
            uiMaker();
        });

        let Buy = document.createElement("button");
        Buy.innerHTML = "Buy";
        Buy.style.cursor = "pointer";
        Buy.style.height = "30px";
        Buy.style.width = "60px"
        Buy.style.padding = "5px"
        Buy.style.margin = "5px"
        Buy.style.fontWeight = "700"
        Buy.style.color = "white"
        Buy.style.backgroundColor = "blue"
        Buy.addEventListener("click", () => {
            alert("You have bought: " + ele.title);
        });

        div.append(img, title, price, Del, Buy);
        title.setAttribute("class", "title");
        document.getElementById("Products").append(div);
    });

}

const submit = (e) => {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let img = document.getElementById('img').value;
    let price = document.getElementById('price').value;


    let product = {
        title: title,
        img: img,
        price: price
    }

    products.push(product);
    uiMaker()
}


document.getElementById("DataAdd").addEventListener("submit", submit);
