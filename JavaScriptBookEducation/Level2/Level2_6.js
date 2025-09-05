import * as myFunc from '../MyFunctionList.js';
/**
 * - Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.
 * - Дан массив с некоторыми числами ([123, 456, 789]). Напишите код, который перевернет числа в этом массиве 
 * по следующему принципу: [321, 654, 987]
 * - Дана некоторая строка с числом: '1234567'. Отделите тройки цифр пробелами, начиная с конца числа. 
 * В нашем случае должно получится следующее: '1 234 567'
 * - Дана некоторая строка. Смените регистр букв этой строки на противоположный.
 * - Дан некоторый массив с числами, например, вот такой: [1, 2, 3, 4, 5, 6]. Слейте пары элементов вместе: [12, 34, 56]
 * - Дана некоторая строка со словами. Сделайте заглавным первый символ каждого второго слова в этой строке.
 */

console.log('Запрос строки у пользователя ...');
const inputString = await myFunc.inputValidator(
    await myFunc.readLine('Введите произволную строку с комбинацией цифр и букв (не менее 5 символов): '),
    input => (input.length > 4),
    'Длина строки не соответствует требуемой! Введите данные повторно: '
); //Ввод данных пользователем;
console.log(`Получена следующая строка: ${inputString}`);
console.log('Формируем массив с данными позиций всех цифр в строке ...');
let arrayNumPosition = []; //Объявляем массив;

for (let i = 0; i < inputString.length; i++){
    if(isNaN(Number(inputString[i])) === false){
        arrayNumPosition.push((i + 1)); //Вносим данные в массив, если число;
    }
};

console.log('Получен следующий массив позиций ...');
console.log(arrayNumPosition);
console.log('---'); //Delimeter;

//Сменяем регистр букв на противоположный;
console.log('Приступаем к смене регистра букв базовой строки на противоположный ...');
let newCaseString = ''; //Переменная для хранения данных новой строки;

for(let i = 0; i < inputString.length; i++){
    if(inputString[i] === inputString[i].toUpperCase()){
        newCaseString = `${newCaseString}${inputString[i].toLowerCase()}`; //переводим в нижний регистр;
    } else {
         newCaseString = `${newCaseString}${inputString[i].toUpperCase()}`; //переводим в верхний регистр;
    }
};
console.log(`Получена новая строка: ${newCaseString}
---`);

//Разделяем строку на трокйи с конца;
console.log('Приступаем к трансформации ранее введенной строки ...');
let newDelimeterString = ''; //Новая строка для хранения данных;
let everyThirdPosition = 0; //Счетчик позици (1-3);

for(let i = (inputString.length - 1); i >= 0; i--){
    everyThirdPosition = everyThirdPosition + 1; //Увеличиваем счетчик
    if(everyThirdPosition > 3 ){
        everyThirdPosition = 0; //Скидываем счетчик;
        newDelimeterString = ` ${inputString[i]}${newDelimeterString}`;//Вносим данные в обратном порядке;
    } else {
        newDelimeterString = `${inputString[i]}${newDelimeterString}`;//Вносим данные в обратном порядке;
    }
};
console.log(`Сформирована новая строка: ${newDelimeterString}
---`);

//Сделаем зглавной первую букву каждого второго слова;
console.log('Переводим в верхний регистр первую букву каждого второго слова ...');
const arrayNewDelimeter = newDelimeterString.split(' '); //Разбиваем строку на массив букв;
let newStringFromDelimeterArray = ''; //Строка для хранения данных;

for(let i = 0; i < arrayNewDelimeter.length; i++){
    const curIndexValue = arrayNewDelimeter[i];
    if((i + 1) % 2 === 0){
        newStringFromDelimeterArray = `${newStringFromDelimeterArray} ${curIndexValue[0].toUpperCase()}${curIndexValue.substring(1, curIndexValue.length)}`;
    } else {
        newStringFromDelimeterArray = `${newStringFromDelimeterArray} ${curIndexValue}`;
    }
};
console.log(`Получена новая строка: ${newStringFromDelimeterArray}
---`);

//Запрос массива с числами;
console.log('Запрашиваем у пользователя массив с числами ...');
const regEx = /^[0-9,]*$/; //Регулярное выражение для проверки;
const inputArrayText = await myFunc.inputValidator(
    await myFunc.readLine('Введите массив чисел через запятую и без пробелов (21,12,34 ...): '),
    input => (regEx.test(input) === true & input[0] !== ',' && input[input.length - 1] !== ','),
    'Введенный массив не соответствует требованиям! Повторите ввод данных: '
); //Получаем массив чисел от пользователя;
console.log(`Получена строка с данными: ${inputArrayText}
Формируем из нее массив данных ...`);
const inputArray = inputArrayText.split(','); //Объявляем и создаем массив данных;
console.log('Сформирвоан следующим массив:');
console.log(inputArray);
console.log('Трансформируем данные в массиве ...');

let transformArray = []; //Объявляем новый массив для хранения данных;
for (let i = 0; i < inputArray.length; i++){
    let tranformValue = ''; //Для сбора новой строки;
    const indexValue = inputArray[i]; //Значение текущей позиции;

    for(let j = 0; j < indexValue.length; j++){
        tranformValue = `${indexValue[j]}${tranformValue}`; //Собираем данные в обратном порядке;
    }
    transformArray[i] = tranformValue; //Вносим данные в массив;
}

console.log ('Сформирован новый массив:');
console.log(transformArray);
console.log('---'); //Delimeter;

//Формируем у массива пары элементов;
console.log('Приступаем к формированию пар элементов массива ...');
let joinArrayValue = []; //Формируем новый массив для хранения данных;
let baseJoinArrayIndex = 0; //Для корректного внесения данных в новый массив;

for (let i = 0; i < inputArray.length; i = i + 2){
    let nextValue = '';
    if(inputArray[i + 1] !== undefined) {
        nextValue = inputArray[i + 1];
    }
    joinArrayValue[baseJoinArrayIndex] = `${inputArray[i]}${nextValue}`;
    baseJoinArrayIndex = baseJoinArrayIndex + 1; //Увеличиваем счетчик;
}; //Собираем данные в массив;

console.log(`Получен новый массив:`);
console.log(joinArrayValue);
console.log('---'); //Delimeter;

//Завершаем процесс;
console.log('Завершение работы ...');
process.exit(0);
