
//№1: Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль;
const checkIsPositiveNumber = (inputNumber) => {
    const result = '';
    //Проверка, что введено число;
    if (isNaN(inputNumber) === true) {
        return 'Ошибка! Введенные данные не являются числом!';
    };

    if(inputNumber > 0) {
        return 'Данное число является положительным!';
    }
    else {
        return 'Данное число является отрицательным!';
    }
};
//№2: Дана строка. Выведите в консоль длину этой строки.;
const stringLength = (inputText) => {
    return `Длина введеной строки составляет - ${inputText.length} символа(-ов).`;
}
//№3: Дана строка. Выведите в консоль последний символ строки.;
const stringLastChar = (inputText) => {
    const textLen = (inputText.length - 1);
    return `Последним символом строки является - ${inputText[textLen]}`;
}
//№4: Дано число. Проверьте, четное оно или нет.;
const checkIsEvenNumber = (inputNumber) => {
    if (isNaN(inputNumber) === true) {
        return 'Ошибка! Введенные данные не являются числом!';
    };

    if (inputNumber % 2 === 0) {
        return `Число ${inputNumber} является четным!`; 
    }
    else {
        return `Число ${inputNumber} является нечетным!`; 
    }
}
//№5: Даны два слова. Проверьте, что первые буквы этих слов совпадают.;
const checkFirstCharConcidence = (inputText1, inputText2) => {
    if (inputText1[0] === inputText2[0]) {
        return 'Первые буквы слов совпадают!';
    }
    else {
        return 'Первые буквы слов НЕ совпадают!'
    }
};
//№6: Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.;
const lastCharEx = (inputText) => {
    let i = (inputText.length - 1);
    const result = '';

    while ((inputText[i] === 'ь') || i > 0) {
        i = i - 1;
    }

    return inputText[i];
}


export {checkFirstCharConcidence, checkIsEvenNumber, checkIsPositiveNumber, stringLength, lastCharEx, stringLastChar};
