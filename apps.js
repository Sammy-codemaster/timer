let yearElement = document.querySelector(".year");
let monthElement = document.querySelector(".month");
let dayElement = document.querySelector(".day");
let hourElement = document.querySelector(".hour");
let minElement = document.querySelector(".min");
let secElement = document.querySelector(".sec");




function activateTime(){
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();


    if (min < 10){
        min = "0" +min;
    }


    yearElement.innerHTML= year;
    monthElement.innerHTML = month;
    dayElement.innerHTML = day;
    hourElement . innerHTML =hour;
    minElement . innerHTML = min;
    secElement.innerHTML =sec;



    
}

setInterval(()=>{
    activateTime()
},1000)