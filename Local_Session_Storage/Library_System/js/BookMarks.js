import nav from "../components/nav.js";
document.getElementById("nav").innerHTML = nav()



document.addEventListener("DOMContentLoaded", () => {
    let bookmarkList = JSON.parse(localStorage.getItem("bookmark-list")) || [];

    const Bookmarks = () => {
        document.getElementById("books-tbody").innerHTML = "";

        bookmarkList.map((e) => {
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

            tr.append(book, author, description, addDate, category, price);

            document.getElementById("books-tbody").append(tr);
        });
    };

    Bookmarks();
});
