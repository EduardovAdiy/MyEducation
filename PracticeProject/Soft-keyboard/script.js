'use strict'

let isCaps = false;
let mode = "rus";
let body = document.getElementsByTagName("body")[0];
let textarea = document.getElementById("innerText");

let baseKeys = ['123', 'Backspace', 'Caps Lock', 'Enter', ' ', 'rus', 'eng', 'Очистить'];

let buttonsRus = [
    ['1234567890', 'Backspace'],
    ['123', 'йцукенгшщзхъ', 'Очистить'],
    ['Caps Lock', 'фывапролджэ', 'Enter'],
    ['eng','ячсмитьбю.,'],
    [' ']
];

let buttonsEng = [
    ['1234567890', 'Backspace'],
    ['123', 'qwertyuiop', 'Очистить'],
    ['Caps Lock', 'asdfghjkl', 'Enter'],
    ['rus','zxcvbnm.,'],
    [' ']
];

let buttonsNum = [
    ['~!@#$%', 'Backspace'],
    ['$%^&*()_+'],
    ['eng', '{}[]\|?/', 'rus'],
    [`<>/"',.`]
];

function changeKeyboard() {
    switch (mode) {
        case 'rus':
            createKeyboard(buttonsRus);
            return;
        case 'eng':
            createKeyboard(buttonsEng);
            return;
        case 'num':
            createKeyboard(buttonsNum);
            return;
    }
};

function createKeyboard (arr) {
    let keyboard = document.createElement("div");
    keyboard.id = "keyboard";
    body.appendChild(keyboard);

    for (let i of arr) {
        let div = document.createElement("div");
        div.className = "keyboard-line";
        keyboard.appendChild(div);

        for (let key of i) {
            if(isBaseKey(key)) {
                let button = document.createElement("button");
                button.textContent = key;
                button.className = "base-button";

                div.appendChild(button);

                button.addEventListener("click", pressBaseKey);
            } else {
                let keyArr = key.split('');
                for(let elem of keyArr) {
                    let button = document.createElement("button");
                    button.textContent = elem;
                    button.className = "button";

                    div.appendChild(button);

                    button.addEventListener("click", function (){
                        textarea.focus();
                        textarea.textContent += this.textContent; 
                        textarea.setSelectionRange(textarea.textContent.length, textarea.textContent.length);
                    })
                }
            }
        }
    }
};

function isBaseKey (text) {
    let result = false;

    if(baseKeys.filter(elem => elem == text).length > 0) {
        result = true;
    }

    return result;
};

function removeKeyboard() {
    document.getElementById("keyboard").remove();
};

function pressBaseKey() {
    textarea.focus();
    
    switch(this.textContent) {
        case 'Backspace':
            textarea.textContent = textarea.textContent.substring(0, (textarea.textContent.length - 1));
            textarea.setSelectionRange(textarea.textContent.length, textarea.textContent.length);
            return;
        case '123':
            removeKeyboard();
            mode = 'num';
            changeKeyboard();
            return;
        case 'Enter':
            textarea.textContent += '\n';
            textarea.setSelectionRange(textarea.textContent.length, textarea.textContent.length);
            return;
        case 'eng':
            removeKeyboard();
            mode = 'eng';
            changeKeyboard();
            return;
        case 'rus':
            removeKeyboard();
            mode = 'rus';
            changeKeyboard();
            return;
        case ' ':
            textarea.textContent += ' ';
            textarea.setSelectionRange(textarea.textContent.length, textarea.textContent.length);
            return;
        case 'Caps Lock':
            let buttons = document.getElementsByClassName("button");
            isCaps = !isCaps;

            for (let button of buttons) {
                if(isCaps) {
                    button.textContent = button.textContent.toUpperCase();
                } else {
                    button.textContent = button.textContent.toLowerCase();
                }
            };
            return;
        case 'Очистить':
            textarea.textContent = '';
            return;
    }
};

changeKeyboard();