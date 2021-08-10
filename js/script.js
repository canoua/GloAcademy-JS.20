
const start = function() {
		do{
			money = prompt('Ваш месячный доход?', 30000);
		} while(isNaN(money) || money.trim() === '' || money === null);

	}
start();

const appData = {
	addExpenses: [],
	budget: money,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	expenses : {},
	income: {},
	addIncome: [],
	deposit: false,
	percentDeposit: 0,
	moneyDeposit: 0,
	mission: 30000,
	period: 3,

	asking: function() {
		if (confirm('Есть ли у вас дополнительный заработок?')) {
			let itemIncome;
			do{
				itemIncome = prompt('Какой у вас ест дополнительный заработок?', 'таксую');
			} while (!isNaN(itemIncome) || itemIncome === '' || itemIncome  === null)
			let cashIncome;
			do {
				cashIncome = prompt('Сколько в месяц на это зарабатываете', '10000');
			} while (isNaN(cashIncome) || cashIncome === '' || cashIncome  === null)
			appData.income[itemIncome] = cashIncome;
		}

		let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
		appData.deposit = confirm('Есть ли у вас депозит в банке');
		if (appData.deposit) {
			do {
				appData.percentDeposit = prompt('Какой годовой процент по кредиту?', '10');
			} while (isNaN(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit  === null)
			do {
				appData.moneyDeposit = prompt('Какая сумма заложена?', '10000');
			} while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit  === null)
		}
		appData.addExpenses = addExpenses.toLowerCase().split(', ');
		for(let i = 0; i < 2; i++) {
			let itemExpenses;
			do {
				itemExpenses = prompt('Введите обязательную статью расходов?', "Садик государственный");
			} while (!isNaN(itemExpenses) || itemExpenses === '' || itemExpenses  === null)
			let cashExpenses;
			do {
				cashExpenses = prompt('Во сколько это обойдется?', 2500);
			}
			while (isNaN(cashExpenses) || cashExpenses === '' || cashExpenses  === null);
			appData.expenses[itemExpenses] = cashExpenses;
		}
	},

	getExpensesMonth : function() {
		for (let key in appData.expenses) {
			appData.expensesMonth += +appData.expenses[key];
		}
	},
	getBudget: function() {
		appData.budgetMonth = appData.budget - appData.expensesMonth;
		appData.budgetDay = Math.floor(appData.budgetMonth / 30);
	},
	getTargetMonth: function() {
		return appData.mission / appData.budgetMonth;
	},
	getStatusIncome: function() {
		if (appData.budgetDay >= 1200) {
			return ('У вас высокий уровень дохода');
		} else if (appData.budgetDay >= 600 || appData.budgetDay < 1200) {
			return ('У вас средний уровень дохода');
		} else if (appData.budgetDay < 600 || appData.budgetDay >= 0) {
			return ('К сожалению у вас уровень дохода ниже среднего');
		} else if (appData.budgetDay < 0) {
			return ('Что-то пошло не так(');
		}
	},
	calcSavedMoney: function() {
		return appData.budgetMonth * appData.period;
	}
}
appData.asking();
appData.getExpensesMonth();
appData.getBudget();

console.log('Расходы за месяц: ' + appData.expensesMonth);

if (appData.getTargetMonth() > 0) {
	console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяца');
} else {
	console.log('Цель не будет достигнута');
}

console.log(appData.getStatusIncome());

for (let key in appData) {
	console.log('Наша программа вкючает в себя данные ' + key + " - " + appData[key]);
}

for (let key in appData.addExpenses) {
	let string = appData.addExpenses[key];
	string = string.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
	console.log(string);
}



const btnStart = document.getElementById('start'),
	btnPlus1 = document.getElementsByTagName('button')[0],
	btnPlus2 = document.getElementsByTagName('button')[1],
	depositCheck = document.querySelector('#deposit-check'),
	additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
	budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
	expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
	additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
	additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
	incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
	targetMonthValue = document.getElementsByClassName('target_month-value')[0],
	salaryAmount = document.querySelector('.salary-amount'),
	incomeAmount = document.querySelector('.income-amount'),
	expensesAmount = document.querySelector('.expenses-amount'),
	additionalExpensesItem = document.querySelector('.additional_expenses-item'),
	targetAmount = document.querySelector('.target-amount'),
	periodSelect = document.querySelector('.period-select');
	


console.log(btnStart);
console.log(btnPlus1);
console.log(btnPlus2);
console.log(depositCheck);
console.log(additionalIncomeItem);
console.log(budgetDayValue);
console.log(expensesMonthValue);
console.log(additionalIncomeValue);
console.log(additionalExpensesValue);
console.log(incomePeriodValue);
console.log(targetMonthValue);
console.log(salaryAmount);
console.log(incomeAmount);
console.log(expensesAmount);
console.log(additionalExpensesItem);
console.log(targetAmount);
console.log(periodSelect);