'use strict';

 let tags = [
  {tag: "#creativity", count: 23}, 
  {tag: "#design", count: 43}, 
  {tag: "#art", count: 27},
  {tag: "#inspiration", count: 13},
  {tag:  "#photography", count: 35},
  {tag:  "#writing", count: 3},
  {tag: "#testing", count: 13},
  {tag:  "#smile", count: 12},
  {tag:  "#positive", count: 123},
  {tag:  "#political", count: 45},
  {tag:  "#weather", count: 22},
  {tag:  "#forest", count: 8},
  {tag:  "#animal", count: 2230}];

  let mainData = [
    {title: "The Art of Mindful Creativity", 
     text: "Discover how mindfulness practices can enhance your creative process. Learn techniques to quiet your mind and allow ideas to flow naturally without judgment or pressure.",
     date: "May 15, 2025",
     author: "Emma Wilson",
     topic: "Mindfulness",
     comments : "14 comments"   
    },
    {title: "Color Theory for Beginners", 
     text: "Understanding color relationships can transform your creative projects. This guide covers the color wheel, complementary colors, and creating harmonious palettes.",
     date: "June 2, 2025",
     author: "James Carter",
     topic: "Design",
     comments : "22 comments"   
    },
    {title: "Overcoming Creative Block", 
     text: "Every creator faces blocks. Explore proven strategies to reignite your inspiration, from changing environments to creative cross-training in different mediums.",
     date: "July 10, 2025",
     author: "Sophia Lee",
     topic: "Productivity",
     comments : "18 comments"   
    },
    {title: "Digital Tools for Creative Minds", 
     text: "Explore the latest digital tools that can streamline your creative workflow. From AI-assisted design to collaborative platforms, discover how technology can enhance your creative process.",
     date: "August 5, 2025",
     author: "David Chen",
     topic: "Technology",
     comments : "9 comments"   
    }
];

let upcommingEvents = [
    {title: "Creative Workshop ", date: "2025-10-20"},
    {title: "Design Conference", date: "2025-10-27"},
    {title: "Art Exhibition", date: "2025-11-09"},
    {title: "Coffe Break", date: "2025-12-23"},
    {title: "Dance Party", date: "2025-10-31"},
    {title: "Color Festival", date: "2025-11-06"},
    {title: "Big Dance Flashmob", date: "2025-11-12"},
    {title: "Drift Rally", date: "2025-10-28"},
    {title: "Meet Party", date: "2025-12-23"},
    {title: "Street Workout", date: "2025-10-22"}
];

function getRandomFact() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", 'https://catfact.ninja/fact', true);

    xhr.send();

    xhr.onload = function() {
        if (xhr.status != 200) { 
            console.error(`Ошибка ${xhr.status}: ${xhr.statusText}`, error); 
        } else { 
            let inData = (JSON.parse(xhr.responseText)["fact"]);

            getWeeklyInspiration (inData);

            return ;
        }
    };

    xhr.onerror = function() {
        let inData = 'К сожалению, не удалось загрузить информацию о котиках!'
        getWeeklyInspiration (inData);
    };
};

function getWeeklyInspiration (inData) {
    let div = document.getElementById("weekly-inspiration");

    let p = document.createElement('p');
    p.innerHTML = inData;

    div.appendChild(p);
};

function getPopularTags (tag) {
    let sortTags = tag.sort((a, b) => b["count"] - a["count"]);

    for (let i = 0; i < 6; i++) {
        let div = document.getElementById('tags');

        let a = document.createElement('a');
        a.href = "#";
        a.innerHTML = sortTags[i]["tag"];
        
        div.appendChild(a);
    }
};

function getMainData (mainData) {
    let div = document.getElementById("main");

    for(let i in mainData) {
        let section = document.createElement('section');
        section.className = "block";

        let divSectionHead = document.createElement("div");
        divSectionHead.className = "base-section-info"

            let span = document.createElement("div");
            span.className = "section-info";

                let date = document.createElement("span");
                date.innerHTML = mainData[i]["date"];
                span.appendChild(date);

                let author = document.createElement('a');
                author.href = "#";
                author.innerHTML = mainData[i]["author"];
                span.appendChild(author);

                let topic = document.createElement('a');
                topic.href = "#";
                topic.innerHTML = mainData[i]["topic"];
                span.appendChild(topic);

                let comments = document.createElement('a');
                comments.href = "#";
                comments.innerHTML = mainData[i]["comments"];
                span.appendChild(comments);

            divSectionHead.appendChild(span);

        section.appendChild(divSectionHead);

        let h2 = document.createElement("h1");
        h2.innerHTML = mainData[i]["title"];
        section.appendChild(h2);

        let p = document.createElement("p");
        p.innerHTML = mainData[i]["text"];
        section.appendChild(p);

        div.appendChild(section)
    }
}

getRandomFact();
getPopularTags (tags);
getMainData (mainData);
