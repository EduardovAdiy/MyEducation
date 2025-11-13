'use strict'

let body = document.getElementById("main-conteiner");
let dataCells = [];
let num = 0;
let isTimer = 0;
let minute = 1;
let second = 59;
let milisecond = 99;
let interval = setInterval(getPastTime, 10);

function createBaseDiv () {
    if(document.getElementById("table-div") != null) {
        document.getElementById("table-div").remove();
    }

    let div = document.createElement("div");
    div.id = "table-div";

    if(isTimer == 1) {
        let time = document.createElement("p");
        time.id = "cellTime";
        time.style.textAlign = "center";
        div.appendChild(time);
        
    
    }

    let p = document.createElement("p");
    p.innerHTML = "Найдено ячеек: " + num;
    p.id = "cellCount";
    p.style.textAlign = "center";
    div.appendChild(p);

    body.appendChild(div);

    return div;
};

 function addZero (num) {
    if(num < 10) {
        num = '0' + num;
    }
        return num;
};

function getPastTime () {
    let time = document.getElementById("cellTime");

    if(minute!= 0 || second != 0 || milisecond != 0) {
        time.innerHTML = addZero(minute) +':'+addZero(second)+':'+ addZero(milisecond);
            
        milisecond --;

        if(milisecond == 0 && (second > 0 || minute > 0)) {
            second --;
            milisecond = 99;

            if (second == 0 && minute > 0) {
                minute --;
                second = 59;
            }
        }
    } else {
        time.innerHTML = '00:00:00.00';
        showResult();
        window.clearInterval(interval);
    }
}

function createTable () {
    let div = createBaseDiv();
    let table = document.createElement("table");
    table.id = "table";

    for(let i = 0; i < 10; i++) {
        let tr = document.createElement("tr");

        for( let j = 0; j < 10; j++) {
            let td = document.createElement("td");
            td.dataset.id = `${i}.${j}`;
            tr.appendChild(td);

            td.addEventListener("click", clickForCell);
        }

        table.appendChild(tr);
    }
    div.appendChild(table);
};

function enterDataCells () {
    for(let i = 0; i < 10; i++){
        let i = Math.floor(Math.random() * 10);
        let j = Math.floor(Math.random() * 10);
        let data = `${i}.${j}`;

        while(dataCells.filter(value => value == data).length > 0){
            i = Math.floor(Math.random() * 10);
            j = Math.floor(Math.random() * 10);
            data = `${i}.${j}`;
        };

        dataCells.push(data);
    }
};

function isRightCell (data) {
    if(dataCells.filter(value => value == data).length > 0) {
        dataCells = dataCells.filter(value => value != data);
        return true;
    } else {
        return false;
    }
};

function clickForCell () {
    let data = this.dataset.id;


    if (this.className == '' && dataCells.length > 0) {
        if(isRightCell(data)) {
            num += 1;
            document.getElementById("cellCount").innerHTML = "Найдено ячеек: " + num;

            this.className = 'right';
            this.dataset.id = 'N';
        } else {
            this.className = 'not-right';
            this.dataset.id = 'N';
        }
    };

    if (dataCells.length == 0) {
        window.clearInterval(interval);
        setTimeout(showResult, 500);
    }
};

function isDone () {
    let rows = document.getElementsByTagName("td");

    for(let cell of rows) {
       cell.className = "done";
    };
};

function showResult () {
    isDone();

    setTimeout( function() {
        document.getElementById("table").remove();

        let p = document.createElement("p");
        if (num == 10) {
            p.innerHTML = "Вы выйграли!";
            p.className = "is-winner result";
        } else {
            p.innerHTML = "Вы проиграли!";
            p.className = "is-fault result";
        }

        let button = document.createElement("button");
        button.innerHTML = "Начать сначала?";

        document.getElementById("table-div").appendChild(p);
        document.getElementById("table-div").appendChild(button);

        button.addEventListener("click", function() {
            location.reload();
        })

    }, 3000);
}

let startButton = document.getElementById("start");
let forTimeButton = document.getElementById("forTime");

startButton.addEventListener("click", function() {
    enterDataCells();
    createTable();
    startButton.disabled = "true";
    forTimeButton.disabled = "true";
});

forTimeButton.addEventListener("click", function() {
    isTimer = 1;
    enterDataCells();
    createTable();
    startButton.disabled = "true";
    forTimeButton.disabled = "true";
});