const start = function () {
	do {
		money = prompt('Ваш месячный доход?', 30000);
	} while (isNaN(money) || money.trim() === '' || money === null);

}
start();

const appData = {
	addExpenses: [],
	budget: money,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	expenses: {},
	targetMonth: 0,
	statusIncome: 0,
	deposit: false,
	mission: 30000,
	accumulatedMonth: 0,

	getBudget: function () {
		appData.budgetMonth = appData.budget - appData.expensesMonth;
		appData.budgetDay = Math.floor(appData.budgetMonth / 30);
	},
	getTargetMonth: function () {
		appData.mission = prompt('Сколько вы хотите накопить ?', 50000);
		appData.targetMonth = Number(appData.mission) / Number(appData.budgetMonth);
		if (appData.targetMonth > 0) {
			console.log('Цель будет достигнута за ' + Math.floor(appData.targetMonth) + ' месяц(a/ев)!');
		} else {
			console.log('Цель не будет достигнута(');
		}
	},
	getStatusIncome: function () {
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
	asking: function () {
		appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартира, коммуналка, еда, одежда');
		appData.deposit = confirm('Есть ли у вас депозит в банке');
		console.log(appData.addExpenses.toLowerCase().split(', '));
		const getExpensesMonth = function () {
			for (let i = 0; i < 2; i++) {
				exp = prompt('Введите обязательную статью расходов', 'квартира');
				let sum = 0;
				do{
					sum = prompt('Во сколько это обойдется', 10000);
				} 
				while(isNaN(sum));
				appData.expenses[exp] = +sum;
			}
		}
		getExpensesMonth();
	}
}


appData.asking();
appData.getBudget();
appData.getTargetMonth();
console.log('Бюджет на день: ' + appData.budgetDay);
console.log(appData.getStatusIncome());
console.log(appData.expenses);


for (let prop in appData) {
	console.log('Наша программа вкючает в себя данные ' + prop + " = " + appData[prop]);
}