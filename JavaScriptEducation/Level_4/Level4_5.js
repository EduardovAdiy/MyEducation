import * as myFunc from '../MyFunctionList.js';
/**
 * - Дана переменная со строкой. Проверьте, что в эта строка представляет собой число, то есть состоит только из цифр.
 * - Дана переменная со строкой. Проверьте, что в эта строка представляет собой дробь.
 * - Сделайте функцию, которая параметром будет принимать массив с числами и возвращать второе по величине число.
 * - Сделайте функцию, которая параметрами будет принимать два числа и возвращать массив, заполненный целыми числами от минимального параметра до максимального.
 * - Сделайте функцию, которая заполнит массив случайными латинскими буквами.
 * - Сделайте функцию, которая будет возвращать сумму N первых чисел Фибоначчи.
 */

function getArraySecondSortNum (inputArray) {
    let innerArr = inputArray.sort((a, b) => a-b);

    return innerArr[innerArr.length - 2]; 
};

function getArrayFromRange (minValue, maxValue) {
    let arr = [];
    for(let i = minValue; i <= maxValue; i++){
        arr.push(i);
    }
    return arr;
};
async function getLatinLetterArray (arrayLength){
    const characterString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let arr = [];
    for(let i = 0; i < arrayLength; i++){
        const charIndex = await myFunc.getRandomNumber(0, 51);
        arr.push(characterString[charIndex]);
    };
    return arr;
};
function getSumNnumberFibo (inputCount){
    let fiboNumArray = [1,1];
    for(let i = 2; i < inputCount; i++){
        const nextValue = (Number(fiboNumArray[i-1]) + Number(fiboNumArray[i-2]));
        fiboNumArray.push(nextValue);
    };
    console.log('Сформирован массив чисел Фибоначчи:')
    console.log(fiboNumArray);
    const FiboSum = fiboNumArray.reduce((i, value) => i + value, 0);
    return FiboSum;
};
//--------------- Блок работы ----------------
let repeatQuestion = 'Y';

while (repeatQuestion === 'Y') {
    const baseQuestion = `Выберите вариант работы:
 1 - Дана переменная со строкой. Проверьте, что в эта строка представляет собой число, то есть состоит только из цифр.
 2 - Дана переменная со строкой. Проверьте, что в эта строка представляет собой дробь.
 3 - Сделайте функцию, которая параметром будет принимать массив с числами и возвращать второе по величине число.
 4 - Сделайте функцию, которая параметрами будет принимать два числа и возвращать массив, заполненный целыми числами от минимального параметра до максимального.
 5 - Сделайте функцию, которая заполнит массив случайными латинскими буквами.
 6 - Сделайте функцию, которая будет возвращать сумму N первых чисел Фибоначчи.
 Укажите номер функции для работы: `;
    const inputValue = await myFunc.inputValidator(
        await myFunc.readLine(baseQuestion),
        input => (/^[1-6]$/).test(input),
        `Ошибка! Введены некорректные данные! ${baseQuestion}`
    );

    if (Number(inputValue) === 1){
        console.log('Выбрана функция, которая проверяет, что строка состоит только из цифр ...');
        const inputText = await myFunc.getTextValues(5);
        console.log(`Введена строка: ${inputText} ...`);
        console.log('Проверяем, что данная строка состоит только из цифр ...');
        const isNumber = isNaN(inputText);
        if (isNumber === false){
            console.log('Данная строка состоит только из цифр ...');
        } else {
            console.log('Данная строка состоит из букв и цифр ...');
        }
    };

    if (Number(inputValue) === 2){
        console.log('Выбрана функция, которая проверяет, что строка представляет собой дробь ...');
        const floatNum = await myFunc.getTextValues();
        console.log(`Получена строка ${floatNum} ...
Проверяем, что введенная строка представляет собой дробь ...`);
        if(floatNum % 1 !== 0 && !isNaN(floatNum)) {
            console.log ('Данная строка является дробью ...');
        } else {
            console.log('Данная строка НЕ является дробью ...');
        }
    };

    if (Number(inputValue) === 3){
        console.log('Выбрана функция, которая параметром будет принимать массив с числами и возвращать второе по величине число ...');
        const inputArray = await myFunc.getArrayNumberValues();
        const arr = inputArray.toString().split(',').map(Number);
        console.log('Получен массив чисел: ');
        console.log(arr);
        console.log('осуществляем поиск второго по величине числа ...');
        console.log(`Вторым по величине числом является - ${getArraySecondSortNum(arr)}`);
    };

    if (Number(inputValue) === 4){
        console.log('Выбрана функция, которая параметрами будет принимать два числа и возвращать массив, заполненный целыми числами от минимального параметра до максимального ...');
        console.log('Введите минимальное значение для массива: ');
        const minValue = await myFunc.getNumberValues(3,10);
        console.log('Введите максимальное значение для массива: ');
        const maxValue = await myFunc.getNumberValues(15,30);
        console.log(`Генерируем массив целых чисел в диапазоне от ${minValue} до ${maxValue} ...`);
        console.log('Получен массив целых чисел: ');
        console.log(getArrayFromRange(minValue, maxValue));
    };

    if (Number(inputValue) === 5){
        console.log('Выбрана функция, которая заполнит массив случайными латинскими буквами ...');
        console.log('Укажите требуемую величину массива ...');
        const inputLength = await myFunc.getNumberValues(undefined, 30);
        console.log(`Генерируем массив длиной ${inputLength} символов ...`);
        const getArray = await getLatinLetterArray(inputLength);
        console.log('Получен массив латинских букв:');
        console.log(getArray);

    };

    if (Number(inputValue) === 6){
        console.log('Выбрана функция, которая будет возвращать сумму N первых чисел Фибоначчи ...');
        console.log('Введите кол-во первых чисел для суммирования:');
        const numberCount = await myFunc.getNumberValues(3, 20);
        console.log(`Осуществляем суммирования первых ${numberCount} чисел Фибоначчи ...`);
        const fiboSum = getSumNnumberFibo(numberCount);
        console.log(`Сумма первых ${numberCount} чисел Фибоначчи равна ${fiboSum}`);
    };

    console.log('---');

    repeatQuestion = await myFunc.inputValidator(
        await myFunc.readLine('Повторить работу (Y/N)?: '),
        input => (/^(Y|N)$/).test(input),
        'Ошибка! Введены некорректные данные! Повторить работу (Y/N)?: '
    );
};

process.exit(0);
