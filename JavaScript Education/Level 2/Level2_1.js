import * as myFunc from '../MyFunctionList.js';
/**
 * - Дана некоторая строка. Найдите позицию первого нуля в строке.
 * - Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
 * - Дан массив. Удалите из него элементы с заданным значением.
 * - Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]. Найдите сумму первой половины элементов этого массива.
 */

//Запрос строки у пользователя;
const inputString = await myFunc.inputValidator (
    await myFunc.readLine ('Введите произвольную строку (длина не менее 10 символов): '),
    input => (input.length >= 10),
    'Введенные данные не соответствуют требованиям!\nПовторите ввод данных: '
)

const firstZero = inputString.indexOf('0'); //Находим вхождение нуля;
let firstZeroResult = ''; //Переменная для вывода данных;

if (firstZero === -1){
    firstZeroResult = 'В данной строке нули отсутствуют!'
} else {
    firstZeroResult = `В данной строке первый ноль занимает ${(firstZero + 1)} позицию!`;
}

//Вывод данных;
console.log(firstZeroResult+'\n---------------------');
//---------------------------------------------

//Запрос строки у пользователя;
const inputAnswer = await myFunc.inputValidator (
    await myFunc.readLine ('Вывести в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти (Y/N)?: '),
    input => (input === 'Y' || input === 'N'),
    'Введенные данные не соответствуют требованиям!\nПовторите ввод данных (Y/N): '
)

let arr = [];//Массив для хранения информации;
for(let i = 10; i <= 1000; i++){
    const digitStr = String(i); //Преобразуем в строку;
    const firstDigitStr = digitStr[0]; //Получаем первую цифру;
    const secondDigitStr = digitStr[1]; //Получаем вторую цифру;

    if((Number(firstDigitStr) + Number(secondDigitStr)) === 5) {
        arr.push(i);
    }
}

//Вывод данных;
if (inputAnswer === 'Y'){
console.log(arr);

//----------------------------------------
const inputNumberForDel = await myFunc.inputValidator(
    await myFunc.readLine('Какое число требуется удалить из массива?: '),
    input => (isNaN(input) === false),
    'Введенные данные не соответствуют требованиям!\nПовторите ввод данных: '
);

const arrLen = arr.length;
let delResult = '';

for (let i = 0; i < arrLen; i++){
    if(Number(arr[i]) === Number(inputNumberForDel)) {
        arr.splice(i, 1); //Удаляем число;
        delResult = `Число ${inputNumberForDel} было удалено из массива!
Обновленный массив:`;
        console.log(delResult);
        console.log(arr);
    }
}

}
//---------------------------------
let arr2 = [1, 2, 3, 4, 5, 6]; //Базовый массив;
let arr2Len = arr2.length; //Длина массива;
let arrHalf = [];//новый массив для хранения данных;
let halfLen = Math.trunc(arr2Len / 2);//Половина длины базового массива;

let halfArrSum = 0; //Сумма чисел массива;

for(let i = 0; i < halfLen; i++){
    arrHalf[i] = arr2[i];
    halfArrSum = halfArrSum + arr2[i];
}

//Вывод данных;
const arrResult = `
------------------
Был дан следующий массив: [${arr2}].
Половиной данного массива является следующий массив: [${arrHalf}].
Сумма чисел половины массива равна: ${halfArrSum}.`;

console.log(arrResult);



//Заверешение процесса;
process.exit(0);
