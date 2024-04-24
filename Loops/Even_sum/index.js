

const Even_sum = (num) => {

    let sum = 0;
    for (i = 2; i <= num; i += 2) {
        sum += i;
    }
    return sum;
}


let num = 6;

let result = Even_sum(num);
console.log(result);

