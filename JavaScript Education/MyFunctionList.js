import readline from 'node:readline';

//Рандомайзер чисел в заданном диапазоне;
async function getRandomNumber (startNum, endNum) {
    let startNumber = startNum;
    let endNumber = endNum;
    let middleNumber = 0;
    let isNegativeNumber = 0;
    //Проверка на строку для startNumber;
    if (isNaN(startNumber) === true) {
        startNumber = 0;
    };
    //Проверка на строку для endNumber;
    if (isNaN(endNumber) === true) {
        endNumber = 100;
    };
    //Проверка на то, что endNumber больше startNumber;
    if(startNumber > endNumber) {
        middleNumber = endNumber;
        endNumber = startNumber;
        startNumber = middleNumber;
    };
    //Проверка на наличие отрицательных чисел;
    if(startNumber < 0 || endNumber < 0){
        isNegativeNumber = 1;
    };
    //Рандомизируем данные;
    const min = Math.ceil(startNumber); // округляем до ближайшего большего целого  
    const max = Math.floor(endNumber); // округляем до ближайшего меньшего целого  
    const result = Math.floor(Math.random() * (max - min + 1)) + min;  

    return result;
};
//Создаем пользовательский интерфейс;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Функция для ввода данных;
async function readLine(inputText) {
    return new Promise(resolve => {
        rl.question(inputText, answer => { resolve(answer); });
    });
};
//Функция ввода данных с валидатором и обработчиком ошибок;
async function inputValidator (input, validator, errorQuery) {
    if(validator(input) === true) {
        return input;
    }
    else {
        const errorResult = await readLine(errorQuery);
        return await inputValidator(errorResult, validator, errorQuery);     
    }
};
//Функция для проверка вхождения числа в промежуток;
async function isBetween(inputValue, startValue, endValue) {
    if(inputValue >= startValue && inputValue <= endValue){
        return true;
    } else {
        return false;
    }
}
//Функция на запрос массива;
async function getArrayNumberValues () {
    const inputArrayText = await inputValidator(
            await readLine('Введите массив цифр через запятую (1,2,3...): '),
            input => (/^[0-9]+((,|, )[0-9]+){2,}$/).test(input),
            'Ошибка! Введены некорректные данные! Введите массив цифр через запятую (1,2,3...): '
        );
    return inputArrayText.split(',').map(Number);
};
//Функция на запрос числа;
async function getNumberValues (minValue, maxValue) {
    let baseQuestion = 'Введите число';
    let dopQuestion = '';
    if(minValue !== undefined && maxValue === undefined) dopQuestion = ` (не менее ${minValue})`;
    if((minValue === 0 || minValue === undefined) && maxValue !== undefined) dopQuestion = ` (не более ${maxValue})`;
    if(minValue !== undefined && maxValue !== undefined) dopQuestion = ` (от ${minValue} до ${maxValue})`;

    const inputNumberText = await inputValidator(
            await readLine(`${baseQuestion}${dopQuestion}: `),
            input => (isNaN(input) === false && (input >= minValue || minValue === 0 || minValue === undefined) && (input <= maxValue || maxValue === undefined)),
            `Ошибка! Введены некорректные данные! ${baseQuestion}${dopQuestion}: `
        );
    return Number(inputNumberText);
};
//Функция на запрос текста;
async function getTextValues (minValue, maxValue) {
    let baseQuestion = 'Введите произвольную строку';
    let dopQuestion = '';
    if(minValue !== undefined && maxValue === undefined) dopQuestion = ` (не менее ${minValue} символов)`;
    if((minValue === 0 || minValue === undefined) && maxValue !== undefined) dopQuestion = ` (не более ${maxValue} символов)`;
    if(minValue !== undefined && maxValue !== undefined) dopQuestion = ` (от ${minValue} до ${maxValue} символов)`;

    const inputText = await inputValidator(
            await readLine(`${baseQuestion}${dopQuestion}: `),
            input => (isNaN(input) === true && (input.length >= minValue || minValue === 0 || minValue === undefined) && (input.length <= maxValue || maxValue === undefined)),
            `Ошибка! Введены некорректные данные! ${baseQuestion}${dopQuestion}: `
        );
    return String(inputText);
};
//Функция на запрос даты;
async function getDateValues () {
    let baseQuestion = 'Введите дату в формате "ГГГГ-ММ-ДД"';
 
    const inputDateText = await inputValidator(
            await readLine(`${baseQuestion}: `),
            input => (!isNaN(new Date(String(input)))),
            `Ошибка! Введены некорректные данные! ${baseQuestion}: `
        );
    let inputDate = new Date(inputDateText);

    return inputDate;
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

export {getRandomNumber, readLine, inputValidator, isBetween, getArrayNumberValues, getNumberValues, getTextValues, getDateValues, getZodiakFromDate};
