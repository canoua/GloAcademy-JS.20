let money = 30000,
  income = 'Гитара',
  addExpenses = 'Коммуналка, проезд, одежда',
  deposit = true,
  mission = 100000,
  period = 6;

console.log('Тип данных переменной' + ' money - ' + typeof money + ',' + ' income - ' + typeof income + ',' + ' deposit - ' + typeof deposit);
console.log('Длина строки addExpenses: ' + addExpenses.length);
console.log('Период равен - ' + period + ' месяца.' + 'Цель заработать ' + mission + ' рублей.');

console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = money / 30;
console.log('Дневной бюджет: ' + budgetDay);