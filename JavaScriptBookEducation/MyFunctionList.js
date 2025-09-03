import readline from 'node:readline';

//Рандомайзер чисел в заданном диапазоне;
async function getRandomNumber (startNum, endNum) {
    let startNumber = startNum;
    let endNumber = endNum;
    let middleNumber = 0;
    let isNegativeNumber = 0;
    //Проверка на строку для startNumber;
    if (isNaN(startNumber) === true) {
        startNumber = 0;
    };
    //Проверка на строку для endNumber;
    if (isNaN(endNumber) === true) {
        endNumber = 100;
    };
    //Проверка на то, что endNumber больше startNumber;
    if(startNumber > endNumber) {
        middleNumber = endNumber;
        endNumber = startNumber;
        startNumber = middleNumber;
    };
    //Проверка на наличие отрицательных чисел;
    if(startNumber < 0 || endNumber < 0){
        isNegativeNumber = 1;
    };
    //Рандомизируем данные;
    const min = Math.ceil(startNumber); // округляем до ближайшего большего целого  
    const max = Math.floor(endNumber); // округляем до ближайшего меньшего целого  
    const result = Math.floor(Math.random() * (max - min + 1)) + min;  

    return result;
};
//Создаем пользовательский интерфейс;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Функция для ввода данных;
async function readLine(inputText) {
    return new Promise(resolve => {
        rl.question(inputText, answer => { resolve(answer); });
    });
};

async function inputValidator (input, validator, errorQuery) {
    if(validator(input) === true) {
        return new Promise(resolve => {resolve(input)});
    }
    else {
        const errorResult = await readLine(errorQuery);
        await inputValidator(errorResult, validator, errorQuery);
    }
};

export {getRandomNumber, readLine, inputValidator};
