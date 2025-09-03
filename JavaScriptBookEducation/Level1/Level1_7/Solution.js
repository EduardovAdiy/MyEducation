import * as myFunc from '../../MyFunctionList.js';

/**
 * - Дана строка. Получите массив букв этой строки;
 * - Дано некоторое число. Получите массив цифр этого числа.
 * - Дано некоторое число. Переверните его
 * - Дано некоторое число. Найдите сумму цифр этого числа.
 */

//Получаем данные от пользователя;
const inputData = await myFunc.inputValidator (
                                        await myFunc.readLine('Введите данные (более 3 символов): '),
                                        input => (input.length > 3),
                                        'Данные должны содержать более 3 символов!\nПовторите ввод: '
                                            );

const inputDataLen = inputData.length; //Длина строки;
let arr = []; //Объявляем массив;

//Формируем массив;
for (let i = 0; i < inputDataLen; i++) {
    arr[i] = inputData[i];
}

let isNumber = 0; //Проверка, что было введено число;
if(isNaN(inputData) === false) {
    isNumber = 1;
};

let reverseInputData = ''; //Переворачиваем данные в обратном порядке;
for (let i = 0; i < inputDataLen; i++) {
    reverseInputData = `${inputData[i]}${reverseInputData}`;
}

//Формируем текст итогового сообещения;
let result = `---------------
- Был сформирован массив: [${arr}] ...
- Данные строки в обратном порядке: ${reverseInputData} ...`

//Получаем сумму чисел, если введено число;
let numberSum = 0;
if(isNumber === 1){
    for (let i = 0; i < inputDataLen; i++) {
        numberSum = numberSum + Number(arr[i]);
    }
    result = `${result}
- Сумма чисел массива: ${numberSum} ...`
}

//Выводим результат;
console.log(result);

//Завершение процесса работы;
process.exit(0);
