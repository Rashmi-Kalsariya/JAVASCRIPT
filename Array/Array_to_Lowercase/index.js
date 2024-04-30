const lower = ()=>{

let arr=["RED","AND","WHITE"];
let n=arr.length;
let lowarry=[];

for(let i=0 ;i<n;i++){
    lowarry[i]=arr[i];
    if(i%2!=0){
        lowarry[i]=arr[i].toLowerCase();
		arr[i]=lowarry[i]
    }
    console.log(lowarry[i]);
}
} 



lower()