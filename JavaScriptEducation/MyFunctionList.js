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
    const inputArrayText = await myFunc.inputValidator(
            await myFunc.readLine('Введите массив цифр через запятую (1,2,3...): '),
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
    if(minValue === 0 && maxValue !== undefined) dopQuestion = ` (не более ${maxValue})`;
    if(minValue !== undefined && maxValue !== undefined) dopQuestion = ` (от ${minValue} до ${maxValue})`;

    const inputNumberText = await myFunc.inputValidator(
            await myFunc.readLine(`${baseQuestion}${dopQuestion}:`),
            input => (isNaN(input) === false && (input >= minValue || minValue === 0) && (input <= maxValue || maxValue === undefined)),
            `Ошибка! Введены некорректные данные! ${baseQuestion}${dopQuestion}: `
        );
    return inputNumberText.toNumber();
};
//Функция на запрос текста;
async function getTextValues (minValue, maxValue) {
    let baseQuestion = 'Введите произвольную строку';
    let dopQuestion = '';
    if(minValue !== undefined && maxValue === undefined) dopQuestion = ` (не менее ${minValue} символов)`;
    if(minValue === 0 && maxValue !== undefined) dopQuestion = ` (не более ${maxValue} символов)`;
    if(minValue !== undefined && maxValue !== undefined) dopQuestion = ` (от ${minValue} до ${maxValue} символов)`;

    const inputText = await myFunc.inputValidator(
            await myFunc.readLine(`${baseQuestion}${dopQuestion}:`),
            input => (isNaN(input) === true && (input.length >= minValue || minValue === 0) && (input.length <= maxValue || maxValue === undefined)),
            `Ошибка! Введены некорректные данные! ${baseQuestion}${dopQuestion}: `
        );
    return inputText.toString();
};
//Функция на запрос даты;
async function getDateValues () {
    let baseQuestion = 'Введите дату в формате "ГГГГ-ММ-ДД"';
 
    const inputDateText = await myFunc.inputValidator(
            await myFunc.readLine(`${baseQuestion}:`),
            input => (!isNaN(new Date(String(input)))),
            `Ошибка! Введены некорректные данные! ${baseQuestion}: `
        );
    let inputDate = new Date(inputDateText);
    
    return inputDate;
};


export {getRandomNumber, readLine, inputValidator, isBetween, getArrayNumberValues, getNumberValues, getTextValues, getDateValues};
