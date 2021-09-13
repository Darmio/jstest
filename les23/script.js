'use strict'
let age = document.getElementById('age');
function showUser(surname, name) {
  alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser.call(age,"W","SQ");
//var sh = showUser.bind(age);
//sh('m','N');

age.addEventListener('change', function(){
    showUser.call(age,'m','N');
})
function hello() {
	console.log(this);
}
hello();

var f = () => { 'use strict'; console.log(this);}; 
f();

function makearr(){
    var items = [];
    for(var i=0; i<10; i++){
        var item = i;//function(){console.log(i);}
        console.log(i);
        items.push(item);
    }
    return items;
}

var mk = makearr();

mk[1];
mk[5];
mk[8];

