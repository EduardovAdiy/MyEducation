'use strict';

let unorderedList = [
    'Lorem ipsum dolor sit amet',
    'Consectetur adipiscing elit',
    'Nullam auctor, nisl eget ultricies',
    'Nisl nisl aliquam nisl',
    'Eget ultricies nisl nisl',
    'Lorem ipsum dolor sit amet',
    'Consectetur adipiscing elit',
    'Nullam auctor, nisl eget ultricies',
    'Nisl nisl aliquam nisl',
    ];

let orderedList = [
    'Lorem ipsum dolor sit amet',
    'Consectetur adipiscing elit',
    'Nullam auctor, nisl eget ultricies',
    'Nisl nisl aliquam nisl',
    'Eget ultricies nisl nisl',
    'Lorem ipsum dolor sit amet',
    'Consectetur adipiscing elit',
    'Nullam auctor, nisl eget ultricies',
    'Nisl nisl aliquam nisl',
    ];

function generateOrderedList () {
    let ol = document.getElementById('ol');

    for (let i = 0; i < orderedList.length; i++) {
        let li = document.createElement('li');

        li.innerHTML = orderedList[i];

        ol.appendChild(li);
    };
};

function generateUnorderedList () {
    let ul = document.getElementById('ul');

    for (let i = 0; i < unorderedList.length; i++) {
        let li = document.createElement('li');

        li.innerHTML = unorderedList[i];

        ul.appendChild(li);
    };
};

generateUnorderedList ();
generateOrderedList ()