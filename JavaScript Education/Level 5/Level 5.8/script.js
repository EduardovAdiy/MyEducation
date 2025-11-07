'use strict';

let tasks = [
    {task: "№1", description: "Даны инпуты. В них вводятся числа. Сделайте так, чтобы при потери фокуса в любом из инпутов в нем появлялся квадрат введенного в него числа."},
    {task: "№2", description: "Дан массив, кнопка и инпут. Сделайте так, чтобы по клику на кнопку в инпут выводился случайный элемент массива."},
    {task: "№3", description: "Дан инпут и абзац. В него через запятую вводятся числа. По потери фокуса найдите сумму введенных чисел и выведите ее в абзац."},
    {task: "№4", description: "Даны два инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку получите массив общих делителей этих чисел и выведите его в консоль."},
    {task: "№5", description: "Дан инпут и кнопка. В инпут через запятую вводятся числа. По нажатию на кнопку проверьте, есть ли среди введенных число 13."},
    {task: "№6", description: "Дан инпут и кнопка. В него вводится число из шести цифр. По клику на кнопку проверьте, что число представляет собой счастливый билет, то есть сумма первых трех цифр равна сумме вторых трех цифр."}
];

let taskMenu = document.getElementById("task-menu");

for (let i in tasks) {
    let button = document.createElement("button");
    button.innerHTML = tasks[i]["task"];
    button.id = tasks[i]["task"];
    
    if (i == 0) {
        button.className = "button-pressed";
    } else {
        button.className = "button";
    }

    taskMenu.appendChild(button);

    button.addEventListener("click", changePressedButton);
};

function changePressedButton () {
    let button = taskMenu.getElementsByClassName("button-pressed")[0];
    if(this.id == button.id) {
        return
    } else {
        button.className = "button";

        this.className = "button-pressed";
    }
};