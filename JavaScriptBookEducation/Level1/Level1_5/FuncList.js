/*
- №1: Найдите сумму всех целых чисел от 1 до 100.
- №2: Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
- №3: Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
- №4: Даны два целых числа. Найдите остаток от деления первого числа на второе.
- №5: Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
*/

function allNumSum() {
    console.log('Запуск функции "allNumSum"...');
    let result = 0;

    for (let i = 1; i <= 100; i++) {
        result = Number(result) + Number(i);
    }
    console.log(`Сумма всех целых чисел от 1 до 100 равна ${result}. 
Работа функции "allNumSum" завершена...
-----------------`);
}

function allEvenNumSum() {
    console.log('Запуск функции "allEvenNumSum"...');
    let result = 0;

    for (let i = 1; i <= 100; i++) {
        if(i % 2 === 0){
            result = Number(result) + Number(i);
        }
    }
    console.log(`Сумма всех четных чисел от 1 до 100 равна ${result}. 
Работа функции "allEvenNumSum" завершена...
-----------------`);
}

function allNotEvenNumSum() {
    console.log('Запуск функции "allNotEvenNumSum"...');
    let result = 0;

    for (let i = 1; i <= 100; i++) {
        if(i % 2 !== 0){
            result = Number(result) + Number(i);
        }
    }
    console.log(`Сумма всех четных чисел от 1 до 100 равна ${result}. 
Работа функции "allNotEvenNumSum" завершена...
-----------------`);
}

function remainOfDivision (inputNumber1, inputNumber2) {
    console.log('Запуск функции "remainOfDivision"...');
    if(isNaN(inputNumber1) === true || isNaN(inputNumber2) === true ) {
        const result = '"Ошибка! Не все данные являются числовыми!"';
    } else {
        const result = (inputNumber1 % inputNumber2);
    };

    console.log(`Остаток от деления числа ${inputNumber1} на число ${inputNumber2} равен ${result}. 
Работа функции "remainOfDivision" завершена...
-----------------`);
}

function reverseStringOut (inputText) {
    console.log('Запуск функции "reverseStringOut"...');
    const textLen = (inputText.length - 1);
    let result = '';

    for (let i = textLen; i >= 0; i--) {
        result = `${inputText[i]}${result}`;
    };
    console.log(`Строка в обратном порядке: ${result}. 
Работа функции "reverseStringOut" завершена...
-----------------`);
}


export {allNumSum, allEvenNumSum, allNotEvenNumSum, remainOfDivision, reverseStringOut};
