import * as myFunc from '..//MyFunctionList.js';
/**
 * - Дана строка. Проверьте, что эта строка состоит только из цифр.
 * - Дана строка. Проверьте, что эта строка состоит только из четных цифр.
 * - Дан массив со числами. Удалите из него числа, имеющие два и более нуля.
 * - Найдите все числа от 1 до 1000, сумма цифр которых равна 13.
 * - Сформируйте с помощью циклов следующий массив:
[
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]
 */
console.log('Начинаем работу ...');
const regEx = /^[A-Za-zА-Яа-я0-9]{4,}$/;
let inputString = await myFunc.inputValidator(
    await myFunc.readLine('Введите строку состоящую из произвольных букв и цифр: '),
    input => regEx.test(input),
    'Ошибка! Строка должна быть введена без пробелов и прочих символов!\nПовторите ввод: '
);
console.log(`Получена строка: ${inputString}`);
//Проверка, что строка содержит цифры;
console.log('Проверка, что строка содержит хотя бы одну цифру ...');
let checkNumInString = (/[0-9]/).test(inputString);
if(checkNumInString === false){
    console.log('Введенная строка не содержит ни одной цифры ...');
    while(checkNumInString === false){ 
        inputString = await myFunc.inputValidator(
             await myFunc.readLine('Введите строку состоящую из произвольных букв и цифр: '),
             input => regEx.test(input),
            'Ошибка! Строка должна быть введена без пробелов и прочих символов!\nПовторите ввод: '
        );
        checkNumInString = (/[0-9]/).test(inputString); //Проверяем, что строка содержит цифры;
    };
} else {
    console.log('Введенная строка содержит цифры ...');
};
//Проверка, что строка содержит буквы;
console.log('Проверка, что строка содрежит буквы ...');
let checkCharInString = (/[A-Za-zА-Яа-я]/).test(inputString);

if(checkCharInString === true){
    console.log('Введенная строка содержит буквы ...');
    console.log('Начинаем удаление букв из строки ...');
    let inputStringWithoutChar = '';
    for(let i = 0; i < inputString.length; i++){
        if((/[A-Za-zА-Яа-я]/).test(inputString[i]) === false){
            inputStringWithoutChar = `${inputStringWithoutChar}${inputString[i]}`;
        }
    };
    inputString = inputStringWithoutChar; 
    console.log(`Получена новая строка без букв: ${inputString}`);
} else {
    console.log('Введенная строка содержит только цифры ...')
};
console.log('---');
//Проверка, что эта строка состоит только из четных цифр.
console.log('Начинаем проверку того, что строка состоит только из четных цифр ...');
if(inputString.split('').filter(element => (Number(element) % 2 !== 0)).length > 0){
    console.log('Полученная строка состоит НЕ только из четных цифр ...');
} else {
    console.log('Полученная строка состоит только из четных цифр ...');
};
console.log('---');
//Удалить из массива числа, имеющие два и более нуля;
const regExArray = /^[0-9]+((,|, )[0-9]+){2,}$/;
let inputArray = await myFunc.inputValidator(
    await myFunc.readLine('Введите массив чисел через запятую (1,2,3 ...): '),
    input => regExArray.test(input),
    'Ошибка! Повторите ввод данных (1,2,3 ...): '
);
console.log('Получен массив чисел: ');
console.log(inputArray.split(','));
console.log('Проверяем, что в полученном массиве есть числе с двумя и более нулями ...');
if((/00+/).test(inputArray) === true){
    console.log('Введенный массив содержит числа содрежащие два и более нулей ...');
    console.log('Начинаем удаление чисел с двумя и более нулями ...');
    let innerArray = inputArray.split(',').filter(element => ((/00+/).test(element) === false));
    console.log('Сформирован обновленный массив ...');
    console.log(innerArray);
} else {
    console.log('В веденом массиве отсутствуют числа содержащие два и более нулей ...');
}
console.log('---');
//Найти все числа от 1 до 1000, сумма цифр которых равна 13.
console.log('Осуществляем поиск всех чисел от 1 до 1000, сумма котрых равна 13 ...');
let numSumArray = [];
for(let i = 10; i < 1000; i++){
    const curNumber = String(i);
    let numberSum = 0;
    for(let j = 0; j < curNumber.length; j++){
        numberSum = numberSum + Number(curNumber[j]);
    }
    if(numberSum === 13) {
        numSumArray.push(i);
    }
};
console.log('Сформирован следующий массив: ');
console.log(numSumArray);
console.log('---');
//Генерируем массив;
const n = await myFunc.inputValidator(
    await myFunc.readLine('Введите число максимального элемента подмассива (от 10 до 20): '),
    input => input >=10 && input <= 20,
    'Ошибка! Должно быть введено число от 10 до 20. Потворите ввод: '
);
console.log('Генерируем массив чисел ...');
let newArray = new Array([1,2,3]);
let subArray = [];
for (let i = 1; i <= n; i++){
  if(subArray.length < 3){
    subArray.push(i);
  } else {
    subArray = [];//Очищаем массив;
    subArray.push(i);
    newArray.push(subArray);
    
  }
};
console.log('Сгенерирован новый массив ...');
console.log(newArray);
console.log('---');

console.log('Завершаем работу ...');
process.exit(0);
