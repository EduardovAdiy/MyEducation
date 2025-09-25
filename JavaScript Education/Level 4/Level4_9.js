/**
 1 - Сделайте функцию, которая будет возвращать сколько дней осталось до ближайшего 29 февраля.
 2 - Сделайте функцию, которая будет возвращать дату следующей масленницы, которая празднуется в последнее воскресенье зимы.
 3 - Сделайте функцию, которая будет возвращать случайный цвет.
 4 - Сделайте функцию, которая параметром будет принимать массив чисел и возвращать массив общих делителей всех чисел из переданного массива.
 5 - Сделайте функцию, которая параметром будет принимать двухмерный массив чисел и возвращать массив максимальных чисел в каждом подмассиве.
 */

//Function 1;
function daysToFebruaryEnd () {
    const curDay = new Date();
    let needYear = curDay.getFullYear();
    let daysCnt = 0;

    if(curDay.getDate() === 29 && curDay.getMonth() === 1) daysCnt = 0;
    else {
        if(curDay > new Date(needYear, 1, 29)){
            needYear = needYear + 1;
        };
        daysCnt = ((new Date(needYear, 1, 29) - curDay) / (1000 * 3600 * 24));
    };

    return Math.trunc(daysCnt);
};
//Function 2;
function getCarnivalDate () {
    let curDate = new Date();
    let curYear = curDate.getFullYear();
    let winterLastDay = (new Date(curYear, 2, 0));
    let dayOfWeek = winterLastDay.getDay();
    let carnivalDay = new Date(curYear, 2, (winterLastDay.getDate() - dayOfWeek));
    carnivalDay.setDate(carnivalDay.getDate() + 1);
    //Проверка, что праздник еще не прошел;
    if(curDate >= carnivalDay){
        let nextYear = curYear + 1;
        winterLastDay = (new Date(nextYear, 1, 0));
        dayOfWeek = winterLastDay.getDay();
        carnivalDay = new Date(nextYear, 1, (winterLastDay.getDate() - dayOfWeek));
        carnivalDay.setDate(carnivalDay.getDate() + 1);
    };

    return carnivalDay;
};
//Function 3;
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `RGB (${r}, ${g}, ${b})`;
};
//Function 4;
function getDelimeterArr (inputNumber) {
    let delimeterArray = [];
    for(let i = 1; i <= (inputNumber/2); i++){
        if(inputNumber % i === 0){
            delimeterArray.push(i);
        };
    }
    delimeterArray.push(inputNumber);

    return delimeterArray;
}
function getCommonArrayElementDelimeters (inputArray) {
    let outputArray = [];
    const arrMaxValue = inputArray.sort((a, b) => a-b)[inputArray.length - 1];

    outputArray = getDelimeterArr(arrMaxValue);

    for(let i in inputArray){
        let delimeterArray = getDelimeterArr(inputArray[i]);
        outputArray = outputArray.filter(values => delimeterArray.includes(values));
    };

    return outputArray;
};
//Function 5;
function getSubArrMaxElements (inputArray){
    let outArray = [];
    for(let i in inputArray){
        let maxValue = inputArray[i].sort((a, b) => a-b)[inputArray.length - 1];
        outArray.push(maxValue);
    };
    return outArray;
}
//-------------------------------------

const daysCnt = daysToFebruaryEnd();
console.log(`1 - До ближайшего 29 февраля осталось ${daysCnt} дня(-ей) ...`);

const carnivalDate = getCarnivalDate();
console.log(`2 - Дата следующей масленицы - ${carnivalDate.getDate()}.02.${carnivalDate.getFullYear()} ...`);

console.log(`3 - ${getRandomColor()} ...`);

const baseArray = [2,18,34,56,14];
console.log(`4 - Дан массив с числами: [${baseArray}] ...`);
console.log(`Массив общих делителей всех элементов массива: [${getCommonArrayElementDelimeters(baseArray)}] ...`);

const arr = [[1,2,3], [4,5,6], [7,8,9]];
console.log(`5 - Дан двухмерный массив:`);
console.log(arr)
console.log(`Массив максимальных элементов подмассивов: [${getSubArrMaxElements(arr)}]`);
