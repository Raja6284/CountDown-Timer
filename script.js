const endDate = "5 June 2024 3:00 PM";

document.getElementById("end_date").innerHTML = endDate;

const inputs = document.querySelectorAll("input");

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    console.log("end time is " + end);
    console.log("now the time is "+ now);

    const diff = (end-now)/1000;
    console.log(diff);

    if(diff < 0) return;

    inputs[0].value = Math.floor(diff/3600/24) ;
    console.log(inputs[0].value);
    inputs[1].value = Math.floor(diff/3600) % 24;
    console.log(inputs[1].value);
    inputs[2].value = Math.floor(diff/60) % 60;
    console.log(inputs[2].value);
    inputs[3].value = Math.floor(diff%60);
    console.log(inputs[3].value);
}

//initial call
clock();

//calling after every 1 second
setInterval(()=>{
    clock()
},1000);
