import readline from 'node:readline';
import * as func from './FuncList.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const manualText = `Выберите один из представленных вариантов:
    - 1: Вывести в консоль все целые числа от 1 до 100.
    - 2: Вывести в консоль все целые числа от -100 до 0.
    - 3: Вывести в консоль все целые числа от 100 до 1.
    - 4: Вывести в консоль все четные числа из промежутка от 1 до 100.
    - 5: Вывести в консоль все числа кратные трем в промежутке от 1 до 100.
    - N: Завершить работу.
    
Введите необходимый вариант: `;

function userQuestion (query, validator) {
   rl.question (query, input => {
        if (validator(input)) {
            //от 1 до 100;
            if(input === '1') {
                func.fromOneToHundred();
                userQuestion (query, validator)
            };
            //от -100 до 0;
             if(input === '2') {
                func.fromMinHundredToZero();
                userQuestion (query, validator)
            };
            //от 100 до 1;
             if(input === '3') {
                func.fromHundredToOne();
                userQuestion (query, validator)
            };
            //от 1 до 100;
             if(input === '4') {
                func.fromOneToHundredIsEven();
                userQuestion (query, validator)
            };
            //от 1 до 100;
             if(input === '5') {
                func.fromOneToHundredMultipleThree();
                userQuestion (query, validator)
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

