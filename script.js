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
//ebugger;
let appData  = {
    budget:money,
    timeDate:time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:true,
    chooseExpenses:function(){
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
    },
    chooseOptExpenses:function(){
        for(let i=0; i<3; i++){
            let nameExpense = prompt("Input optional expense:");
            if(typeof(nameExpense)==='string' && (typeof(nameExpense))!=null 
                && nameExpense!='' && nameExpense.length<50){
                    appData.optionalExpenses[i+1]=nameExpense;
                }
        }
    },
    detectDayBudget:function(){
        appData.moneyPerDay = (appData.budget/30).toFixed();
        alert("Budget for a day is " + appData.moneyPerDay);
    },
    detectLevel : function(){
        if(appData.moneyPerDay<100){
            console.log("Min wealth");
        } else if(appData.moneyPerDay >=100 && appData.moneyPerDay <2000){
            console.log("middle");
        } else if(appData.log >= 2000) {
            console.log("Hight");
        
        } else {
            console.log("error input");
        }
    },
    checkSavings : function(){
        if(appData.savings == true){
            let save = +prompt("Какова сумма накоплений"),
                percent = +prompt("Под какой процент");
            appData.monthIncome = save/100/12*percent;
            alert("Income in month:" + appData.monthIncome);
        }
    },
    chooseIncome : function() {
        let item = prompt("Что принесет доп доход? (перечислите через запятую)", '');
        appData.income = item.split(', ');
        let dopInc;
        do {
            dopInc = prompt("еще доп");
        }while(typeof(dopInc)!=='string' || dopInc=='' || dopInc==null)
        appData.income.push(dopInc);
        appData.income.sort();
    }
}

appData.chooseIncome();
console.log(appData.income.forEach(function(item,i,arr){
    alert((i+1)+'='+item+'(mas:'+arr+')');
} ));

for(let key in appData){
    alert("Our program income:");
    alert(key+'='+appData[key]);
    console.log(key+'='+appData[key]);
}


///________________HTML___________________
let box = document.getElementById('box'),
   circ = document.getElementsByClassName('circle');
    btn  = document.getElementsByTagName('button');
    hear = document.querySelectorAll('.wrapper .heart');
    oneHeart = document.querySelector('.heart');
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

