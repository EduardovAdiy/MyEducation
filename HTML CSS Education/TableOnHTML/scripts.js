'use strict';

function changeCssDisplayStyle (inputArray, inputValue) {
    for (let i in inputArray) {
        inputArray[i].style.display = inputValue;
    };
};

function displayTable() {
    let elements = document.getElementsByClassName("baseTable");
    changeCssDisplayStyle(elements, "block");
};

function hideTable() {
   let baseElements = document.getElementsByClassName("baseTable");
    changeCssDisplayStyle(baseElements, "none");

   let table = document.querySelector('#genTable');
    while (table.rows.length) {
        table.deleteRow(0);
    };
};

function generateTable() {
    let inputObj = getObjForTable();
    let headerArr = Object.keys(new Object (inputObj[0]));
    let table = document.querySelector('#genTable');

    while (table.rows.length) {
        table.deleteRow(0);
    };

    let tr = document.createElement('tr');
    for (let i in headerArr) {
        let th = document.createElement('th');
        th.textContent = headerArr[i];
        tr.appendChild(th);
    };
    table.appendChild(tr);

    for (let i in inputObj) {
        let obj = inputObj[i];

        tr = document.createElement('tr');
        for (let j in headerArr) {
            let td = document.createElement('td');
            td.textContent = obj[headerArr[j]];

            tr.appendChild(td);
        };
        table.appendChild(tr);
    };

    let elements = document.getElementsByClassName("genTable");
    changeCssDisplayStyle(elements, "block");
};

function getObjForTable () {
        let genArray = [
        {
        "Язык программирования": "C",
        "Год создания" : "1972",
        "Парадигма" : "Структурное, императивное",
        "Применение" : "Системное программирование, разработка игр, встраиваемые системы"
        },
        {
        "Язык программирования" : "C++",
        "Год создания" : "1985",
        "Парадигма" : "Расширенное C, объектно-ориентированное",
        "Применение" : "Системное программирование, разработка игр, высокопроизводительные приложения"
        },
        {
        "Язык программирования": "Java",
        "Год создания" : "1995",
        "Парадигма" : "Объектно-ориентированное, императивное",
        "Применение" : "Разработка веб-приложений, мобильных приложений, настольных приложений"
        },
        {
        "Язык программирования": "Python",
        "Год создания" : "1991",
        "Парадигма" : "Интерпретируемое, императивное, объектно-ориентированное",
        "Применение" : "Разработка веб-приложений, машинное обучение, научные вычисления, автоматизация"
        },
        {
        "Язык программирования": "JavaScript",
        "Год создания" : "1995",
        "Парадигма" : "Интерпретируемое, функциональное",
        "Применение" : "Разработка веб-приложений, создание интерактивных элементов на страницах"
        },
        {
        "Язык программирования": "PHP",
        "Год создания" : "1995",
        "Парадигма" : "Серверное, императивное, объектно-ориентированное",
        "Применение" : "Разработка веб-сайтов, динамических веб-приложений"
        },
        {
        "Язык программирования": "C",
        "Год создания" : "2000",
        "Парадигма" : "Объектно-ориентированное, императивное",
        "Применение" : "Разработка игр, веб-приложений, настольных приложений, мобильных приложений"
        },
        {
        "Язык программирования": "Go",
        "Год создания" : "2009",
        "Парадигма" : "Компилируемое, императивное",
        "Применение" : "Системное программирование, разработка веб-приложений, сетевые приложения"
        },
        {
        "Язык программирования": "Swift",
        "Год создания" : "2014",
        "Парадигма" : "Объектно-ориентированное, функциональное",
        "Применение" : "Разработка iOS-приложений, macOS-приложений"
        },
        {
        "Язык программирования": "Kotlin",
        "Год создания" : "2011",
        "Парадигма" : "Статически типизированное, объектно-ориентированное, функциональное",
        "Применение" : "Разработка Android-приложений, кроссплатформенных приложений"
        }
        ];

    return genArray;
};

let arr = getObjForTable();


console.log(new Object(arr[0])[headerArr[0]])

