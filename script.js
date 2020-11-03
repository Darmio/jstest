'use strict'

let money, time;
function start(){
    money = +prompt("You budget for a momth?"),
    time  = prompt("Input date in format YYYY-MM-DD");
    while(isNaN(money)||money == "" || money == null){
        money = +prompt("You budget for a momth?");  
    }
}

start();

let appData  = {
    budget:money,
    timeDate:time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:true

}

function chooseExpenses() {
for(let i=0; i<2; i++){
    let expensItem = prompt("Input expens item",''),
        expensCost = prompt("Input cost of expenses",'');
        if((typeof(expensItem))==='string' && (typeof(expensItem))!=null && (typeof(expensCost))!=null 
           && expensItem!='' && expensCost!='' && expensItem.length<50) {
               console.log('done');
               appData.expenses[expensItem] = expensCost;
           } else {
               i--;
           }
}
}
//chooseExpenses();

function chooseOptExpenses(){
    for(let i=0; i<3; i++){
        let nameExpense = prompt("Input optional expense:");
        if(typeof(nameExpense)==='string' && (typeof(nameExpense))!=null 
            && nameExpense!='' && nameExpense.length<50){
                appData.optionalExpenses[i+1]=nameExpense;
            }
    }
}
chooseOptExpenses();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget/30).toFixed();
    alert("Budget for a day is " + appData.moneyPerDay);
}

function detectLevel(){
    if(appData.moneyPerDay<100){
        console.log("Min wealth");
    } else if(appData.moneyPerDay >=100 && appData.moneyPerDay <2000){
        console.log("middle");
    } else if(appData.log >= 2000) {
        console.log("Hight");
    
    } else {
        console.log("error input");
    }
}

function checkSavings(){
    if(appData.savings == true){
        let save = +prompt("Какова сумма накоплений"),
            percent = +prompt("Под какой процент");
        appData.monthIncome = save/100/12*percent;
        alert("Income in month:" + appData.monthIncome);
    }
}

//detectDayBudget();
//detectLevel();
//checkSavings();
 /// example circuit
let c = 4
function addX(x) {
    console.log("1"+x);}
  /*  if(n!=undefined){
    console.log("1"+n);
    }  */
  /*return function(n) {
    console.log("2"+x);
    console.log("2"+n);
     return n + x
  }
}
const addThree = addX(3)
let d = addThree(c)
console.log('example partial application', d);*/

