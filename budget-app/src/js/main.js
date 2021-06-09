'use strict'

let btnBeg = document.getElementById('start');

//var el = document.getElementsByClassName("result-table");
let masValue = findByText("-value$","result");
let item_ = document.getElementsByClassName("expenses-item");
var btn = document.getElementsByTagName("button");
var btnAppr = btn[1];
var btnCalc = btn[2];
var itemOpt = document.querySelectorAll(".optionalexpenses-item");
var typeText = document.querySelectorAll('[type=text]');
console.log(item_.length);
console.log(itemOpt.length);
console.log(typeText);
btnCalc.style.fontFamily = "Franklin Gothic Heavy";


function findByText(text, nodeName){
     var masEl = [];
     var re = new RegExp(text);
     var el  =  document.getElementsByClassName(nodeName);
     var teg = el[0].getElementsByTagName("*");
     for(var i = 0; i<teg.length; i++){
         if(re.test(teg[i].className)) {
             masEl.push(teg[i]);
         }
     }
     return masEl;
}