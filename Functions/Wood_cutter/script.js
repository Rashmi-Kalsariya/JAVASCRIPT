

const Divide = () => {
    let n = document.getElementById("n").value
    if (n % 3 === 0) {
        document.getElementById("output").innerHTML = "Yes";
    } else {
        document.getElementById("output").innerHTML = "No";
    }
}
