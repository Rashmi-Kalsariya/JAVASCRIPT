
import nav from "../components/nav.js";
document.getElementById("nav").innerHTML = nav()

let data = JSON.parse(localStorage.getItem("book-list")) || []

const BookDetails = () => {
    document.getElementById("tbody").innerHTML = "";

    data.map((e, index) => {
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

        let buy = document.createElement("td");
        let Buy = document.createElement("button");
        buy.append(Buy)
        Buy.innerHTML = "Buy"
        Buy.className="buy"

        let bookmark = document.createElement("button");
        let mark = document.createElement("tr");
        mark.append(bookmark)
        bookmark.innerHTML = "Add"
        bookmark.className="mark"

        book.innerHTML = e.book
        author.innerHTML = e.author
        description.innerHTML = e.description
        addDate.innerHTML = e.date
        category.innerHTML = e.category
        price.innerHTML = e.price

        tr.append(book, author, description, addDate, category, price, buy, mark)

        Buy.addEventListener("click", () => {
            data.splice(index, 1);
            localStorage.setItem("book-list", JSON.stringify(data));

            let buyList = localStorage.getItem("buy-list");
            
            let BuyList = buyList ? JSON.parse(buyList) : [];
            e.addDate = e.date
            BuyList.push(e);
            localStorage.setItem("buy-list", JSON.stringify(BuyList));

            BookDetails();
        });

        mark.addEventListener("click", () => {
            data.splice(index, 1);
            localStorage.setItem("book-list", JSON.stringify(data));

            let bookmarkList = localStorage.getItem("bookmark-list");
            let BookmarkList = bookmarkList ? JSON.parse(bookmarkList) : [];
            e.addDate = e.date
            BookmarkList.push(e);
            localStorage.setItem("bookmark-list", JSON.stringify(BookmarkList));

            BookDetails();
        });

        document.getElementById("tbody").append(tr)
    })
}
BookDetails()
