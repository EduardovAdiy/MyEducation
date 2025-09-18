/**
 * - Сделайте функцию, которая параметром будет принимать букву и проверять, это буква кириллицы или латиницы.
 * - Сделайте функцию, которая параметром будет принимать массив и перемешивать элементы этого массива в случайном порядке.
 * - Дан текст со словами. Запишите все слова этого текста в специальный объект. Ключами в этом объекте будут буквы, а значениями - массивы слов, начинающихся на эти буквы.
 * - Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей, являющихся простыми числами.
 * - Сделайте функцию, которая параметром будет принимать слово и возвращать массив его слогов.
 */
//Function 1;
function checkCyrilicLatinLetter (inputData) {
    let latinChar = /^[A-Za-z]$/;
    let cyrilicChar = /^[А-Яа-я]$/;

    if(latinChar.test(inputData)){
        return 'Данная буква написана латиницей ...'
    } else {
        if(cyrilicChar.test(inputData)){
            return 'Данная буква написана кириллицей ...'
        } else {
            return 'Данная буква написана в непонятной кодировке ...'
        }
    }
};
//Function 2;
function getArrayElementRandomize (inputArray) {
    let outputArray = [];
    while (inputArray.length > 0){
        let indexArr = Math.floor(Math.random() * inputArray.length);
        outputArray.push(inputArray[indexArr])
        inputArray.splice(indexArr,1)
    }
    return outputArray;
};
//Function 3;
function getStringToObject (inputString){
    const innerArr = inputString.split(' ').sort();
    let outputObject = {};
    for(let i in innerArr){
        let firstLetter = innerArr[i][0].toLowerCase();

        if(!outputObject[firstLetter]){
            outputObject[firstLetter] = [];
        }
        outputObject[firstLetter].push(innerArr[i]);
    }
    return outputObject;
};
//Function 4;
function getPrimeDivisors(n) {  
    // Функция проверки числа на простоту  
    function isPrime(num) {  
        if (num <= 1) return false;  
        if (num === 2) return true;  
        if (num % 2 === 0) return false;  
          
        for (let i = 3; i <= Math.sqrt(num); i += 2) {  
            if (num % i === 0) {  
                return false;  
            }  
        }  
        return true;  
    }  
  
    const result = [];  
      
    // Проверяем делители от 2 до корня из n  
    for (let i = 2; i <= Math.sqrt(n); i++) {  
        if (n % i === 0) {  
            // Проверяем, является ли делитель простым  
            if (isPrime(i)) {  
                result.push(i);  
            }  
              
            // Проверяем парный делитель  
            const pairDivisor = n / i;  
            if (pairDivisor !== i && isPrime(pairDivisor)) {  
                result.push(pairDivisor);  
            }  
        }  
    }  
      
    // Если само число простое и больше 1  
    if (n > 1 && isPrime(n)) {  
        result.push(n);  
    }  
      
    return result;  
};
//Function 5;
function getBreakWordIntpSyllables (inputWord){
    const syllableRegex = /[^АаОоУуЭэЕеИиЫыЯяЮю]*[АаОоУуЭэЕеИиЫыЯяЮю]+(?:[^АаОоУуЭэЕеИиЫыЯяЮю]*$|[^АаОоУуЭэЕеИиЫыЯяЮю](?=[^АаОоУуЭэЕеИиЫыЯяЮю]))?/gi;
    return words.match(syllableRegex);
};

const inputChar = 'А';
console.log(checkCyrilicLatinLetter(inputChar));

const arr = [1,2,3,4,5,6,7];
console.log(getArrayElementRandomize(arr));

const inputString = 'Привет, как дела? Что нового?';
console.log(getStringToObject(inputString));

const inputNum = 123;
console.log(getPrimeDivisors(inputNum));

console.log(['привет', 'дела', 'время', 'слог', 'слово', 'стол', 'мелочь'].map(syllabify))
