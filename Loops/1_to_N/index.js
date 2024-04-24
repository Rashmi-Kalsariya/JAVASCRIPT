

const print = () => {


    let num = document.getElementById("num").value
    let result = "";

    for (i = 1; i <= num; i++) {
        result += i + "<br>"
    }

    document.getElementById("result").innerHTML = result;
}


