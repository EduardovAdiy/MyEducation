import * as myFunc from '../MyFunctionList.js';
/**
 * - Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
 * - Дан массив с числами. Оставьте в нем только положительные числа.
 * - Дана строка. Удалите предпоследний символ из этой строки.
 * - Дан некоторый массив. Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.
 */

let baseArray = []; // Объявим базовый массив с данными;

const baseArrayLength = await myFunc.inputValidator (
    await myFunc.readLine('Укажите необходимую длину массива (кол-во элементов от 5 до 20): '),
    input => (isNaN(input) === false && input >= 5 && input <= 20),
    'Ошибка! Введенные данные не соответствуют требованиям!\nПовторите ввод числа (от 5 до 20): '
) //Определяем кол-во элементов в массиве;

console.log('Геренируем массив с данными ...')
//Генерируем массив с помощью случайных чисел;
for (let i = 0; i < baseArrayLength; i++){
    baseArray[i] = await myFunc.getRandomNumber(-100, 100);
}
console.log(`Был сгенерирован следующий массив: [${baseArray}]`);

//Подсчет отрицательных чисел в массиве;
let cntNegativeNum = 0; //переменная для хранения кол-ва отр. значений;

console.log('Подсчет отрицательных значений в массиве ...');
for (let i = 0; i < baseArrayLength; i++){
    if(Number(baseArray[i]) < 0){
        cntNegativeNum = cntNegativeNum + 1; //Увеличиаем счетчик отр. чисел;
    } 
}
console.log(`Кол-во элементов массива с отрицательным значением: ${cntNegativeNum}`);
//Создаем новый массив без отр. значений;
console.log('Удаление элементов с отрицательными значениями ...' );
let newArray = baseArray.filter(element => Number(element) >= 0);

console.log(`Вывод обновленного массива: [${newArray}]`);
console.log('Разделяем обновленный массив на две части ...')
const newArrayLength =  newArray.length; //Длина обновленного массива;
const newArrayMiddleIndex = Math.ceil(((newArrayLength - 1) / 2)); //Округляем в большую сторону;

const firstHalfNewArray = newArray.slice(0, newArrayMiddleIndex); //Первая половина обновленного массива;
console.log(`Первая половина обновленного массива: [${firstHalfNewArray}]`);

const secondHalfNewArray = newArray.slice(newArrayMiddleIndex , newArrayLength); //Вторая половина обновленного массива;
console.log(`Вторая половина обновленного массива: [${secondHalfNewArray}]`);

//Расчет суммы первой половины массива;
console.log('Расчет суммы чисел первого массива ...');
let firstHalfArraySum = 0;
for (let i = 0; i < firstHalfNewArray.length; i++){
    firstHalfArraySum = firstHalfArraySum + firstHalfNewArray[i];
};
console.log(`Сумма чисел первого массива: ${firstHalfArraySum}`);

//Расчет суммы второго массива;
console.log('Расчет суммы чисел второго массива ...');
let secondHalfArraySum = 0;
for (let i = 0; i < secondHalfNewArray.length; i++){
    secondHalfArraySum = secondHalfArraySum + secondHalfNewArray[i];
}
console.log(`Сумма чисел второго массива: ${secondHalfArraySum}`);

//Расчет деления сумм чисел массивов;
console.log('Расчет деления суммы чисел первого массива на сумму чисел второго массива ...');
const massiveDevisionResult = (Number(firstHalfArraySum) / Number(secondHalfArraySum));
console.log(`Результат деления: ${massiveDevisionResult}
`);

//Запрос строки от пользователя;
const baseString = await myFunc.inputValidator(
    await myFunc.readLine('Введите строку длиной от 5 до 20 символов: '),
    input => (isNaN(input) === true && input.length >= 5 && input.length <= 20),
    'Ошибка! Введенные данные не соответствуют требованиям!\nПовторите ввод строки (от 5 до 20 символов): '
); //Получаем некоторую строку;
console.log(`Введена строка: ${baseString}`);

const baseStringLength = baseString.length; //Получаем длину строки;
const newString = baseString.substring(0, (baseStringLength - 3)) +''+ baseString[(baseStringLength - 1)]; //строка с вырезанным предпоследним символом;

//формируем сообщение для вывода в консоль;
let stringResult = `Удаляем предпоследний символ ...
Сформирована новая строка: ${newString}
---------------------`
console.log(stringResult);
//Завершаем процесс;
process.exit(0);
