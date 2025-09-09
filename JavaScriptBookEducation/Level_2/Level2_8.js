import * as myFunc from '../MyFunctionList.js';
/**
 * - Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.
 * - Дана некоторая строка. Удалите из этой строки все подстроки, в которых количество символов больше трех. 
 * - Даны два массива. Слейте эти массивы.
 */
const regex = /^(\b\w+\b\s?){3,}$/; //Регулярное выражение на ввод 3-х и более слов;
console.log('Запрос информации от пользователя ...');
const inputText = await myFunc.inputValidator(
    await myFunc.readLine('Введите произвольные данные (не менее 3-х слов): '),
    input => (input.indexOf(' ') !== -1 && regex.test(input) === true),
    'Введенные данные не соответствуют требованиям! Повторите ввод данных: '
); //Получение строки;
console.log(`Получены следующие данные: ${inputText}.`);
//--------------------------
console.log('Проверяем данные на наличие заглавных букв ...');

let inUpperCaseCnt = 0; //Счетчик букв в верхнем регистре;
for (let i = 0; i < inputText.length; i++){
    if(inputText[i] === inputText[i].toUpperCase()){
        inUpperCaseCnt = inUpperCaseCnt + 1; //Увеличиваем счетчик;
    }
};
if (inUpperCaseCnt > 2){
    console.log('В веденной строке более двух заглавных букв ...');
} else {
    console.log('В веденной строке НЕ более двух заглавных букв ...');
};
console.log('---');
// ----------------
console.log('Удаляем все слова в которых количество символов больше трех ...');
let inputTextArray = inputText.split(' '); //Разбиваем строку на массив слов;
let newInputText = ''; //Переменная для хранения новых данных;

for (let i = 0; i < inputTextArray.length; i++){
    const arrayWord = inputTextArray[i];
    if (arrayWord.length < 4) {
        if (arrayWord === '') {
            newInputText = `${arrayWord}`; 
        } else {
            newInputText = `${newInputText} ${arrayWord}`; 
        }
    }
};
console.log(`Получена новая строка: ${newInputText}
---`);
//------
console.log('Получение данных от пользователя ...');
const arrayRegEx1 = /^[0-9,]*$/; //Ругелярное выражение для массива 1;
const inputArray1Text = await myFunc.inputValidator(
    await myFunc.readLine('Введите массив чисел через запятую и без пробелов (1,2,4 ...): '),
    input => (arrayRegEx1.test(input) === true && input[0] !== ',' && input[input.length - 1] !== ','),
    'Введенные данные не соответствуют требованиям!\nВведите массив чисел через запятую и без пробелов (1,2,4 ...): '
);
console.log('Получен массив чисел: ');
console.log(inputArray1Text);
const arrayRegEx2 = /^[a-zA-Z,]*$/; //Ругелярное выражение для массива 1;
const inputArray2Text = await myFunc.inputValidator(
    await myFunc.readLine('Введите массив букв через запятую и без пробелов (a,b,c ...): '),
    input => (arrayRegEx2.test(input) === true && input[0] !== ',' && input[input.length - 1] !== ','),
    'Введенные данные не соответствуют требованиям!\nВведите массив букв через запятую и без пробелов (a,b,c ...): '
);
console.log('Получен массив букв: ');
console.log(inputArray2Text);

let inputArray1 = inputArray1Text.split(',');
let inputArray2 = inputArray2Text.split(',');

console.log('Проводим слияние массивов ...');

inputArray1.splice(inputArray1[inputArray1.length - 2], 0, inputArray2);//Вставляем данные второго массива;
console.log(inputArray1);

//Завершение работы;
console.log('Завершение работы ...');
process.exit(0);

