import * as myFunc from '../../MyFunctionList.js';

/**
 * - Дан массив с числами. Найдите сумму квадратов элементов этого массива.
 * - Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
 * - Дан массив с числами. Найдите сумму положительных элементов этого массива.
 * - Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
 */

//Базовая функция для вывода данных;
async function main() {
    let arr = []; // Объявляем массив;

    //Данные для формирования массива;
    const baseQuestion = "Введите число от 3 до 15: ";
    const errorQuestion = "Введенное значение не соответствует условиям! \nПовторите ввод данных: ";
    let massiveObjCnt = await myFunc.inputValidator (
                                await myFunc.readLine (baseQuestion), 
                                input => (isNaN(input) === false && input >= 3 && input <=15 && input !== undefined),
                                errorQuestion);

    //Генерируем массив чисел;
    for (let i = 0; i < massiveObjCnt; i++) {
        arr[i] = await myFunc.getRandomNumber (-10, 100);
    }

    const massiveLen = arr.length; //Длина массива;

    //Сумма квадратов элементов массива;
    let massiveElemetSum = 0;
    for (let i = 0; i < massiveLen; i++) {
        const elemetSquare = Math.pow(arr[i], 2);
        massiveElemetSum = massiveElemetSum + elemetSquare;
    }

    //Сумма квадратных корней элементов этого массива;
    let massiveElementSqrtSum = 0;
    for (let i = 0; i < massiveLen; i++) {
        const elemetSqrt = Math.sqrt(arr[i]);
        massiveElementSqrtSum = massiveElementSqrtSum + elemetSqrt;
    }

    //Сумма положительных элементов этого массива;
    let massivePositiveElementSum = 0;
    for (let i = 0; i < massiveLen; i++) {
        if (arr[i] > 0){
        massivePositiveElementSum = massivePositiveElementSum + arr[i];
        }
    }

    //Сумма тех элементов этого массива, которые больше нуля и меньше десяти.
    let elementSum = 0;
    for (let i = 0; i < massiveLen; i++) {
        if (arr[i] > 0 && arr[i] < 10){
        elementSum = elementSum + arr[i];
        }
    }
    
    const result = `-------------
Создам массив чисел: [${arr}] ...

- Сумма квадратов элементов массива: ${massiveElemetSum} ...
- Сумма квадратных корней элементов этого массива: ${massiveElementSqrtSum} ...
- Сумма положительных элементов этого массива: ${massivePositiveElementSum} ...
- Сумма тех элементов этого массива, которые больше нуля и меньше десяти: ${elementSum} ...

Заверешение работы ...`

    // Вывод жанных в консоль;
    console.log(result);
    //Завершаем процесс, т.к. readline.close() отсутсвует;
    process.exit(0);
    
};

main();



