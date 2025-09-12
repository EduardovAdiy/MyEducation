import * as myFunc from '..//MyFunctionList.js';

/**
 * - Дана строка со словами. Отсортируйте слова в алфавитном порядке.
 * - Дано число. Получите массив делителей этого числа.
 * - Даны два числа. Получите массив общих делителей этих чисел.
 * - Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.
 * - Через запятую написаны числа. Получите максимальное из этих чисел.
 * - Дан массив с числами. После каждого однозначного числа вставьте еще такое же.
 * - Дана строка. Удалите из нее все гласные буквы.
 * - Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.
 * - Дан следующая структура:
let data = [
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
];
Найдите сумму элементов этой структуры.
 */
//Функция возвращающая массив делителей числа;
async function getDelimeterArray (inputValue) {
    let getArray = [1, Number(inputValue)]; //Т.к. любое число делится на 1 и на само себя;
    for (let i = 2; i <= (Number(inputValue)/2); i++){
        if(Number(inputValue) % i === 0){
            getArray.push(i);
        }
    }; //Идем до половины числа, т.к. дальше уже делители не возможны;
    return getArray;
};

console.log('Начинаем работу ...');
//Сортируем в алфавитном порядке;
const regExString = /^[А-Яа-яA-Za-z]+( [А-Яа-яA-Za-z]+){3,}$/;
const inputString = await myFunc.inputValidator(
    await myFunc.readLine('Введите строку из 3-х и более слов: '),
    input => regExString.test(input) === true,
    'Ошибка! Введите строку из 3-х и более слов: '
);
console.log('Ввдена строка: '+ inputString);
console.log('Сортируем слова в алфавитном порядке ...');
console.log(inputString.toLowerCase().split(' ').sort().join(' '));
console.log('---');
//Поиск делителей числа;
const inputNumber = await myFunc.inputValidator(
    await myFunc.readLine('Введите число: '),
    input => isNaN(input) === false,
    'Ошибка! Повторите ввод числа: '
);
console.log(`Введено число: ${inputNumber}`);
console.log('Собираем все делители данного числа ...');
let delimeterArray = await getDelimeterArray(inputNumber);
console.log('Получен массив дилителей этого числа: ');
console.log(delimeterArray);
console.log('---');
//Поиск общих делителей 2-х чисел;
const inputNumber2 = await myFunc.inputValidator(
    await myFunc.readLine('Введите число: '),
    input => isNaN(input) === false,
    'Ошибка! Повторите ввод числа: '
);
console.log(`Введено число: ${inputNumber2}`);
console.log(`Поиск общих делителей числа ${inputNumber} и ${inputNumber2}`);
let delimeterArray2 = await getDelimeterArray(inputNumber2);
let delimeterArrayCommon = [];

for(let i in delimeterArray) {
    for(let j in delimeterArray2){
        if (delimeterArray[i] === delimeterArray2[j]){
            delimeterArrayCommon.push(delimeterArray[i]);
        }
    }
};
console.log('Получен массив общих делителей ...');
console.log(delimeterArrayCommon);
console.log('---');
//Проверка, что у числа только 1 делитель кроме единицы и него самого;
console.log(`Проверка, что у числа ${inputNumber2} только 1 делитель кроме единицы и него самого ...`);
if(delimeterArray2.length === 3){
    console.log('У данного числа только один делитель ...');
} else {
    console.log('У данного числа более одного делителя ...');
};
console.log('---');
//Максимальное число среди массива чисел;
const regExNumbers = /^[0-9]+((,| ,)[0-9]+){1,}$/
const inputNumberString = await myFunc.inputValidator(
    await myFunc.readLine('Введите несколько чисел через запятую (1, 2, 3 ...): '),
    input => regExNumbers.test(input),
    'Ошибка! Введите несколько чисел через запятую (1, 2, 3 ...):'
);
console.log(`Введен массив чисел: ${inputNumberString}`);
const numbersArray = inputNumberString.split(',');
console.log(`Наибольшее число в массиве: ${numbersArray.reduce((max, currValue) => Math.max(max, currValue), -Infinity)}`);
console.log('---');
//Дублируем число в массиве, если оно однозначное;
const numbersDubArray = [];
console.log('Начинаем дублировать значения в массиве, если они однозначные ...');
for(let i in numbersArray){
    if(Number(numbersArray[i]) < 10){
        numbersDubArray.push(numbersArray[i]);
        numbersDubArray.push(numbersArray[i]);
    } else {
        numbersDubArray.push(numbersArray[i]);
    }
};
console.log('Получен новый массив: ');
console.log(numbersDubArray);
console.log('---');
//Удалить из строки все гласные буквы;
const inputSomeString = await myFunc.inputValidator(
    await myFunc.readLine('Введите строку кирилицей (не менее 5 символов): '),
    input => (isNaN(input) === true && input.length > 4),
    'Ошибка! Введите строку кирилицей (не менее 5 символов): '
);
console.log('Удаляем все гласные буквы из строки ...');
const regEx = /^а|о|у|э|и|е|й|я$/;
let newString = '';
for (let i = 0; i < inputSomeString.length; i++){
    if(regEx.test(inputSomeString[i].toLowerCase()) === false){
        newString = `${newString}${inputSomeString[i]}`;
    }
};
console.log(`Получена новая строка: ${newString}`);
console.log('---');
//Сделайть заглавной последнюю букву каждого слова в этой строке.
console.log(`Для строки "${inputString}" делаем заглавной последнюю букву каждого слова ...`);
let lastBigLetterString = '';
let lastBigLetterArray = inputString.split(' ');
for(let i in lastBigLetterArray) {
    const thisIndexWord = lastBigLetterArray[i];
    const thisIndexWordLen = thisIndexWord.length;
    lastBigLetterString = `${lastBigLetterString} ${thisIndexWord.substr(0, (thisIndexWordLen - 2))}${thisIndexWord[thisIndexWordLen - 1].toUpperCase()}`;
};
console.log(`Получена новая строка: ${lastBigLetterString}`);
console.log('---');
//Работа с объектом;
let data = [
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
];
console.log('Получен объект: ');
console.log(data);
console.log('Осуществляем поиск суммы элементов данного объекта ...');
let dataElementSum = 0;
for(let i in data){
    const dataElementObject = data[i];
    for(let j in dataElementObject){
        const dataElementArray = dataElementObject[j];
        for (let k in dataElementArray){
            dataElementSum = Number(dataElementSum) + Number(dataElementArray[k]);
        }
    }
};
console.log(`Сумма элементов объекта равна: ${dataElementSum}`)
console.log('---');

console.log('Завершение работы ...');
process.exit(0);
