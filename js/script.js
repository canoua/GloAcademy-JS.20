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

