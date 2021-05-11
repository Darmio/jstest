'use strict'

let masLi = document.getElementsByTagName('li'),
li5   = document.createElement('li'),
elUl  = document.querySelector('.menu');

elUl.insertBefore(masLi[2],masLi[1]);
elUl.appendChild(li5);
li5.innerHTML = "Пятый елемент";
li5.classList = "menu-item";


