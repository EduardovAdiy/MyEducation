import * as myFunc from '..//MyFunctionList.js';

/**
 * - Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.
 * - Дана строка в формате: 'kebab-case'. Преобразуйте ее в формат: 'snake_case'
 * - Дана строка в формате: 'snake_case'. Преобразуйте ее в формат: 'camelCase'
 * - Дана строка в формате: 'camelCase'. Преобразуйте ее в формат: 'snake_case'
 * - Сформируйте с помощью циклов следующий массив:
[
	[1, 2, 3],
	[1, 2, 3],
	[1, 2, 3],
	[1, 2, 3],
	[1, 2, 3],
]
 */
console.log('Начинаем работу ...');
//Проверка того, что все числа массива содержат 3;
const regEx = /^[0-9]+((,|, )[0-9]+){1,}$/;
const inputNumArray = await myFunc.inputValidator(
	await myFunc.readLine('Введите массив чисел (1,2,3 ...): '),
	input => regEx.test(input),
	'Ошибка! Данные введены не корректно!\nВведите массив чисел (1,2,3 ...): '
);
console.log('Получен массив: ');
console.log(inputNumArray.split(','));
if(inputNumArray.split(',').length === inputNumArray.split(',').filter(element => element.indexOf('3') >= 0).length) {
	console.log('Все элементы массива содержат цифру 3!');
} else {
	console.log('НЕ все элементы массива содержат цифру 3!');
};
console.log('---');

console.log('Запрос строки у пользователя ...');
const regExString = /^[A-Za-zА-Яа-я]+((,|-|:|;| )[A-Za-zА-Яа-я]+){1,}$/;
const inputString = await myFunc.inputValidator(
	await myFunc.readLine('Введите строку состоящую из 2-х и более слов: '),
	input => regExString.test(input),
	'Ошибка! Повторите ввод строки: '
);
console.log(`Введан строка: ${inputString}`);
//Преобразовать строку в формат 'kebab-case';
console.log(`Трансформируем строку в формат 'kebab-case' ...`);
const kebabCase = inputString.toLowerCase().split(' ').join('-');
console.log(`Получена строка: ${kebabCase}`);
console.log('---');
//Преобразуйте строку в формат: 'snake_case';
console.log(`Трансформируем строку в формат 'snake_case' ...`);
const snakeCase = kebabCase.toLowerCase().split('-').join('_');
console.log(`Получена строка: ${snakeCase}`);
console.log('---');
//Преобразуйте строку в формат: 'camelCase';
console.log(`Трансформируем строку в формат 'camelCase' ...`);
const camelCaseArray = snakeCase.toLowerCase().split('_');
let camelCase = '';
for(let i in camelCaseArray){
	const currWord = camelCaseArray[i];
	if(camelCase === ''){
		camelCase = `${currWord.toLowerCase()}`;
	} else {
		camelCase = `${camelCase}${currWord[0].toUpperCase()}${currWord.substring(1, 100)}`;
	}
};
console.log(`Получена строка: ${camelCase}`);
console.log('---');
//Преобразуйте строку в формат: 'snake_case';
console.log(`Трансформируем строку в формат 'snake_case' ...`);
let snakeCase2 = '';
for(let i = 0; i < camelCase.length; i++){
	if(camelCase[i] === camelCase[i].toUpperCase()){
		snakeCase2 = `${snakeCase2}_${camelCase[i].toLowerCase()}`;
	} else {
		snakeCase2 = `${snakeCase2}${camelCase[i]}`;
	}
};
console.log(`Получена строка: ${snakeCase2}`);
console.log('---');
//Формируем массив с помощью цикла;
const k = await myFunc.inputValidator(
	await myFunc.readLine('Введите число от 3 до 10 (кол-во элементов в массиве): '),
	input => (input >= 3 && input <= 10),
	'Ошибка! Повторите ввод числа: '
);
const n = await myFunc.inputValidator(
	await myFunc.readLine('Введите число от 3 до 10 (кол-во элементов в подмассивах): '),
	input => (input >= 3 && input <= 10),
	'Ошибка! Повторите ввод числа: '
);
let outputArray = [];
for (let i = 0; i < k; i++){
	let someArray = [];
	for (let j = 0; j < n; j++){
		someArray[j] = (j+1);
	};
	outputArray[i] = someArray;
};
console.log('Автоматически был сформирован массив: ');
console.log(outputArray);
console.log('---');

console.log('Завершаем работу ...');
process.exit(0);
