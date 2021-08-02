
const money = prompt('Ваш месячный доход'),
	 		addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
 			deposit = confirm('Есть ли у вас депозит в банке'),
			expenses1 = prompt('Введите обязательную статью расходов?'),
			amount1 = prompt('Во сколько это обойдется?'),
			expenses2 = prompt('Введите обязательную статью расходов?'),
			amount2 = prompt('Во сколько это обойдется?'),
			budgetMonth = money - amount1 - amount2,
			mission = 15000 / budgetMonth,
			budgetDay = budgetMonth / 30;


console.log('Ваш месячный доход: ' + money);
console.log('Возможные расходы за рассчитываемый период: ' + addExpenses);
console.log('Депозит: ' + deposit);
console.log('Обязательный расход 1 : ' + expenses1);
console.log('Обязательный расход 2 : ' + expenses2);
console.log('Обязательные траты 1 : ' + amount1);
console.log('Обязательные траты 2 : ' + amount2);
console.log('Бюджет за месяц: ' + budgetMonth);
console.log('Через ' + (Math.ceil(mission)) + ' месяц(а) я достигну своей цели')
console.log('Дневной бюджет: ' + budgetDay);


if (budgetDay >= 1200) {
	console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600 || budgetDay < 1200) {
	console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 || budgetDay >= 0) {
	console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
	console.log('Что-то пошло не так(');
}