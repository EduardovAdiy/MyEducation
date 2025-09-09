import * as myFunc from '..//MyFunctionList.js';
/**
 * - Дано некоторое число: 123456. Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:12 + 34 + 56
 * - Дан массив с числами. Выведите в консоль элементы этого массива в обратном порядке.
 */

console.log('Запрос данных у пользователя ...');
const inputNumber = await myFunc.inputValidator(
    await myFunc.readLine('Введите число (больше 10 000): '),
    input => (Number(input) > 10000 && isNaN(input) === false),
    'Введенные данные не соответствуют требованиям!\nПовторите ввод: '
);
console.log('Введено число: '+ inputNumber);
console.log('Формирование суммы пар чисел ...');
let sumString = ''; //Переменная для хранения строки суммы;
let SumNumber = 0; //Сумма чисел;

for (let i = 0; i < inputNumber.length; i = i + 2) {
    let curNumber = '';
    if(inputNumber[i+1] === undefined) {
        curNumber = `${inputNumber[i]}`;
    } else {
        curNumber = `${inputNumber[i]}${inputNumber[i+1]}`;
    };
    if(sumString === ''){
        sumString = String(curNumber);
    } else {
        sumString = `${sumString} + ${curNumber}`; 
    } //Формируем текстовое представление данных;
    SumNumber = Number(SumNumber) + Number(curNumber);
}
console.log(`Сумма пар чисел равна: ${sumString} = ${SumNumber}`);
console.log('---');
console.log('Создание массива чисел ...');
let baseArray = inputNumber.split('');
console.log('Сформирован массив чисел: ');
console.log(baseArray);
console.log('Отрезеркаливаем массив чисел ...');
let reverseArray = [];
for (let i = 0; i < baseArray.length; i++){
    reverseArray.unshift(baseArray[i]);
}
console.log('Сформирован зеркальный массив чисел: ');
console.log(reverseArray);
console.log('---');
//Завершение работы;
console.log('Завершение работы ...');
process.exit(0);
