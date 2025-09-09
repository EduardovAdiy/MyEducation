import * as func from './FuncList.js';
import readline from 'node:readline';
//Создаем пользовательский интерфейс для ввода данных;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//№1 и 4
rl.question (
    'Введите число: ', inputNumber => {
        const resIsPositive = func.checkIsPositiveNumber (inputNumber);
        const resIsEven = func.checkIsEvenNumber (inputNumber);
        const numberresult = `${resIsPositive}. ${resIsEven}`;

        console.log(numberresult);
       //№2 и 3
        rl.question (
            'Введите строку: ', inputText =>{
            const resLen = func.stringLength(inputText);
            const resLastChar = func.stringLastChar (inputText);
            const stringResult = `${resLen}. ${resLastChar}`;

            console.log(stringResult);
            //№5
            rl.question(
                'Введите слово 1: ', inputWord1 =>{
                    rl.question (
                        'Введите слово 2: ', inputWord2 => {
                            const resCondit = func.checkFirstCharConcidence (inputWord1, inputWord2);
                            console.log(resCondit);
                            rl.close();
                        }
                    )
                }
            )
            }
        )
    }
)
