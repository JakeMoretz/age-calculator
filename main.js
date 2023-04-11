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

//// validation

function validateFormDay() {
    let errorDay = document.querySelector(".dayError");
    let birthDay = document.getElementById("userDay").value;

    if (birthDay === "") {
        errorDay.textContent = "This Field is required";
        document.querySelector("#day1").style.color = "rgb(196, 59, 59)";
        document.querySelector(".input1").style.outline =
            "1px solid rgb(196, 59, 59)";
    }
    if (birthDay > 31 || birthDay <= 0) {
        errorDay.textContent = "Must be a valid date";
        document.querySelector("#day1").style.color = "rgb(196, 59, 59)";
        document.querySelector(".input1").style.outline =
            "1px solid rgb(196, 59, 59)";
    } else {
        document.querySelector("#day1").style.color = "white";
        document.querySelector(".input1").style.outline = "none";
        errorDay.textContent = "";
    }
}

function validateFormMonth() {
    let errorMonth = document.querySelector(".monthError");
    let birthMonth = document.getElementById("userMonth").value;

    if (birthMonth === "") {
        errorMonth.textContent = "This field is required";
        document.querySelector("#month1").style.color = "rgb(196, 59, 59)";
        document.querySelector(".input2").style.outline =
            "1px solid rgb(196, 59, 59)";
    }
    if (birthMonth > 12 || birthMonth <= 0) {
        errorMonth.textContent = "Must be a valid Month";
        document.querySelector("#month1").style.color = "rgb(196, 59, 59)";
        document.querySelector(".input2").style.outline =
            "1px solid rgb(196, 59, 59)";
    } else {
        document.querySelector("#month1").style.color = "white";
        document.querySelector(".input2").style.outline = "none";
        errorMonth.textContent = "";
    }
}

function validateFormYear() {
    let currentDate = new Date();
    let errorYear = document.querySelector(".yearError");
    let birthYear = document.getElementById("userYear").value;
    let currentYear = currentDate.getFullYear();

    if (birthYear === "") {
        errorYear.textContent = "This field is required";
        document.querySelector("#year1").style.color = "rgb(196, 59, 59)";
        document.querySelector(".input3").style.outline =
            "1px solid rgb(196, 59, 59)";
    }
    if (birthYear <= 1899 || birthYear > currentYear) {
        errorYear.textContent = "Must be a valid BirthYear";
        document.querySelector("#year1").style.color = "rgb(196, 59, 59)";
        document.querySelector(".input3").style.outline =
            "1px solid rgb(196, 59, 59)";
    } else {
        document.querySelector("#year1").style.color = "white";
        document.querySelector(".input3").style.outline = "none";
        errorYear.textContent = "";
    }
}

////////

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        validateFormDay();
        validateFormMonth();
        validateFormYear();
        yearData.textContent = calculateAge()[0];
        monthData.textContent = calculateAge()[1];
        dayData.textContent = calculateAge()[2];
    }
});
