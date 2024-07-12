let push_data = JSON.parse(localStorage.getItem("push_data")) || [];
let user = JSON.parse(localStorage.getItem("user"));

if (user) {
    const uimaker = (filterCountry = 'All') => {

        document.getElementById("show_data").innerHTML = "";

        push_data.filter(item => filterCountry === 'All' || item.country === filterCountry)

            .map((item, index) => {
                let img = document.createElement("img");
                img.src = item.img;
                img.setAttribute("id", "img");

                let img_div = document.createElement("div");
                img_div.setAttribute("id", "news_img_div");
                img_div.append(img);

                let title = document.createElement("h6");
                title.innerHTML = `Title: ${item.title}`;

                let description = document.createElement("p");
                description.innerHTML = `Description: ${item.description}`;

                let country = document.createElement("h6");
                country.innerHTML = `Country: ${item.country}`;

                let btn1 = document.createElement("button");
                btn1.innerHTML = `Subscribe${item.count || 0}`;
                btn1.style.backgroundColor = "rgb(248, 133, 133)";

                btn1.addEventListener('click', () => {
                    item.count = (item.count || 0) + 1;
                    btn1.innerHTML = `Subscribe${item.count}`;
                    push_data[index] = item;
                    localStorage.setItem("push_data", JSON.stringify(push_data));
                    alert('You Subscribed This News Channel!!');
                });

                let btn2 = document.createElement("button");
                btn2.innerHTML = "SHARE";
                btn2.style.backgroundColor = "rgb(188, 88, 104)";
                btn2.style.color = "White"
                btn2.addEventListener('click', () => {
                    alert('You Shared This News');
                });

                let btn_div = document.createElement("div");
                btn_div.append(btn1, btn2);
                btn_div.setAttribute("id", "btn_div");

                let box = document.createElement("div");
                box.append(img_div, title, description, country, btn_div);
                box.setAttribute("id", "box");

                document.getElementById("show_data").append(box);
            });
    }

    const profile = () => {
        document.getElementById("profile").innerHTML = "";

        let img = document.createElement("img");
        img.src = user.img;
        img.setAttribute("id", "profile_img");

        let img_div = document.createElement("div");
        img_div.setAttribute("id", "profile_img_div");
        img_div.append(img);

        let name = document.createElement("h1");
        name.innerHTML = user.name;
        name.style.color = "white"
        name.className = "n"

        let email = document.createElement("h2");
        email.innerHTML = user.email;
        email.style.color = "white"
        email.className = "e"

        let country = document.createElement("h3");
        country.innerHTML = user.country;
        country.style.color = "white"
        country.className = "c"

        document.getElementById("profile").append(img_div, name, email, country);
    }

    const setupEventListeners = () => {

        document.querySelectorAll("#menu2 a").forEach(link => {

            link.addEventListener("click", (e) => {

                e.preventDefault();
                let country = e.target.id;
                uimaker(country);

            });

    });

        document.getElementById("dropdown").addEventListener("change", (e) => {
            let country = e.target.value;
            uimaker(country);
        });
    }


    uimaker();
    profile();
    setupEventListeners();

}
else {
    window.location.href = "/JAVASCRIPT/Local_Session_Storage/News_App/signup.html"
}