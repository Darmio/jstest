
let masli = document.getElementsByTagName('li'),
li5 = document.createElement('li'),
menu = document.querySelector('.menu'),
body = document.getElementsByTagName('body'),
titl = document.querySelector('#title'),
adv  = document.querySelector('.adv'),
col  = document.getElementsByClassName('column'),
prom = document.querySelector('#prompt');

menu.insertBefore(masli[2],masli[1]);

menu.appendChild(li5);
li5.innerHTML = "Five element";
li5.classList = "menu-item";

body[0].style.backgroundImage = "url('img/apple_true.jpg')";
titl.innerHTML = "Мы продаем только подлинную технику Apple";
col[1].removeChild(adv);

let answ = prompt("Do you like apple");
prom.innerHTML = answ; 

let i = document.querySelectorAll('column');