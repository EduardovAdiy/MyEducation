/*
- №1: Дано число. Выведите в консоль первую цифру этого числа; 
- №2: Дано число. Выведите в консоль последнюю цифру этого числа.;
- №3: Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
- №4: Дано число. Выведите количество цифр в этом числе.
- №5: Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
*/

const forOneNumber = (inputNumber) => {
    const lastNumIndex = (inputNumber.length - 1);
    const firstNum = inputNumber[0];
    const lastNum = inputNumber[lastNumIndex];
    const numSum = (Number(firstNum) + Number(lastNum));
    const result = `-------------------
* Первая цифра: ${firstNum}.
* Последняя цифра: ${lastNum}.
* Сумма чисел: ${numSum}.
* Кол-во цифр в числе: ${lastNumIndex + 1}.
-------------------`

    return result;
};

const forTwoNumber = (inputNumber1, inputNumber2) => {
    const firstNum1 = inputNumber1[0];
    const firstNum2 = inputNumber2[0];
    let result = '';

    if (firstNum1 === firstNum2) {
        result = `-------------------
Цифра ${firstNum1} и ${firstNum2} совпадают!
-------------------`;
    }
    else {
       result = `-------------------
Цифра ${firstNum1} и ${firstNum2} не совпадают!
-------------------`;
    }

    return result;
}

export {forOneNumber, forTwoNumber};
