function func1() {
	alert ('1');
}

function func2() {
	alert ('2');
}

function func3() {
	alert ('3');
}

let p = document.querySelector('#elem');
p.addEventListener('click', func1);
p.addEventListener('click', func2);
p.addEventListener('click', func3);