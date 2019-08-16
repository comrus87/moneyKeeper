"use strict";

const MONTH = 30;
let money, time;

function start () {
  money = +prompt('Ваш бюджет на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
};

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  income: [],
  savings: true,
  optionalExpenses: {},
  chooseExpenses: function () {
    for (let i=0; i < 2; i++) {
      let a = prompt('Введите обязательную статью расходов в этом месяце', '');
      let b = prompt('Во сколько обойдется?', '');
      if ( (typeof(a)) === 'string' && (typeof(b)) === 'string' && 
        (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b; 
      } else {
      console.log('error');
        i--;
      }
    };
  },

  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget/MONTH).toFixed();
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
  },

  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log('Cредний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
      console.log('Высокий уровень достатка');
    } else {
      console.log('Произошла какая-то ошибка');
    };
  },

  checkSavings: function () {
    if (appData.savings) {
    let save = +prompt('Какова сумма накоплений?', '');
    let percent = +prompt('Под какой процент?', '');

    appData.monthinCome = percent/100/12*percent;
    alert('Доход в месяц с вашего депозита: ' + appData.monthinCome);
    }
  },
  
  chooseOptExpenses: function () {
    for (let i = 1; i < 4; i++) {
      let article = prompt('Статья необязательных расходов?', '');
      appData.optionalExpenses[i] = article;
     };
  },

  chooseIncome: function () {
    let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
    if (typeof (items) != 'string' || items == '' || items == null) {
      console.log('Неверный формат');
    } else {
      appData.income = items.split(', ');
      appData.income.push(prompt('Может что-то еще?', ''));
      appData.income.sort();
    }
    appData.income.forEach(function (value, i) {
      alert('Способы доп. заработка: ' + (i+1) + ' ' + value);
    })
  }

};

  for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
  }
