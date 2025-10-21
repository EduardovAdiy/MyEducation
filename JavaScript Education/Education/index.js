'use strict';

let tasks = [
	{task: "№1", text: "Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца."},
	{task: "№2", text: "Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац."},
	{task: "№3", text: "Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа."},
	{task: "№4", text: "Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество)."},
	{task: "№5", text: "Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута."},
	{task: "№6", text: "Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте)."},
	{task: "№7", text: "Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте."},
	{task: "№8", text: "Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31."},
	{task: "№9", text: "Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам)."},
	{task: "№10", text: "Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3."},
	{task: "№11", text: "Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер."},
	{task: "№12", text: "Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках."},
	{task: "№13", text: "Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;)."},
	{task: "№14", text: "Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится."},
	{task: "№15", text: "Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату."},
	{task: "№16", text: "Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля."},
	{task: "№17", text: "Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам."},
	{task: "№18", text: "На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста"},
	{task: "№19", text: "Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут."},
	{task: "№20", text: "Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут."},
	{task: "№21", text: "Дан инпут, кнопка и абзац. В инпут вводится температура в градусах Фаренгейта. По клику на кнопку выведите в абзац температуру в градусах Цельсия."},
	{task: "№22", text: "Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал этого числа."},
	{task: "№23", text: "Даны 3 инпута, кнопка и абзац. В инпуты вводятся коэффициенты квадратного уравнения. По нажатию на кнопку найдите корни этого уравнения и выведите их в абзац."}
]

let taskList = document.getElementsByClassName("task-list")[0];

for (let elem of tasks) {
	let a = document.createElement('a');
	a.href = "#";
	a.innerHTML = elem.task;

	a.addEventListener("click", function () {
			let div = document.getElementsByClassName('task')[0];
			let h2 = div.getElementsByTagName("h2")[0];
			let p = div.getElementsByTagName("p")[0];

			div.removeAttribute("hidden");

			h2.innerHTML = elem["task"];
			p.innerHTML = elem["text"];

		});
	
	a.addEventListener ("click", function () {
		createSolution (this.innerHTML);
	});

	taskList.appendChild(a);
}

function createSolution (title) {
	switch (title) {
		case '№1':
			createSolOne ();
			break;
		case '№2':
			createSolTwo ();
			break;
		case '№3':
			createSolThree ();
			break;
		case '№4':
			createSolFour ();
			break;
		case '№5':
			createSolFive ();
			break;
		case '№6':
			createSolSix ();
			break;
		case '№7':
			createSolSeven ();
			break;
		case '№8':
			createSolEight ();
			break;
		case '№9':
			createSolNine ();
			break;
		case '№10':
			createSolTen ();
			break;
		case '№11':
			createSolEleven ();
			break;
		case '№12':
			createSolTwelve ();
			break;
		case '№13':
			createSolThirdteen ();
			break;
		case '№14':
			createSolFourteen ();
			break;
		case '№15':
			createSolFiveteen();
			break;
		case '№16':
			createSolSixteen ();
			break;
		case '№17':
			createSolSeventeen ();
			break;
		case '№18':
			createSolEigthteen ();
			break;
		case '№19':
			createSolNineteen();
			break;
		case '№20':
			createSolTwenty ();
			break;
		case '№21':
			createSolTwentyOne ();
			break;
		case '№22':
			createSolYwentyTwo ();
			break;
		case '№23':
			createSolTwentyTree ();
			break;
	};
};

let sol = document.getElementsByClassName("solution")[0];

function createSolutionBlock () {
	let solutionBlock = document.getElementById("solution-block");
	if(!(solutionBlock == null)) {
		sol.removeChild(solutionBlock);
	};

	sol.removeAttribute("hidden");
}

function createSolOne () {
	createSolutionBlock ();

	let  div = document.createElement('div');
	div.id = "solution-block";

		let label = document.createElement("label");
		label.innerHTML = "Введите текст: ";
		div.appendChild(label);

		let input = document.createElement("input");
		input.type = "text";
		input.placeholder = "Enter text ...";
		div.appendChild(input);
		
		let br = document.createElement('br');
		div.appendChild(br);

		let p = document.createElement ("p");
		p.innerHTML = "Тут будет текст из инпута: ";
		div.appendChild(p);

	sol.appendChild(div);

	input.addEventListener("mouseout", function() {
		p.innerHTML = p.innerHTML +''+ input.value;
	});
};

function createSolTwo () {
	createSolutionBlock ();

	let  div = document.createElement('div');
	div.id = "solution-block";

		let label = document.createElement("label");
		label.innerHTML = "Введите число 1: ";
		div.appendChild(label);

		let input = document.createElement("input");
		input.type = "number";
		input.placeholder = "Enter number ...";
		div.appendChild(input);

		let label1 = document.createElement("label");
		label1.innerHTML = "Введите число 2: ";
		div.appendChild(label1);

		let input1 = document.createElement("input");
		input1.type = "number";
		input1.placeholder = "Enter number ...";
		div.appendChild(input1);
		
		let br = document.createElement('br');
		div.appendChild(br);

		let p = document.createElement ("p");
		p.innerHTML = "Тут будет сумма чисел: ";
		div.appendChild(p);
		
		let br1 = document.createElement('br');
		div.appendChild(br1);

		let block = document.createElement("div");
		block.style = "text-align: center;";

			let button = document.createElement("button");
			button.innerHTML = "Считать";
			block.appendChild(button);

		div.appendChild(block);

	sol.appendChild(div);

	button.addEventListener("click", function() {
		let sum = Number(input.value) + Number(input1.value);

		p.innerHTML = p.innerHTML + String(sum);
	});
};