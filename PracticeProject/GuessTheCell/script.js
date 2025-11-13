'use strict'

let body = document.getElementById("main-conteiner");
let dataCells = [];


function createBaseDiv () {
    if(document.getElementById("table-div") != null) {
        document.getElementById("table-div").remove();
    }

    let div = document.createElement("div");
    div.id = "table-div";

    body.appendChild(div);

    return div;
}

function createTable () {
    let div = createBaseDiv();
    let table = document.createElement("table");

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

    if (this.className == '') {
        if(isRightCell(data)) {
            console.log('yes');
            this.className = 'right';
            this.dataset.id = 'N';
        } else {
            console.log('no');
            this.className = 'not-right';
            this.dataset.id = 'N';
        }
    };
};

let start = document.getElementById("start");

start.addEventListener("click", function() {
    enterDataCells();
    createTable();
});