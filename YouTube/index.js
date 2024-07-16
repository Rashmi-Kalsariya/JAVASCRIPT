
const ShowonUi = (data) => {

    data.map((e) => {
        let title = document.createElement('h2');
        title.innerHTML = e.title;

        let price = document.createElement("p");
        price.innerHTML = `$${e.price}`;

        let category = document.createElement("p");
        category.innerHTML = e.category;
    })


    div.append(title, price, category);

    document.getElementById("data").append(div);

}

const getData = async () => {
    let req = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&q=YouTube+Data+API&type=video&key=AIzaSyBv_z3DXLPP0UAd3D-Q6K7K4qsDGRxBuiI");
    let res = await req.json();
 
    console.log(res);


}

getData();

ShowonUi()