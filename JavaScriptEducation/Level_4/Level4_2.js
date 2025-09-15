import * as myFunc from '../MyFunctionList.js';
/**
 * - Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.
 * - Сделайте функцию, которая параметром будет принимать число и удалять из него нули.
 * - Сделайте функцию, которая будет возвращать сколько дней прошло или осталось до заданной даты в году, в зависимости от того, была уже эта дата или нет.
 * - Сделайте функцию, которая параметром будет принимать год и проверять, високосный он или нет.
 * - Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет.
 * - Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.
 * - Сделайте функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде следующего объекта:
{
	next: 'пн',
	curr: 'вс',
	prev: 'сб',
}
 */
//Функция возвращает сумму цифр числа;
function getNumberCharSum (inputNumber){
    let inputSum = 0;
    for (let i = 0; i < inputNumber.toString().split('').length; i++) {
        inputSum = inputSum + Number(inputNumber.toString().split('')[i]);
    };
    return inputSum
};
//Функция которая удаляет нули из числа;
function getDeleteZerosFromNumber (inputNumber) {
    return inputNumber.toString().split('').filter(element => (/^[1-9]$/).test(element) === true).join('');
};
//Функция, которая будет возвращать сколько дней прошло или осталось до заданной даты в году, в зависимости от того, была уже эта дата или нет;
function getDaysFromDate (inputDate) {
    let date_1 = new Date(inputDate);
    let date_2 = new Date();
    const oneDay = (1000 * 60 * 60 * 24); // Количество миллисекунд в одном дне;
    const dateDiffInMillisecond = Math.abs(date_1 - date_2); //Разница в миллисекундах;
    let dateDiff = Math.ceil(dateDiffInMillisecond/oneDay); //Разница в днях;
    //Проверка, что дата больше текущей;
    if(date_1 < date_2){
        dateDiff = dateDiff - 1;
    };

    return dateDiff;
};
//Функция проверяет год на високостность;
function isLeapYearCheck (inputYear) {
    /** Год вискосный если делится на 4 без остатка.
     * Если год делится без остатка на 100, то он является вискосным если еще делится
     * на 400 без остатка.
     */
    if(inputYear % 4 === 0 && (inputYear % 100 !== 0 || (inputYear % 100 === 0 && inputYear % 400 === 0))) {
        return true;
    } else {
        return false;
    }
};
//Функция которая вернет массив всех високосных годов за предыдущие сто лет;
function getLeapYearsArray () {
    let leapYearsArray = [];
    let curYear = (new Date().getFullYear());
    for(let i = (curYear - 100); i <= curYear; i++){
        if(isLeapYearCheck(i) === true){
            leapYearsArray.push(i);
        }
    };
    return leapYearsArray;
};
//Функция, которая возвращает кол-во дней осталось до конца текущего месяца;
function getDaysToMonthEnd () {
    let now = new Date();
    let endMonth = new Date(now.getFullYear(), now.getMonth(), 0); //Конец месяца;

    return getDaysFromDate(endMonth);
}
//Функция которая вернет объектом предыдущий, текущий и последующий день;
function getAroundDays () {
    let daysArray = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    let curDay = new Date();
    let nextDay =  new Date();
    nextDay.setDate(curDay.getDate() + 1);
    let prevDay = new Date();
    prevDay.setDate(curDay.getDate() - 1);
    let daysObj = {'next' : daysArray[nextDay.getDay()], 'curr' : daysArray[curDay.getDay()], 'prev' : daysArray[prevDay.getDay()]};

    return daysObj;
};

//---------------- Блок рабочего процесса ----------------
let repeatQuestion = 'Y';

while (repeatQuestion === 'Y') {
    const baseQuestion = `Выберите функцию для запуска:
1 - Функция, которая параметром будет принимать число и возвращать сумму его цифр.
2 - Функция, которая параметром будет принимать число и удалять из него нули.
3 - Функция, которая будет возвращать сколько дней прошло или осталось до заданной даты в году, в зависимости от того, была уже эта дата или нет.
4 - Функция, которая параметром будет принимать год и проверять, високосный он или нет.
5 - Функция, которая вернет массив всех високосных годов за предыдущие сто лет.
6 - Функция, которая будет возвращать сколько дней осталось до конца текущего месяца.
7 - Функция, которая вернет предыдущий, текущий и следующий дни недели словом в виде объекта.
Введите номер функции: `;
    const funcNumber = await myFunc.inputValidator(
        await myFunc.readLine(baseQuestion),
        input => (/^[1-7]$/).test(input),
        'Ошибка! Номер функции введен не корретно!\n' + baseQuestion
    );

    if(Number(funcNumber) === 1){
        console.log('Вы выбрали функцию, которая параметром будет принимать число и возвращать сумму его цифр ...');
        const inputNumber = await myFunc.inputValidator(
            await myFunc.readLine('Введите произвольное число: '),
            input => (/^[0-9]+$/).test(input),
            'Ошибка! Введены некорректные данные!\nВведите число: ' 
        );
        console.log(`Получено число ${inputNumber}. Сумма цифр данного числа равняется ${getNumberCharSum(inputNumber)} ...`);
    };

     if(Number(funcNumber) === 2){
        console.log('Вы выбрали функцию, которая параметром будет принимать число и удалять из него нули ...');
        const inputNumber = await myFunc.inputValidator(
            await myFunc.readLine('Введите произвольное число: '),
            input => (/^[0-9]+$/).test(input),
            'Ошибка! Введены некорректные данные!\nВведите число: ' 
        );
        if(inputNumber.toString().indexOf('0') >= 0){
            console.log(`Получено число ${inputNumber} ... 
Удаляем нули из числа ...
Получено новое число - ${getDeleteZerosFromNumber(inputNumber)} ...`);
            } else {
                console.log('В веденном числе отсутствуют нули ...');
            }
    };

    if(Number(funcNumber) === 3){
        console.log('Вы выбрали функцию, которая будет возвращать сколько дней прошло или осталось до заданной даты в году, в зависимости от того, была уже эта дата или нет ...');
        const inputDate = await myFunc.inputValidator(
            await myFunc.readLine('Введите произвольную дату в формате "ГГГГ-ММ-ДД": '),
            input => !isNaN(new Date(String(input))),
            'Ошибка! Введены некорректные данные!\nВведите произвольную дату в формате "ГГГГ-ММ-ДД": ' 
        );
        console.log(`Получена дата - ${inputDate}. Разница дней между текущей датой и введеной - ${getDaysFromDate(inputDate)} ...`);
    };

    if(Number(funcNumber) === 4){
        console.log('Вы выбрали функцию, которая параметром будет принимать год и проверять, високосный он или нет ...');
        const inputYear = await myFunc.inputValidator(
            await myFunc.readLine('Введите год в формате "ГГГГ": '),
            input => (/^[0-9]{1,4}$/).test(input),
            'Ошибка! Введены некорректные данные!\nВведите год в формате "ГГГГ": ' 
        );
        const isLeap = isLeapYearCheck(inputYear);
        if(isLeap === true) {
            console.log(`Год ${inputYear} является високосным ...`);
        } else {
            console.log(`Год ${inputYear} НЕ является високосным ...`);
        }
    };

    if(Number(funcNumber) === 5){
        console.log('Вы выбрали функцию, которая вернет массив всех високосных годов за предыдущие сто лет ...');
        const isLeapYears = getLeapYearsArray();
        console.log('Получен массив високосных годов:');
        console.log(isLeapYears);
    };

    if(Number(funcNumber) === 6){
        console.log('Вы выбрали функцию, которая будет возвращать сколько дней осталось до конца текущего месяца ...');
        const daysToEnd = getDaysToMonthEnd();
        console.log(`До конца месяца осталось ${daysToEnd} дней ...`);
    };

     if(Number(funcNumber) === 7){
        console.log('Вы выбрали функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде объекта ...');
        const daysObj = getAroundDays();
        console.log('Получен следующий объект:');
        console.log(daysObj);
    };

    console.log('---');
    //Запрос на повтор данных;
    repeatQuestion = await myFunc.inputValidator(
        await myFunc.readLine('Повторить (Y/N)?: '),
        input => (/^(Y|N)$/).test(input),
        'Ошибка! Введены некорректные данные! Повторить (Y/N)?: '
    );
};

process.exit(0);
