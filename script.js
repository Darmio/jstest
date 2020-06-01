'use strict'

let money = prompt("You budget for a momth?");
let time  = prompt("Input date in format YYYY-MM-DD");
let expensItem = prompt("Input expens item");
let expensCost = prompt("Input cost of expenses");

let appData  = {
    budget:money,
    timeDate:time,
    expenses:{expensItem:expensCost},
    optionalExpenses:{},
    income:{},
    savings:false

}

alert("Budget for a day is " + appData.budget/30);
