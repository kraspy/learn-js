// 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.
let btn1 = document.getElementById('btn1');
btn1.onclick = function () {
  let parent = this.closest('.row');
  let result = 0;
  let firstNumber = +parent.querySelector('#firstNumber').value;
  let lastNumber = +parent.querySelector('#lastNumber').value;
  let resultElement = parent.querySelector('.result');

  while (firstNumber <= lastNumber) {
    result += firstNumber;
    firstNumber++;
  }

  resultElement.textContent = result;
};

// 2. Запросить 2 числа и найти только наибольший общий
// делитель.
let btn2 = document.getElementById('btn2');
btn2.onclick = function () {
  let parent = this.closest('.row');
  let result = 0;
  let firstNumber = +parent.querySelector('#firstNumber').value;
  let lastNumber = +parent.querySelector('#lastNumber').value;
  let resultElement = parent.querySelector('.result');
  for (let i = 1; i < lastNumber; i++) {
    if (firstNumber % i === 0 && lastNumber % i === 0) {
      console.log(i);
      result = i;
    }
  }

  resultElement.textContent = result;
};

// 3. Запросить у пользователя число и вывести все делители
// этого числа.
let btn3 = document.getElementById('btn3');
btn3.onclick = function () {
  let parent = this.closest('.row');
  let result = [];
  let number = +parent.querySelector('#firstNumber').value;
  let resultElement = parent.querySelector('.result');

  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      result.push(i);
    }
  }

  resultElement.textContent = result.join(', ');
};

// 4. Определить количество цифр в введенном числе.
let btn4 = document.getElementById('btn4');
btn4.onclick = function () {
  let parent = this.closest('.row');
  let result = 0;
  let number = +parent.querySelector('#firstNumber').value;
  let resultElement = parent.querySelector('.result');

  while (number) {
    number = Math.floor((number /= 10));
    result++;
  }

  resultElement.textContent = result;
};

// 5. Запросить у пользователя 10 чисел и подсчитать, сколько
// он ввел положительных, отрицательных и нулей. При этом
// также посчитать, сколько четных и нечетных. Вывести
// статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
let btn5 = document.getElementById('btn5');
btn5.onclick = function () {
  let parent = this.closest('.row');
  let numbers = parent.querySelector('#numbers').value.split(' ');
  numbers.map((el) => +el);
  let resultElement = parent.querySelector('.result');

  let numbersStat = {
    isPositive: 0,
    isNegative: 0,
    isZero: 0,
    isOdd: 0,
    isEven: 0,
  };

  for (let el of numbers) {
    if (el > 0) {
      numbersStat['isPositive'] += 1;
    } else if (el < 0) {
      numbersStat['isNegative'] += 1;
    } else {
      numbersStat['isZero'] += 1;
    }
    if (el % 2 === 0) {
      numbersStat['isEven'] += 1;
    } else {
      numbersStat['isOdd'] += 1;
    }
  }

  resultElement.textContent = `Положительных: ${numbersStat['isPositive']}. Отрицательных: ${numbersStat['isNegative']}. Нулей: ${numbersStat['isZero']}. Четных: ${numbersStat['isEven']}. Нечетных: ${numbersStat['isOdd']}.`;
};

// 6. Зациклить калькулятор. Запросить у пользователя 2 числа
// и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример.
// И так до тех пор, пока пользователь не откажется.
let btn6 = document.getElementById('btn6');
btn6.onclick = function () {
  do {
    let firstNumber = +prompt('Введите первое число');
    let secondNumber = +prompt('Введите второе число');
    let sign = prompt('Введите знак');
    let result = 0;
    switch (sign) {
      case '+':
        result = firstNumber + secondNumber;
        break;
      case '-':
        result = firstNumber - secondNumber;
        break;
      case '*':
        result = firstNumber * secondNumber;
        break;
      case '/':
        result = firstNumber / secondNumber;
        break;
    }
    alert(`${firstNumber} ${sign} ${secondNumber} = ${result}`);
  } while (confirm('Решить еще один пример?'));
};

// 7. Запросить у пользователя число и на сколько цифр его
// сдвинуть. Сдвинуть цифры числа и вывести результат (если
// число 123456 сдвинуть на 2 цифры, то получится 345612).
let btn7 = document.getElementById('btn7');
btn7.onclick = function () {
  let parent = this.closest('.row');
  let number = parent.querySelector('#number').value.split('');
  let offset = +parent.querySelector('#offset').value;
  let resultElement = parent.querySelector('.result');

  while (offset > 0) {
    let firstDigit = number.shift();
    number.push(firstDigit);
    offset--;
  }

  resultElement.textContent = number.join('');
};

// 8. Зациклить вывод дней недели таким образом: «День недели.
// Хотите увидеть следующий день?» и так до тех пор, пока
// пользователь нажимает OK.
let btn8 = document.getElementById('btn8');
btn8.onclick = function () {
  let parent = this.closest('.row');
  let resultElement = parent.querySelector('.result');
  let currentDayIndex = 0;
  let daysOfWeek = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ];

  while (
    confirm(`*** ${daysOfWeek[currentDayIndex]} ***.\nПоказать следующий день?`)
  ) {
    currentDayIndex++;
    if (currentDayIndex >= daysOfWeek.length) {
      currentDayIndex = 0;
    }
  }
};

// 9. Вывести таблицу умножения для всех чисел от 2 до 9.
// Каждое число необходимо умножить на числа от 1 до 10.
let btn9 = document.getElementById('btn9');
btn9.onclick = function () {
  let parent = this.closest('.row');
  let resultElement = parent.querySelector('.result');

  let table = document.createElement('table');
  table.classList.add('u-full-width');
  table.style.fontFamily = 'Arial, sans-serif';
  table.style.fontSize = '10px';

  for (let i = 2; i <= 9; i++) {
    let row = document.createElement('tr');

    for (let j = 1; j <= 10; j++) {
      let cell = document.createElement('td');
      cell.style.textAlign = 'center';
      cell.textContent = `${i} * ${j} = ${i * j}`;

      row.append(cell);
    }
    table.append(row);
  }

  resultElement.append(table);
};

// 10. Игра «Угадай число». Предложить пользователю загадать
// число от 0 до 100 и отгадать его следующим способом:
// каждую итерацию цикла делите диапазон чисел пополам,
// записываете результат в N и спрашиваете у пользователя
// «Ваше число > N, < N или == N?». В зависимости от того
// что указал пользователь, уменьшаете диапазон. Начальный
// диапазон от 0 до 100, поделили пополам и получили 50.
// Если пользователь указал, что его число > 50, то изменили
// диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.
let btn10 = document.getElementById('btn10');
btn10.onclick = function () {
  let parent = this.closest('.row');
  let min = 1;
  let max = 100;
  let guessedNumber = 50;
  let resultElement = parent.querySelector('.result');

  function showResultText(number) {
    resultElement.textContent = `Is your number ${number}?`;
  }

  function getNextNumber(num, isMore) {
    if (isMore) {
      min = num + 1;
    } else {
      max = num - 1;
    }
    guessedNumber = Math.floor((min + max) / 2);
    console.log(min, max, guessedNumber);
    return guessedNumber;
  }

  let moreBtn = parent.querySelector('#moreBtn');
  moreBtn.addEventListener('click', function () {
    showResultText(getNextNumber(guessedNumber, true));
  });
  let lessBtn = parent.querySelector('#lessBtn');
  lessBtn.addEventListener('click', function () {
    showResultText(getNextNumber(guessedNumber, false));
  });
  let equalBtn = parent.querySelector('#equalBtn');
  equalBtn.addEventListener('click', function () {
    resultElement.textContent = `Your number is: ${guessedNumber}!`;
  });

  showResultText(guessedNumber);
};
