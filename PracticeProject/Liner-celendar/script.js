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
    let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    let yearActual = new Date (year, month).getFullYear();

    monthData.textContent = months[month] + ' ' + yearActual;
};

function crateCelendar () {
    let daysOfWeek = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

    if(document.getElementById("table") != null) {
        document.getElementById("table").remove();
    };

    let table = document.createElement("table");
    table.id = "table";

    for(let day of daysOfWeek) {
        let th = document.createElement("th");
        th.textContent = day;
        table.appendChild(th);
    }

    addDaysToCelendar(table);

    celendar.appendChild(table);
};

function addDaysToCelendar(obj) {
    let lastDay = new Date (year, (month + 1), 0).getDate(); // last day of week
    let firstDayInWeek = new Date(year, month, 1).getDay();
    let arr = getDaysArr(lastDay);

    if(firstDayInWeek == 0) {
        firstDayInWeek = 7;
    };

    let neededDays = (firstDayInWeek - 1); //определяем сколько дней добавить в начало массива

    if (neededDays > 0) {
        for(let i = 0; i < neededDays; i++) {
            arr.unshift('');
        }
    };

    let k = Math.ceil(arr.length / 7); //определяем сколько строк будет;

    for (let i = 0; i < k; i++) {
        let tr = document.createElement("tr");
            for(let j = 0; j < 7; j++){
                let td = document.createElement("td");
                let elem = arr.shift();

                if(elem == '' || elem == undefined) {
                    td.className = "empty-td";
                    td.textContent = '';
                } else {
                    td.textContent = elem;
                    
                    let date = new Date(year, month, elem);
                    if(curDate.getFullYear() == date.getFullYear() && curDate.getMonth() == date.getMonth() && curDate.getDate() == date.getDate()) {
                        td.className = 'cur-date';
                    }
                };

                tr.appendChild(td);
            }

        obj.appendChild(tr);
    }
    
    
};

function getDaysArr (lastDay) {
    let arr = [];

    for (let i = 1; i <= lastDay; i++) {
        arr.push(i);
    };

    return arr;
};

getMonthName ();
crateCelendar ();