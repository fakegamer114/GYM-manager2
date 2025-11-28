
console.log("welcom to consol")

const dayOfWeek = new Date().getDay();

if (dayOfWeek === 1){ 
    document.getElementById("day1").classList.add("active");
    let x = document.getElementById("curent");
    x.innerText = "DAY1";
    console.log("day 1 active")
}
if (dayOfWeek === 3){ 
    document.getElementById("day2").classList.add("active");
    let x = document.getElementById("curent");
    x.innerText = "DAY2";
    console.log("day 2 active")
}
if (dayOfWeek === 5){ 
    document.getElementById("day3").classList.add("active");
    let x = document.getElementById("curent");
    x.innerText = "DAY3";
    console.log("day 3 active")
}