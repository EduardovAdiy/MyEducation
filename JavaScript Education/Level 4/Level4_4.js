import * as myFunc from '../MyFunctionList.js';
/**
 * - Сделайте функцию, которая параметром будет принимать число, а возвращать количество его делителей.
 * - Сделайте функцию, которая параметром будет принимать дату, а возвращать знак зодиака, соответствующий этой дате.
 * - Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей.
 * - Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
 * - Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.
 * - Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.
 */

//Функция 1;
function getNumberDelimeterCount (inputNumber) {
    let delimeterCount = 0;
    for (let i = 1; i <= (inputNumber/2); i++) {
        if(inputNumber % i === 0) {
            delimeterCount = delimeterCount + 1;
        }
    };
    delimeterCount = delimeterCount + 1; //Т.к. каждое число делится само на себя;
    return Number(delimeterCount);
};
//Функция 2;
function getZodiakFromDate (inputDate) {
    const date = new Date(inputDate);
    const inputMonth = (date.getMonth() + 1);
    const inputDay = date.getDate();
    const zodiacArray = [
        {"name" : "Овен", "month" : 3},
        {"name" : "Телец", "month" : 4},
        {"name" : "Близнецы", "month" : 5},
        {"name" : "Рак", "month" : 6},
        {"name" : "Лев", "month" : 7},
        {"name" : "Дева", "month" : 8},
        {"name" : "Весы", "month" : 9},
        {"name" : "Скорпион", "month" : 10},
        {"name" : "Стрелец", "month" : 11},
        {"name" : "Козерог", "month" : 12},
        {"name" : "Водолей", "month" : 1},
        {"name" : "Рыбы", "month" : 2},
    ];
    let needMonth = inputMonth;
    if(inputDay < 21){
        needMonth = needMonth - 1;
        if(needMonth === 13){
            needMonth = 1;
        };
        if (needMonth === 0) {
            needMonth = 12;
        }
    };

    return zodiacArray.find(months => months.month === needMonth).name;
};
//Функция 3;
function getNumberDelimeterArray (inputNumber) {
    let delimeterArray = [];
    for(let i = 1; i <= (inputNumber/2); i++){
        if(inputNumber % i === 0){
            delimeterArray.push(i);
        }
    };
    delimeterArray.push(inputNumber);  //Т.к. каждое число делится само на себя;
    return delimeterArray;
};
//Функция 4;
function isPrimeNumber (inputNumber) {
    let delimeterCount = getNumberDelimeterCount(inputNumber);

    return (delimeterCount === 2);
};
//Функция 5;
function getDeleteEvenNum (inputNumber) {
    return String(inputNumber).split('').filter(element => element % 2 !== 0).join('');
};
//Функция 6;
async function getGenerateArray (elementCount, minValue, maxValue) {
    let innerArray = [];
    for(let i = 0; i<  elementCount; i++){
        const randomValue = await myFunc.getRandomNumber(minValue, maxValue);
        innerArray.push(randomValue);
    };
    return innerArray;
};
//------------- Блок работы с функциями ----------------
let repeatQuestion = 'Y';

while (repeatQuestion === 'Y') {
    let baseQuestion = `Выберите один из вариантов:
1 - Запустить функцию, которая параметром будет принимать число, а возвращать количество его делителей.
2 - Запустить функцию, которая параметром будет принимать дату, а возвращать знак зодиака, соответствующий этой дате.
3 - Запустить функцию, которая параметром будет принимать число, а возвращать массив его делителей.
4 - Запустить функцию, которая параметром будет принимать число и проверять, простое оно или нет.
5 - Запустить функцию, которая параметром будет принимать число и удалять из него четные цифры.
6 - Запустить функцию, которая заполнит массив N случайными числами из заданного промежутка.
 Укажите номер функции для запуска: `;

    const inputValue =  await myFunc.inputValidator (
        await myFunc.readLine(baseQuestion),
        input => (/^[1-6]$/).test(input),
        `Ошика! Введены некорректные данные! ${baseQuestion}`
    ); //Запрос номера функции для вызова;

    if(Number(inputValue) === 1){
        console.log('Вы выбрали функцию, которая параметром будет принимать число, а возвращать количество его делителей ...');
        const inputNumber = await myFunc.getNumberValues();
        console.log(`Введено число ${inputNumber} ...`);
        console.log('Начинаем подсчет кол-ва делителей ...');
        const delimeterCount = getNumberDelimeterCount(Number(inputNumber));
        console.log(`У данного числа ${delimeterCount} делителя(-ей) ...`)
    };

    if(Number(inputValue) === 2){
        console.log('Вы выбрали функцию, которая параметром будет принимать дату, а возвращать знак зодиака, соответствующий этой дате ...');
        const inputDateText = await myFunc.getDateValues();
        const inputDate = new Date(inputDateText);
        const inputDateString = `${inputDate.getDate()}.${(inputDate.getMonth() + 1)}.${inputDate.getFullYear()}`;
        console.log(`Получена дата ${inputDateString} ...`);
        console.log('Получаем знак зодиака по дате ...');
        const getZodiak = getZodiakFromDate(inputDate);
        console.log(`Введенной дате (${inputDateString}) соответствует следующий знак зодиака - ${getZodiak}`);
    };

    if(Number(inputValue) === 3){
        console.log('Вы выбрали функцию, которая параметром будет принимать число, а возвращать массив его делителей ...');
        const inputNumber = await myFunc.getNumberValues(100);
        console.log(`Получено число ${inputNumber} ...`);
        console.log(`Осуществляем поиск делителей ...`);
        const delimeterArr = getNumberDelimeterArray(Number(inputNumber));
        console.log(`Получен массив делителей ...`);
        console.log(delimeterArr);
    };

    if(Number(inputValue) === 4){
        console.log('Вы выбрали функцию, которая параметром будет принимать число и проверять, простое оно или нет ...');
        const inputNumber = await myFunc.getNumberValues(undefined, 200);
        console.log(`Получено число ${inputNumber} ...`);
        console.log('Проверяем простое ли данное число или нет ...');
        const isPrime = isPrimeNumber(Number(inputNumber));
        if(isPrime === true) {
            console.log(`Данное число ${inputNumber} является простым ...`);
        } else {
            console.log(`Данное число ${inputNumber} НЕ является простым ...`);
        }
    };

    if(Number(inputValue) === 5){
        console.log('Вы выбрали функцию, которая параметром будет принимать число и удалять из него четные цифры ...');
        const inputNumber = await myFunc.getNumberValues(1000);
        console.log(`Получено число ${inputNumber} ...
Удаляем из него четные числа ...`);
        const newNumberValue = getDeleteEvenNum(inputNumber);
        console.log(`Получено новое число ${newNumberValue} ...`);
    };

    if(Number(inputValue) === 6){
        console.log('Вы выбрали функцию, которая заполнит массив N случайными числами из заданного промежутка ...');
        console.log('Укажите максимальное число элементов массива: ');
        const elementCount = await myFunc.getNumberValues(5, 20);
        console.log('Укажите минимальное значение для генерации: ');
        const elementMin = await myFunc.getNumberValues();
        console.log('Укажите максимальное значение для генерации: ');
        const elementMax = await myFunc.getNumberValues();
        console.log('Генерируем массив ...');
        const getArray = await getGenerateArray(elementCount, elementMin, elementMax);
        console.log('Поулчен массив данных:');
        console.log(getArray);
    };

    console.log('---');

    repeatQuestion = await myFunc.inputValidator (
        await myFunc.readLine('Повторить работу (Y/N)?: '),
        input => (/^(Y|N)$/).test(input),
        'Ошика! Введены некорректные данные! Повторить работу (Y/N)?: '
    ); //Запрос на повторение работы;
};

process.exit(0);
