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
        div.appendChild(button);

        button.addEventListener("click", function () {
            showSolution();
        }) 
}

closeButton.addEventListener("click", hiddenSolution);
shadow.addEventListener("click", hiddenSolution);
solution.addEventListener("click", function(event) {
    event.stopPropagation();
})



function hiddenSolution () {
    shadow.style.display = "none";
}

function showSolution() {
    shadow.style.display = "flex";
}
