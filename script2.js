
/*let a = 50;
do {
    console.log(a);
    a++;
}while(a<55);*/
'use strict'

let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('wrapper')[0].getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneheart = document.querySelector('.heart');

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';    

for(let i=0; i<hearts.length; i++){
    hearts[i].style.backgroundColor = 'blue';
}

hearts.forEach(function(item, i , mas) {
    item.style.backgroundColor = 'blue';
});

let div = document.createElement('div'),
    text = document.createTextNode('I wa here');

    div.classList.add('black');

    document.body.appendChild(div);
    div.innerHTML = '<h1>Hello hi </h1>';
    div.textContent = 'new text';

    document.body.insertBefore(div,hearts[1]);
    document.body.removeChild(hearts[1]);

    document.body.replaceChild(btn[1],hearts[2]);
    console.log(div);

