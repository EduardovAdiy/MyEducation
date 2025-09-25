'use strict';

function showSolutionWindow(formID) {
    document.getElementById(formID).className = '.popup-overlay-visible';
};

function hideSolutionWindow() {
    location.reload(0);
};

function isNumber(inputID) {
    let input = document.getElementById(inputID).innerHTML || document.getElementById(inputID).value;

    if(isNaN(Number(input)) === true) {
        alert('Введите число!');
        document.getElementById(inputID).innerHTML = input.substring(0, (input.length - 1));
        document.getElementById(inputID).value = input.substring(0, (input.length - 1));
    }
};

function getFactorial(inputID, outputID) {
    let input = document.getElementById(inputID).innerHTML || document.getElementById(inputID).value;
    const pi = Number(3.14159);
    const e = Number(2.718);
    let factorial = 1;

    for (let i = 2; i <= input; i++) {
        factorial = factorial * i;
    };

    let result = `Факториал числа ${input} равен ${factorial}`;

    document.getElementById(outputID).innerHTML = result;
    document.getElementById(outputID).value = result;
};

function getMaxNumber(inputID1, inputID2, outputID) {
    let num1 = document.getElementById(inputID1).innerHTML || document.getElementById(inputID1).value;
    let num2 = document.getElementById(inputID2).innerHTML || document.getElementById(inputID2).value;
    let max = Math.max(num1, num2);
    let result = `Число ${max} является наибольшим!`;

    document.getElementById(outputID).innerHTML = result;
    document.getElementById(outputID).value = result;
};

function getSumNumber(inputID, outputID) {
    let input =  document.getElementById(inputID).innerHTML || document.getElementById(inputID).value;
    let inputArr = String(input).split('').map(Number);
    let result = 0;

    for(let i in inputArr) {
        result = result + inputArr[i];
    };

    document.getElementById(outputID).innerHTML = `Сумма цифр числа ${input}  равна ${result}`;
    document.getElementById(outputID).value = `Сумма цифр числа ${input}  равна ${result}`;
};

function getReverseString(inputID, outputID) {
    let input =  document.getElementById(inputID).innerHTML || document.getElementById(inputID).value;
    let inputArr = String(input).split('');
    let result = '';

    for (let i in inputArr) {
        result = `${inputArr[i]}${result}`;
    };

    document.getElementById(outputID).innerHTML = `Итоговый текст: ${result}`;
    document.getElementById(outputID).value = `Итоговый текст: ${result}`;
};

function generateParagraph (inputID) {
    let cnt = Math.floor(Math.random() * 10);

    for (let i = 1; i <= cnt; i++) {
        let p = document.createElement('p');

        p.innerHTML = 'Автоматически сгенирированный пустой абзац: ';
        p.className = 'auto-gen';

        document.getElementById(inputID).appendChild(p);
    };
};

function getParagraphNum(inputClass) {
    let inputArr = document.getElementsByClassName(inputClass);

    for (let i in inputArr) {
        inputArr[i].innerHTML = `${inputArr[i].innerHTML} ${Number(i) + 1}`;
    };
};