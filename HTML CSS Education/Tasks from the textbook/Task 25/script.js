function getAllObjects () {
    let request = new XMLHttpRequest();

    request.open("GET", "https://api.restful-api.dev/objects", true);
    request.send();

    request.onload = function () {
        if(!this.status === 200) {
            console.error(`${this.status} ${this.statusText}`, error);
            return
        }

        createDocElement(JSON.stringify(JSON.parse(this.responseText)));
    };
}

function getRandomFact() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", 'https://catfact.ninja/fact', true);

    xhr.send();

    xhr.onload = function() {
        if (xhr.status != 200) { 
            console.error(`Ошибка ${xhr.status}: ${xhr.statusText}`, error); 
        } else { 
            let inData = (JSON.parse(xhr.responseText)["fact"]);

            getCatFact(inData);

            return ;
        }
    };

    xhr.onerror = function() {
        let inData = 'К сожалению, не удалось загрузить информацию о котиках!'
        getCatFact (inData);
    };
};

function getCatFact (data) {
    let p = document.getElementById("Cats-fact");
    p.innerHTML = data;
}

function createDocElement(data) {
    let body = document.getElementById("base-section");

 
    let obj = new Object(JSON.parse(data));
    
    for (let device of obj) {
        let data = device["data"];

        if (data !== null) {
            let div = document.createElement("div");
            div.className = "base-block";

            let br = function() {
                let br = document.createElement("br");
                div.appendChild(br);
            };

            let h3 = document.createElement("h3");
            h3.innerHTML = device["name"];
            div.appendChild(h3);

            br();

            let p = document.createElement("p");
            let keys = Object.keys(data);
            let values = Object.values(data);
            let result = '';

            for (let i in keys) {
                result = `${result}${keys[i]}: ${values[i]}. `;
            };
            p.innerHTML = result;
            div.appendChild(p);

            br();

            let price = document.createElement("p");
            price.innerHTML = "$" + (data["price"] ?? `${(Math.floor(Math.random() * 500))}.99`)
            price.className = "cost";
            div.appendChild(price);

            br();

            let button = document.createElement("button");
            button.innerHTML = "Add to Cart";
            div.appendChild(button);

        body.appendChild(div);
        }  
    }
    let seperator = document.createElement("div");
    seperator.className = "separator";
    body.appendChild(seperator);
}

getAllObjects();
getRandomFact();
