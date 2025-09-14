import * as myFunc from '../MyFunctionList.js';
/**
 * - Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.
 * - Дан массив: [1, '', 2, 3, '', 5]. Удалите из массива все пустые строки.
 * - Дан массив:
 * [ 
	[2, 1, 4, 3, 5],
	[3, 5, 2, 4, 1],
	[4, 3, 1, 5, 2],
]
Отсортируйте элементы в каждом подмассиве.
* - Даны два массива:
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];
Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.
 */

console.log('Запуск работы ...');
const inputNumber = await myFunc.inputValidator(
    await myFunc.readLine('Введите число (больше 3-х цифр): '),
    input => input > 100,
    'Ошибка! Повторите ввод: '
);
console.log(`Введено число: ${inputNumber}`);
console.log('Начинаем проверку порядка цифр в числе ...');
let msgNum = 'Цифры, в данном числе, расположены по возрастанию!';
for (let i = 0; i < inputNumber.length; i++){
    if(inputNumber[i] > inputNumber[i+1] && inputNumber[i+1] !== undefined){
        msgNum = 'Цифры, в данном числе, расположены НЕ по возрастанию!';
    }
};
console.log(msgNum);
console.log('---');
const delFromArray = [1, '', 2, 3, '', 5];
console.log('Получен массив: ');
console.log(delFromArray);
console.log('Удаляем из массива все пустые строки ...');
let newDelFromArray = []; //Пустой массив для хранения данных;

for (let i = 0; i < delFromArray.length; i++){
    if(delFromArray[i] !== ''){
        newDelFromArray.push(delFromArray[i]);
    }
};
console.log('Сформирован массив:');
console.log(newDelFromArray);
console.log('---');
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];
console.log(`Получены 2 массива данных: [${arr1}] и [${arr2}] ...`);
console.log('Удаляем из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми ...');
const arr1Len = arr1.length;
const newArr2 = arr2.filter(index => (index <= arr1Len));
console.log(`Сформирован новый массив данных: [${newArr2}] ...`)

//Exit process;
console.log('Завершение работы ...');
process.exit(0);
