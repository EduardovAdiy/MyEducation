
/**
 * - Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.
 * - Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива.
 * - Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива так, чтобы одинаковые элементы не возвращались два раза подряд.
 */
function getRandomInt (minValue, maxValue) {
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    return randomNumber;
};
//Функция 1;
function getArrayRandomValue (inputArray) {
    const arrLen = (inputArray.length - 1);
    const randomNumber = getRandomInt(0, arrLen);

    return inputArray[randomNumber];
};
//Функция 2;
function getArrayRandomizeElement (inputArray, cntElement) {
    const maxIndex = Math.min(cntElement, inputArray.length - 1); //Проверка, что N не выходит за длину массива;
    let outputArr = [];

    for(let i = 0; i < maxIndex; i++){
        const getIndex = getRandomInt(0, maxIndex);
        outputArr.push(inputArray[getIndex]);
    };
    return outputArr;
};
//Функция 3;
function getUniqRangeValueArray (inputArray) {
    let index = getRandomInt(0, (inputArray.length - 1)), prev = inputArray[index];
    return () => {
        do {
          index = getRandomInt(0, (inputArray.length - 1));
        }
  	while(prev === inputArray[index]);
        prev = inputArray[index];
        return inputArray[index];
    }
};

let arr = [1,23,45,16,17,18,19,23,19,18];

console.log(getArrayRandomValue(arr));
console.log(getArrayRandomizeElement(arr, 8));
const randomNum = getUniqRangeValueArray(arr);
console.log(randomNum());

