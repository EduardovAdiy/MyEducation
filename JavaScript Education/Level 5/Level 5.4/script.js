'use strict';

function showForm(inputId) {
    document.getElementById(inputId).className = 'solution-visible';
};

function hideForm(inputId) {
    document.getElementById(inputId).className = 'solution';
};

function getRandomNumber () {
    let num = 0;

    while (num === 0) {
        num = Math.floor(Math.random() * 10);
    };

    return num;
}
 
function generatePar (inputId) {
    let k = getRandomNumber();

    for (let i = 1; i <= k; i++) {
        let p = document.createElement('p');

        p.innerHTML = `Автоматически сгенерированный абзац!`;
        p.id = `${inputId}P_${i}`;
        p.setAttribute ('onclick', `replacePargrphValue ('${p.id}')`);

        document.getElementById(inputId).appendChild(p);
    };
};

function replacePargrphValue (innerId) {
    document.getElementById(innerId).innerHTML = '!';
};

function generateHref (inputId) {
    let k = getRandomNumber();

    for (let i = 1; i <= k; i++) {
        let href = document.createElement('a');

        href.innerHTML = `Автоматически сгенерированная ссылка ${i}!`;
        href.href = `#${i}`;
        href.className = 'gen-sol2';

        let br = document.createElement('br');

        document.getElementById(inputId).appendChild(href);
        document.getElementById(inputId).appendChild(br);
    };
};

function showHrefArr(innerClass, outputId) {
    let arr = document.getElementsByClassName(innerClass);
    let outArr = [];
    let len = arr.length;

    console.log(arr);
    for (let i = 0; i < len; i++) {
        let hrefVal = arr[i].getAttribute('href');
        outArr.push(hrefVal);
        console.log(hrefVal);
    };
    console.log (outArr)

    document.getElementById(outputId).innerHTML = `Массив ссылк:[${outArr}]`;
};

function generatePrgrphValue(outputId) {
    let result = '';

    for (let i = 1; i < 10; i++) {
        result = `${result}${i}`;
    };

    document.getElementById(outputId).innerHTML = result;
};

function showCurDate(innerClass) {
    let arr = document.getElementsByClassName (innerClass);
    let curDate = new Date();
    let months = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];

    arr[0].innerHTML = `Текущий год: ${curDate.getFullYear()}`;
    arr[1].innerHTML = `Текущий месяц: ${months[curDate.getMonth()]}`;
    arr[2].innerHTML = `Текущий день: ${curDate.getDate()}`;
};

function showHref(innerId, outputId) {
    let href = document.getElementById(innerId);
    href = href.getAttribute('href');

    console.log(href);

    document.getElementById(outputId).innerHTML = `Ссылка: ${href}`;
};