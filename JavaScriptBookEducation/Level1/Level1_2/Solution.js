import readline from 'node:readline';
import * as func from './FuncList.js';

// Создаем интерфейс для ввода данных;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Функция для вывода второго значения, которая принимает данные из первого ввода;
function getSecondInput (query, validator, firstInputNum) {
    rl.question(query, input2 => {
        if (validator(input2)) {
            const res2 = func.forTwoNumber(firstInputNum, input2);
            console.log (res2);
            rl.close()
        } else {
            console.log('Введеные данные не являются числом!')
            getSecondInput (query, validator);
        }
    });
}
// Функция для ввода первого числа;
function getInput (query, validator) {
    rl.question( query, input => {
        if (validator(input)) {
            const res1 = func.forOneNumber (input);
            console.log(res1);
            getSecondInput('Введите второе число: ', input2 => isNaN(input2) === false, input);
        } else {
            console.log('Введеные данные не являются числом!')
            getInput (query, validator);
        }
    });
}

//Запрос данных;
getInput('Введите число: ', input => isNaN(input) === false);
