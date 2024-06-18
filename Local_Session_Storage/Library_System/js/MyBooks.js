import nav from "../components/nav.js";
document.getElementById("nav").innerHTML = nav()


let buyList = JSON.parse(localStorage.getItem("buy-list")) || []

const ShowBuyBooks = () => {
    document.getElementById("books-tbody").innerHTML = "";

    buyList.map((e) => {
        let tr = document.createElement("tr");
        let book = document.createElement("td");
        book.innerHTML = e.book;
        let author = document.createElement("td");
        author.innerHTML = e.author;
        let description = document.createElement("td");
        description.innerHTML = e.description;
        let addDate = document.createElement("td");
        addDate.innerHTML = e.addDate;
        let category = document.createElement("td");
        category.innerHTML = e.category;
        let price = document.createElement("td");
        price.innerHTML = e.price;

        tr.append(book, author, description, addDate, category, price)
        document.getElementById("books-tbody").append(tr)
    })

    let count = document.getElementById("book-count");
    if (count) {
        count.innerHTML = buyList.length.toString();
    }
}

ShowBuyBooks()