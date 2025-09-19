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
	document.getElementById('littleBaby').innerHTML = 'Королева уходит';
	document.getElementById('img1').src = 'img2.jpeg';
};

window.onload = getUserName();