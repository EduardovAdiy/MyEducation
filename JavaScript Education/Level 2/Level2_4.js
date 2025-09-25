import readline from 'node:readline';

//Создаем интерфейс;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//функция для отправки запроса и получения результата;
async function getReadline (inputString) {
    return new Promise(resolve => {
        rl.question(inputString, answer => { resolve(answer); });
    });    
};
//Функция валидатор данных;
async function dateValidator (input, validator, errorQuery) {
    if(validator(input)){
        return input;
    } else {
        const errorResult = await getReadline (errorQuery);
        return await dateValidator(errorResult, validator, errorQuery);
    }
};
/**
 - Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
 - Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
 - Дано число. Выведите в консоль количество четных цифр в этом числе.
 - Дана некоторая строка. Переведите в верхний регистр все нечетные буквы этой строки. 
 - Дана некоторая строка со словами. Сделайте заглавным первый символ каждого слова в этой строке.
 */

console.log('Запрос данных у пользователя ...');
const inputText = await dateValidator(
    await getReadline('Введите произвольную строку (от 1 до 20 символов): '),
    input => (input.length >= 1 && input.length <= 20),
    'Введенные данные не соответствуют требованиям ...\nПовторите ввод данных (от 1 до 20 символов): '
);
console.log(`Получена строка: ${inputText}
Вычисляем позицию первой цифры в строке ...`);
let firstNumPosition = 0;
for (let i = 0; i < inputText.length; i++){
    if(isNaN(inputText[i]) === false && firstNumPosition === 0){
        firstNumPosition = (i + 1);
    }
};
//Определяем были ли вообще числа в строке;
if (firstNumPosition > 0){
    console.log(`Позиция первой цифры в строке: ${firstNumPosition}
---`);
}else {
    console.log(`Позиция первой цифры в строке не определена, т.к. цифры отсутствуют ...
---`);
}

//Запрос массива объектов с ключами от пользователя;
console.log('Запрос объекта с ключами и значениями у пользователя ...');
const inputObjText = await dateValidator (
    await getReadline('Введите объект с ключами и значениями: '),
    input => (1 === 1),
    ''
);
console.log('Преобразем строку в объект ...');
const baseObj = JSON.parse(inputObjText); //Преобразуем текст в объект JS;
console.log(`Был введен следующий объект: `);
console.log(baseObj);
console.log('Формируем массив для ключей объекта ...');
const arrayKeys = Object.keys(baseObj); //Записывем данные ключей в массив;
console.log(`Сформирован массив с ключами объекта: `);
console.log(arrayKeys);
console.log('Формируем массив для значений объекта ...');
const arrayValues = Object.values(baseObj); //Записываем данные значений в массив;
console.log(`Сформирован массив с значеними объекта: `);
console.log(arrayValues);
console.log('---');

//Запрос у пользователя числа;
console.log('Запрос у пользователя числа ...');
const inputNumber = await dateValidator(
    await getReadline('Введите число: '),
    input => (isNaN(input) === false),
    'Введенные данные на соответствуют требованиям!\nВведите число: '
);
console.log(`Введено число: ${inputNumber}
Подсчитываем количество четных цифр ...`);

let cntEven = 0; //Счетчик четных чисел;
for(let i = 0; i < inputNumber.length; i++){
    if(inputNumber[i] % 2 === 0){
        cntEven = cntEven + 1;
    }
}
console.log(`Количество четных цифр: ${cntEven}
---`);

//Запрос строки у пользователя;
console.log('Запрос строки у пользователя ...');
const inputString = await dateValidator(
    await getReadline('Введите произвольную строку: '),
    input => (input.length > 5),
    'Дина строки менее 5 смиволов! Повторите ввод: '
);
console.log(`Была введена строка: ${inputString}`);
console.log('Переводим в верхний регистр каждый нечетный символ строки ...');
let stringUpperCaseNotEven = ''; //Новая строка с нечетными символами в верхнем регистре;
for (let i = 0; i < inputString.length; i++){
    if((i + 1) % 2 === 0){
        stringUpperCaseNotEven = `${stringUpperCaseNotEven}${inputString[i].toUpperCase()}`;
    } else {
        stringUpperCaseNotEven = `${stringUpperCaseNotEven}${inputString[i]}`;
    }
}
console.log(`Получена новая строка: ${stringUpperCaseNotEven}
Перводим в верхний регистр первые буквы слов в строке ...`);
const arrayString = inputString.split(','); //Разбиваем строку на отдельные слова;
let stringUpperCaseFirstWords = ''; //Новая строка;
for(let i = 0; i < arrayString.length; i++){
    let newWord = arrayString[i]; //Записываем значение в переменную;
    if(i === 0){
        stringUpperCaseFirstWords = `${newWord[0].toUpperCase()}${newWord.substring(1, newWord.length)}`;
    } else {
        stringUpperCaseFirstWords = `${stringUpperCaseFirstWords} ${newWord[0].toUpperCase()}${newWord.substring(1, newWord.length)}`;
    }
}
console.log(`Сформирована новая строка: ${stringUpperCaseFirstWords}
Завершаем работу ...`);

//Завершаем процесс;
process.exit(0);
