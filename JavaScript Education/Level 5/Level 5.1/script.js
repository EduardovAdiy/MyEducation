'use strict';

function isNumber (inputID) {
    let inputText = document.getElementById(inputID).value;

    if (isNaN(Number(inputText)) === true) {
        alert ('Введите число!');
        document.getElementById(inputID).value = '';
    };
};

function getNumberSumToParagraph (inputID1, inputID2, idParagraph) {
    let firstNum = document.getElementById(inputID1).value || document.getElementById(inputID1).innerHTML;
    let secondNum = document.getElementById(inputID2).value || document.getElementById(inputID2).innerHTML;
    let result = `Сумма чисел равна: ${(Number(firstNum) + Number(secondNum)).toFixed(2)}`;
    document.getElementById(idParagraph).innerHTML = result;
};

function getClear() {
    location.reload();
};

function randomNum(inputID) {
    let randomNum = Math.floor(Math.random() * 100);
    document.getElementById(inputID).innerHTML = randomNum;
};

function getSqrtNum(inputID) {
    let num = document.getElementById(inputID).innerHTML || document.getElementById(inputID).value;
    document.getElementById(inputID).innerHTML = num**2;
    document.getElementById(inputID).value = num**2;
}
