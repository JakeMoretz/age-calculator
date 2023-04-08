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

    console.log(years);
    console.log(months);
    console.log(days);
}

const button = document.querySelector("#btn1");

button.addEventListener("click", calculateAge);
