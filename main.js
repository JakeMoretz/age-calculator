
// birth dates
let birthYear = document.getElementById("#year").value;
let birthMonth = document.getElementById("month").value;
let birthDay = document.getElementById("day").value;

// storing the current date
let date = new Date();
let currentDay = date.getDate();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();
// let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// if (birthDay > currentDay){
//     currentDay = currentDay + month[currentMonth -1];
//     currentMonth = currentMonth - 1;
// }
// if (birthMonth > currentMonth){
//     currentMonth = currentMonth + 12;
//     currentYear = currentYear - 1;
// }

let d = currentDay - birthDay;
let m = currentMonth - birthMonth;
let y = currentYear - birthYear;

const input = document.querySelector("input");
const resultDay = document.querySelector("currentDayData");
const resultMonth = document.querySelector("currentMonthData");
const resultYear = document.querySelector("currentYearData");


console.log(currentDay);

