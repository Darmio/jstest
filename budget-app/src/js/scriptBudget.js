'use strict'

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn  = document.getElementsByTagName('button')[0],
    optionalExpensesBtn  = document.getElementsByTagName('button')[1],
    countBtn  = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    let arrBtn = document.getElementsByTagName('button');

    let money, item, time;

    function start(){
        money = +prompt("You budget for a momth?");
        time  = prompt("Input date in format YYYY-MM-DD");
        while(isNaN(money)||money == "" || money == null){
            money = +prompt("You budget for a momth?");  
        }
        appData.budget = money;
        appData.timeDate = time;
        budgetValue.textContent = money.toFixed();
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth()+1;
        dayValue.value = new Date(Date.parse(time)).getDate();
        activeBtn(true);

    }
    
    startBtn.addEventListener('click', start);
    expensesBtn.addEventListener('click', function(ev){appData.chooseExpenses(ev);});
    optionalExpensesBtn.addEventListener('click',function(ev){appData.chooseOptExpenses();});
    countBtn.addEventListener('click', function(ev){
        appData.moneyPerDay = ((appData.budget-expensesValue.textContent)/30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;
        if(appData.moneyPerDay<100){
            levelValue.textContent="Min wealth";
        } else if(appData.moneyPerDay >=100 && appData.moneyPerDay <2000){
            levelValue.textContent="middle";
        } else if(appData.log >= 2000) {
            levelValue.textContent="Hight";
        
        } else {
            levelValue.textContent="error input";
        }
    });

   incomeItem.addEventListener('change', function(){
       let item = incomeItem.value;
       appData.income = item.split(', ');
       incomeValue.textContent = appData.income;
   }); 

   checkSavings.addEventListener('click', function(){
     if(appData.savings ==true){
         appData.savings = false;
      } else {
          appData.savings = true;
      }  
    });

    sumValue.addEventListener('input', function(){
        if(appData.savings == true){
            let sum = +sumValue.value,
            percent = +percentValue.value;
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome  = sum/100*percent;
            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent  = appData.yearIncome.toFixed(1);
        }
    });

    percentValue.addEventListener('input', function(){
        if(appData.savings == true){
            let sum = +sumValue.value,
            percent = +percentValue.value;
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome  = sum/100*percent;
            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent  = appData.yearIncome.toFixed(1);
        }
    });

    function activeBtn(isAct){

        for(let i=0; i < arrBtn.length; i++){
            if(arrBtn[i] == startBtn) continue;
            arrBtn[i].disabled = !isAct; 
        }

    }

    activeBtn(false);
   // start();
    //ebugger;
    let appData  = {
        budget:money,
        timeDate:time,
        expenses:{},
        optionalExpenses:{},
        income:[],
        savings:false,
        chooseExpenses:function(ev){
            let sum=0;
            for(let i=0; i<expensesItem.length; i++){
                let expensItem = expensesItem[i].value,//prompt("Input expens item",''),
                    expensCost = expensesItem[++i].value;//prompt("Input cost of expenses",'');
                    if((typeof(expensItem))==='string' && (typeof(expensItem))!=null && (typeof(expensCost))!=null 
                       && expensItem!='' && expensCost!='' && expensItem.length<50) {
                           console.log('done');
                           appData.expenses[expensItem] = expensCost;
                           sum+= +expensCost;
                       } else {
                           i--;
                       }
              }
                expensesValue.textContent = sum;
        },
        chooseOptExpenses:function(){
            for(let i=0; i<optionalExpensesItem.length; i++){
                let nameExpense = optionalExpensesItem[i].value;//prompt("Input optional expense:");
                if(typeof(nameExpense)==='string' && (typeof(nameExpense))!=null 
                    && nameExpense!='' && nameExpense.length<50){
                        appData.optionalExpenses[i]=nameExpense;
                        optionalExpensesValue.textContent += appData.optionalExpenses[i]+' ';
                    }
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
    
  /*  appData.chooseIncome();
    console.log(appData.income.forEach(function(item,i,arr){
        alert((i+1)+'='+item+'(mas:'+arr+')');
    } ));
    
    for(let key in appData){
        alert("Our program income:");
        alert(key+'='+appData[key]);
        console.log(key+'='+appData[key]);
    }*/
    