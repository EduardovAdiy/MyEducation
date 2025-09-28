'use strict';

function checkDate (id) {
    let regEx = /^([0-9]|-)+$/;
    let inputDate = document.getElementById(id).value;

    if (!regEx.test(inputDate)) {
        alert('Вводимые данные не соответствуют маске "ГГГГ-ММ-ДД"!');
        document.getElementById(id).value = inputDate.substring(0, (inputDate.length - 1));
    };
};

function getNumberArr (id1, id2, outId) {
    let num1 = document.getElementById(id1).value;
    let num2 = document.getElementById(id2).value;
    let numMax = Math.max(num1, num2);
    let numMin = Math.min(num1, num2);
    let result = [];

    for(let i = numMin; i <= numMax; i++) {
        result.push(i);
    };

    document.getElementById(outId).innerHTML = `Получен массив чисел: [${result}]`;
};

function checkNum (id) {
    let num = document.getElementById(id).value;

    if (isNaN(Number(num))) {
        alert('Введите число!');
        document.getElementById(id).value = num.substring(0, (num.length - 1));
    };
};

function showForm(id) {
    document.getElementById(id).className = 'solution-visible';
};

function isDate(date) {
    return !isNaN(new Date(date));
};

function getDatePart(id) {
    let date = document.getElementById(id).value;
    let months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 
                'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

    if(isDate(date)) {
        document.getElementById('sol1ForYear').innerHTML = `Год: ${new Date(date).getFullYear()}`;
        document.getElementById('sol1ForMonth').innerHTML = `Месяц: ${months[new Date(date).getMonth()]}`;
        document.getElementById('sol1ForDay').innerHTML = `День: ${new Date(date).getDate()}`;
    } else {
        alert('Введенные данные не являются датой!');
        document.getElementById(id).value = '';
    };
};

function getLastChar (id, outId) {
    let string = document.getElementById(id).value;

    document.getElementById(outId).innerHTML = 'Последний символ: ' + string[(string.length - 1)];
};

function getNextNum (id) {
    let num = document.getElementById(id).innerHTML;
    let result = '';

    for (let i = 0; i < num.length; i++) {
        if(!isNaN(Number(num[i]))) {
            result = `${result}${num[i]}`;
        }
    };

    document.getElementById(id).innerHTML = `Абзац со счетчиком: ${Number(result) + 1}`;
};

function getWordCount(id, outId) {
    let data = document.getElementById(id).value;
    let arr = data.split(' ');

    document.getElementById(outId).innerHTML = `Кол-во слов: ${arr.length}`;
};