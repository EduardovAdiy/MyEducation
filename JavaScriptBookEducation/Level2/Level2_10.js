import * as myFunc from '..//MyFunctionList.js';

/**
 * - Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.
 * - Дано число. Получите первую четную цифру с конца этого числа.
 * - Дана некоторая строка: 'abcde abcde abcde'. Замените в ней первый символ каждого слова на '!': '!bcde !bcde !bcde'
 * - Дан массив с числами: [1, 2, 3, 3, 4, 5]. Проверьте, что в этом массиве есть два одинаковых элемента подряд.
 */ 
console.log('Запрос инормации у пользователя ...');
const inputString = await myFunc.inputValidator(
    await myFunc.readLine('Введите строку с буквами и цифрами: '),
    input => input.length > 5,
    'Строка слишком короткая! Повторите ввод: '
);
console.log(`Получена следующая строка: ${inputString}`);
console.log('Начинаем проверку, что в этой строке не более трех букв ...');
let inputStringCharCnt = 0; //Счетчик букв в строке;

for(let i = 0; i < inputString.length; i++){
    if(isNaN(inputString[i]) === true){
        inputStringCharCnt = inputStringCharCnt + 1;
    }
};
console.log(`В строке "${inputString}" обнаружено ${inputStringCharCnt} букв!`);
console.log('---') //Delimeter;

console.log('Запрашиваем число у пользователя ...');
const inputNumber = await myFunc.inputValidator(
    await myFunc.readLine('Введите число (больше 1000): '),
    input => (isNaN(input) === false && input > 1000),
    'Некорректное число! Повторите ввод: '
);
console.log('Было введено число: ' + inputNumber);
console.log('Поиск первой нечетной цифры с конца числа ...');
let notEvenNum = 0;
let i = (inputNumber.length - 1);
let msgText = 'В данном числе нечетных цифр не обнаружено ...';

while (i >= 0 && notEvenNum === 0) {
    if(inputNumber[i] % 2 === 0) {
        notEvenNum = inputNumber[i];
        console.log (`Первая нечетная цифра с конца числа: ${notEvenNum}`);
    };
    i = i - 1; //Уменьшаем счетчик;
};
console.log('---'); //Delimeter;
const removeString = 'abcde abcde abcde';
console.log(`Получена строка: ${removeString}`);
console.log('Заменяем первые символы слов на "!" ...');
let newString = '';
for(let i = 0; i < removeString.length; i++){ 
    if(removeString[i - 1] === ' ' || i === 0){
        newString = `${newString}!`;
    }else {
        newString = `${newString}${removeString[i]}`;
    }
};
console.log(`Получена новая строка: ${newString}
---`);
const baseArray = [1, 2, 3, 3, 4, 5];
console.log('Получен массив с числами: ');
console.log(baseArray);
console.log('Проверка того, что в этом массиве есть два одинаковых элемента подряд ...');
let checkArrayDoubles = 0;
let j = 0;
let msgArrayCheckDoubles = 'В данном массиве два одинаковых элемента ОТСУТСТВУЮТ! ';
while (j < baseArray.length && checkArrayDoubles === 0){
    if(baseArray[j] === baseArray[j+1]){
        checkArrayDoubles = 1;
        msgArrayCheckDoubles = 'В данном массиве есть два одинаковых элемента подряд!';
    }
    j = j + 1;
};
console.log(msgArrayCheckDoubles);
console.log('---');

//Exit from process;
console.log('Завершаем процесс ...');
process.exit(0);
