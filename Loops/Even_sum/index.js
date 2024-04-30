


const showEvenSum=() =>{
    const num = document.getElementById("num").value;
    const sum = Even_sum(num);
    document.getElementById("result").innerHTML = sum;
}

const Even_sum = (num) => {
    let sum = 0;
    for (let i = 2; i <= num; i += 2) {
        sum += i;
    }
    return sum;
}
