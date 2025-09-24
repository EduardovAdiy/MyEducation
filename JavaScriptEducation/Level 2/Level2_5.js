import * as myFunc from '../MyFunctionList.js';

/**
 * - Дана некоторая строка. Получите массив позиций всех нулей в этой в строке.
 * - Дана некоторая строка. Удалите из этой строки каждый третий символ
 * - Дан некоторый массив. Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.
 */

console.log('Запрос данных у пользователя ...');
const inputString = await myFunc.inputValidator(
    await myFunc.readLine('Введите произвольную строку длиной не менее 5 смиволов: '),
    input => (input.length > 4),
    'Длина строки не соответвствует заявленной! Повторите ввод: '
)
console.log(`Получена строка: ${inputString}`);

//Собираем массив позиций всех нулей;
console.log('Формируем массив позиций всех нулей в строке ...');
let arrayZeroPosition = []; //Объвялем массив;
for (let i = 0; i < inputString.length; i++){
    if(inputString[i] === '0'){
        arrayZeroPosition.push((i + 1));
    }
};
console.log('Получен следующий массив с данными по позициям: ');
console.log(arrayZeroPosition);
console.log('---'); //Delimetr;

//Удалить каждый треий символ;
console.log('Удаляем из строки каждый третий символ ...');
let inputNewString = ''; //Для сохранения новой строки;
for (let i = 0; i < inputString.length; i++){
    if((i + 1) % 3 !== 0){
        inputNewString = `${inputNewString}${inputString[i]}`;
    }
};
console.log(`Сформирована новая строка: ${inputNewString}
---`);

//Вводим массив;
console.log('Запрашиваем массив у пользователя ...');
const regex = /^[0-9,]*$/; //Маска ввода данных;
const inputArrayString = await myFunc.inputValidator(
    await myFunc.readLine('Введите массив чисел через запятую и без пробелов (1,5,17 ...): '),
    input => (regex.test(input) === true && input[0] !== ',' && input[input.length - 1] !== ','),
    'Введенные данные не соответствуют требованиям ...\nВведите массив чисел через запятую и без пробелов (1,5,17 ...): '
);
const inputArray = inputArrayString.split(','); //Создаем и заполняем массив данными;
console.log('Получен массив чисел: ');
console.log(inputArray);
let evenSum = 0; //Сумма элементов четных позиций;
let notEveSum = 0; //Сумма элементов нечетных позиций;
console.log('Вычисляем сумму чисел четных и нечетных позиций ...');

for (let i = 0; i < inputArray.length; i++){
    if((i + 1) % 2 === 0){
        evenSum = evenSum + Number(inputArray[i]);
    } else {
        notEveSum = notEveSum + Number(inputArray[i]);
    }
};
console.log(`Сумма чисел четных позиций: ${evenSum}
Сумма чисел нечетных позиций: ${notEveSum}
Делим сумму чисел четных позиций на сумму чисел нечетных позиций ...`);
const deliverSum = (evenSum / notEveSum);
console.log(`Результат деления: ${deliverSum}
Завершение работы ...`);

//Завершаем процесс;
process.exit(0);
