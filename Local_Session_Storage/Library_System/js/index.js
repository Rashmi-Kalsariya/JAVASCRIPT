
import nav from "../components/nav.js";

document.getElementById("nav").innerHTML = nav();


const BooksInfo = (e) =>{
    e.preventDefault();
    let Details = {
        book: document.getElementById("bname").value,
        author: document.getElementById("aname").value,
        description: document.getElementById("Desc").value,
        date: document.getElementById("date").value,
        category: document.getElementById("category").value,
        price: document.getElementById("price").value,
    }
    console.log(Details)
    let addedBooks = JSON.parse(localStorage.getItem('book-list')) || [];
    addedBooks.push(Details);
    localStorage.setItem('book-list', JSON.stringify(addedBooks));
    alert("Added Successfully!!");
}
document.getElementById("Book_info").addEventListener("submit",BooksInfo)


