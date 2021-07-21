'use strict'

var btn = document.getElementsByTagName("button");
let wr  = document.querySelector('.wrapp');

console.log(wr);

btn[2].onclick = "Put button onclick";
btn[2].addEventListener('click', function(event){
    event.preventDefault();
    alert('Was event' + event.type +" ob "+ event.target);
});
btn[2].addEventListener('click', function(event){
    event.preventDefault();
    console.log('Was event' + event.type +" ob "+ event.target);
});

btn[0].addEventListener('mouseleave', function(event){
    event.preventDefault();
    console.log('Go out' + event.type +" ob "+ event.target);
});
btn[0].addEventListener('mouseenter', function(event){
    event.preventDefault();
    console.log('Go on' + event.type +" ob "+ event.target);
});

btn[0].addEventListener('click', function(event){
    event.preventDefault();
    console.log('Click' + event.type +" ob "+ event.target);
});

wr.style.backgroundColor = "red";
wr.addEventListener('click', function(event){
    console.log('Click_wr' + event.type +" ob "+ event.target);
});

//new RegExp('pattern','flags');
// /pattern/
//i  g  m
let ans = prompt('Input name');
let reg  = /n/ig;
console.log(ans.search(reg));
console.log(ans.match(reg));
console.log(reg.test(ans));

let pass = prompt("Insert pass");
console.log(pass.replace(/./g,"*"));
alert('12-05-2021'.replace(/-/g,":"));
//\d \D - digit
//\w \W - word
//\s \S - space
console.log(ans.match(/\d/g));

let str = "my / name R2d2";
console.log(str.match(/\w\d\w\d/i));
console.log("\\"+str.match(/\//));



window.addEventListener('DOMContentLoaded', function(){
    let box = document.querySelector('.box');
    box.style.backgroundColor = "brown";
    box.addEventListener('touchstart', function(event){
        console.log('touchstart' + event.touches);
        console.log(event.changedTouches);
        console.log(event.targetTouches);
    });

    box.addEventListener('touchmove', function(event){
        console.log('touchmove' + event);
        console.log('touchmove' + event.target);
        console.log('touchmove2' + event.touches[0].target);
        });
    
        box.addEventListener('touchend', function(event){
            event.preventDefault();
            console.log('touchend');
            console.log('touchmove' + event.target);
            console.log('touchEnd');
            });

});