import * as myFuns from '..//MyFunctionList.js';

/**
 * - Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.
 * - Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.
 * - Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.
 * - Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.
 * - Дано некоторое число: 35142. Отсортируйте цифры этого числа. В нашем случае должно получится следующее: 12345
 * - Напишите программу, которая сформирует следующую строку:'-1-2-3-4-5-'
 * - Дан следующий объект:
let obj = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}
Найдите сумму элементов этого объекта.
 */
console.log('Начало работы ...');
const regExString = /^[A-Za-zА-Яа-я]+( [A-Za-zА-Яа-я]+){3,}$/;
const inputText = await myFuns.inputValidator(
    await myFuns.readLine('Введите текст со словами (не менее 3-х слов): '),
    input => regExString.test(input),
    'Ошибка! Введите текст со словами (не менее 3-х слов): '
);
console.log('Записываем все слова, которые начинаются на букву "а" в отдельный массив ...');
const arr = inputText.split(' ');
const arrWithA = arr.filter(element => (element[0] === 'a' || element[0] === 'а'));
console.log('Получен массив: ');
console.log(arrWithA);
console.log('---');

const regExNum = /^[0-9]+(,[0-9]+){4,}$/;
const inputNumber = await myFuns.inputValidator(
    await myFuns.readLine('Введите массив чисел (1,2,3 ...): '),
    input => regExNum.test(input) === true,
    'Ошибка! Введите массив чисел (1,2,3 ...): '
);
const numberArray = inputNumber.split(',');
console.log('Получен массив чисел: ');
console.log(numberArray);
console.log('Оставляем только числа, которые делятся на 5 ...');
console.log('Получен массив:')
console.log(numberArray.filter(element => (Number(element) % 5 === 0)));
console.log('---');

console.log('Оставляем числа которые содержат 0 ...');
console.log('Получен массив: ');
console.log(numberArray.filter(element => (element.indexOf("0") >= 0)));
console.log('---');

const newArray = numberArray.filter(element => (element.indexOf("3") >= 0));
console.log('Проверяем, что в исходном массиве есть числа, содержащие цифру 3 ...');
if(newArray.length > 1){
    console.log('Исходный массив содержит числа имеющие в составе цифру 3.');
}else {
    console.log('Исходный массив НЕ содержит числа, имеющие в составе цифру 3.');
};
console.log('---');

const inputNumberForSort = await myFuns.inputValidator(
    await myFuns.readLine('Введите число (более 10 000): '),
    input => input > 10000,
    'Ошибка! Введите число (более 10 000): '
);
console.log('Сортируем цифры в числе в порядке возрастания ...');
console.log(Number(String(inputNumberForSort).split('').sort().join('')));
console.log('---');

let obj = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
};
console.log('Получен объект: ');
console.log(obj);
console.log('Вычисляем сумму элементов объекта ...');
let objSum = 0;
for(let i in obj) {
    let subObj_1 = obj[i];
    for(let j in subObj_1){
        for(let k = 1; k < 3; k++){
            objSum = objSum + subObj_1.k;
        };
    }
}
console.log(`Сумма элементов объекта равна: ${objSum}`);
console.log('---');
//Process exit;
console.log('Завершение работы ...');
process.exit(0);
