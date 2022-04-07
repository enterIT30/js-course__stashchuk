### **Прохождение курса "JavaScript - Полный Курс JavaScript Для Начинающих [11 ЧАСОВ]" от Богдана Стащука**
---
<br>

# Конспект

## <ins>Самое важно в JS:</ins>

+ выражения
+ функции
+ объекты


> `consol.log('Войти в IT к 30');`

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

> `a = 10;`

Выражения с побочными действиями - не только возвращает значения, но и выполняет другие действия.

> `a = 5;` - вернет значение и присвоит значение переменной;
> 
> `b++;` - вернет значение и увеличит значение на 1;
> 
> `myFunction(c, d);` - внутри функции происходят побочные действия, помимо возврата значения.

## Переменные
Дают возможность повторного доступа к значения
>коробка в которую можно что-то поместить, дать этой коробке имя и в дальнейшем обратиться к значению, распаковать, поменять содержимое, выполнить какое-то действие

### Имена переменных и стили написания

**НАЗВАНИЕ ПЕРЕМЕННЫХ ДОЛЖНО БЫТЬ ПОНЯТНО!**


#### Cтил написания:
+ PascalCase - именование переменной начинается с заглавной буквы как и последующие слова (без пробелов). Используются для именования типов и классов в JS;

+ SCREAMING_SNAKE_CASE - все символы заглавные, вместо пробела используется _ . Применяется для именования переменной, значение которой известны до запуска приложения и не меняются (const);

+ сamelCase - каждое слово в переменной пишется с заглавной буквы, кроме первого. Используется во всех остальных случаях, помимо вышеуказанных.

### Объявление переменных

> let a
>
> ключевое слово и имя переменной
>

С помощью ключевого слова даем инструкицю интерпретатору JS создать переменную.

> const c = 10;
>
Объявление переменной и присваивание значения.
> a = true;

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



### Добавление свойств

1. Точечная запись (Dot notation)

> `obj.new-property = true;`

2. Скобочная запись (Bracket notation)

> `obj['new-property'] = true;`
> 
Новое св-во обязательно в кавычках ' ', в виде строки.

Такой синтаксис применим, если необходимо задать ключ свойства объекта, значением переменной.

 > `let nameVariable = 'new-property';`
 >
 >`obj[nameVariable] = true;`

 В итоге, в объекте появится свойство:
 > `new-property: true,`


### Удаление свойств

> `delete obj.new-property` - при помощи оператора delete

### Вложенные свойства

```
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

### Сокращенный формат записи свойств

Когда используются переменные в формировании объекта и название переменной совпадает с названием ключа свойства объекта, то

```
const name = 'Bogdan';
const postsQty =23;

const userProfile = {
  name: name,
  postsQty: postsQty,
  hasSignedAgreement: false,
};
```
Сокращенный вариант
```
const userProfile = {
  name,
  postsQty,
  hasSignedAgreement: false,
};
```

Сокращенные свойства рекомендуется размещать в начале объекта

### Глобальные Объекты

> window - веб браузеры

> global - Node.js

> globalThis - унифицированный глобальный объекта


#### Свойства глобальных объектов

consol

window.consol

global.console

### Методы объекта

Метод - свойство объекта, значение которого - функция

```
const myCity = {
  city: 'New York',
  cityGreeting: function () {
    console.log('Greetings!!!');
  }
};

```
> myCity.cityGreeting(); // вызов метода cityGreeting


```
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
### JAVASCRIPT OBJECT NOTATION

Формат обмена данными

Набор свойства в двойных кавфчках, разных типов. Передаётся в виде строки.

Конвертация JSON в JS объект (распарсить)
> `JSON.parse(аргумент)`

Конвертация JS объекта в  JSON
> `JSON.stringify(аргумент)`

## Мутация в JS

Копирование примитивных типов происходит по значению (copy by value)

Копирование ссылочного типа (copy by reference) - меняется исходный объект

### Как избежать мутаций
1. Метод assign (не работает на вложенные объекты)

```
const person = {
  name: 'Bob',
  age: 25,
};

const person2 = Object.assign({}, person);
person2.favoriteСolor = 'black';
```
2. Spread syntax - оператор разделения объекта на свойства (не работает на вложенные объекты)

```
const person = {
  name: 'Bob',
  age: 25,
};

const person2 = {...person};
person2.favoriteСolor = 'black';
```

3. JSON.parse - JSON.stringify

```
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

### Структура функции

```
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

### Передача значения по ссылке

## Колбэк функции
Функция вызывается внутри другой функции

```
function anotherFunction() {
  console.log('Hola');
}

function fnWithCallback(callbackFunction) {
  callbackFunction();
}

fnWithCallback(anotherFunction);
```

### Правила работы с функциями

1. Называйте функции исходя из выполняемых задач
2. Одна задача- одна функция (single properts)
3. Не рекомендуется изменять внешние относительно функции переменные (pure function)

## Области видимости
_Определяет границы действия переменной_

+ Глобальные переменные (window, global, новые переменные)
+ Локальные переменные

### Типы области видимости

1. Глобальная область видимости
2. Область видимости функции
3. Область видимости блока (любой код между { } )

## Строгий режим (strict mode)
_Инструкция интерпретатору JS аналезировать код более пристально_

`'use strict'` - строка должна быть первой в глобальной области видимости или в области видимости функции

## Операторы
**Оператор** - _встроенная функция_

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

### Унарные и бинарные операторы

Унарный оператор - всегда один операнд

```
a++
+a
typeof a
delete obj.a
}
```

Бинарный оператор - два операнда

```
a = 5;
a + b;
a += b;
```

### Инфиксная запись

_Оператор находится между операндами_

```
a = true;
a + b;
a > b;
```

### Префиксная запись
_Оператор стоит перед операндом_

```
++a;
typeof a;
```

### Постфиксная запись
_Оператор стоит после операндами_

```
a++
myFunction()
```
`()` - тоже оператор

### Приоритетность операторов

_Можно понять логически или восспользоваться таблицой приоритетности_

### Логические операторы

`!` - не (всегда позвращает значение типа Boolean)

`&&` - и (возвращает значение одного из операндов)

`||` - или (возвращает значение одного из операндов)

### Ложные значения
_Значения, которые при приведении к логическому типу дают false_

```
Boolean(value) -> false


false
0
''
undefined
null
```
Все остальное - истынные значения

### typeof - показывает тип данных
_унарный, префиксный, текстовый оператор_

Значение всегда строка, которая показывает тип

Две формы записи:
```
typeof(10)
typeof 10
```

### Оператор НЕ ! (отрицание)

_Чаще всего используется в условных инструкциях_

```
!10         // false
!0          // true
!'abc'      // false
!undefined  // true
```

### Оператор НЕ НЕ !! (отрицание отрицание)

_Можно легко конвектировать любое значение в булевое_

```
!!10        // true
!0          // false
!'abc'      // true
!undefined  // false
```

### Операторы && и ||
_Являются операторами короткого замыкания_ (short circuit)

`Выражение 1 && Выражение 2`

Выражение возвращает значение.

Если Выражение 1 ложо, то Выражение 2 игнорируется. И возвращается результат Выражения 1 как как результат всего выражения `Выражение 1 && Выражение 2`
(возвращает перое ложно, либо последний операнд)

`Выражение 1 || Выражение 2`


Если Выражение 1 истина то Выражение 2 игнорируется. И возвращается результат Выражения 1 как как результат всего выражения `Выражение 1 || Выражение 2`
(возвращает перое истина, либо последний операнд)

### Оператор разделения объекта на свойства ...

```
const button = {
  width: 200,
  text: 'Buy',
};

const redButton = {
  ...button,        // скопировали объект
  color: 'red',     // добавили свойство
};
```

### Объединение объектов с помощью ...

```
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



### Переменные в конкатинации

```
const hello = 'Hello';
const world = 'World';

const greeting = hello + ' ' + world;
```

### Шаблонные строки (template string literal)

```
const hello = 'Hello';
const world = 'World';

const greeting = `${hello} ${world}`;
```

## Функциональные выражения

Разница между объявленной функцией и функциональным выражением

**Объявленная функция**
```
function myFn(a, b) {
  let c;
  a = a = 1;
  c = a + b;
  return c;
}
```

**Функциональное выражение**
```
function(a, b) {
  let c;
  a = a = 1;
  c = a + b;
  return c;
}
```

Функциональные выражения всегда анонимные

**Присвоение функционального выражения переменной**

```
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
```
(a, b) => {
  let c;
  a = a = 1;
  c = a + b;
  return c;
}
```

**Присвоение стрелочной функции**

```
const myFunction = (a, b) => {
  let c;
  a = a = 1;
  c = a + b;
  return c;
};
```

### Сокращения в стрелочных функциях:

1. Если один параметр, то круглые скобки можно опустить

`a => { // тело функции }`

2. Если тело функции состоит из одного выражения, то фигурные скобки можно опустить

`(a, b) => a + b`

(неявно возвращает результат, без return)

### Значения параметров функции по умолчанию

```
function multByFactor(value, multiplier = 1) {
  return value * multiplier;
}

console.log(multByFactor(10, 2));
console.log(multByFactor(5));
```

**Неявный возврат**

```
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

```
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

```
const fnWithError = () => {
  throw new Error('Some error');
};

fnWithError();

console.log('Continue...');

// log не отобразится из-за ошибки
```

### TRY/CATCH

```
try {
  // выполнение блока кода
} catch (error) {
  // этот блок выполняется в случае возникновения ошибок в блоке try
}
```

```
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

```
const myArray = [1, 2, 3];
console.log(myArray);
```
```
const myArray2 = new Array (1, 2, 3);
console.log(myArray2);
```

### Методы массивов (основные)

+ push (добавить в конец массива)
+ pop (удалить элемент с конца массива, возвращает удаленный элемент)
+ shift (удаляет первый элемент массива и возвращает его если присвоить его)
+ unshift (добавить элемент в начале массива )
+ forEach
+ map

Методы массивов - функции высшего порядка в массивах (функции, методы протатипов)