 'use strict';

 function promtMessage() {
            const mess =  prompt('Сколько тебе лет?');
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

function getUserName() {
    let userName = prompt ('Введите ваше имя: ');
    if(userName === '' || userName === null){
        userName = 'неизвестный';
    }; 
    alert(`Добрый день, ${userName}!`); 
    document.getElementById('userName').innerHTML = `Привет, ${userName}!`;
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

window.onload = getUserName();
