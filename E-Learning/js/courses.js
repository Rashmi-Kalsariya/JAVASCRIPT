
import navbar from "../components/nav.js";
import { CourseAPI } from "../API/user.api.js";


document.getElementById("navbar").innerHTML = navbar();

let CourseDetails = JSON.parse(localStorage.getItem("CourseData"));


const GetCourseData = async (e) => {

    e.preventDefault();

    let courses = {
        title: document.getElementById("title").value,
        image: document.getElementById("img").value,
        Topic: document.getElementById("AddTopic").value,
        SubTopic: document.getElementById("CreateTopic").value,
        Duration: document.getElementById("Duration").value,
        Price: document.getElementById("price").value,
        Seats: document.getElementById("seat").value,
        code: document.getElementById("code").value
    };

    localStorage.setItem("CourseData", JSON.stringify(courses));
    window.location.href = "/index.html"

    CourseAPI.post(courses);
};

document.getElementById("CourseData").addEventListener("submit", GetCourseData)

