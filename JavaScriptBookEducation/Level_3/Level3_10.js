import * as myFunc from '../MyFunctionList.js';

/**
 * - Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.
 * - Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.
 * - Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.
 * - Дано число. Получите массив c позицией всех цифр 3 в этом числе, за исключением первой и последней.
 * - Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.
 * - Дан массив:
[
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]
Слейте элементы этого массива в один одномерный массив:
[1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
console.log('Начинаем работу ...');
//Дублируем элементы массива;
const regExArray = /^[0-9]+((,|, )[0-9]+){2,}$/;
const inputArrayText = await myFunc.inputValidator(
    await myFunc.readLine('Введите массив чисел через запятую (1,2,3...): '),
    input => regExArray.test(input) === true,
    'Ошибка! Данные введены не корректно!\nВведите массив чисел через запятую (1,2,3...): '
);
console.log('Получен массив чисел: ');
console.log(inputArrayText.split(','));
console.log('Начинаем дублирование чисел в массиве ...');
let innerArrayWithDoubles = [];
for (let i in inputArrayText.split(',')){
    const curValue = inputArrayText.split(',')[i];
    innerArrayWithDoubles.push(curValue);
    innerArrayWithDoubles.push(curValue);
};
console.log('Получен обновленный массив с дублями ...');
console.log(innerArrayWithDoubles);
console.log('---');
//Оставить делители числа;
const inputNumber = await myFunc.inputValidator(
    await myFunc.readLine('Введите число (больше 1000): '),
    input => (/[0-9]{3,}/).test(input) === true,
    'Ошибка! Введите число больше 1000: '
);
console.log(`Оставляем в массиве [${inputArrayText}] элементы, которые являются делителями числа ${inputNumber} ...`);
let delimeterArray = inputArrayText.split(',').filter(element => Number(inputNumber) % element === 0);
if(delimeterArray.length > 0){
    console.log(`Получен обновленный массив с элементами, являющимися делителем для числа ${inputNumber} ...`);
    console.log(delimeterArray);
} else {
    console.log(`Исходный массив не содержит элементов, являющихся делителем для числа ${inputNumber} ...`)
};
console.log('---');
//Создание массива из общих цифр 2-х чисел;
const inputNumber2 = await myFunc.inputValidator(
    await myFunc.readLine('Введите число (больше 1000): '),
    input => (/[0-9]{3,}/).test(input) === true,
    'Ошибка! Введите число больше 1000: '
);
console.log(`Находим общие цифры у числа ${inputNumber} и ${inputNumber2} ...`);
console.log('Формируем массив из общих цифр ...');
let commonNumArray = [];
for(let i = 0; i < inputNumber.length; i++){
    for (let j = 0; j < inputNumber2.length; j++){
        if (inputNumber[i] === inputNumber2[j]){
            const curValue = String(inputNumber[i]);
            if(commonNumArray.filter(element => element === curValue).length < 1){
                commonNumArray.push(inputNumber[i]);
            }
        }
    }
};
if(commonNumArray.length > 0) {
    console.log('Получен обновленный массив ...');
    console.log(commonNumArray);
} else {
    console.log('Даные числа не имеют общих цифр ...');
};
console.log('---');
//Получите массив c позицией всех цифр 3 в этом числе, за исключением первой и последней.
const commonSum = Number(inputNumber) + Number(inputNumber2);
console.log(`Ищем сумму чисел ${inputNumber} и ${inputNumber2} ...
Сумма данных чисел равна ${commonSum} ...
Формируем массив с позициями всех цифр 3 в этом числе, за исключением первой и последнй ...`);
let commonSumIndexPosition = [];
for (let i = 1; i < (String(commonSum).length - 1); i++){
    if(commonSum.toString()[i] === '3'){
         commonSumIndexPosition.push((i + 1));
    }
};
if(commonSumIndexPosition.length > 0){
    console.log('Сформирован массив ...');
    console.log(commonSumIndexPosition);
} else {
    console.log('Данное число не содрежит цифру 3 ...')
};
console.log('---');
//Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.
console.log('Используем массив: ');
console.log(inputArrayText.split(','));
console.log('Удаляем числа из массива содержащие дубли цифр ...');
console.log('Получен обновленный массив: ');
console.log(inputArrayText.split(',').filter(element => (/([0-9]).*?\1/).test(element) === false));
console.log('---');

//Слить многомерный массив в одномерный;
console.log('Получен многомерный массив ...');
let arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
console.log(arr);
console.log('Превращаем многомерный массив в одномерный ...');
let newArr = arr.join(',').split(',');
console.log(newArr);
console.log('---');

console.log('Завершаем работу ...');
process.exit(0);
