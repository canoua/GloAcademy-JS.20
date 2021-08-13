
'use strict'

let start = document.getElementById('start'),
	 btnPlus = document.getElementsByTagName('button'),
	 incomePlus = btnPlus[0],
	 expensesPlus = btnPlus[1],
	 additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
	 depositCheck = document.querySelector('#deposit-check'),
	 budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
	 budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
	 expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
	 accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0],
	 additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
	 additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
	 incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
	 targetMonthValue = document.getElementsByClassName('target_month-value')[0],
	 salaryAmount = document.querySelector('.salary-amount'),
	 incomeAmount = document.querySelector('.income-amount'),
	 expensesTitle = document.querySelector('.expenses-title'),
	 expensesItems = document.querySelectorAll('.expenses-items'),
	 additionalExpenses = document.querySelector('.additional_expenses'),
	 targetAmount = document.querySelector('.target-amount'),
	 periodSelect = document.querySelector('.period-select'),
	 periodAmount = document.querySelector('.period-amount'),
	 additionalExpensesItem = document.querySelector('.additional_expenses-item'),
	 incomeItem = document.querySelectorAll('.income-items');


let appData = {
	addExpenses: [],
	budget: 0,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	expenses : {},
	income: {},
	incomeMonth: 0,
	addIncome: [],
	deposit: false,
	percentDeposit: 0,
	moneyDeposit: 0,
	start: function() {
		appData.getExpenses();
		appData.getIncome();
		appData.getExpensesMonth();
		appData.getBudget();
		appData.getAddExpenses();
		appData.getAddIncome();
		appData.getBudget();
		appData.showResult();
	},
	showResult: function() {
		budgetMonthValue.value = appData.budgetMonth;
		budgetDayValue.value = appData.budgetDay;
		expensesMonthValue.value = appData.expensesMonth;
		additionalExpensesValue.value = appData.addExpenses.join(', ');
		targetMonthValue.value = Math.ceil(appData.getTargetMonth());
		additionalIncomeValue.value = appData.addIncome.join(', ');
		incomePeriodValue.value = appData.calcPeriod();
	},
	addExpensesBlock: function() {
		let cloneExpensesItem = expensesItems[0].cloneNode(true);
		expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
		expensesItems = document.querySelectorAll('.expenses-items');
		if (expensesItems.length === 3) {
			expensesPlus.style.display = 'none';
		}
	},
	getExpenses: function(){
		expensesItems.forEach(function(item){
			let itemExpenses = item.querySelector('.expenses-title').value;
			let cashExpenses = item.querySelector('.expenses-amount').value;
			if (itemExpenses !== '' && cashExpenses !== '') {
				appData.expenses[itemExpenses] = cashExpenses;
			}
		})
	},
	getIncome: function() {
		for (let key in appData.income) {
			appData.incomeMonth += +appData.income[key];
		}
	},
	getAddExpenses: function() {
		let addExpenses = additionalExpensesItem.value.split(',');
		addExpenses.forEach(function(item) {
			item = item.trim();
			if (item !== '') {
				appData.addExpenses.push(item);
			}
		})
	},
	getAddIncome: function() {
		additionalIncomeItem.forEach(function(item) {
			let itemValue = item.value.trim();
			if (itemValue !== '') {
				appData.addIncome.push(itemValue);
			}
		});
	},
	getExpensesMonth : function() {
		for (let key in appData.expenses) {
			appData.expensesMonth += +appData.expenses[key];
		}
	},
	getBudget: function() {
		appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
		appData.budgetDay = Math.floor(appData.budgetMonth / 30);
	},
	getTargetMonth: function() {
		return targetAmount.value / appData.budgetMonth;
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
	getInfoDeposit: function() {
		if (appData.deposit) {
			do {
				appData.percentDeposit = prompt('Какой годовой процент по кредиту?', '10');
			} while (isNaN(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit  === null)
			do {
				appData.moneyDeposit = prompt('Какая сумма заложена?', '10000');
			} while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit  === null)
		}
	},
	calcPeriod: function() {
		return appData.budgetMonth * periodSelect.value;
	}
};
 if (salaryAmount !== '') {
 	start.addEventListener('click', appData.start);
 }

//4) Число под полоской (input type range) должно меняться в зависимости от позиции range, используем событие input.
let  eventFunc = function(event) {
	console.log(event.type);
	document.querySelector('.period-amount').textContent = event.target.value;
}
periodSelect.addEventListener('change', eventFunc);
///4)/

expensesPlus.addEventListener('click', appData.addExpensesBlock);
