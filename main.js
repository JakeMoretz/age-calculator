let years = "";
let months = "";
let days = "";

function calculateAge() {
    let birthYear = document.getElementById("userYear").value;
    let birthMonth = document.getElementById("userMonth").value;
    let birthDay = document.getElementById("userDay").value;

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();

    let years = currentYear - birthYear;
    let months = currentMonth - birthMonth;
    let days = currentDay - birthDay;

    if (days < 0) {
        months--;
        let daysInLastMonth = new Date(
            currentYear,
            currentMonth - 1,
            0
        ).getDate();
        days = daysInLastMonth + days;
    }
    if (months < 0) {
        years--;
        months = 12 + months;
    }

    return [years, months, days];
}

const button = document.querySelector("#btn1");
const input = document.querySelector("input");

const yearData = document.querySelector("#currentYearData");
const monthData = document.querySelector("#currentMonthData");
const dayData = document.querySelector("#currentDayData");

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        yearData.textContent = calculateAge()[0];
        monthData.textContent = calculateAge()[1];
        dayData.textContent = calculateAge()[2];
    }
});
