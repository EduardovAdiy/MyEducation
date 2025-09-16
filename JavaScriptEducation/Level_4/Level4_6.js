import * as myFunc from '../MyFunctionList.js';
/**
 * - Сделайте функцию, которая параметром будет принимать дату в формате год-месяц-день, и определять, существует ли такая дата или нет.
 * - Сделайте функцию, которая сгенерирует строку заданной длины, заполненную случайными латинскими буквами.
 * - Сделайте функцию, которая параметром будет получать строку со словами, а возвращать строку в верхнем регистре, состоящую из первых букв слов.
 * - Сделайте функцию, которая параметром будет принимать массив с числами и заменять каждое число на массив его делителей.
 * - Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде следующего объекта:
{
	d: 12,
	h: 10,
	m: 59,
	s: 59,
}
 */
function getCheckDate (inputDate) {
    if(!isNaN(new Date(String(inputDate)))){
            console.log(`Введенная дата(${inputDate}) существует ...`);
        } else {
            console.log(`Введенная дата(${inputDate}) НЕ существует ...`);
        };
    return
};
async function getCreateRandomString (inputLength) {
    const charString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < inputLength; i++){
        const charIndex = await myFunc.getRandomNumber(0, 51);
        result = `${result}${charString[charIndex]}`;
    }
    return result;
};
function getStringWithFirstLetterUpper (inputString){
    let funcString = '';
    let arr = inputString.split(' ');
    for(let i in arr){
        funcString = `${funcString}${arr[i][0].toUpperCase()}`;
    };
    return funcString;
};
function getDelimeterArray (inputNumber){
    let arr = [];
    for(let i = 1; i <= (inputNumber/2); i++){
        if(inputNumber % 2 === 0){
            arr.push(i);
        }
    };
    arr.push(inputNumber);
    return arr;
};
function gerReplaceDelimetrArray (inputArray) {
    let arr = [];
    for(let i in inputArray){
        const delimeterArr = getDelimeterArray(inputArray[i]);
        arr.push(delimeterArr);
    };
    return arr;
};
function getGenerateObject (inputSecond) {
    let obj = {};
    let day = Math.trunc(inputSecond/60/60/24);
    let hour = Math.trunc((inputSecond - (day*24*60*60))/3600);
    let minute = Math.trunc((inputSecond - ((day*24*60*60) + (hour*3600)))/60);
    let second = Math.trunc(inputSecond - ((day*24*60*60) + (hour*3600) + (minute*60)));
    obj.d = day;
    obj.h = hour;
    obj.m = minute;
    obj.s = second;
    return obj;
}
//----------------- Блок работы ------------------
let repeatQuestion = 'Y';

while (repeatQuestion === 'Y'){
    const baseQuestion = `Выберите функция для работы:
 1 - Запустить функцию, которая параметром будет принимать дату в формате год-месяц-день, и определять, существует ли такая дата или нет.
 2 - Запустить функцию, которая сгенерирует строку заданной длины, заполненную случайными латинскими буквами.
 3 - Запустить функцию, которая параметром будет получать строку со словами, а возвращать строку в верхнем регистре, состоящую из первых букв слов.
 4 - Запустить функцию, которая параметром будет принимать массив с числами и заменять каждое число на массив его делителей.
 5 - Запустить функцию, которая параметром будет принимать секунды, а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде объекта.
Укажите номер функции которую требуется запустить: `;

    const inputValue = await myFunc.inputValidator(
        await myFunc.readLine(baseQuestion),
        input => (/^[1-5]$/).test(input),
        `Ошибка! Введено некорректное значение! ${baseQuestion}`
    );

    if(Number(inputValue) === 1){
        console.log('Вы выбрали фукнцию, которая параметром будет принимать дату в формате год-месяц-день, и определять, существует ли такая дата или нет ...');
        const checkDate = await myFunc.readLine('Введите дату в формате "ГГГГ-ММ-ДД": ');
        getCheckDate(checkDate);
    };

    if(Number(inputValue) === 2){
        console.log('Вы выбрали фукнцию, которая сгенерирует строку заданной длины, заполненную случайными латинскими буквами ...');
        console.log('Укажите необходимую длину строки: ');
        const textLength = await myFunc.getNumberValues(3,100);
        console.log(`Генерируем строку длиной ${textLength}`);
        const createString = await getCreateRandomString(Number(textLength));
        console.log(`Получена строка: ${createString}`);
    };
    
    if(Number(inputValue) === 3){
        console.log('Вы выбрали фукнцию, которая параметром будет получать строку со словами, а возвращать строку в верхнем регистре, состоящую из первых букв слов ...');
        const inputString = await myFunc.inputValidator(
            await myFunc.readLine('Введите строку с несколькими словами (не мене 3-х): '),
            input => (/^[A-Za-zА-Яа-я0-9]+(( |, )[A-Za-zА-Яа-я0-9]+){2,}$/).test(input),
            'Ошибка! Введены некорректные данные! Введите строку с несколькими словами (не мене 3-х): '
        );
        console.log('Генерируем новую строку ...');
        const newString = getStringWithFirstLetterUpper(inputString);
        console.log(`Получена новая строка: ${newString}`);
    };

    if(Number(inputValue) === 4){
        console.log('Вы выбрали фукнцию, которая параметром будет принимать массив с числами и заменять каждое число на массив его делителей ...');
        const inputArray = await myFunc.getArrayNumberValues();
        console.log('Получен массив чисел: ');
        console.log(String(inputArray).split(',').map(Number));
        console.log('Заменяем числа на массив их делителей ...');
        const newArr = gerReplaceDelimetrArray(String(inputArray).split(',').map(Number));
        console.log('Получен обновленный массив чисел: ');
        console.log(newArr);
    };

    if(Number(inputValue) === 5){
        console.log('Вы выбрали фукнцию, которая параметром будет принимать секунды, а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде объекта ...');
        console.log('Введите кол-во секунд (более 10 000); ');
        const inputSecond = await myFunc.getNumberValues(10000);
        console.log('Генерируем объект ...');
        const newObj = getGenerateObject(Number(inputSecond));
        console.log('Получен объект:');
        console.log(newObj);

    };

    console.log('---');

    repeatQuestion = await myFunc.inputValidator(
        await myFunc.readLine('Повторить работу (Y/N)?: '),
        input => (/^(Y|N)$/).test(input),
        'Ошибка! Введены некорректные данные! Повторить работу (Y/N)?: '
    );
};

process.exit(0);
