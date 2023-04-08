
// // birth dates
// let birthYear = document.querySelector("#userYear").value;
// let birthMonth = document.getElementById("month").value;
// let birthDay = document.getElementById("day").value;

// // storing the current date
// let date = new Date();
// let currentDay = date.getDate();
// let currentMonth = date.getMonth();
// let currentYear = date.getFullYear();

// //output

// let d = currentDay - birthDay;
// let m = currentMonth - birthMonth;
// let y = currentYear - birthYear;


// const input = document.querySelector("input");
// const button = document.getElementById("btn1");
// let output1 = document.querySelector("#currentYearData");
// let output2 = document.querySelector("#currentMonthData");




// button.addEventListener("click", function () {
//     console.log(birthYear);
// })
    
    
    
    // document.querySelector("currentDayData").textContent = "hello";
    // document.querySelector("currentDayData").textContent = d;
    // document.querySelector("currentYearData").textContent = "hello";







// let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// if (birthDay > currentDay){
//     currentDay = currentDay + month[currentMonth -1];
//     currentMonth = currentMonth - 1;
// }
// if (birthMonth > currentMonth){
//     currentMonth = currentMonth + 12;
//     currentYear = currentYear - 1;
// }



// this works
let button = document.querySelector('#btn1');
let userBirthYear = document.querySelector("#userYear");
let birthYear = ''

function year() {
    bYear = userBirthYear.value;
}

userBirthYear.addEventListener('input', year) 

function myFunction () {
    console.log(bYear);
}

button.addEventListener("click", myFunction);

