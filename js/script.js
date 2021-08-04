
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

const getExpensesMonth  = function(amount1, amount2) {
   return sum = Number(amount1) + Number(amount2);
}
const getAccumulatedMonth = function(money, sum) {
   return result = Number(money) - Number(sum);
}
const getTargetMonth = function(mission, accumulatedMonth) {
   return resultMission = Number(mission) / Number(accumulatedMonth);
}
const getStatusIncome = function(budgetDay) {
   if (budgetDay >= 1200) {
      return ('У вас высокий уровень дохода');
   } else if (budgetDay >= 600 || budgetDay < 1200) {
      return ('У вас средний уровень дохода');
   } else if (budgetDay < 600 || budgetDay >= 0) {
      return ('К сожалению у вас уровень дохода ниже среднего');
   } else if (budgetDay < 0) {
      return ('Что-то пошло не так(');
   }
}

console.log('Тип данных переменной ' + ' money - ' + typeof money + ','  + ' addExpenses - ' + typeof addExpenses + ','  + ' deposit - ' + typeof deposit + ','  + ' expenses1 - ' + typeof expenses1 + ','  + ' expenses2 - ' + typeof expenses2 + ','  + ' amount1 - ' + typeof amount1 + ','  + ' amount2 - ' + typeof amount2 + ','  + ' mission - ' + typeof mission);
console.log(addExpenses.toLowerCase().split(', ')); 
console.log('1.Функция возвращает сумму всех обязательных расходов за месяц - ' + getExpensesMonth(amount1, amount2));
console.log('2.Функция возвращает накопления за месяц (Доходы минус расходы) - ' + getAccumulatedMonth(money, sum)) ;
console.log('За ' + Math.ceil(getTargetMonth(mission, getAccumulatedMonth(money, sum))) + ' месяц(а) будет достигнута цель');
console.log('Бюджет на день : ' + budgetDay);
console.log(getStatusIncome(budgetDay));