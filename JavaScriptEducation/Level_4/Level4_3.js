import * as myFunc from '../MyFunctionList.js';
/**
 * - Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.
 * - Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли, которые встречаются больше трех раз.
 * - Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы.
 * - Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение из этого массива в виде следующего объекта:
{
	max: 9,
	min: 1,
}
 */
//Функция на запрос массива;
async function getArrayNumberValues () {
    const inputArrayText = await myFunc.inputValidator(
            await myFunc.readLine('Введите массив цифр через запятую (1,2,3...): '),
            input => (/^[0-9]+((,|, )[0-9]+){2,}$/).test(input),
            'Ошибка! Введены некорректные данные! Введите массив цифр через запятую (1,2,3...): '
        );
    return inputArrayText.split(',').map(Number);
};
//Функция, которая параметром будет принимать массив и удалять из него все дубли;
function getDeleteArrayDouble (inputArray) {
    const innerArray = inputArray; 
    let outputArray = [];
    for(let i in innerArray){
        if(outputArray.filter(element => element === innerArray[i]).length === 0){
            outputArray.push(innerArray[i]);
        }
    }
    return outputArray;
};
//Функция, которая параметром будет принимать массив и удалять из него все дубли, которые встречаются больше трех раз;
function getDeleteArrayDouble3Times (inputArray) {
    const innerArray = inputArray; 
    let outputArray = [];
    for(let i in innerArray){
        if(outputArray.filter(element => element === innerArray[i]).length < 3){
            outputArray.push(innerArray[i]);
        }
    }
    return outputArray;
};
//Функция, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы;
function getDeleteNearDouble (inputArray) {
    const innerArray = [];
    for (let i in inputArray){
        if(inputArray[i] !== inputArray[i - 1]){
            innerArray.push(inputArray[i]);
        }
    };
    return innerArray;
};
function getMaxMinArrayValue (inputArray) {
    let innerObj = {};
    let minValue = inputArray.reduce((a, b) => Math.min(a,b));
    let maxValue = inputArray.reduce((a, b) => Math.max(a,b));
    innerObj.max = maxValue;
    innerObj.min = minValue;
    return innerObj;
}

//--------------- Блок с работой функций -----------------
let repeatQuestion = 'Y';

while (repeatQuestion === 'Y') {
    const baseQuestion = `Выберите необходимую функцию:
1 - Запустуить функцию, которая параметром будет принимать массив и удалять из него все дубли.
2 - Запустуить функцию, которая параметром будет принимать массив и удалять из него все дубли, которые встречаются больше трех раз.
3 - Запустуить функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы.
4 - Запустуить функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение из этого массива в виде объекта.
Укажите номер функции для запуска: `;

    const inputValue = await myFunc.inputValidator(
        await myFunc.readLine(baseQuestion),
        input => (/^[1-4]$/).test(input),
        `Ошибка! Повторите ввод данных! ${baseQuestion}`
    );

    if (Number(inputValue) === 1) {
        console.log('Вы выбрали функцию, которая параметром будет принимать массив и удалять из него все дубли ...');
        const inputArray = await getArrayNumberValues();
        console.log('Получен массив чисел: ');
        console.log(inputArray);
        console.log('Удаляем дубли чисел из массива ...');
        const getArray = getDeleteArrayDouble(inputArray);
        console.log('Сформирован массив уникальных чисел: ');
        console.log(getArray);
    };

    if (Number(inputValue) === 2) {
        console.log('Вы выбрали функцию, которая параметром будет принимать массив и удалять из него все дубли, которые встречаются больше трех раз ...');
        const inputArray = await getArrayNumberValues();
        console.log('Получен массив чисел: ');
        console.log(inputArray);
        console.log('Удаляем дубли чисел из массива, которые встречаются более трех раз ...');
        const getArray = getDeleteArrayDouble3Times(inputArray);
        console.log('Сформирован массив уникальных чисел: ');
        console.log(getArray);
    };

    if (Number(inputValue) === 3) {
        console.log('Вы выбрали функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы ...');
        const inputArray = await getArrayNumberValues();
        console.log('Получен массив чисел: ');
        console.log(inputArray);
        console.log('Удаляем из массива из него одинаковые, рядом стоящие элементы ...');
        const getArray = getDeleteNearDouble(inputArray);
        console.log('Сформирован массив уникальных чисел: ');
        console.log(getArray);
    };

    if (Number(inputValue) === 4) {
        console.log('Вы выбрали функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение из этого массива в виде объекта ...');
        const inputArray = await getArrayNumberValues();
        console.log('Получен массив чисел: ');
        console.log(inputArray);
        console.log('Осуществляем поиск максимального и минимального значения ...');
        const getObject = getMaxMinArrayValue(inputArray);
        console.log('Сформирован массив уникальных чисел: ');
        console.log(getObject);
    };

    repeatQuestion = await myFunc.inputValidator(
        await myFunc.readLine('Повторить работу (Y/N)?: '),
        input => (/^(Y|N)$/).test(input),
        'Ошибка! Введены некорректные данные! Повторить работу (Y/N)?: '
    );

};


process.exit(0);
