import * as myFunc from '../MyFunctionList.js';
/**
 * - Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.
 * - Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.
 * - Сделайте функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд.
 * - Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент. Смотрите пример:
let arr = [1, 2, 3, 4, 5];

func(arr, 1); // 2
func(arr, 4); // 5
func(arr, 5); // 1
 */
//Функция 1;
function getSortFromAlphabet (inputString) {
    let outputString = inputString.split(' ').sort().join(' ');
    return outputString;
};
//Функция 2;
function getArrayCommonElement (inputArray1, inputArray2) {
    let outputArray = inputArray1.filter(value => inputArray2.includes(value));
    return outputArray;
};
//Функция 3;
async function getRandomValue () {
    return await myFunc.getRandomNumber(0,100000);
};
//Функция 4;
function getArrayElementByNextIndex (inputArray, indexValue) {
    let nextIndex = (indexValue + 1);
    const arrLength = inputArray.length;
    if(nextIndex === arrLength) {
        nextIndex = 0;
    };
    if(nextIndex > arrLength){
        let multiplierIndex = Math.trunc(nextIndex/arrLength);
        nextIndex = (nextIndex - (multiplierIndex*arrLength) - 1);
    };
    return inputArray[nextIndex];
};
//------------ Блок работы с функциями ------------

let repeatQuestion = 'Y';

while (repeatQuestion === 'Y') {
    const baseQuestion = `Выберите один вариант:
 1 - Запустить функцию, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.
 2 - Запустить функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.
 3 - Запустить функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд.
 4 - Запустить функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент
Укажите номер функции для запуска: `;

    const inputValue = await myFunc.inputValidator(
        await myFunc.readLine(baseQuestion),
        input => (/^([1-4])$/).test(input),
        `Ошибка! Введены некорректные данные! ${baseQuestion}`
    );

    if (Number(inputValue) === 1) {
        console.log('Была выбрана функция, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке ...');
        const inputString = await myFunc.getTextValues();
        console.log('Сортируем слова в алфавитном порядке ...');
        const newString = getSortFromAlphabet (inputString);
        console.log(`Получена новая строка: ${newString}`);
    };

    if (Number(inputValue) === 2) {
        console.log('Была выбрана функция, которая параметром будет принимать два массива и возвращать массив их общих элементов ...');
        console.log('Введите массив 1: ');
        const inputArr1 = await myFunc.getArrayNumberValues();
        console.log('Введите массив 2: ');
        const inputArr2 = await myFunc.getArrayNumberValues();
        console.log('Осущесвтляем поиск общих элементов в массивах ...');
        const commonArray = getArrayCommonElement(inputArr1, inputArr2);
        console.log('Получен массив общих элементов:');
        console.log(commonArray);
    };
    
    if (Number(inputValue) === 3) {
        console.log('Была выбрана функция, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд ...');
        console.log('Генерируем случайное число ...');
        console.log(await getRandomValue());
    };

    if (Number(inputValue) === 4) {
        console.log('Была выбрана функция, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент ...');
        const inputArray = await myFunc.getArrayNumberValues();
        const inputNum = await myFunc.getNumberValues();
        console.log(`Выводим следующее число массива после элемента под номером ${inputNum} ...`);
        console.log(`Следующее число: ${getArrayElementByNextIndex(String(inputArray).split(',').map(Number), Number(inputNum))}`);
    };

    console.log('---');

    repeatQuestion = await myFunc.inputValidator(
        await myFunc.readLine('Повторить работу (Y/N)?: '),
        input => (/^(Y|N)$/).test(input),
        'Ошибка! Введены некорректные данные! Повторить работу (Y/N)?: '
    );
};

process.exit(0);
