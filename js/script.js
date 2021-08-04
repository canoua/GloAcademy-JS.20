//		1) Переписать функцию start циклом do while
//		2) Добавить проверку что введённые данные являются числом, которые мы получаем на вопрос 'Во сколько это 		обойдется?’ в функции  getExpensesMonth
//		3) Если getTargetMonth возвращает нам отрицательное значение, то вместо “Цель будет достигнута” необходимо выводить “Цель не будет достигнута”


const start = function() {
	do{
		money = prompt('Ваш месячный доход?');
	} while(isNaN(money) || money.trim() === '' || money === null);
}
start();

const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
	deposit = confirm('Есть ли у вас депозит в банке');

const getAmounts = function() {
	const expenses1 = prompt('Введите обязательную статью расходов?');
	
	do{
		amount1 = prompt('Во сколько это обойдется?')
	} while(isNaN(amount1) || amount1.trim() === '' || amount1 === null);
	const expenses2 = prompt('Введите обязательную статью расходов?');

	do{
		amount2 = prompt('Во сколько это обойдется?')
	} while(isNaN(amount2) || amount2.trim() === '' || amount2 === null);
}

getAmounts();

const mission = prompt('Сколько вы хотите накопить ?');

console.log('Тип данных переменной ' + ' money - ' + typeof money + ','  + ' addExpenses - ' + typeof addExpenses + ','  + ' deposit - ' + typeof deposit + ','  + ' expenses1 - ' + typeof expenses1 + ','  + ' expenses2 - ' + typeof expenses2 + ','  + ' amount1 - ' + typeof amount1 + ','  + ' amount2 - ' + typeof amount2 + ','  + ' mission - ' + typeof mission);
console.log(addExpenses.toLowerCase().split(', ')); 

const getExpensesMonth  = function(amount1, amount2) {
	return sum = Number(amount1) + Number(amount2);
}
console.log('1.Функция возвращает сумму всех обязательных расходов за месяц - ' + getExpensesMonth(amount1, amount2));

const getAccumulatedMonth = function(money, sum) {
	return result = Number(money) - Number(sum);
}
console.log('2.Функция возвращает накопления за месяц (Доходы минус расходы) - ' + getAccumulatedMonth(money, sum)) ;

const accumulatedMonth = getAccumulatedMonth(money, sum);
const budgetDay = accumulatedMonth / 30;

const getTargetMonth =  function() {
	let resultMission = Number(mission) / Number(accumulatedMonth);
	if (resultMission > 0) {
		return ('Цель будет достигнута');
	} else {
		return ('Цель не будет достигнута');
	}
}

console.log(getTargetMonth());

console.log('Бюджет на день : ' + Math.round(budgetDay));

const getStatusIncome = function() {
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

console.log(getStatusIncome());

