import readline from 'node:readline';
import * as func from './FuncList.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const manualText = `Выберите один из представленных вариантов:
    - 1: Вывести в консоль сумму всех целых чисел от 1 до 100.
    - 2: Вывести в консоль сумму всех целых четных чисел в промежутке от 1 до 100.
    - 3: Вывести в консоль сумму всех целых нечетных чисел в промежутке от 1 до 100.
    - 4: Вывести в консоль два числа. Переберазовать и вывести в консоль остаток от деления первого числа на второе.
    - 5: Вывести в консоль строку. Переберазовать и вывести в консоль по очереди все символы с конца строки.
    - N: Завершить работу.
    
Введите необходимый вариант: `;

function userQuestion (query, validator) {
   rl.question (query, input => {
        if (validator(input)) {
            //от 1 до 100;
            if(input === '1') {
                func.allNumSum();
                userQuestion (query, validator)
            };
            //от -100 до 0;
             if(input === '2') {
                func.allEvenNumSum();
                userQuestion (query, validator)
            };
            //от 100 до 1;
             if(input === '3') {
                func.allNotEvenNumSum();
                userQuestion (query, validator)
            };
            //от 1 до 100;
             if(input === '4') {
                rl.question( 'Введите первое число: ', inputFirstNum => {
                    rl.question('Введите второе число: ', inputSecondNum => {
                        func.remainOfDivision(inputFirstNum, inputSecondNum);
                        userQuestion (query, validator)
                    }) 
                });
            };
            //от 1 до 100;
             if(input === '5') {
                rl.question('Введите строку: ', inputText =>{
                    func.reverseStringOut(inputText);
                    userQuestion (query, validator)
                });             
            };
            //Завершить работу;
             if(input === 'N') {
                rl.close();
            };

        } else {
            const queryRepeat = 'Введенные данные не соответствуют ни одному из предложенных вариантов!\n' + manualText;
            userQuestion (queryRepeat, validator);
        }
   });
};

userQuestion(manualText, input => ((input > 0 && input < 6) || input === 'N'));

