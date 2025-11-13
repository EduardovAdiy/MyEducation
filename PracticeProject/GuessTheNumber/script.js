'use strict';

let guesNumber = Math.floor(Math.random() * 1000);

let input = document.getElementById("input");
let button = document.getElementById("lucky");
let result = document.getElementById("results");
let conteiner = document.getElementsByClassName("base-conteiner")[0];
let shadow = document.getElementsByClassName("shadow")[0];
let repeat = document.getElementById("repeat");

input.addEventListener("input", function () {
    let data = this.value;
    let length = data.length;

    if(isNaN(Number(data)) || Number(data) % 1 !== 0 || data[length - 1] == '.') {
        this.value = data.substring(0, (length - 1));
    }
});

button.addEventListener("click", checkInputNumber);
conteiner.addEventListener("keydown", event => {
    if(event.key == 'Enter' && shadow.style.display !== 'block') {
        checkInputNumber ();
    }
});

repeat.addEventListener("click", function(){
    location.reload(true);
})

function addResults (value) {
    let p = document.createElement("p");
    p.innerHTML = value;

    result.insertBefore(p, result.firstChild);
};

function checkInputNumber () {
        if (input.value == '') {
        alert("Я так не играю! Сначала введи число!");
        input.focus();
        return;
    };

    if (Number(input.value) < guesNumber){
        addResults(input.value +' - введите число побольше!');
        input.value = '';
        input.focus();
        return;
    };

     if (Number(input.value) > guesNumber){
        addResults(input.value +' - введите число поменьше!');
        input.value = '';
        input.focus();
        return;
    };

     if (Number(input.value) == guesNumber){
        addResults(input.value +' - УРА! Ты угадал!');
        input.value = '';
        input.focus();
        displayCongratulation ("block");
        return;
    }
};

function displayCongratulation (value) {
    shadow.style.display = value;
    console.log(value);
};