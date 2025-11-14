'use strict';

let curDate = new Date();
let curDay = curDate.getDate();
let month = curDate.getMonth();
let year = curDate.getFullYear();

let monthData = document.getElementById("month-data");
let prevMonth = document.getElementById("prev-month");
let nextMonth = document.getElementById("next-month");
let celendar = document.getElementById("celendar");

prevMonth.addEventListener("click", getPrevMonth);
nextMonth.addEventListener("click", getNextMonth);

function getPrevMonth () {
    setPrevMonth();
    getMonthName ();
};

function getNextMonth () {
    setNextMonth();
    getMonthName ();
};


function getMonthLastDay() {
    return new Date(year, (month + 1), 0).getDate();
};

function setNextMonth() {
    let nextMonth = month + 1;
    
    changeMonth(nextMonth);

    return;
};

function setPrevMonth() {
    let prevMonth = month - 1;

    changeMonth(prevMonth);

    return;
};

function changeMonth(inMonth) {
    let data = new Date(year, inMonth);

    month = data.getMonth();
    year = data.getFullYear();

    crateCelendar ();
}

function getMonthName () {
    let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Март', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    let yearActual = new Date (year, month).getFullYear();

    monthData.textContent = months[month] + ' ' + yearActual;
};

function crateCelendar () {
    let daysOfWeek = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

    let table = document.createElement("table");

    for(let day of daysOfWeek) {
        let th = document.createElement("th");
        th.textContent = day;
        table.appendChild(th);
    }

    celendar.appendChild(table);
}

getMonthName ();
crateCelendar ();