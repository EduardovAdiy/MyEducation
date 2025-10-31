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

    let p = document.createElement("p");
    p.innerHTML = data;

    body.appendChild(p);
}

getAllObjects();
getRandomFact() ;