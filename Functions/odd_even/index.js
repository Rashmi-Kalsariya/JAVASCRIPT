

const odd_Even = () => {

    let n = document.getElementById("n").value

    if (n % 2 == 0) {
        document.getElementById("output").innerHTML = "It's an Even Number";
    }
    else {
        document.getElementById("output").innerHTML = "It's an Odd Number";
    }

}

