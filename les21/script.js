'use strict'

let box = document.querySelector('.box'),
    btn = document.querySelector('button');

let width  = box.clientWidth,
    height = box.clientHeight;

    box.style.height = box.scrollHeight + 'px';
    box.scrollTop = 0;
    scrollBy(0,200);
    scrollTo(0,200);



