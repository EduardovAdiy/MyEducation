'use strict';

let dataSet = [
    {title: "Lorem ipsum 1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
     date: "May 15, 2025", author:" John Doe",
     topic: " Technology", comment: "5 comments"
    },
    {title: "Lorem ipsum 2", text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
     date: "June 2, 2025", author:"Jane Smith",
     topic: "Business", comment: "12 comments"
    },
    {title: "Lorem ipsum 3", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
     date: "July 10, 2025", author:"Mike Johnson",
     topic: "Science", comment: "8 comments"
    },
    {title: "Lorem ipsum 4", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
     date: "August 5, 2025", author:"Sarah Williams",
     topic: "Health", comment: "3 comments"
    },
    {title: "Lorem ipsum 5", text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
     date: "September 1, 2025", author:"David Brown",
     topic: "Travel", comment: "7 comments"
    }
];

function generateMainSection() {
    let main = document.getElementById("main");

    for (let i in dataSet) {
        let section = document.createElement('section');

        let div = document.createElement('div');
        div.className = "float";

        let a = document.createElement('a');
        a.href = "#";
        a.innerHTML = "♥";
        div.appendChild(a);

        section.appendChild(div);

        let h1 = document.createElement('h1');
        h1.innerHTML = dataSet[i]["title"];
        section.appendChild(h1);

        let p = document.createElement('p');
        p.innerHTML = dataSet[i]["text"];
        section.appendChild(p);

        let sectionInfo = document.createElement('div');
        sectionInfo.className = "section-info";

        let spanDate = document.createElement("span");
        spanDate.innerHTML = dataSet[i]["date"];
        sectionInfo.appendChild(spanDate);

        let author = document.createElement('a');
        author.href = '#';
        author.innerHTML = dataSet[i]["author"];
        sectionInfo.appendChild(author);

        let topic = document.createElement('a');
        topic.href = "#";
        topic.innerHTML = dataSet[i]["topic"];
        sectionInfo.appendChild(topic);

        let comment = document.createElement('a');
        comment.href = "#";
        comment.innerHTML = dataSet[i]["comment"];
        sectionInfo.appendChild(comment);        

        section.appendChild(sectionInfo); 

        main.appendChild(section);
    };
};

generateMainSection();