'use strict';

let tasks = [
    {task: "№1", description: "Даны теги li с числами, инпут и кнопка. По нажатию на кнопку найдите сумму чисел и выведите их в инпут."},
    {task: "№2", description: "Даны теги li с числами и кнопка. По нажатию на кнопку увеличьте все числа в тегах li на единицу."},
    {task: "№3", description: "Дан инпут, абзац и кнопка. В инпут вводится число. По нажатию на кнопку получите массив делителей числа и выведите их в абзац через запятую."},
    {task: "№4", description: "Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст переворачивался."},
    {task: "№5", description: "В инпут вводится число из 6-ти цифр. По нажатию на кнопку проверьте, равна ли сумма первых трех цифр сумме вторых трех цифр."}
];

let tasksForm = document.getElementsByClassName("tasks")[0];
let shadow = document.getElementsByClassName("shadow")[0];
let solution = shadow.getElementsByClassName("solution")[0];
let closeButton = document.getElementById("close");


for(let task of tasks) {
    let div = document.createElement("div");
    div.className = "task";
    tasksForm.appendChild(div);

        let h2 = document.createElement("h2");
        h2.innerHTML = task["task"];
        div.appendChild(h2);

        let p = document.createElement("p");
        p.innerHTML = task["description"];
        div.appendChild(p);

        let button = document.createElement("button");
        button.innerHTML = "Решение";
        button.id = task["task"];
        div.appendChild(button);

        button.addEventListener("click", function () {
            showSolution();
            createSolitionForm(this.id);
        }) 
}

closeButton.addEventListener("click", hiddenSolution);
shadow.addEventListener("click", hiddenSolution);
solution.addEventListener("click", function(event) {
    event.stopPropagation();
});

/*=== Task Forms ===*/

function createSolitionForm (id) {
    switch(id) {
        case '№1':
            task1();
            break;
        case '№2':
            task2();
            break;
        case '№3':
            task3();
            break;
        case '№4':
            task4();
            break;
        case '№5':
            task5();
            break;
    }
};

function task1() {
    let solutionData = createSolutionData ();
    solution.appendChild(solutionData);

    let ul = createUl();
    solutionData.appendChild(ul);

    createBr(solutionData);


    let div = document.createElement("div");
    div.style.textAlign = "center";
    solutionData.appendChild(div);

        let label = document.createElement("label");
        label.innerHTML = "Сумма чисел: ";
        div.appendChild(label);

        let input = document.createElement("input");
        input.type = "text";
        input.disabled = true;
        div.appendChild(input);

        createBr(div); createBr(div);

        let button = document.createElement("button");
        button.innerHTML = "Рассчитать сумму";
        div.appendChild(button);

        button.addEventListener("click", function() {
            let li = solutionData.getElementsByTagName("li");
            let sum = 0;

            for(let elem of li) {
                sum += Number(elem.textContent);
            };

            input.value = sum;
        });
}

function task2() {
    let solutionData = createSolutionData ();
    solution.appendChild(solutionData);

    let ul = createUl();
    solutionData.appendChild(ul);

    createBr(solutionData); createBr(solutionData);


    let div = document.createElement("div");
    div.style.textAlign = "center";
    solutionData.appendChild(div);

        let button = document.createElement("button");
        button.innerHTML = "Увеличить значение";
        div.appendChild(button);

        button.addEventListener("click", function() {
            let li = solutionData.getElementsByTagName("li");

            for(let elem of li) {
                elem.textContent = Number(elem.textContent) + 1;
            };
        });
}

function task3() {
    let solutionData = createSolutionData ();
    solutionData.style.textAlign = "center";
    solution.appendChild(solutionData);

    let label = document.createElement("label");
    label.innerHTML = "Введите число (не больше 300): ";
    solutionData.appendChild(label);

    let input = document.createElement("input");
    input.type = "text";
    input.style.padding = "1% 2%";
    solutionData.appendChild(input);

    createBr(solutionData); createBr(solutionData);

    let p = document.createElement("p");
    p.innerHTML = "Тут будет массив делителей числа ...";
    solutionData.appendChild(p);

    createBr(solutionData); createBr(solutionData);

    let button = document.createElement("button");
    button.innerHTML = "Найти делители";
    solutionData.appendChild(button);

    input.addEventListener("change", function() {
        if(isNaN(Number(this.value)) || Number(this.value) % 1 !== 0) {
            alert('Необходимо ввести целое число!');
            this.value = '';
            return;
        };
    });

    button.addEventListener("click", function () {
         if(input.value == '') {
            alert('Для дальнейшей работы заполните данные!');
            input.focus();
            return;
        };

        let arr = [];

        for (let i = 1; i <= (Number(input.value) / 2); i++) {
            if(Number(input.value) % i == 0) {
                arr.push(i);
            }
        };

        arr.push(Number(input.value));

        p.innerHTML = "Массив делителей числа: " + arr.join(', ');
    })
};

function task4() {
    let solutionData = createSolutionData ();
    solutionData.style.textAlign = "center";
    solution.appendChild(solutionData);

    let par = [
        'Даны абзацы с текстом.',
        'Сделайте так, чтобы',
        'по нажатию на любой абзац',
        'его текст переворачивался.'
    ];

    for(let elem of par) {
        let p = document.createElement("p");
        p.innerHTML = elem;
        p.style.margin = "2% 0";
        solutionData.appendChild(p);

        p.addEventListener("click", function() {
            let reverseText = '';
            let text = p.innerHTML;

            for(let i = 0; i < text.length; i++) {
                reverseText = `${text[i]}${reverseText}`;
            }

            this.innerHTML = reverseText;
        });
    }
};

function task5() {
    let solutionData = createSolutionData ();
    solutionData.style.textAlign = "center";
    solution.appendChild(solutionData);

    let label = document.createElement("label");
    label.innerHTML = "Введите число из 6 цифр: ";
    solutionData.appendChild(label);

    let input = document.createElement("input");
    input.type = "text";
    input.style.padding = "1% 2%";
    solutionData.appendChild(input);

    createBr(solutionData); createBr(solutionData);

    let p = document.createElement("p");
    p.innerHTML = "Проверка равенства суммы первых трех цифр сумме вторых трех цифр ...";
    solutionData.appendChild(p);

    createBr(solutionData); createBr(solutionData);

    let button = document.createElement("button");
    button.innerHTML = "Проверить";
    solutionData.appendChild(button);

    input.addEventListener("change", function() {
        if(isNaN(Number(this.value)) || Number(this.value) % 1 !== 0) {
            alert('Необходимо ввести целое число!');
            this.value = '';
            this.focus();
            return;
        };

        if(this.value.length < 6 || this.value.length > 6) {
            alert('Длина числа должна быть 6 цифр!');
            this.value = '';
            this.focus();
            return;
        }
    });

    button.addEventListener("click", function () {
         if(input.value == '') {
            alert('Для дальнейшей работы заполните данные!');
            input.focus();
            return;
        };

        let arr = input.value.split('').map(val => Number(val));
        let sum1 = arr.filter((val, index) => index < 3).reduce((sum, elem) => { return sum += elem});
        let sum2 = arr.filter((val, index) => index > 2).reduce((sum, elem) => { return sum += elem});

        let result = `Сумма первых трех цифр (${arr.filter((val, index) => index < 3).join('+')}) и вторых трех цифр (${arr.filter((val, index) => index > 2).join('+')}) `;

        if (sum1 == sum2) {
            p.innerHTML = result +'<b><u>равны</u></b>!';
        } else {
            p.innerHTML = result +'<b><u>НЕ равны</u></b>!';
        }
    });
};

/*=== additional functions ===*/
function hiddenSolution () {
    shadow.style.display = "none";
}

function showSolution() {
    shadow.style.display = "flex";
}

function createUl () {
    let count = 0;

    while (count < 4) {
       count = Math.floor (Math.random() * 5);
    }

    let ul = document.createElement("ul");

    for (let i = 0; i <= count; i++) {
        let li = document.createElement("li");
        li.innerHTML = Math.floor (Math.random() * 50);

        ul.appendChild(li);
    };

    return ul;
}

function createSolutionData () {
    if (document.getElementById("solution-data") !== null) {
        document.getElementById("solution-data").remove();
    };

    let div = document.createElement("div");
    div.id = "solution-data";

    return div;
}

function createBr(elem) {
    let br = document.createElement("br");
    elem.appendChild(br);
}