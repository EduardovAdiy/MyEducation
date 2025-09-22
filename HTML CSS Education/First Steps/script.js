 'use strict';

 function promtMessage() {
        console.log(`Запущена функция promtMessage() ...`);
            const mess =  prompt('Сколько тебе лет?');
            console.log(`Получено значение для переменной mess - ${mess} ...`);

            if(/^[0-9]+$/.test(mess) === true){
                const conf = confirm(`Тебе точно ${mess} лет?`);
                if(conf === true){
                    alert('Возраст подтвержден!');
                } else alert('Возраст НЕ подтвержден!');
            } else alert('Я так не играю!');
        };

function showMessage() {
            alert('Привет тебе, дружище!');
        };

function goAway() {
    const dates = document.getElementById('imgId').innerHTML;
    if(dates === 'Хомяк уходит'){
        document.getElementById('imgId').innerHTML = 'Хомяк на месте';
	    document.getElementById('img1').src = 'img1.jpg';
        document.getElementById('goAway').innerHTML = 'На выход';
    } else {
        document.getElementById('imgId').innerHTML = 'Хомяк уходит';
	    document.getElementById('img1').src = 'img2.jpg';
        document.getElementById('goAway').innerHTML = 'Вернуть обратно';
    }
};

function getUserName() {
    let userName = prompt ('Введите ваше имя: ');
    if(userName === '' || userName === null){
        userName = 'неизвестный';
    }; 
    alert(`Добрый день, ${userName}!`); 
    document.getElementById('userName').innerHTML = `Привет, ${userName}!`;
};

function changeRadioValue1 () {
     document.getElementById('rd1').chacked = false;

};

function changeRadioValue2 () {
    document.getElementById('rd2').checked = false;
};

function printTextValueOnChange() {
    let textValue = document.getElementById("text").value;

    alert (`Вы ввели: ${textValue}`);
};
function printCheckBoxValue() {
    let checkBoxValue = document.getElementById('check').value;
    let checkConfirm = confirm(`Вы действительно выбрали значение чек-бокса: ${checkBoxValue}`);

    if (checkConfirm === false) {
        document.getElementById('check').checked = false;
    };
};

function printSelectorValue() {
    let selector = document.getElementById("selector").value;

    alert(`Вы выбрали: Вариант ${selector}`);

    let inTagElementDates = `Вы указали: <br>
Текст: ${document.getElementById ('text')} <br>
Пол: ${getUserSex (document.getElementById('rd1').value, document.getElementById('rd2').value)}
Чек-бокс: ${document.getElementById('check').value}
Вариант из списка: Вариант ${document.getElementById("selector").value}`

    document.getElementById('submitDates').innerHTML = inTagElementDates;
};

function submitDates () {
    alert('Данные успешно отправлены!\n' + printSelectorValue());
};

function getUserSex (x, y) {
    if (x === true) {
        return 'мужской';
    } else if (y === true) {
        return 'женский';
    } else {
        return 'не указан';
    }
};
