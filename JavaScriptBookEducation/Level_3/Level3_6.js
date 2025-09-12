import { get } from 'node:http';
import * as myFunc from '..//MyFunctionList.js';

/**
 * - Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.
 * - Дано число. Проверьте, что все цифры этого числа больше нуля.
 * - Дан некоторый массив, например, вот такой: [123, 456, 789]
Слейте все элементы этого массива в один массив, разбив их посимвольно: [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * - Дан следующая структура:
let data = [
	{
		1: 11,
		2: 12,
		3: 13,
	},
	{
		1: 21,
		2: 22,
		3: 23,
	},
	{
		1: 24,
		2: 25,
		3: 26,
	},
];
Найдите сумму элементов этой структуры.
 */
console.log('Начало работы ...');
const regExArray = /^[0-9]+(,[0-9]+){2,}$/;
const inputArrayText = await myFunc.inputValidator(
	await myFunc.readLine('Введите массив чисел (1,2,3 ...): '),
	input  => regExArray.test(input) === true,
	'Ошибка! Пвоторите ввод (не менее 3-х чисел): '
);
const inputArray = inputArrayText.split(',');
console.log('Получен массив данных: ');
console.log(inputArray);
console.log('Удлаяем из массива числа состоящие из 4-х и более цифр ...');
console.log('Получен массив чисел: ');
console.log(inputArray.filter(element => (element.length < 4)));
console.log('---');

const inputNumber = await myFunc.inputValidator(
	await myFunc.readLine('Введите число: '),
	input => isNaN(input) === false,
	'Ошибка! Введите число: '
);
console.log(`Введено число: ${inputNumber}.
Проверяем, что все цифры этого числа больше нуля ...`);
if(inputNumber.toString().indexOf('0') >= 0){
	console.log('Данное число содержит нули!');
} else {
	console.log('Данное число НЕ содержит нули!');
};
console.log('---');
const getArray = [123, 456, 789];
console.log('Получен массив: ');
console.log(getArray);
console.log('Начинаем посимвольное слияние элементов массива в один общий массив ...');

let newArray = [];
for(let i = 0; i < getArray.length; i++){
	const elementString = String(getArray[i]);
	newArray = newArray.concat(elementString.split(''));
};
console.timeLog('Получен новый массив: ');
console.log(newArray);
console.log('---');
let data = [
	{
		1: 11,
		2: 12,
		3: 13,
	},
	{
		1: 21,
		2: 22,
		3: 23,
	},
	{
		1: 24,
		2: 25,
		3: 26,
	},
];
console.log('Получен объект: ');
console.log(data);
console.log('Осуществляем поиск суммы элементов всей структуры ...');

let elementSum = 0;
for(let i in data){
	const newData = data[i];
	for(let j in newData){
		elementSum = elementSum + Number(newData[j]);
	}
};
console.log(`Сумма всех элементов объекта равна: ${elementSum}`);
console.log('---');
//End process
console.log('Завершение работы ...');
process.exit(0);
