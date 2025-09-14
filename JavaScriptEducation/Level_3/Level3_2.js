import * as myFunc from '..//MyFunctionList.js';

/**
 * - Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.
 * - Дан массив. Удалите из него каждый пятый элемент.
 * - Дана некоторая переменная с числом:
let num = 5;
Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка:
'00000'
 * - Дана некоторая строка со словами:
'aaa bbb ccc eee fff'
Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:
'aaa ccc fff'
 * - Дан массив:
[
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]
Найдите сумму элементов этого массива.
 */
async function createArray (arrayElementCnt) {
    let newArray = [];
    let newElement = 0;

    for (let i = 0; i < arrayElementCnt; i++){
        newElement = await myFunc.getRandomNumber (-100, 200); //Randomize array value;
        newArray[i] = newElement;
    }
    return new Promise(resolve => {resolve(newArray)}); //Return array;
} ;

console.log('Запуск процесса ...');
console.log('Собираем числа от 10 до 1000 ...');
console.log('Вычленяем числа в которых предпоследня цифра четная ...');
let numString = '';
for (let i = 10; i <= 1000; i++){
    const curNum = String(i);
    if(Number(curNum[curNum.length-2]) % 2 === 0){
        if(numString === ''){
            numString = `${curNum}`;
        } else {
            numString = `${numString}, ${curNum}`;
        }
    }
};
console.log(`Список цифр от 10 до 1000 в которых предпоследня цифра четная: ${numString}`);
console.log('---');

const cntElementArray = await myFunc.inputValidator(
    await myFunc.readLine('Укажите сколько элементов в массиве требуется создать (больше 20): '),
    input => input > 20,
    'Повторите ввод: '
);
console.log(`Генерируем массив данных в которых будет ${cntElementArray} элементов ...`);
const newArray = await createArray(cntElementArray);
console.log('Сгенерирован массив:');
console.log(newArray);
console.log('Удаляем каждый 5 элементв из массива ...');
const newArrayFilter = newArray.filter(index => (index % 5 !== 0));
console.log('Получен новый массив: ');
console.log(newArrayFilter);
console.log('---');
let num = await myFunc.inputValidator(
    await myFunc.readLine('Введите число от 1 до 10: '),
    input => input > 0 && input < 11,
    'Ошибка! повторите ввод числа: '
);
console.log('Генерируем строку с нулями ...');
console.log('Получена строка: '+'0'.repeat(num));
console.log('---');
let string = 'aaa bbb ccc eee fff';
console.log('Получена строка: ' + string);
console.log('Удаляем каждое второе слово ...');
let arr = string.split(' ');
let newString = '';
for(let i = 0; i < arr.length; i++){
    if((i + 1) % 2 !== 0){
        newString = `${newString} ${arr[i]}`
    }
};
console.log(`Получена новая строка: ${newString}
---`);
const baseArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
const sumArray = [];

console.log('Сформирован массив: ');
console.log(baseArray);
console.log('Находим сумму элементов массива ...');
for (let i = 0; i < baseArray.length; i++){
    const elementArray = baseArray[i];
    let elementSum = 0;
    for(let j = 0; j < elementArray.length; j++){
        elementSum = elementSum + elementArray[j];
    };
    sumArray[i] = elementSum;
};
console.log('Сформирован новый массив в суммированными элементами: ');
console.log(sumArray);
//Process exit;
console.log('Завершение работы ...');
process.exit(0);
