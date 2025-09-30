'use strict';

let data = [
    {title: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    {title: "Dolor sit", text: "Sed do eiusmod tempor incididunt ut labore et dolore."},
    {title: "Amet consectetur", text: "Ut enim ad minim veniam, quis nostrud exercitation."},
    {title: "Adipiscing elit", text: "Duis aute irure dolor in reprehenderit in voluptate."},
    {title: "Eiusmod tempor", text: "Velit esse cillum dolore eu fugiat nulla pariatur."},
    {title: "Incididunt ut", text: "Excepteur sint occaecat cupidatat non proident."},
    {title: "Labore et", text: "Sunt in culpa qui officia deserunt mollit anim."},
    {title: "Dolore magna", text: "Laboris nisi ut aliquip ex ea commodo consequat."},
    {title: "Aliqua ut", text: "Nemo enim ipsam voluptatem quia voluptas sit."},
];

function generateBaseElements () {
    let baseConteiner = document.getElementById("base-continer");

    for (let i = 0; i < data.length; i++) {
        let div = document.createElement('div');

        div.className = 'block';
        div.id = `b${i}`;

        let title = data[i]["title"];
        let text = data[i]["text"];

        let h1 = document.createElement('h1');
        let p = document.createElement('p');
        let a = document.createElement('a');

        h1.innerHTML = title;
        p.innerHTML = text;
        a.href = '#';
        a.innerHTML = 'read more';

        div.appendChild(h1);
        div.appendChild(p);
        div.appendChild(a);

        baseConteiner.appendChild(div);
    };
};

generateBaseElements();















