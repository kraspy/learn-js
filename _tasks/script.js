//#region 1.1
// 1. Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
function numberAnalyze(num) {
  if (num < 0) {
    return "Число отрицательное";
  } else if (num > 0) {
    return "Число положительное";
  } else {
    return "Число == 0";
  }
}

console.log(numberAnalyze(10));

// 2. Дана строка. Выведите в консоль длину этой строки.
function stringWide(str) {
  return str.length;
}

console.log(stringWide("abcde"));

// 3. Дана строка. Выведите в консоль последний символ строки.
function lastSymbol(str) {
  return str.at(-1);
}
console.log(lastSymbol("abcde"));

// 4. Дано число. Проверьте, четное оно или нет.
function evenOrOdd(num) {
  return num % 2 == 0 ? "Четное" : "Не четное";
}
console.log(evenOrOdd(10));

// 5. Даны два слова. Проверьте, что первые буквы этих слов совпадают.
let word1 = "слово";
let word2 = "слово";

function compareFirstSymbol(word1, word2) {
  return word1[0] === word1[0];
}
console.log(compareFirstSymbol("слово", "слово"));

// 6. Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
function getConditionSymbol(word) {
  return word[word.length - 1] === "ь"
    ? word[word.length - 2]
    : word[word.length - 1];
}
console.log(getConditionSymbol("словь"));

//#endregion 1.1

//#region 1.2
// 1. Дано число. Выведите в консоль первую цифру этого числа.
function getFirstDigit(num) {
  return Number(String(num)[0]);
}
console.log(getFirstDigit(567));

// 2. Дано число. Выведите в консоль последнюю цифру этого числа.
function getLastDigit(num) {
  let numToStr = String(num);
  return +numToStr[numToStr.length - 1];
}
console.log(getLastDigit(567));

// 3. Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
function sum(num) {
  return getFirstDigit(num) + getLastDigit(num);
}
console.log(sum(567));

// 4. Дано число. Выведите количество цифр в этом числе.
function getCountDigit(num) {
  return String(num).length;
}
console.log(getCountDigit(567));

// 5. Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
function compareTwoNumbers(num1, num2) {
  return getFirstDigit(num1) === getFirstDigit(num2);
}
console.log(compareTwoNumbers(50, 500));

//#endregion 1.2

//#region 1.3
// 1. Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
function getConditionSymb(str) {
  if (str.length > 1) {
    return str.at(-2);
  } else {
    return "В строке должно быть больше 1 символа";
  }
}
console.log(getConditionSymb("abc"));

// 2. Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
function divideTwoNumbers(num1, num2) {
  return num1 % num2 == 0 ? "Делится без остатка" : "Есть остаток";
}
console.log(divideTwoNumbers(10, 3));

//#endregion 1.3

//#region 1.4
function showNumbersList(num1, num2, isOdd, divisor) {
  let result = "";
  if (num1 < num2) {
    while (num1 <= num2) {
      if (num1 % divisor != 0 && isOdd) {
        num1++;
        continue;
      }
      result += `${num1}, `;
      num1++;
    }
  } else {
    while (num1 >= num2) {
      if (num1 % divisor != 0 && isOdd) {
        num1--;
        continue;
      }
      result += `${num1}, `;
      num1--;
    }
  }

  return result;
}

// 1. Выведите в консоль все целые числа от 1 до 100.
console.log(showNumbersList(1, 100, false));

// 2. Выведите в консоль все целые числа от -100 до 0.
console.log(showNumbersList(-100, 0, false));

// 3. Выведите в консоль все целые числа от 100 до 1.
console.log(showNumbersList(100, 1, false));

// 4. Выведите в консоль все четные числа из промежутка от 1 до 100.
console.log(showNumbersList(1, 100, true, 2));

// 5. Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
console.log(showNumbersList(1, 100, true, 3));

//#endregion 1.4

//#region 1.5
// 1. Найдите сумму всех целых чисел от 1 до 100.
function sumDigits(from, to) {
  let result = 0;
  while (from <= to) {
    result += from;
    from++;
  }
  return result;
}
console.log(sumDigits(1, 100));

// 2. Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
function sumEvenDigits(from, to) {
  let result = 0;
  while (from <= to) {
    if (from % 2 == 0) {
      result += from;
      from++;
    } else {
      from++;
    }
  }
  return result;
}
console.log(sumEvenDigits(1, 100));

// 3. Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
function sumOddDigits(from, to) {
  let result = 0;
  while (from <= to) {
    if (from % 2 != 0) {
      result += from;
      from++;
    } else {
      from++;
    }
  }
  return result;
}
console.log(sumOddDigits(1, 100));

// 4. Даны два целых числа. Найдите остаток от деления первого числа на второе.
function reminderFromDivision(num1, num2) {
  return num1 % num2;
}
console.log(reminderFromDivision(10, 2));

// 5. Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
function showCharsFromEndOfString(str) {
  return str.split("").reverse().join("");
}

console.log(showCharsFromEndOfString("Пример строки"));

//#endregion 1.5

//#region 1.6
// 1. Дан массив с числами. Найдите сумму квадратов элементов этого массива.
function sumDoubleElementsFromArray(arr) {
  return arr.reduce((acc, cur) => acc + cur ** 2);
}
console.log(sumDoubleElementsFromArray([1, 2, 3, 4, 5]));

// 2. Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
function sumSqrtElementsFromArray(arr) {
  return arr.reduce((acc, cur) => acc + Math.sqrt(cur));
}
console.log(sumSqrtElementsFromArray([1, 2, 3, 4, 5]));

// 3. Дан массив с числами. Найдите сумму положительных элементов этого массива.
function sumPositiveElementsFromArray(arr) {
  return arr.reduce((acc, cur) => (cur > 0 ? acc + cur : acc));
}
console.log(sumPositiveElementsFromArray([1, -2, 3, -4, 5]));

// 4. Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
function sumPositiveOrLessThen10FromArray(arr) {
  return arr.reduce((acc, cur) => (cur > 0 && cur < 10 ? acc + cur : acc));
}
console.log(sumPositiveOrLessThen10FromArray([1, -2, 3, -4, 5, 1, 20]));

//#endregion 1.6

//#region 1.7
// 1. Дана строка: 'abcde'. Получите массив букв этой строки.
function strToArr(str) {
  return str.split("").filter((char) => /[^\s]/.test(char));
}

console.log(strToArr("строка каких-то  слов"));

// 2. Дано некоторое число: 12345. Получите массив цифр этого числа.
function numToArr(num) {
  return String(num)
    .split("")
    .map((el) => +el);
}
console.log(numToArr(12345));

// 3. Дано некоторое число: 12345. Переверните его: 54321
function reverseNumber(num) {
  return +String(num).split("").reverse().join("");
}
console.log(reverseNumber(12345));

// 4. Дано некоторое число: 12345. Найдите сумму цифр этого числа.
function sumDigitsFromNumber(num) {
  return +String(num)
    .split("")
    .reduce((acc, cur) => +acc + +cur);
}
console.log(sumDigitsFromNumber(12345));

//#endregion 1.7

//#region 1.8
// 1. Заполните массив целыми числами от 1 до 10.
function createArrayOfNumbers(from, to, arr = []) {
  while (from <= to) {
    arr.push(from);
    from++;
  }
  return arr;
}

console.log(createArrayOfNumbers(1, 10));

// 2. Заполните массив четными числами из промежутка от 1 до 100.
function createArrayOfEvenNumbers(from, to, arr = []) {
  while (from <= to) {
    if (from % 2 == 0) {
      arr.push(from);
      from++;
    }
    from++;
  }
  return arr;
}

console.log(createArrayOfEvenNumbers(1, 10));

// 3. Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34]. Округлите эти дроби до одного знака в дробной части.
function roundNumberFromArr(arr) {
  return arr.map((el) => el.toFixed(2));
}

console.log(roundNumberFromArr([1.456, 2.125, 3.32, 4.1, 5.34]));

//#endregion 1.8

//#region 1.9

// 1. Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
function matchStringsStartsWithFromArray(arr) {
  return arr.filter((el) => el.startsWith("http://"));
}
console.log(
  matchStringsStartsWithFromArray([
    "https://my.ru",
    "http://my.ru",
    "ftp://192.168.0.1",
    "http://ya.ru",
  ])
);

// 2. Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
function matchStringsEndsWithFromArray(arr) {
  return arr.filter((el) => el.endsWith(".html"));
}
console.log(
  matchStringsEndsWithFromArray([
    "https://my.ru/index.html",
    "http://my.ru/index.php",
    "ftp://192.168.0.1/file.jpg",
    "http://ya.ru/index.html",
  ])
);

// 3. Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
function increaseNumbersFromArray(arr) {
  return arr.map((el) => el * 1.1);
}
console.log(increaseNumbersFromArray([1, 2, 3, 4, 5]));

//#endregion 1.9

//#region 1.10
// 1. Заполните массив случайными числами из промежутка от 1 до 100.
function fillRandomNumbersToArray(qty) {
  let result = [];
  for (let i = 0; i < qty; i++) {
    result.push(Math.floor(Math.random() * 100) + 1);
  }

  return result;
}

console.log(fillRandomNumbersToArray(5));

// 2. Дано некоторое число: 12345. Выведите в консоль все его символы с конца.
function showEachDigitOfNumberFromEnd(num) {
  let lastNum = 0;
  let result = "";
  while (num > 0) {
    lastNum = num % 10;
    num = Math.floor(num / 10);
    result += lastNum;
  }
  return result;
}
console.log(showEachDigitOfNumberFromEnd(12345));

// 3. Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6].
// По очереди выведите в консоль подмассивы из двух элементов нашего массива: [1, 2], [3, 4], [5, 6]
function coupleElementsFromArray(arr) {
  let newArr = [];
  for (let i = 0; i <= arr.length; i++) {
    let tmpArr = [];
    for (let j = 0; j < 2; j++) {
      tmpArr.push(arr.shift());
    }
    newArr.push(tmpArr);
  }
  return newArr;
}

console.log(coupleElementsFromArray([1, 2, 3, 4, 5, 6]));

// 4. Даны два массива: let arr1 = [1, 2, 3]; let arr2 = [4, 5, 6]; Слейте эти массивы в новый массив: [1, 2, 3, 4, 5, 6]
function concatArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log(concatArrays([1, 2, 3], [4, 5, 6]));

//#endregion 1.10

//#region 2.1

// 1. Дана некоторая строка. Найдите позицию первого нуля в строке.
function searchSymbolInString(str, char) {
  return str.indexOf(char);
}
console.log(searchSymbolInString("abc0def0", "0"));

// 2. Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
function showNumberBySum(start, end) {
  let result = "";
  for (; start < end; start++) {
    if (start + (start + 1) === 5) {
      result += start;
    }
  }
  return result;
}
console.log(showNumberBySum(1, 1000));

// 3. Дан массив. Удалите из него элементы с заданным значением.

// 4. Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]. Найдите сумму первой половины элементов этого массива.

//#endregion 2.1
