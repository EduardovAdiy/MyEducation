import * as myFunc from '..//MyFunctionList.js';

/**
 * - Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.
 * - Дано некоторое число: 1357. Проверьте, что все цифры этого числа являются нечетными.
 * - Дано некоторое слово:'abcba'. Проверьте, что это слово читается одинаково с любой стороны.
 * - Дан массив:
[
	[
		[11, 12, 13],
		[14, 15, 16],
		[17, 17, 19],
	],
	[
		[21, 22, 23],
		[24, 25, 26],
		[27, 27, 29],
	],
	[
		[31, 32, 33],
		[34, 35, 36],
		[37, 37, 39],
	],
]
Найдите сумму элементов этого массива.
 */
console.log('Начало работы ...');
const regEx = /^[A-Za-z]+(,[A-Za-z]+){2,}$/; //Регуярное выражение;
const inputWordArray = await myFunc.inputValidator(
    await myFunc.readLine('Введите массив слов через запятую и без пробела: '),
    input => (regEx.test(input) === true),
    'Ошибка! Повторите ввод: '
);
const inputArray = inputWordArray.split(',');
console.log(`Введен массив:`);
console.log(inputArray);
console.log('Убираем из массива слова, состоящие более чем из 3-х символов ...');
console.log(inputArray.filter(element => element.length < 3));
console.log('---');

const inputNum = await myFunc.inputValidator(
    await myFunc.readLine('Введите число (больше 1000): '),
    input => (isNaN(input) === false && input > 1000),
    'Ошибка! Повторите ввод: '
);
console.log(`Введено число: ${inputNum}`);
console.log('Выполняется проверка, что все цифры числа являются нечетными ...');
let checkEven = 0;
let i = 0;
let msgEven = 'Все цифры данного числа являются нечетными!';
while(i < inputNum.length && checkEven === 0){
    if(inputNum[i] % 2 === 0){
        checkEven = 1;
        msgEven = `Цифра ${inputNum[i]} является четной! Дальнейшая обработка прекращена!`;
    }
    i = i + 1;
};
console.log(msgEven);
console.log('---');
const wordRegEx = /^[A-Za-zА-Яа-я]{4,}$/;
const inputWord = await myFunc.inputValidator(
    await myFunc.readLine('Введите слово: '),
    input => (wordRegEx.test(input) === true),
    'Ошибка! Повторите ввод: '
);
console.log(`Введено слово: ${inputWord}`);
console.log(`Проверка, что слово "${inputWord}" читается одинаково с любой стороны ...`);
let reverseInputWord = '';
for (let k = 0; k < inputWord.length; k++){
    reverseInputWord = `${inputWord[k]}${reverseInputWord}`;
};
if(reverseInputWord === inputWord){
    console.log(`Слово "${inputWord}" читается одинаково с любой стороны!`);
} else {
    console.log(`Слово "${inputWord}" читается НЕ одинаково с любой стороны ("${reverseInputWord}")!`);
};
console.log('---');
const baseArray = [
	[
		[11, 12, 13],
		[14, 15, 16],
		[17, 17, 19],
	],
	[
		[21, 22, 23],
		[24, 25, 26],
		[27, 27, 29],
	],
	[
		[31, 32, 33],
		[34, 35, 36],
		[37, 37, 39],
	],
];
console.log('Дан массив: ');
console.log(baseArray);
console.log('Начинаем поиск суммы элементов данного массива ...');
let arraySum = 0;
for (let j = 0; j < baseArray.length; j++){
    const subArray = baseArray[j];
    let subArraySum = 0;
    for(let k = 0; k < subArray[k]; k++){
            subArraySum = subArraySum + subArray[k];
    };
    arraySum = arraySum + subArraySum;
};
console.log(`Сумма всех элементов массива: ${arraySum}`);

//Process exit;
console.log('Завершение работы ...');
process.exit(0);
