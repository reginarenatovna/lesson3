'use strict';
 
let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?");
	time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
	while (isNaN(money) || money=="" || money == null) {
		money = +prompt("Ваш бюджет на месяц?");
	}
}
start ();
 
var appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true 
};

function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let expensesItem = prompt("Введите обязательную статью расходов в этом месяце");
		let expensesCost = prompt("Во сколько обойдется?");
		if ((typeof (expensesItem)) === 'string' && expensesItem != '' && expensesCost != '' &&
			expensesItem.length < 50 && expensesItem !== null && expensesCost !== null) {
			appData.expenses[expensesItem] = expensesCost;
		} else{
			while (expensesItem !== null && expensesCost !== null && expensesItem != '' && expensesCost != '') {
				expensesItem = prompt("Введите обязательную статью расходов в этом месяце");
				expensesCost = prompt("Во сколько обойдется?");
			}
		}	
	}
}
chooseExpenses();
 
function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed();
	alert("Ежедневный бюджет пользователя: " + appData.moneyPerDay);
}
detectDayBudget(); 
 
function detectLevel() {
if (appData.moneyPerDay < 1000) {
	console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 3000) {
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 3000) {
	console.log("Высокий уровень достатка");
} else {
	console.log("Произошла ошибка");
}
}

detectLevel();
var optionalExpenses = {};
function chooseOptExpenses(){
	for ( let i=1; i<4; i++) {
		let optional = prompt("Статья необязательных расходов?");
		optionalExpenses = {
		1: optional,
		2: optional,
		3: optional
	}
}
}
chooseOptExpenses();
console.log(optionalExpenses);
function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма накоплений?");
		let	percent = +prompt('Под какой процент ?');
		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
	}
}
checkSavings();