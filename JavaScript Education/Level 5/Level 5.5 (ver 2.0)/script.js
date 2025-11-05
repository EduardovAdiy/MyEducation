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
    let curDate = new Date();
    let header = 'Задача №1';
    let par = `Дан инпут, кнопка и три абзаца. В инпут вводится дата в формате <i>${curDate.getFullYear()}-${addZero(curDate.getMonth()+1)}-${addZero(curDate.getDate())}</i>. По нажатию на кнопку выведите в первый абзац год, во второй абзац - месяц, в третий день.`;

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
        button.innerHTML = "Вывести";
        div.appendChild(button);

        createBr(div);
        createBr(div);

        createPar('Текущий год: ', div);
        createPar('Текущий месяц: ', div);
        createPar('Текущий день: ', div);
  
        input.addEventListener("change", function () {
            if(isNaN(new Date(this.value))) {
                this.value = '';
                alert ('Указана неверная дата!');
            }
        });

        button.addEventListener("click", function() {
            if (input.value == '') {
                alert('Не указана дата!');
                return;
            };
            
            let p = div.getElementsByTagName("p");
            let date = new Date(input.value);

            p[0].innerHTML = `Текущий год: ${date.getFullYear()}`;
            p[1].innerHTML  = `Текущий месяц: ${getMonthInWords(date.getMonth())}`;
            p[2].innerHTML  = `Текущий день: ${date.getDate()}`;

            console.log(p);
        })
};

function task2() {
    let header = 'Задача №2';
    let par = `Даны два инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку заполните массив целыми числами от первого введеного числа до последнего.`;

    let head = createSolutionHeader(header, par);
    solution.appendChild(head);

    let div = createSolutionInner ();
    solution.appendChild(div);
        
        let label1 = document.createElement("label");
        label1.innerHTML = 'Введите число 1: ';
        div.appendChild(label1);

        let input1 = document.createElement("input");
        div.appendChild(input1);

        let label2 = document.createElement("label");
        label2.innerHTML = '  Введите число 2: ';
        div.appendChild(label2);

        let input2 = document.createElement("input");
        div.appendChild(input2);

        createBr(div); createBr(div);

        let button = document.createElement("button");
        button.innerHTML = "Вывести массив";
        div.appendChild(button);

        createBr(div); createBr(div);

        let p = document.createElement("textarea");
        p.style.width = "90%"; 
        p.style.minHeight = "180px";
        div.appendChild(p);

    input1.addEventListener("change", function() {
        if(checkNum(this.value)) {
            alert ('Введите число!');
            this.value = '';
        }
    });

    input2.addEventListener("change", function() {
        if(checkNum(this.value)) {
            alert ('Введите число!');
            this.value = '';
        }
    });

    button.addEventListener("click", function() {
        if(input1.value == '' || input2.value == '') {
            alert('Укажите числа!');
            return;
        };

        if(Math.abs(Number(input1.value) - Number(input2.value)) > 1000) {
            alert('Разница между числами должна быть менее 1000!');
            input1.value = '';
            input2.value = '';
            return;
        };

        let arr = [];

        let max = Math.max(input1.value, input2.value);
        let min = Math.min(input1.value, input2.value);

        for(let i = min; i <= max; i ++) {
            arr.push(i);
        }

        p.innerHTML = arr;
    });
};

function task3 () {
    let header = 'Задача №3';
    let par = `Дан инпут, абзац и кнопка. В инпут вводится строка. По нажатию на кнопку выведите в абзац последний символ введенной строки.`;

    let head = createSolutionHeader(header, par);
    solution.appendChild(head);

    let div = createSolutionInner ();
    solution.appendChild(div);

        let label = document.createElement("label");
        label.innerHTML = 'Введите строку: ';
        div.appendChild(label);

        let input = document.createElement("input");
        input.type = "text";
        div.appendChild(input);

        createBr(div); createBr(div);

        let p = document.createElement("p");
        p.innerHTML = "Тут будет последний символ строки: ";
        div.appendChild(p);

        createBr(div); createBr(div);

        let button = document.createElement("button");
        button.innerHTML = "Рассчитать";
        div.appendChild(button);

        button.addEventListener("click", function() {
            if(input.value == '') {
                alert ("Введите сроку!");
                return;
            };

            p.innerHTML = "Тут будет последний символ строки: " + input.value[input.value.length - 1];
        })
};

function task4 () {
    let header = 'Задача №4';
    let par = `Дан абзац, в котором записано число 1. По нажатию на кнопку увеличивайте число в абзаце на единицу.`;

    let head = createSolutionHeader(header, par);
    solution.appendChild(head);

    let div = createSolutionInner ();
    solution.appendChild(div);

        let p = document.createElement("p");
        p.innerHTML = "1";
        div.appendChild(p);

        createBr(div); createBr(div);

        let button = document.createElement("button");
        button.innerHTML = "Увеличить";
        div.appendChild(button);

        button.addEventListener("click", function() {
            p.innerHTML = Number(p.innerHTML) + 1; 
        })

};

function task5 () {
    let header = 'Задача №5';
    let par = `Дан инпут и абзац. В инпут вводится строка со словами. По потери фокуса выведите в абзац количество слов во введенной строке.`;

    let head = createSolutionHeader(header, par);
    solution.appendChild(head);

    let div = createSolutionInner ();
    solution.appendChild(div);

        let label = document.createElement("label");
        label.innerHTML = 'Введите строку: ';
        div.appendChild(label);

        createBr(div);

        let input = document.createElement("input");
        input.type = "text";
        input.style = "width: 80%";
        div.appendChild(input);

        createBr(div); createBr(div);

        let p = document.createElement("p");
        p.innerHTML = "Кол-во слов в строке: ";
        div.appendChild(p);

        input.addEventListener ("blur", function () {
            p. innerHTML = "Кол-во слов в строке: " + input.value.split(' ').length;
        })

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