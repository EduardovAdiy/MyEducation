'use strict';

let arr = [
    {title: "Features", text: "Discover our powerful features that will help your business grow and reach new customers online with ease."},
    {title: "Benefits", text: "Get all the advantages of our service including 24/7 support, modern technologies and competitive pricing."},
    {title: "Pricing", text: "We offer flexible pricing plans suitable for businesses of all sizes, from startups to enterprises."},
    {title: "Support", text: "Our dedicated support team is always ready to help you with any questions or issues you may have."}
    ];

function generateBlocks () {
    for (let i = 0; i <arr.length; i++) {
        let title = arr[i]["title"];
        let text = arr[i]["text"];
        let block = document.getElementById('generate-blocks');

        let section = document.createElement('section');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let div = document.createElement('div');
        let a = document.createElement('a');

        h3.innerHTML = title;
        p.innerHTML = text;
        div.className = "close-img";
        a.href = "#";
        a.innerHTML = "x";

        div.appendChild(a);
        section.appendChild(div)
        section.appendChild(h3);
        section.appendChild(p)

        block.appendChild(section);
    };
};

generateBlocks ();