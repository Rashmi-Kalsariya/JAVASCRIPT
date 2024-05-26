let day=document.getElementById("days");
let date=document.getElementById("date");
let hour=document.getElementById("hrs");
let minit=document.getElementById("min");
let second=document.getElementById("sec");

const Time =()=>{

    let time=new Date();

    let dayss=time.getDay();

    let days=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"]
    let months=['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOMBER','NOVEMBER','DECEMBER']

    day.innerHTML=days[dayss];
    
    let dd=time.getDate();
    let mm=time.getMonth();
    let yy=time.getFullYear();

    date.innerHTML=dd+" "+months[mm]+" "+yy;

    let hr=time.getHours();
    let min=time.getMinutes();
    let sec=time.getSeconds();

    if(hr>12){
        hr-=12
        document.getElementById("ampm").innerHTML="PM" 
    }
    else document.getElementById("ampm").innerHTML="AM"
    hr<10 ? hour.innerHTML="0"+hr:
            hour.innerHTML=hr;
    min<10 ? minit.innerHTML="0"+min:
            minit.innerHTML=min;
    sec<10 ? second.innerHTML="0"+sec:
           second.innerHTML=sec; 
    
}

setInterval(Time,100);