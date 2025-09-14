import * as myFunc from '../MyFunctionList.js';

/**
 * - Дана некоторая строка. Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем
 * - Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
 * - Дано некоторое число. Удалите из этого числа все нечетные цифры.
 */

console.log('Запрос информации у пользователя ...');
const inputText = await myFunc.inputValidator(
    await myFunc.readLine('Введите строку с несколькими словами: '),
    input => input.length > 10,
    'Данная строка слишком короткая! Попробуйте ввести данные подлинее: '
); //Ввод строки пользователем;
console.log('Получена строка: '+ inputText);

//Проверка регистра первого символа;
console.log('Проверка регистра первого символа строки ...');
if(inputText[0] === inputText[0].toUpperCase()){
    console.log(`Первая буква строки "${inputText[0]}" находится в верхнем регистре ...`);
} else {
    console.log(`Первая буква строки "${inputText[0]}" находится в нижнем регистре ...`);
};
console.log('---'); //Delimeter;

//Перевод подстроки в нижний регистр;
console.log('Начинается перевод в верхний регистр подстрок в которых кол-во букв меньше или равно трем ...');
let arrayText = inputText.split(' '); //Разбиваем строку на массив подстрок;
console.log('Создан массив подстрок:');
console.log(arrayText);
let newInputText = ''; //Переменная для хранения обновленной строки;

for (let i = 0; i < arrayText.length; i++){
    let curArraytext = arrayText[i];

    if (curArraytext.length < 4){
        newInputText = `${newInputText} ${curArraytext.toUpperCase()}`; //Первод в верхний регистр;
    } else {
        newInputText = `${newInputText} ${curArraytext}`; //Без первода в верхний регистр;
    }
};
console.log(`Получена новая строка: ${newInputText}
---`);

//Получение числа от пользователя и удаление нечетных цифр;
console.log('Запрос числа у пользователя ...');
const inputNumber = await myFunc.inputValidator(
    await myFunc.readLine('Введите число (больше 1000): '),
    input => (isNaN(input) === false && input > 1000),
    'Введенные данные не соответствуют требованиям! Повторите ввод: '
); //Запрос данных у пользователя;
console.log(`Получено число: ${inputNumber}`);
console.log('Удаляем из числа все нечетные цифры ...');
let newInputNumber = ''; //Переменная для хранения обновленной цифры;
for(let i = 0; i < inputNumber.length; i++) {
    if(Number(inputNumber[i]) % 2 === 0){
        newInputNumber = `${newInputNumber}${inputNumber[i]}`;//Сохраняем данные для четных чисел;
    }
};
console.log(`Сформировано новое число: ${newInputNumber}
---`);

//Завершение процесса;
console.log('Завершение работы ...');
process.exit(0);
