'use strict';

let products = [
    {title: "Smartphone", descriprion: "Latest smartphone with advanced features and long battery life."},
    {title: "Laptop", descriprion: "Ultra-thin laptop with high performance and lightweight design."},
    {title: "Headphones", descriprion: "Premium noise-canceling headphones with crystal clear sound."},
    {title: "Smart Watch", descriprion: "Track your fitness and stay connected with this smart watch."},
    {title: "Camera", descriprion: "Professional DSLR camera perfect for photography enthusiasts."},
    {title: "Tablet", descriprion: "10-inch tablet with stylus support and long battery life."},
    {title: "Gaming Console", descriprion: "Next-gen gaming console with 4K support and immersive gaming."},
    {title: "Wireless Earbuds", descriprion: "True wireless earbuds with premium sound and noise cancellation."},
    {title: "External SSD", descriprion: "High-speed portable SSD with rugged design and water resistance."}
];

 async function generateMainData () {
    let div = document.getElementById("main-conteiner");

    for (let i in products) {
        let section = document.createElement('section');
        section.className = "block";

        let h2 = document.createElement('h2');  
        h2.innerHTML = products[i]["title"];
        section.appendChild(h2);

        let p = document.createElement('p');
        p.innerHTML = products[i]["descriprion"];
        section.appendChild(p);

        let button = document.createElement('div');
        button.className = "button";

        let a = document.createElement('a');
        a.href = "#";
        a.innerHTML = "add to cart";
        button.appendChild(a);

        section.appendChild(button);

        div.appendChild(section);
    };
};

generateMainData ();