'use strict';

let shadow = document.getElementsByClassName("shadow ")[0];
let solution = shadow.getElementsByClassName("solution")[0];
let closeSolution = document.getElementById("close");
let header = document.getElementsByClassName("header")[0];
let buttons = header.getElementsByTagName("button");

shadow.addEventListener("click", function() {
    shadow.style.display = "none" ;
});

solution.addEventListener("click", function (event) {
    event.stopPropagation();
})

closeSolution.addEventListener("click", function() {
    shadow.style.display = "none" ;
})

for (let button of buttons) {
    button.addEventListener("click", function (){
        shadow.removeAttribute("style");
        createFormElements(button.id);
    })
}

function createFormElements (code) {
    switch(Number(code)) {
        case 1:
            task1();
            break;
        case 2:
            task2();
            break;
        case 3:
            task3();
            break;
        case 4:
            task4();
            break;
        case 5:
            task5();
            break;

    }
};

/*=== Tasks ===*/
function task1() {
    let header = 'Задача №1';
    let par = `Дан инпут, кнопка и абзац. В инпут вводится год. По нажатию на кнопку определите, введен високосный год или нет и выведите информацию об этом в абзац.`;

    let head = createSolutionHeader(header, par);
    solution.appendChild(head);

    let div = createSolutionInner ();
    solution.appendChild(div);

        let label = document.createElement("label");
        label.innerHTML = "Введите год: ";
        div.appendChild(label);

        let input = document.createElement("input");
        input.type = "text";
        div.appendChild(input);

        createBr(div); createBr(div);

        let button = document.createElement("button");
        button.innerHTML = "Показать";
        div.appendChild(button);

        createBr(div); createBr(div);

        input.addEventListener("change", function () {
            if(isNaN(Number(this.value)) || Number(this.value) % 1 != 0) {
                alert ('Год должен быть целым числом!')
                this.value = '';
                return
            }
        });

        button.addEventListener("click", function() {
            if(input.value == '') {
                alert('Не указан год!');
                return;
            }

            let year = Number(input.value);
            let month = 1;
            let day = 29;
            let date = new Date (year, month, day);

            removeElement("isLeap");

            let p = document.createElement ("p");
            p.id = "isLeap";
            div.appendChild(p);

            if(date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
                p.innerHTML = "Данный год високосный!";
            } else {
                p.innerHTML = "Данный год не является високосным!";
            }
        })
};

function task2() {
    let header = 'Задача №2';
    let par = `Дан инпут и кнопка. По нажатию на кнопку выведите в инпут случайное число из диапазона от 1 до 100.`;

    let head = createSolutionHeader(header, par);
    solution.appendChild(head);

    let div = createSolutionInner ();
    solution.appendChild(div);

        let input = document.createElement("input");
        input.type = "text";
        input.disabled = "true";
        input.style.textAlign = "center";
        div.appendChild(input);

        createBr(div); createBr(div);

        let button = document.createElement("button");
        button.innerHTML = "Сгенерировать";
        div.appendChild(button);

        button.addEventListener("click", function() {
            input.value = Math.floor(Math.random() * 100);
        })
     
};

function task3 () {
    let header = 'Задача №3';
    let par = `Дан инпут, кнопка и абзац. В инпут вводится дата в формате 2025-12-31. По нажатию на кнопку выведите в абзац день недели, соответствующий этой дате.`;

    let head = createSolutionHeader(header, par);
    solution.appendChild(head);

    let div = createSolutionInner ();
    solution.appendChild(div);

        let label = document.createElement("label");
        label.innerHTML = "Введите дату: ";
        div.appendChild(label);

        let input = document.createElement("input");
        input.type = "text";
        input.placeholder = "YYYY-MM-DD";
        div.appendChild(input);

        createBr(div); createBr(div);

        let button = document.createElement("button");
        button.innerHTML = "Показать";
        div.appendChild(button);

        createBr(div); createBr(div);

        input.addEventListener("change", function() {
            if(isNaN(new Date(this.value))) {
                alert('Введена некорректная дата!');
                input.value = '';
            }
        })

        button.addEventListener("click", function() {
            if (input.value == '') {
                alert('Не указана дата!');
                return
            };

            removeElement ("dayOfWeek");

            let date = new Date(input.value);

            let p = document.createElement("p");
            p.id = "dayOfWeek"
            p.innerHTML = "Этот день недели - " + getDayOfWeek(date.getDay());
            div.appendChild(p);

        })
     
};

function task4 () {
    let header = 'Задача №4';
    let par = `Дан див с шириной, высотой и границей, и кнопка. По клику на кнопку увеличьте размеры дива в два раза.`;

    let head = createSolutionHeader(header, par);
    solution.appendChild(head);

    let div = createSolutionInner ();
    solution.appendChild(div);

    let isZoom = true;

        let button = document.createElement("button");
        button.innerHTML = "Увеличить";
        div.appendChild(button);

        let cont = document.createElement("div");
        cont.style.width = "50px";
        cont.style.height = "50px";
        cont.style.border = "1px solid red";
        cont.style.margin = "10% auto";
        div.appendChild(cont);
      
    button.addEventListener("click", function() {
        if(isZoom == true) {
            button.innerHTML = "Уменьшить";
            cont.style.width = "100px";
            cont.style.height = "100px";
            cont.style.border = "2px solid red";
            isZoom = false;
        } else {
            button.innerHTML = "Увеличить";
            cont.style.width = "50px";
            cont.style.height = "50px";
            cont.style.border = "1px solid red";
            isZoom = true;
        }
    })
};

function task5 () {
    let header = 'Задача №5';
    let par = `Даны ссылки. Сделайте так, чтобы по наведению на любую ссылку над ней появлялось значение ее атрибута href.`;

    let head = createSolutionHeader(header, par);
    solution.appendChild(head);

    let div = createSolutionInner ();
    solution.appendChild(div);

        createAliknk(div, 'https://i.pinimg.com/236x/c3/bc/9b/c3bc9be28c74848841256c867da9fb43.jpg', 'Ссылка 1');
        createBr(div); createBr(div);
        createAliknk(div, 'https://i.pinimg.com/736x/88/0a/2e/880a2e764378b551ea915a7f72c91aa6.jpg', 'Ссылка 2');
        createBr(div); createBr(div);
        createAliknk(div, 'https://yt3.googleusercontent.com/sc2uJKtABWK0xSjZeSe6FGopA3ck8WxOoVJuhBl8aA76c1LU7X_ISnEhpf3fvwj5Msv_8FCHYg=s900-c-k-c0x00ffffff-no-rj', 'Ссылка 3');
        createBr(div); createBr(div);
        createAliknk(div, 'https://i.pinimg.com/736x/a4/81/8c/a4818cb2cf1fe706d39d6fb773a84e2d.jpg', 'Ссылка 4');

    let a = div.getElementsByTagName("a");

    for (let elem of a) {
        elem.addEventListener("mouseover", showHref);
        elem.addEventListener("mouseout", hideHref);
    }

    function showHref(event) {
        let rect = event.target.getBoundingClientRect();

        let div = document.createElement("div");
        div.innerHTML = this.href;
        div.id = "showHref";
        div.className = "hoverLink";
        div.style.top = (rect.top - (this.offsetHeight + 15)) + 'px';
        div.style.left = (rect.left) +'px';

       

        solution.appendChild(div);
    }

    function hideHref (event) {
        removeElement ("showHref");
    }
};

/*=== Functions ===*/
function createBr(elem) {
    let br = document.createElement("br");
    elem.appendChild(br);
};

function createPar (text, elem) {
    let p = document.createElement("p");
    p.innerHTML = text;

    elem.appendChild(p);
};

function createAliknk (elem, href, innerText) {
    let a = document.createElement("a");
    a.href = href;
    a.innerHTML = innerText;
    elem.appendChild(a);
}

function createSolutionInner () {
    removeElement ("solution-inner");

    let div = document.createElement("div");
    div.id = "solution-inner";

    return div;
};

function createSolutionHeader (head, par) {
    removeElement ("solution-header");

    let div = document.createElement("div");
    div.id = "solution-header";

        let h2 = document.createElement("h2");
        h2.innerHTML = head;
        div.appendChild(h2);

        let p = document.createElement("p");
        p.innerHTML = par;
        div.appendChild(p);

    return div;
};

function removeElement ( id ) {
    if (document.getElementById(id) != null) {
        document.getElementById(id).remove();
    }
};

function getMonthInWords (month) {
    let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    return months[month];
};

function addZero(num) {
    if (num >= 0 && num < 10) {
        return '0' + String(num);
    } else {
        return num;
    }
};

function checkNum (num) {
   return isNaN(Number(num))
};

function getDayOfWeek (num) {
    let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

    return days[num];
};