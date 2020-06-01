'use strict'

let money = prompt("You budget for a momth?"),
    time  = prompt("Input date in format YYYY-MM-DD");


let appData  = {
    budget:money,
    timeDate:time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:false

}

for(let i=0; i<2; i++){
    let expensItem = prompt("Input expens item",''),
        expensCost = prompt("Input cost of expenses",'');
        if((typeof(expensItem))==='string' && (typeof(expensItem))!=null && (typeof(expensCost))!=null 
           && expensItem!='' && expensCost!='' && expensItem.length<50) {
               console.log('done');
               appData[expensItem] = expensCost;
           } else {
               i--;
               continue;
           }
}

appData.moneyPerDay = appData.budget/30;
alert("Budget for a day is " + appData.moneyPerDay);

if(appData.moneyPerDay<100){
    console.log("Min wealth");
} else if(appData.moneyPerDay >=100 && appData.moneyPerDay <2000){
    console.log("middle");
} else if(appData.log >= 2000) {
    console.log("Hight");

} else {
    console.log("error iinput");
}
 
