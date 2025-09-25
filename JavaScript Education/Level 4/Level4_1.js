import * as myFunc from '../MyFunctionList.js';
/**
 * - Сделайте функцию, которая вернет текущий день недели словом.
 * - Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, 
 * соответствующий этой дате.
 * - Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток,
 *  соответствующих этим секундам.
 * - Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку 
 * до длины, заданной первым параметром.
 * - Сделайте функцию, которая параметром будет получать дату, а возвращать знак зодиака, 
 * соответствующий этой дате.
 * - Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.
 */
//Функция для возврата дня недели прописью;
function daysOfWeekWord (inputNumber) {
    let daysOfWeekArray = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница' ,'Суббота']
    return daysOfWeekArray[inputNumber];
};
//Функция возвращающая день недели по дате;
function daysOfWeekFromDate (inputDate) {
    let dateValue = new Date(inputDate);
    return daysOfWeekWord(dateValue.getDay());
};
//Возвращает текущую дату прописью;
function getCurDate () {
    let now = new Date();
    return daysOfWeekWord(now.getDay());
};
//Преобразует секунды в сутки;
function secondToDays (inputSeconds) {
    let days = (inputSeconds/3600)/24;
    return Math.trunc(days);
};
//Обрезает сроку до длины, указаной первым параметром;
function substrToInputLen (inputNum, inputString) {
    return inputString.substring(0, inputNum);
};
//Функция возращающая знак зодиака по дате;
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
//Функция возвращающая сумму делителей числа;
function numberDelimeterSum (inputNumber){
    let delimeterSum = 0;
    for (let i = 1; i < (inputNumber/2); i++){
        if(inputNumber % 2 === 0){
            delimeterSum = delimeterSum + i;
        };
    };
    return delimeterSum;
};

/**
 * Базовая часть обработки работы с функциями
 */

let repeatQuestion = 'Y';

while (repeatQuestion === 'Y') {
const textForChoose = `Укажите какое действие необходимо выполнить:
1 - Запустить функцию, которая вернет текущий день недели словом;
2 - Запустить функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате;
3 - Запустить функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам;
4 - Запустить функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром;
5 - Запустить функцию, которая параметром будет получать дату, а возвращать знак зодиака, соответствующий этой дате;
6 - Запустить функцию, которая параметром будет принимать число, а возвращать сумму его делителей;
Введите цифру (1-6) необходимой функции: `;
const getNeedFunction = await myFunc.inputValidator(
    await myFunc.readLine(textForChoose),
    input => (/^[1-6]$/).test(input),
    `------------
Некорректное значение! ${textForChoose}`
);

if(Number(getNeedFunction) === 1){
    console.log('Вы выбрали функцию, которая вернет текущий день недели словом ...');
    console.log(`Сегодня ${getCurDate().toLowerCase()}!`);
};

if(Number(getNeedFunction) === 2){
    console.log('Вы выбрали функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате ...');
    const inputDate = await myFunc.inputValidator(
        await myFunc.readLine('Укажите необходимую дату в формате "ГГГГ-ММ-ДД": '),
        input => !isNaN(new Date(String(input))),
        'Ошибка! Введена некорректная дата! Укажите необходимую дату в формате "ГГГГ-ММ-ДД": '
    );
    console.log(`В тот день (${inputDate}) был следующий день недели - ${daysOfWeekFromDate(inputDate).toLowerCase()}.`);
};

if(Number(getNeedFunction) === 3){
    console.log('Вы выбрали функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам ...');
    const inputSecond = await myFunc.inputValidator(
        await myFunc.readLine('Введите кол-во секунд: '),
        input => (/^[0-9]{1,}$/).test(input),
        'Ошибка! Некорректные данные! Введите кол-во секунд: '
    );
    console.log(`Введенное кол-во секунд (${inputSecond}) соответствует ${secondToDays(inputSecond)} суткам.`);
};

if(Number(getNeedFunction) === 4){
    console.log('Вы выбрали функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром ...');
    const inputNumber = await myFunc.inputValidator(
        await myFunc.readLine('Введите число (от 2 до 15): '),
        input => (input >= 2 && input <= 15),
        'Ошибка! Некорректные данные! Введите число (от 2 до 15): '
    );
    const inputText = await myFunc.inputValidator(
        await myFunc.readLine('Введите произвольную строку (не менее 5 символов): '),
        input => (isNaN(input) === true && input.length >= 5),
        'Ошибка! Некорректные данные! Введите произвольную строку (не менее 5 символов): '
    );
    console.log(`Введена строка: ${inputText} ...`);
    console.log(`Обрезаем строку до ${inputNumber} символов ...`);
    console.log(`Получена новая строка: ${substrToInputLen(inputNumber, inputText)}.`);
};

if(Number(getNeedFunction) === 5){
    console.log('Вы выбрали функцию, которая параметром будет получать дату, а возвращать знак зодиака, соответствующий этой дате ...');
    const inputDate2 = await myFunc.inputValidator(
        await myFunc.readLine('Укажите необходимую дату в формате "ГГГГ-ММ-ДД": '),
        input => !isNaN(new Date(String(input))),
        'Ошибка! Введена некорректная дата! Укажите необходимую дату в формате "ГГГГ-ММ-ДД": '
    );
    console.log(`Введенной дате (${inputDate2}) соответствует следующий знак зодиака - ${getZodiakFromDate(inputDate2)}.`);
};

if(Number(getNeedFunction) === 6){
    console.log('Вы выбрали функцию, которая параметром будет принимать число, а возвращать сумму его делителей ...');
    const inputNumber2 = await myFunc.inputValidator(
        await myFunc.readLine('Введите число: '),
        input => (/^[0-9]+$/).test(input),
        'Ошибка! Введены некорректные данные! Укажите число: '
    );
    console.log(`Сумма делителей числа ${inputNumber2} равна ${numberDelimeterSum(inputNumber2)}`);
};

console.log('----------------');
repeatQuestion = await myFunc.inputValidator(
        await myFunc.readLine('Повторить запрос данных (Y/N): '),
        input => (/^(Y|N)$/).test(input),
        'Ошибка! Введены некорректные данные! Повторить запрос данных (Y/N): '
    );
};

process.exit(0);
