let count1 = localStorage.getItem('count1');
document.getElementById("like").innerHTML = count1 || 0;

let count2 = localStorage.getItem('count2');
document.getElementById("comt").innerHTML = count2 || 0;

let count3 = sessionStorage.getItem('count3');
document.getElementById("share").innerHTML = count3 || 0;

let count4 = localStorage.getItem('count4');
document.getElementById("subcrb").innerHTML = count4 || 0;


const counter1 = () => {
    count1++;

    document.getElementById("like").innerHTML = count1;

    localStorage.setItem("count1", count1);
    alert('You Liked This Post!!');
}

const counter2 = () => {
    count2++;

    document.getElementById("comt").innerHTML = count2;

    localStorage.setItem("count2", count2);
    alert('You Have Commented On this Post.');
}

const counter3 = () => {
    count3++;

    document.getElementById("share").innerHTML = count3;
    alert('You Shared The post!');
    sessionStorage.setItem("count3", count3);
}

const counter4 = () => {
    count4++;

    document.getElementById("subcrb").innerHTML = count4;

    localStorage.setItem("count4", count4);
    alert('Successfully Subscribed!!');
}

document.querySelector(".fa-bell").addEventListener("click", counter4);
document.querySelector(".fa-share-nodes").addEventListener("click", counter3);
document.querySelector(".fa-comment").addEventListener("click", counter2);
document.querySelector(".fa-heart").addEventListener("click", counter1);