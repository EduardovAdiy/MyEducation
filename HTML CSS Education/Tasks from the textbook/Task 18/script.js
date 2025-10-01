'use strict';

let product = [
    {title: "Product 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: "$19.99"},
    {title: "Product 2", description: "Sed do eiusmod tempor incididunt ut labore et dolore.", price: "$24.99"},
    {title: "Product 3", description: "Ut enim ad minim veniam, quis nostrud exercitation.", price: "$29.99"},
    {title: "Product 4", description: "Duis aute irure dolor in reprehenderit in voluptate.", price: "$14.99"},
    {title: "Product 5", description: "Velit esse cillum dolore eu fugiat nulla pariatur.", price: "$39.99"},
    {title: "Product 6", description: "Excepteur sint occaecat cupidatat non proident.", price: "$9.99"},
    {title: "Product 7", description: "Sunt in culpa qui officia deserunt mollit anim id.", price: "$49.99"},
    {title: "Product 8", description: "Laboris nisi ut aliquip ex ea commodo consequat.", price: "$17.99"},
    {title: "Product 9", description: "Reprehenderit in voluptate velit esse cillum.", price: "$22.99"},
    {title: "Product 10", description: "Dolore eu fugiat nulla pariatur excepteur sint.", price: "$34.99"},
    {title: "Product 11", description: "Occaecat cupidatat non proident sunt in culpa.", price: "$12.99"},
    {title: "Product 12", description: "Qui officia deserunt mollit anim id est laborum.", price: "$27.99"},
];

function generateMain () {
    let mainDiv = document.getElementById('main-conteiner');

    for (let i = 0; i< product.length; i++) {
        let div = document.createElement('div');
        div.className = "block";

        let h2 = document.createElement('h2');
        h2.innerHTML = product[i]["title"];
        div.appendChild(h2);

        let p = document.createElement('p');
        p.innerHTML = product[i]["description"];
        div.appendChild(p);

        let price = document.createElement('p');
        price.innerHTML = product[i]["price"];
        price.className = "price";
        div.appendChild(price);

        let button = document.createElement('button');
        button.innerHTML = "to cart";
        button.className = "button";
        div.appendChild(button);

        mainDiv.appendChild(div);
    };
};

generateMain ();