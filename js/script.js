const start = function() {
	do{
		money = prompt('Ваш месячный доход?');
	} while(isNaN(money) || money.trim() === '' || money === null);

}
start();

let appData = {
	addExpenses: [],
	budget: money,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	expenses : {},
	targetMonth: 0,
	statusIncome: 0,
	deposit: false,
	mission: 30000,
	amount1: 0,
	amount2: 0,
	expenses1: "",
	expenses2: "",
	accumulatedMonth: 0,
	getAmounts : function() {
		appData.expenses1 = prompt('Введите обязательную статью расходов?');
		appData.expenses2 = prompt('Введите обязательную статью расходов?');
		do{
			appData.amount1 = prompt('Во сколько это обойдется?')
		} while(isNaN(appData.amount1) || appData.amount1.trim() === '' || appData.amount1 === null);
		do{
			appData.amount2 = prompt('Во сколько это обойдется?')
		} while(isNaN(appData.amount2) || appData.amount2.trim() === '' || appData.amount2 === null);
		appData.expenses[appData.expenses1] = appData.amount1;
		appData.expenses[appData.expenses2] = appData.amount2;
	},
	getExpensesMonth : function() {
		for (let prop in appData) {
			if( appData.hasOwnProperty( prop ) ) {
				appData.expensesMonth = Number(appData.amount1) + Number(appData.amount2);
			}
		}
	},
	getBudget: function() {
		appData.budgetMonth = appData.budget - appData.expensesMonth;
		appData.budgetDay = Math.floor(appData.budgetMonth / 30);
	},
	getTargetMonth: function() {
		appData.mission = prompt('Сколько вы хотите накопить ?');
		appData.targetMonth = Number(appData.mission) / Number(appData.budgetMonth);
		if (appData.targetMonth > 0) {
			console.log('Цель будет достигнута за ' + Math.floor(appData.targetMonth) + ' месяца!' );
		} else {
			console.log('Цель не будет достигнута(');
		}
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
	asking: function() {
		appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
		appData.deposit = confirm('Есть ли у вас депозит в банке');
		console.log(appData.addExpenses.toLowerCase().split(', '));
	}
}

appData;
appData.asking();
appData.getAmounts();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
console.log('Бюджет на день' + appData.budgetDay);


console.log(appData.getStatusIncome());
for (let prop in appData) {
	console.log('Наша программа вкючает в себя данные ' + prop + " = " + appData[prop]);
}