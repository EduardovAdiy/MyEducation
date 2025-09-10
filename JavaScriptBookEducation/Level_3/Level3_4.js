import * as myFunc from '..//MyFunctionList.js';
/**
 * - Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.
 * - Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]. Поменяйте местами пары элементов этого массива: [2, 1, 4, 3, 6, 5]
 * - Дан следующий объект:
let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}
Найдите сумму элементов этого объекта.
 */
let firstNumEvenString = '';
console.log('Начало работы ...');
console.log('Находим числа от 10 до 100 где первая цифра четная ...');
for(let i = 10; i <= 1000; i++){
    const curNum = String(i);
    if(Number(curNum[0]) % 2 === 0){
        if(firstNumEvenString === ''){
            firstNumEvenString = `${i}`;
        }else { 
            firstNumEvenString = `${firstNumEvenString}, ${i}`;
        }
    } 
};
console.log(`Выводим спискок чисел: ${firstNumEvenString}`);
console.log('---');
const regEx = /^[0-9]+(,[0-9]+){3,}$/; //Регулярное выражение;
const inputArrayString = await myFunc.inputValidator(
    await myFunc.readLine('Введите массив цифр через запятую и без пробелов (1,2,3...): '),
    input => regEx.test(input) === true,
    'Ошибка! Введите массив цифр через запятую и без пробелов (1,2,3...): '
);
const inputArray = inputArrayString.split(',');
let reverseArray = [];
console.log('Получен массив данных:');
console.log(inputArray);
console.log('Меняем пары элементов массива местами ...');
const arrLen = inputArray.length;
for (let i = 0; i < inputArray.length; i = i + 2){

    if( arrLen % 2 !== 0 && i === (arrLen - 1)){
        reverseArray.splice(i,0, inputArray[i]);
    } else { 
        reverseArray.splice(i,0, inputArray[i + 1], inputArray[i]);
    }
};
console.log('Обновленный массив: ');
console.log(reverseArray);
console.log('---');
let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
};
console.log('Получен объект: ');
console.log(obj);
let objSum = 0;
for(let i in obj){
    let subObjSum = 0;
    let subObj = obj[i];
    for(let k in subObj){
        subObjSum = subObjSum + subObj[k];
    };
    objSum = objSum + subObjSum;
    console.log(`Сумма элеметна ${i} равна ${subObjSum} ...`);
};
console.log(`Сумма всех элементов объекта: ${objSum}`);
console.log('---');
//Process exit;
console.log('Завершение работы ...');
process.exit(0);
