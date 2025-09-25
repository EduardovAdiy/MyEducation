function reloadDocument() {
    location.reload();
};

function getArraySum() {
    let sum = 0;

    for (let i = 0; i <=100; i++) {
        sum = sum + i;
    };

    document.getElementById('sol1Value').innerHTML = `Сумма чисел от 1 до 100 равна: ${sum}`;
};

function isNumber(inputID) {
    let num = document.getElementById(inputID).value || document.getElementById(inputID).innerHTML;

    if(isNaN(Number(num)) === true) {
        let numLen = num.length;

        alert('Введите число!');
        document.getElementById(inputID).value = num.substring(0, (numLen-1));
        document.getElementById(inputID).innerHTML = num.substring(0, (numLen-1));
    };
};

function getSum(inputID1, inputID2, inputIDParagraph) {
    let num1 = document.getElementById(inputID1).value || document.getElementById(inputID1).innerHTML;
    let num2 = document.getElementById(inputID2).value || document.getElementById(inputID2).innerHTML;

    let result = `Сумма чисел равна: ${Number(num1) + Number(num2)}`;

    document.getElementById(inputIDParagraph).value = result;
    document.getElementById(inputIDParagraph).innerHTML = result;
};

function getCountParagraph() {
    let genArr = document.getElementsByClassName('was-generated');
    let cnt = genArr.length;
    
    document.getElementById('countGenerateParagraph').innerHTML = `Кол-во абзацев: ${cnt}`;
};

function generateParagraph (inputID) {
    let parCNT = Math.floor(Math.random() * 10);

    for (let i = 0; i < parCNT; i++) {
        let p = document.createElement('p');
        p.innerHTML = `${Number(i) + 1} - Этот абзац был создан с автоматически`;
        p.className = 'was-generated';

        document.getElementById(inputID).appendChild(p);
    }
};

function getStringLength(inputID, pID) {
    let string = document.getElementById (inputID).value;
    
    document.getElementById(pID).innerHTML = `Длина данной строки состовляет ${string.length} символов`;
};