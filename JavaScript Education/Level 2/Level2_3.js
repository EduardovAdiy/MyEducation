import * as myFunc from '../MyFunctionList.js';

/**
 * - Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
 * - Дана некоторая строка. Найдите позицию третьего нуля в строке.
 * - Даны числа, разделенные запятыми: '12,34,56'. Найдите сумму этих чисел.
 * - Дана дата в следующем формате: '2025-12-31'. Преобразуйте эту дату в следующий объект:
{
	year: '2025',
	month: '12',
	day: '31',
}
 */
console.log('Запрос слова 1 ...');
const firstWord = await myFunc.inputValidator (
    await myFunc.readLine('Введите слово 1: '),
    input => (isNaN(input) === true && input.indexOf(' ') === -1),
    'Введены некорректные данные! Требуется ввести только одно слово: '
); //Вносим слово 1;

console.log(`Внесено слово 1: ${firstWord} ...
---`);

console.log('Запрос слова 2 ...');
const secondtWord = await myFunc.inputValidator (
    await myFunc.readLine('Введите слово 2: '),
    input => (isNaN(input) === true && input.indexOf(' ') === -1),
    'Введены некорректные данные! Требуется ввести только одно слово: '
); //Вносим слово 1;

console.log(`Внесено слово 2: ${secondtWord} ...
---`);

//Проверка сопадения первых букв слов;
console.log('Выполняется проверка сопадения первых букв слов ...');
if(firstWord[0] === secondtWord[0]){
    console.log('Первые буквы слов совпадают!\n---');
} else {
    console.log('Первые буквы слов НЕ совпадают!\n---');
}
//Проверка наличия и вывод позиции третьего нуля в строке;
console.log('Запрос данных строки от пользователя ...');
const zero3Position = await myFunc.inputValidator(
    await myFunc.readLine('Введите произвольные данные (от 4 до 20 символов): '),
    input => (isNaN(input) === true && input.length >= 4 && input.length <= 20),
    'Введенные данные не соответствуют требованиям! Введите произвольные данные (от 4 до 20 символов): '
);
console.log(`Внесена следующая строка: ${zero3Position} ...
Поиск позиции третьего нуля в строке ...`);

if(zero3Position.indexOf('0') === -1){
    console.log('Нули в веденной строке отсутствуют ...\n---');
} else{
    console.log('Нули в веденной строке обнаружены! Вычисление позиций нулей ...');
    let firstZeroPosition = 0; //Позиция первого нуля;
    let secondZeroPosition = 0; //Позиция второго нуля;
    let thirdZeroPosition = 0; //Позиция третьего нуля;
    let positionCnt = 0; //Кол-во нулей;
    for (let i = 0; i < zero3Position.length; i++){
        if (zero3Position[i] === '0' && positionCnt < 3){
            positionCnt = positionCnt + 1; //Увеличиваем счетчик;
            if (positionCnt === 1) {
                firstZeroPosition = (i + 1);
                console.log(`Позиция первого нуля: ${firstZeroPosition} ...`);
            }; 
            if (positionCnt === 2) {
                secondZeroPosition = (i + 1);
                console.log(`Позиция второго нуля: ${secondZeroPosition} ...`);}; 
            if (positionCnt === 3) {
                thirdZeroPosition = (i + 1);
                console.log(`Позиция третьего нуля: ${thirdZeroPosition} ...`);}; 
        }
    }
console.log('---');
}

//Запрос массива цифр для суммации;
console.log('Запрос массива цифр от пользователя ...');
const regex = /^[0-9, ]+$/; //Регулярное выражение для проверки введенных данных;
let numberArray = []; //Объявляем массив для хранения данных;
const numberArrayText = await myFunc.inputValidator(
    await myFunc.readLine('Введите несколько цифр через запятую и без пробелов (5,12,2...): '),
    input => (regex.test(input) && input[0] !== ',' && input[(input.length - 1)] !== ',' && input.indexOf(' ') === -1),
    'Введенные данные не соответствуют требованиям ...\nВведите несколько цифр через запятую и без пробелов (5,12,2...): '
);
numberArray = numberArrayText.split(',');//Добавляем данные в массив;
console.log(`Получен массив чисел: [${numberArray}] ...
Вычисляем сумму элементов массива ...`);
let arraySum = 0; 
for(let i = 0; i < numberArray.length; i++){
    arraySum = arraySum + Number(numberArray[i]);
}
console.log(`Сумма чисел элементов массива: ${arraySum}
---`);

//Запрос даты от пользователя;
console.log('Запрос даты от пользователя ...');
const regexData = /^\d{4}-\d{2}-\d{2}$/; //Маска для проверки;
const inputData = await myFunc.inputValidator(
    await myFunc.readLine('Введите произвольную дату в формате "ГГГГ-ММ-ДД": '),
    input => (regexData.test(input)),
    'Введенная дата не соответствует требуемоему формату ...\nВведите произвольную дату в формате "ГГГГ-ММ-ДД": '
)
console.log(`Получена дата: ${inputData}
Начинаем преобразование ...`);
console.log('Создаем массив для хранения объекта ...');
let dateArray = new Array ({year: inputData.substring(0, 4), month: inputData.substring(5,7), day: inputData.substring(8,11)});
console.log('Данные записаны в массив ...');
console.log(dateArray);

//Завершаем процесс;
process.exit(0);
