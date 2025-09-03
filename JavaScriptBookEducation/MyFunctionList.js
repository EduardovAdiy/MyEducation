//Рандомайзер чисел в заданном диапазоне;
function getRandomNumber (startNum, endNum) {
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


export {getRandomNumber};
