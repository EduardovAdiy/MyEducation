/**
 * №1: Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
 * №2: Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
 */

import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question (
    'Введите данные: ', inputValues_1 => {
        //Проверка, что введена строка;
        if(isNaN(inputValues_1) === true){
            const inputLen = inputValues_1.length;
            //Если длина строки более 1 символа, иначе выдаем сообщение об этом;
            if(inputLen > 1) {
                console.log(`Предпоследний символ: ${inputValues_1[inputLen - 2]}`);
                rl.close();
            } else {
                console.log('Длина строки менее 1 символа');
                rl.close();
            }
        } else {
            rl.question (
                'Введите второе число: ', inputValues_2 => {
                    //Проверка, что было введено число;
                    if(isNaN(inputValues_2) === false) {
                        //Проверка, что делится без остатка;
                        if (inputValues_1 % inputValues_2 === 0) {
                            console.log(`Число ${inputValues_1} делится на число ${inputValues_2} без остатка`);
                            rl.close();
                        } else {
                            console.log(`Число ${inputValues_1} НЕ делится на число ${inputValues_2} без остатка`);
                            rl.close();
                        }
                    } else {
                        console.log('Ошибка! Введенные данные не являются числом!');
                        rl.close();
                    }
                }
            )
        }
    }
)
