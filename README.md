# Конспект "JavaScript - Полный Курс JavaScript Для Начинающих [11 ЧАСОВ]" от Богдана Стащука

## От автора конспекта

<ins>Прошел курс</ins> за 42 помодорки (17,5 часов). В прохождение входило: просмотр видеокурса, выполнение примеров из курса и конспектирование.

<ins>Пройдены все темы</ins>, но начиная с темы "Промисы" начались сложности, так как до этого данные темы не проходил.

<ins>Основная цель прохождения курса</ins> - повторение уже изученного материала.

<ins>Цель написания конспекта</ins> - упражнение для более быстрого включения в учебный процесс b практика работы с разметкой Markdown.

_Надеюсь, конспект пригодится мне в случае перепрохождения видеокурса или кому-либо, если понадобится текстовый вариант курса._
<br>



## Самое важно в JS:

+ выражения
+ функции
+ объекты


 ```js
 consol.log('Войти в IT к 30');
 ```

+ console - объект;
+ log (dir, table и тд) - метод (функция значение одного из свойств объекта);
+ . - точечная запись (получение доступа к свойствам объекта);
+ () - вызов метода;
+ 'Войти в IT к 30' - аргумент;
<br>
<br>

## Выражения
Всегда возвращает значение (результат выражения)

Выражение присваивания **=** 

 ```js
 a = 10;
 ```

Выражения с побочными действиями - не только возвращает значения, но и выполняет другие действия.

> `a = 5;` - вернет значение и присвоит значение переменной;
> 
> `b++;` - вернет значение и увеличит значение на 1;
> 
> `myFunction(c, d);` - внутри функции происходят побочные действия, помимо возврата значения.

## Переменные
Дают возможность повторного доступа к значения
>коробка в которую можно что-то поместить, дать этой коробке имя и в дальнейшем обратиться к значению, распаковать, поменять содержимое, выполнить какое-то действие

## Имена переменных и стили написания

**НАЗВАНИЕ ПЕРЕМЕННЫХ ДОЛЖНО БЫТЬ ПОНЯТНО!**


### Cтил написания:
+ PascalCase - именование переменной начинается с заглавной буквы как и последующие слова (без пробелов). Используются для именования типов и классов в JS;

+ SCREAMING_SNAKE_CASE - все символы заглавные, вместо пробела используется _ . Применяется для именования переменной, значение которой известны до запуска приложения и не меняются (const);

+ сamelCase - каждое слово в переменной пишется с заглавной буквы, кроме первого. Используется во всех остальных случаях, помимо вышеуказанных.

## Объявление переменных

> let a
>
> ключевое слово и имя переменной
>

С помощью ключевого слова даем инструкицю интерпретатору JS создать переменную.

>  ```js
> const c = 10;
> ```
>
Объявление переменной и присваивание значения.
>  ```js
> a = true;
> ```

Присваивание (переназначение).


+ let - можно переназначить, переприсвоить. Можно не присваивать значение, в таком случае значение будет undefined;

+ const - нельзя переназначить. Обязательно сразу присвоить значение.

+ var - ключевое слово до ES6

## Типы

+ ### Примитивные типы
  1. string (строка)
  2. number (число)
  3. boolean (логический)
  4. undefined
  5. null
  6. symbol (символ)

+ ### Ссылочный тип
  + object (объект)
  > *Переменная содержит ссылку на область в мамяти где находится объект*

## Динамическая типизация

JS - динамически типизируемый язык. Тип переменной не указывается, когда она объявляется.

Правила работы с переменными:
1. Все переменные объявлять перед их использованием
2. Стараться использовать const везде, где это возможно

## Объекты

Объект - набор свойств - *ключ: значение*.


Порядок св-в не имеет значения.


Метод - св-во объекта, которое является функцией.



## Добавление свойств

1. Точечная запись (Dot notation)

>  ```js
> obj.new-property = true;
> ```

2. Скобочная запись (Bracket notation)

>  ```js
> obj['new-property'] = true;
> ```
>
Новое св-во обязательно в кавычках ' ', в виде строки.

Такой синтаксис применим, если необходимо задать ключ свойства объекта, значением переменной.

   ```js
   let nameVariable = 'new-property';
   ```

  ```js
  obj[nameVariable] = true;
  ```

 В итоге, в объекте появится свойство:
   ```js
   new-property: true,
   ```


## Удаление свойств

 ```js
 delete obj.new-property // при помощи оператора delete
 ```

## Вложенные свойства

 ```js
const myCity = {
  city: 'New York',
  info: {
    isPopular: true,
    country: 'USA',
  },
  street: 'Lenina',
};
```
Чтобы получить значение свойства с ключом `isPopular`

> `console.log(myCity.info.isPopular);`

Можно комбенировать записи:
> `delete myCity.info['isPopular'];`
>
Такую запись лучше использовать когда в [ ] какое-то выражение, например название переменной

## Сокращенный формат записи свойств

Когда используются переменные в формировании объекта и название переменной совпадает с названием ключа свойства объекта, то

 ```js
const name = 'Bogdan';
const postsQty =23;

const userProfile = {
  name: name,
  postsQty: postsQty,
  hasSignedAgreement: false,
};
```
Сокращенный вариант
 ```js
const userProfile = {
  name,
  postsQty,
  hasSignedAgreement: false,
};
```

Сокращенные свойства рекомендуется размещать в начале объекта

## Глобальные Объекты

> window - веб браузеры

> global - Node.js

> globalThis - унифицированный глобальный объекта


### Свойства глобальных объектов

consol

window.consol

global.console

## Методы объекта

Метод - свойство объекта, значение которого - функция

 ```js
const myCity = {
  city: 'New York',
  cityGreeting: function () {
    console.log('Greetings!!!');
  }
};

```
> myCity.cityGreeting(); // вызов метода cityGreeting


 ```js
const myCity = {
  city: 'New York',
  cityGreeting() {
    console.log('Greetings!!!');
  }
};

myCity.cityGreeting();
```
> Если значение свойства функция - можно убирать ключевое слово function и ставить круглые скопки после названия свойства, без двоеточия


Метод вызывается со скобками, свойство - без.

`myCity.cityGreeting();` - метод
`myCity.cityGreeting;` - свойство

## JSON
#### JAVASCRIPT OBJECT NOTATION

Формат обмена данными

Набор свойства в двойных кавфчках, разных типов. Передаётся в виде строки.

Конвертация JSON в JS объект (распарсить)
> `JSON.parse(аргумент)`

Конвертация JS объекта в  JSON
> `JSON.stringify(аргумент)`

## Мутация в JS

Копирование примитивных типов происходит по значению (copy by value)

Копирование ссылочного типа (copy by reference) - меняется исходный объект

## Как избежать мутаций
1. Метод assign (не работает на вложенные объекты)

 ```js
const person = {
  name: 'Bob',
  age: 25,
};

const person2 = Object.assign({}, person);
person2.favoriteСolor = 'black';
```
2. Spread syntax - оператор разделения объекта на свойства (не работает на вложенные объекты)

 ```js
const person = {
  name: 'Bob',
  age: 25,
};

const person2 = {...person};
person2.favoriteСolor = 'black';
```

3. JSON.parse - JSON.stringify

 ```js
const person = {
  name: 'Bob',
  age: 25,
  favoriteСolor: {
    oneColor: 'black',
    twoColor: 'green',},
};

const person2 = JSON.parse(JSON.stringify(person));
person2.favoriteСolor.oneColor = 'blue';
```
## Функции

_Блок кода, который можно выполнять многократно_

### Функция может быть:

+ именованной;
+ анонимной;
+ присвоенна переменной;
+ аргументом при вызове другой функции;
+ значение свойства объекта (методом)

## Структура функции

 ```js
function myFN(a, b) {
  return a + b;
}

console.log(sum(3, 11));
```

`function` - ключевое слово

`myFN` - имя функции

`(a, b)` - параметры, ведут себя как переменные. Значения определяются в момент вызова функции.

`{...}` - тело функции

`return` - возвращение результата. После инструкции с ключевым словом return - функция прекращает выполнение дальнейших инструкций. Если нет return, то возвращает undefined

`sum(3, 11)` - вызов функции с аргументами

## Передача значения по ссылке

## Колбэк функции
Функция вызывается внутри другой функции

 ```js
function anotherFunction() {
  console.log('Hola');
}

function fnWithCallback(callbackFunction) {
  callbackFunction();
}

fnWithCallback(anotherFunction);
```

## Правила работы с функциями

1. Называйте функции исходя из выполняемых задач
2. Одна задача- одна функция (single properts)
3. Не рекомендуется изменять внешние относительно функции переменные (pure function)

## Области видимости
_Определяет границы действия переменной_

+ Глобальные переменные (window, global, новые переменные)
+ Локальные переменные

## Типы области видимости

1. Глобальная область видимости
2. Область видимости функции
3. Область видимости блока (любой код между { } )

## Строгий режим (strict mode)
_Инструкция интерпретатору JS аналезировать код более пристально_

`'use strict'` - строка должна быть первой в глобальной области видимости или в области видимости функции

## Операторы
_Встроенная функция_

Основные операторы:

+ Арифметические  `+ - * /`
+ Сравнения `=== !== <= >=`
+ Логические `! && ||`
+ Присваивания `=`

Текстовые операторы:

+ `typeof`
+ `instanceof`
+ `new`
+ `delete`

Еще операторы:

+ `,` - можно объявить несколько переменных

Операнд (аргументы) - то, что находится вокург операторов

## Унарные и бинарные операторы

Унарный оператор - всегда один операнд

 ```js
a++
+a
typeof a
delete obj.a
}
```

Бинарный оператор - два операнда

 ```js
a = 5;
a + b;
a += b;
```

## Инфиксная запись

_Оператор находится между операндами_

 ```js
a = true;
a + b;
a > b;
```

## Префиксная запись
_Оператор стоит перед операндом_

 ```js
++a;
typeof a;
```

## Постфиксная запись
_Оператор стоит после операндами_

 ```js
a++
myFunction()
```
`()` - тоже оператор

## Приоритетность операторов

_Можно понять логически или восспользоваться таблицой приоритетности_

## Логические операторы

`!` - не (всегда позвращает значение типа Boolean)

`&&` - и (возвращает значение одного из операндов)

`||` - или (возвращает значение одного из операндов)

## Ложные значения
_Значения, которые при приведении к логическому типу дают false_

 ```js
Boolean(value) -> false


false
0
''
undefined
null
```
Все остальное - истынные значения

## typeof - показывает тип данных
_унарный, префиксный, текстовый оператор_

Значение всегда строка, которая показывает тип

Две формы записи:
 ```js
typeof(10)
typeof 10
```

## Оператор НЕ ! (отрицание)

_Чаще всего используется в условных инструкциях_

 ```js
!10         // false
!0          // true
!'abc'      // false
!undefined  // true
```

## Оператор НЕ НЕ !! (отрицание отрицание)

_Можно легко конвектировать любое значение в булевое_

```
!!10        // true
!0          // false
!'abc'      // true
!undefined  // false
```

## Операторы && и ||
_Являются операторами короткого замыкания_ (short circuit)

`Выражение 1 && Выражение 2`

Выражение возвращает значение.

Если Выражение 1 ложо, то Выражение 2 игнорируется. И возвращается результат Выражения 1 как как результат всего выражения `Выражение 1 && Выражение 2`
(возвращает перое ложно, либо последний операнд)

`Выражение 1 || Выражение 2`


Если Выражение 1 истина то Выражение 2 игнорируется. И возвращается результат Выражения 1 как как результат всего выражения `Выражение 1 || Выражение 2`
(возвращает перое истина, либо последний операнд)

## Оператор разделения объекта на свойства ...

 ```js
const button = {
  width: 200,
  text: 'Buy',
};

const redButton = {
  ...button,        // скопировали объект
  color: 'red',     // добавили свойство
};
```

## Объединение объектов с помощью ...

 ```js
const buttonInfo = {
  text: 'Buy',
};

const buttonStyle = {
  color: 'yellow',
  width: 200,
  height: 300,
};

const button = {
  ...buttonInfo,
  ...buttonStyle
};

console.log(button);
```

## Конкатинация строк
_Оператор + для соединения строк_

`'Hello ' + 'World'`



## Переменные в конкатинации

 ```js
const hello = 'Hello';
const world = 'World';

const greeting = hello + ' ' + world;
```

## Шаблонные строки (template string literal)

 ```js
const hello = 'Hello';
const world = 'World';

const greeting = `${hello} ${world}`;
```

## Функциональные выражения

Разница между объявленной функцией и функциональным выражением

**Объявленная функция**
 ```js
function myFn(a, b) {
  let c;
  a = a = 1;
  c = a + b;
  return c;
}
```

**Функциональное выражение**
 ```js
function(a, b) {
  let c;
  a = a = 1;
  c = a + b;
  return c;
}
```

Функциональные выражения всегда анонимные

**Присвоение функционального выражения переменной**

 ```js
const myFunction = function(a, b) {
  let c;
  a = a = 1;
  c = a + b;
  return c;
};

myFunction(5, 3);
```

## Стрелочные функции

_Всегда анонимные_
 ```js
(a, b) => {
  let c;
  a = a = 1;
  c = a + b;
  return c;
}
```

**Присвоение стрелочной функции**

 ```js
const myFunction = (a, b) => {
  let c;
  a = a = 1;
  c = a + b;
  return c;
};
```

## Сокращения в стрелочных функциях:

1. Если один параметр, то круглые скобки можно опустить

`a => { // тело функции }`

2. Если тело функции состоит из одного выражения, то фигурные скобки можно опустить

`(a, b) => a + b`

(неявно возвращает результат, без return)

## Значения параметров функции по умолчанию

 ```js
function multByFactor(value, multiplier = 1) {
  return value * multiplier;
}

console.log(multByFactor(10, 2));
console.log(multByFactor(5));
```

**Неявный возврат**

 ```js
const newPost = (post, addedDt = Date()) => ({
  ...post,
  addedDt,
});

const firstPost = {
  id: 777,
  autor: 'Vlad',
};

console.log(newPost(firstPost));
```

**Возврат при помощи return**

 ```js
const newPost = (post, addedDt = Date()) => {
  return {
    ...post,
    addedDt,
  };
};

const firstPost = {
  id: 777,
  autor: 'Vlad',
};

console.log(newPost(firstPost));
```

## Обработка ошибок

 ```js
const fnWithError = () => {
  throw new Error('Some error');
};

fnWithError();

console.log('Continue...');

// log не отобразится из-за ошибки
```

## TRY/CATCH

 ```js
try {
  // выполнение блока кода
} catch (error) {
  // этот блок выполняется в случае возникновения ошибок в блоке try
}
```

 ```js
const fnWithError = () => {
  throw new Error('Some error');
};

try {
  fnWithError();
} catch (error) {
  console.error(error);
  console.log(error.massage);
}

console.log('Continue...');
```

## Инструкции

Выражение всегда возвращает значение

Инструкция выполняет определенные действия

## Массивы
_Объект с цифровыми именами свойств_

**Формат записи массивов**

 ```js
const myArray = [1, 2, 3];
console.log(myArray);
```
 ```js
const myArray2 = new Array (1, 2, 3);
console.log(myArray2);
```

## Методы массивов (основные)

+ push (добавить в конец массива)
+ pop (удалить элемент с конца массива, возвращает удаленный элемент)
+ shift (удаляет первый элемент массива и возвращает его если присвоить его)
+ unshift (добавить элемент в начале массива )
+ forEach
+ map

Методы массивов - функции высшего порядка в массивах (функции, методы протатипов)

 ```js
const myArray = [1, 2, 3];
console.log(myArray);

myArray.push('a');    // добавить в конец

myArray.pop('b');     // удалить с конца

myArray.shift(4);   // удаляет первый элемент

myArray.unshift(11); // добавить элемент в начале

```

## forEach

_Перебирает все элементы массива и выполняет определенные действия с каждым элементом. Метод не меняет оригинальный массив_

Для каждого элемента массива будет вызывать колбек функцию.



 ```js
const myArray = [1, 2, 3];
console.log(myArray);
```
**Короткая запись**

 ```js
myArray.forEach(item => console.log(item * 2));
```

**Обычная запись**

 ```js
myArray.forEach(function(item) {
  console.log(item * 2);
});
```

forEach возвращает undefined, так как служит только для перебора элементов массива и выполнение определенных действий с каждым элементом перебора

 ```js
const res = myArray.forEach(item => console.log(item * 2));

console.log(res);  // undefined
```

## MAP

_Перебирает все элементы массива, выполняет определенные действия с каждым элементом как и forEach, но возвращает новый массив_

 ```js
const myArray = [1, 2, 3];

const newArray = myArray.map(item => item * 3);
```

## Деструктуризация объекта

Создание новых переменных относительно свойств объекта (на основе чвойств объекта)

**Можно создать так**
 ```js
const userProfile = {
  name: 'Vlad',
  commentsQty: 23,
  hasSignedAgreement: false,
};


const name = userProfile.name;
const commentsQty = userProfile.commentsQty;
const hasSignedAgreement = userProfile.hasSignedAgreementy;
```

**Правильнее так**

`const {name, commentsQty} = userProfile;`

**или отдельно**

`const {hasSignedAgreement} = userProfile;`

> В фигурных скобках, название новых переменных, которые совпадают с ключами свойств объекта, на основе которого новые переменные и создаются (имя объект указывается справа, после знака присваивания). Порядок имен переменных в квадратных скобках не имеет значение, так как название переменных и ключа свойств одинаковые.

## Деструктуризация массива
 Почти тоже самое, что и в деструктуризации объектов, но фигурные скобки заменяем на квадратные и учитывем то, что порядок элементов в массиве имеет значение. Название переменных в квадратных скобках произвольные, но значения соответствуют индексу массива на основе которого переменные создаются.

 ```js
const fruits = ['Apple', 'Banana'];

const [apple, fruitTwo] = fruits;

console.log(apple);     // Apple

console.log(fruitTwo);  // Banana
 ```

 ## Деструктуризация параметров функции

Если функция получает объект в качестве параметров, то можно применить деструктуризацию этого объекта, чтобы использовать только необходимые свойства

 ```js
const userProfile = {
  name: 'Vlad',
  commentsQty: 0,
  hasSignedAgreement: false,
};


const userInfo = ({name, commentsQty}) => {
  if (!commentsQty) {
    return console.log(`User ${name} has no comments`);
  }
  return console.log(`User ${name} has ${commentsQty} comments`);
};


userInfo(userProfile);
```

## Условные инструкции

+ if
+ if ... else
+ if ... else if (if ... else if ... else)
+ switch
+ тернарный оператор

## Инструкия IF

 ```js
if (условие) {
  // блок кода, выполняется однократно, если условие правдиво
}
```

 ```js
let val = 10;

if (val > 5) {
  val+=20;
}

console.log(val);
```

## Инструкия IF ELSE

 ```js
if (условие) {
  // блок кода, выполняется однократно, если условие правдиво
} else {
  // блок кода, выполняется однократно, если условие ложно
}
```

 ```js
let val = 10;

if (val < 5) {
  val+=20;
} else {
  val -= 20;
}

console.log(val);
```
## Инструкия IF ELSE IF

 ```js
if (условие 1) {
  // блок кода, выполняется однократно, если условие 1 правдиво
} else if (условие 2) {
  // блок кода, выполняется однократно, если условие 2 правдиво
} else {
  // блок кода, выполняется однократно, если предыдущие условия ложны
}
```

 ```js
const age = 18;

if (age >= 18) {
  console.log('Is adult');
} else if (age >= 12) {
  console.log('Is teenager');
} else {
  console.log('Is child');
}
```

## Использование IF в функциях

 ```js
const sumPositiveNumbers = (a, b) => {
  if (typeof(a) !== 'number' || typeof(b) !== 'number') {
    return 'One of the arguments is not a number';
  }

  if (a <= 0 || b <= 0) {
    return 'Numbers are not positive';
  }

  return a + b;
};
```

## SWITCH
_Альтернатива для if...if else...if_

 ```js
switch (выражение) {
  case A:
    // Действие если выражение === А
    break;
  case B:
    // Действие если выражение === B
    break;
  default:
    // действие по умолчанию
}
```

`break` - остановка (выход). Если не установить, то проверка по case продолжится.

> `switch` - проверка на строгое равенство

 ```js
const month = 5;

switch (month) {
  case 12:
    console.log('Декабрь');
    break;
  case 1:
    console.log('Январь');
    break;
  case 2:
    console.log('Февраль');
    break;
  default:
    console.log('Это не зимний месяц');
}
```

## Тернарный оператор

_У тернарного оператора три операндами
Конструкция с тернанрным оператором - это выражение, а выражение всегда возвращает значение_

`Условие ? Выражение 1 : Выражение 2`

+ В условиях может быть любое выражение (проверка на true)
+ Если Условие правдиво, то возвращается результат Выражения 1
+ Если условие ложно - результат Выражения 2

Можно писать так:
 ```js
Условие
  ? Выражение 1
  : Выражение 2
```

**Примеры:**
 ```js
const value = 11;

value
  ? console.log('Условие истенно')
  : console.log('Условие ложно');
```

 ```js
const value1 = 11;
const value2 = 25;

value1 && value2
  ? myFunction(value1, value2)
  : myFunction();
```

 ```js
let value = 11;

console.log(value >= 0 ? value : -value);


let res = value >= 0 ? value : -value;

console.log(res);

```

## Циклы

+ for
+ for...in...
+ while
+ do...while
+ for...of...

## Цикл for

 ```js
for (Начальная инструкция; Условие; Итерационное действие) {
// Блок кода, выполняемый на каждой итерации
}
```

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

**Для перебора массивов не нужен цикл for**

_Лучше использовать функции высшего порядка - "forEach", "map", "reduce"_

Вот как всё таки применяется for для массивов

```js
const myArray = ['first', 'second', 'third'];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
```

**Метод forEach**

```js
const myArray = ['first', 'second', 'third'];

myArray.forEach((element, index) => {
  console.log(element, index);
});

// first 0
// second 1
// third 2
```
+ `element` - каждый элемент массива
+ `index` - индекс каждого элемента (параметр опционален)

## Цикл while

_Выполняет блок кода, пока условие правдиво? если условие ложно, то не выполниться ни разу_

```js
while (Условие) {
  // Блок кода, выполняемый на каждой итерации
}
```

```js
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```
> Если не указать изменение i, то есть убрать i++, то цикл будет бесконечный

## Цикл do while

_Выполнится как минимум один раз_

```js
do {
  // Блок кода, выполняемый на каждой итерации (выполняется хотя бы один раз)
}
while (Условие)
```

```js
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);
```
Сначала выводится 0, увеличивается на единицу `i++;` и уже после этого проверяется условие `while (i < 5)`

**Применяется тогда, когда блок кода нужно выполнить хотя бы раз**

## Цикл for in (для объектов)

_Можно выполнять действия с каждым свойством объекта_

```js
for (key in Object) {
  // Действия с каждым свойством объекта
  // Значения свойства - Object[key]
}
```

`key` - название переменной (название свойства объекта)
`Object` - объект
`Object[key]` - значение свойства

```js
const myObject = {
  x: 10,
  y: true,
  z: 'abc',
};

for (let key in myObject) {
  console.log(`${key}:${myObject[key]}`);
}

// x:10
// y:true
// z:abc
```

## forEach для объектов (методы keys и values)

```js
const myObject = {
  x: 10,
  y: true,
  z: 'abc',
};

Object.keys(myObject).forEach(key => {
  console.log(key, myObject[key]);
});

// x 10
// y true
// z abc

```
`Object.keys(myObject)` - метод keys переменной Object, для получения всех ключей объекта в виде массива (массив свойст) и далее перебор элементов этого массива `forEach`

Можно сразу перебирать значения свойств объекта

```js
const myObject = {
  x: 10,
  y: true,
  z: 'abc',
};

Object.values(myObject).forEach(value => {
  console.log(value);
});

// 10
// true
// abc
```

`Object.values(myObject)` - gj учение всех значений свойств объекта в виде массива

## Цикл for in (для массивов)
**!!! ТАК ДЕЛАТЬ НЕ РЕКОМЕНДУЕТСЯ**

```js
const myArray = [true, 10, 'abc', null];

for (const key in myArray) {
  console.log(myArray[key]);
}

// true
// 10
// abc
// null
```

## Цикл for of

```js
for (Element of Iterable) {
  // Действия с определенным элементом
}
```

Для строк
```js
const myString = 'Hey';

for (const letter of myString) {
  console.log(letter);
}

// H
// e
// y
```

Для массивов
```js
const myArray = [true, 10, 'abc', null];

for (const element of myArray) {
  console.log(element);
}

// true
// 10
// abc
// null
```

**!!! FOR OF НЕ ДЛЯ ОБЪЕКТОВ**

## МОДУЛИ
+ _Позволяют структурировать код_
+ _Позволяюь избегать дублирования блоков кода_

## EXPORT/IMPORT (ES6)

moduleOne.js    =>    moduleTwo.js
export...       =>    import...

Связь модулей. Из модуля moduleOne.js экспортируются (переменные, функции и тд), а в moduleTwo.js импортируются с первого модуля


**moduleOne.js**
Экспортируем функцию myName (теперь доступна для других модулей)

```js
const myName = () => {
  console.log('Vladyslav');
};

export default myName;  // экспорт функции
```

**moduleTwo.js**

Импортируем функцию myName из модуля moduleOne.js

```js
impoort printMyName from './moduleOne.js';

printMyName();  // Vladyslav
```
`'./moduleOne.js'` - строка-путь ( **./** - _находятся в одной папке, .js - можно опускать_)

`myName` и `printMyName` - отличаются названия, что допускается при default экспорте

## Несколько экспортов


**moduleOne.js**

```js
const one = 1;
const two = 'two';

export {
  one,
  two
}
```

**moduleTwo.js**

```js
import {
  one,
  two
} from './moduleOne.js';

console.log(one);  // 1
console.log(two);  // two
```

**Имена переменных должны совпадать, но их можно переименовать при импорте**

**moduleTwo.js**

```js
import {
  one as oneRenamed
  two
} from './moduleOne.js';

console.log(oneRenamed);  // 1
console.log(two);  // two
```

`as` - указать новое имя, после импорта

## Правила работы с модулями

> 1. Модули должны быть одноцелевыми
> 2. Распологайте все export инструкции внизу файла
> 3. Распологайте все import инструкции сверху файла
> 4. По возможности используйте export default
> 5. Сначала import из внешних пакетов, а потом собственных

## Классы и прототипы

**Синтаксис классов появился в ES6**

_С помощью классов можно создавать шаблоны, либо заготовки для объектов и потом, на основании этих заготовок создавать экземпляры объектов_

`class ...`



+ классы позволяют создавать прототипы для обюъектов
+ на основании прототипов создаются экземпляры
+ экземпляры могут иметь собственные свойства и методы
+ экземпляры наследуют свойства и методы прототипов

```js
class Comment {
  constructor(text) {
    this.text = text;
    this.votesQty = 0;
  }

  upvote() {
    this.votesQty +=1;
  }
}
```

`class` - ключевое слово

`Comment` - название класса (PascalCase notation)

`{}` - внутри всё что касается класса( свойтсва и методы)

`constructor и upvote` - методы, в скобках `()` - опциональные параметры и далее тело `{}` конкретного метода

`this` - спец переменная указывает на экземпляр класса (ссылается на новый экземпляр)

## Создание экземпляров класса

`const firstComment = new Comment('First comment');`

`new` - префиксный унарный оператор (**вызывается функция constructor**)

`upvote` - унаследован свойства экземпляра

## Цепочка прототипов

firstComment => Comment => Object

## Проверка принадлежности instanceof

```js
console.log(firstComment instanceof Comment);
console.log(firstComment instanceof Object);

// true
// true
```

## Вызов унаследованных методов

```js
const firstComment = new Comment('First comment');

firstComment.upvote();
console.log(firstComment.votesQty);

firstComment.upvote();
console.log(firstComment.votesQty);

firstComment.upvote();
console.log(firstComment.votesQty);

// 1
// 2
// 3
```

## Проверка принадлежности свойств экземпляру объекта hasOwnProperty

_Есть ли у firstComment **собственное** свойство_
```js
const firstComment = new Comment('First comment');

console.log(firstComment.hasOwnProperty('text'));

console.log(firstComment.hasOwnProperty('votesQty'));

console.log(firstComment.hasOwnProperty('hasOwnProperty')); // наследуется от класса  Comment

console.log(firstComment.hasOwnProperty('upvote')); // наследуется от класса  Comment

// true
// true
// false
// false
```

## Создание нескольких экземпляров

```js
const firstComment = new Comment('First comment');
const secondComment = new Comment('Second comment');
const thirdComment = new Comment('Third comment');
```

## Статические методы

_Метод доступен как свойство класса и не наследуется экземплярами класса_

```js
class Comment {
  constructor(text) {
    this.text = text;
    this.votesQty = 0;
  }

  upvote() {
    this.votesQty +=1;
  }

  static mergeComments(first, second) {
    return `${first} ${second}`;
  }
}

Comment.mergeComments('First comment.', 'Second comment.');
```

## Расширение других классов extends

```js
class NumbersArray extends Array {
  sum() {
    return this.reduce((el, acc) => acc += el, 0);
  }
}

const myArray = new NumbersArray(2, 5, 7);

console.log(myArray);
myArray.sum();
```

`Array` - родительский класс для `NumbersArray`
`constructor` не нужен, так как расширяя `Array`, конструктор родительского класса вызовется автоматически 

### Цепочка прототипов

`mArray` => `NumbersArray` => `Array` => `Object`


## Что такое прототипов

_У каждого экземпляра есть скрыто свойство_ `__proto__`

Свойство `prototype` класса - равно свойсту `__proto__` любого экземпляра

```js
Comment.prototype === firstComment.__proto__
```

## Промисы

_Позволяют обрабатывать отложенные во времени события_

Асинхронный запрос - не знаете, когда получите ответ (не сразу, а через какое-то время)

Промис - это обещание предоставить результат позже (возвращает ошибку, если предоставить невозможно)

## Состояния промиса

+ ожидание (pending) - промис создаётся
+ исполнен (resolved) - результат получен
+ откланен (rejected) - вернул ошибку

## Создание промиса

Только созданный промис в состоянии ожидания(pending)
```js
const myPromise = new Promise((resolve, reject) => {
  /* 
  *Выполнение асинхронных действий
  *
  * Внутри этой функциинужно в результате вызвать одну из функций resolve или reject
  * 
  */
});
```

+ `new` - (вызывается constructor) создает новый экземпляр класса Promise(присутствует в js) и присвоен переменной

+ `(resolve, reject) => {}` - колбек функция

+ `resolve, reject` - два обязательных параметра

+ `{}` - в теле колбек функции нужно вызвать `resolve` или `reject`

+ `resolve` - передать какой-то результат (данные) и когда была вызвана функция `resolve`, промис считается исполнен (меняется состояние с состояния ожидания)

+ если возникла ошибка, то нужно вызвать функцию `reject` и передать ту ошибку, которая возникла. В таком случае промис считается откланенным

## Получение рузультата промиса

```js
myPromise
  .then(value => {
    /*
    * Дуйствие в случае успешного исполнения промиса
    * Значение value - это значение, переданное в вызове функции resolve внутри Промиса
    */
  })
  .catch(error => {
    /*
    * Действие в случае отклонения Промиса
    * Значение error - это значение, переданное в вызове функции reject внутри Промиса
    */
  });
  ```

У объекта `myPromise` доступны методы `.then` и `.catch`.

В `.then` и `.catch` в параметрах нужно предать функцию с одним параметром (value или error)

## Практика по использованию промисов и fetch

```js
fetch('https://jsonplaceholder.typicode.com/todos/55')
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(json => console.log(json));
  .catch(error => console.error(error));
```

## Вызов fetch внутри промиса

```js
const getData = (url) => 
  new Promise((resolve, reject) =>
    fetch(url)
      .then(response => response.json());
      .then(json => resolve(json));
      .catch(error => reject(error));
    );

getData('https://jsonplaceholder.typicode.com/todos/55')
  .then(data => console.log(data));
  .catch(error => console.log(error.massage));
```

## ASYNC/AWAIT
_Специальный синтаксис для упрощения работы с промисами_

## Асинхронные функции
_Функция, которая вместо какого-то значения (undefined, cnстрокачисло и тд), возвращает промисами_

Чтобы создать асинхронную функцию, нужно добавить ключевле слово `acync`

**Традиционное объявление - ключевое слово перед функцией**
```js
acync function asuncFn() {
  // Всегда возвращает Промис
};
```
**Другие типы функций - ключевое слово после = (перед началом функции)**
```js
const asyncFn = async () => {
  // Всегда возвращает Промис
};
```

```js
const asyncFn = async () => {
  return 'Success';
};

asyncFn()
 .then(value => console.log(value));
```

```js
const asyncFn = async () => {
  throw new Error('There was an error!');
};

asyncFn()
  .then(value => console.log(value))
  .catch(error => console.log(error.message));
```

## Главное в ASYNC/AWAIT

1. async/await - это синтаксическая надстройка над промисами
2. await синтаксис возможен только внутри async функции
3. async функция всегда возвращает Promise
4. async функция ожидает результата инструкции await и не выполняет последующие инструкции

