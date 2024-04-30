

const min = ()=>{
    let arr=[8,2,3,5,6,4,7,-0,9]
    let max=arr[0];
    
    for(let i=0;i<arr.length;i++){
    
        if (arr[i]<max) {
            max=arr[i];
        }
    }
    console.log(max);
}

min()


