/*
- №1: Выведите в консоль все целые числа от 1 до 100.
- №2: Выведите в консоль все целые числа от -100 до 0.
- №3: Выведите в консоль все целые числа от 100 до 1.
- №4: Выведите в консоль все четные числа из промежутка от 1 до 100.
- №5: Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
*/

function fromOneToHundred() {
    console.log('Запуск функции "fromOneToHundred" \n-------------');
    for ( let i = 1; i <= 100; i++) {
        console.log(i);
    }
    console.log('------------- \nРабота функции "fromOneToHundred" завершена!');
}

function fromMinHundredToZero() {
    console.log('Запуск функции "fromMinHundredToZero" \n-------------');
    for ( let i = -100; i <= 0; i++) {
        console.log(i);
    }
    console.log('------------- \nРабота функции "fromMinHundredToZero" завершена!');
}

function fromHundredToOne() {
    console.log('Запуск функции "fromHundredToOne" \n-------------');
    for ( let i = 100; i >= 1; i--) {
        console.log(i);
    }
    console.log('------------- \nРабота функции "fromHundredToOne" завершена!');
}

function fromOneToHundredIsEven() {
    console.log('Запуск функции "fromOneToHundredIsEven" \n-------------');
    for ( let i = 1; i <= 100; i++) {
        if(i % 2 === 0) {console.log(i);}
    }
    console.log('------------- \nРабота функции "fromOneToHundredIsEven" завершена!');
}

function fromOneToHundredMultipleThree() {
    console.log('Запуск функции "fromOneToHundredMultipleThree" \n-------------');
    for ( let i = 1; i <= 100; i++) {
        if(i % 3 === 0) {console.log(i);}
    }
    console.log('------------- \nРабота функции "fromOneToHundredMultipleThree" завершена!');
}

export {fromOneToHundred, fromMinHundredToZero, fromHundredToOne, fromOneToHundredIsEven, fromOneToHundredMultipleThree};
