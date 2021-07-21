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
	console.log(this)
}
hello();