<h1 align="center">JavaScript Lesson #1</h1>

<p align="center">

<img src="https://img.shields.io/badge/Made%20by-Ogabek-yellow" >

<img src="https://img.shields.io/badge/JavaScript-Lesson%20%231-green">

<img src="https://img.shields.io/badge/Variable-DataTypes-red">

<img src="https://img.shields.io/badge/Learn-Javascript-black">

</p>

---

_JavaScript is a popular programming language that has a wide range of applications._

---

___JavaScript was previously used mainly for making webpages interactive such as form validation, animation, etc. Nowadays, JavaScript is also used in many other areas such as server side development, mobile app development and so on.___

***

<center> <h3>JavaScript Variables and Constants</h3></center>

```
In Javascript there is two types of variables, var and let.
For immutable values, when creating a program, it is better to use const
```

### var

`var is a global variable`

* But __var__ has its drawbacks:
  * the scope of the function (that is, it goes beyond the functions), since it is a global variable

```js
function globalVareable() {
    console.log(a)
    let a = 5
    
}
globalVareable()
```

`undefined`

_As we know that the code in almost all programming languages is readable from top to bottom._ but when declaring a global variable, it sees the variable but does not see its value, so it throws the error that the value of the variable:
__undefined__

 That's why we got the __undefined__ error because we called the variable a before declaring it with the variable __var__

### let

`Let is a local variable`

* __let__  this is a new way of declaring variables, starting with ES6,before that *__var__* was used

```js
function localVareable() {
    console.log(a)
    let a = 5
    
}
localVareable()
```

`ReferenceError: Cannot access 'a' before initialization`

_As we know that the code in almost all programming languages is readable from top to bottom._ And that is why we see the error with the fact that:
__Cannot access 'a' before initialization__

it turns out that we called the variable __a__ before declaring it

### const

`const sets a constant, that is, a variable that cannot be changed`

* Variables declared with __const__. They cannot be changed. Trying to do this will result in an _error_:
* The name of a constant that has a value is always written with capital letters and underscores. A those for which the value is not assigned are written with in the form of __camel__ _(that is, the value of the variable is calculated during the execution of the script, but does not change after their initial assignment.)_

```js
let txt2 = "text"
txt2 = "bye"
console.log(txt2);

const TXT = "hello world";
TXT="hello";
console.log(TXT);
```

_variables declared with let we can change_
`bye`
_And we can't change variables declared with __const__, even if we try, it will give us an error_
`Assignment to constant variable.`

### value

`value-can be primitive and non-primitive`

* There are 8 types of values in total:
  * Of these, there are 7 primitive types: `string`, `number`, `boolean`, `symbol`, `null`, `undefined` and `bigint`.
  * And one of the types refers to `non-primitive`_(objects)_, and it has its subtypes: `object literals`, `arrays`, `functions` and many more `non-primitive` has __reference__ types

### vareable

```A variable is a "named storage" for data. We can use variables to store products, visitors, and other data.```

* There are two restrictions in JavaScript regarding variable names:
    1.The variable name must contain only letters, numbers, or the characters $ and _.
    2.The first character must not be a digit.

If the name contains several words, __camel__ notation is usually used, that is, the words follow one after the other, where each next word begins with a capital letter: __myVeryLongName.__

---

<center> <h3>Conditions</h3></center>

### ternary operator

`The ternary operator if, we say that the abbreviated if we will not be mistaken.`

```js
let result = condition ? value1 : value2;
```

* The number 0, the empty string "", null, undefined and NaN become false. Because of this, they are called "false" values.
* The remaining values become true, so they are called "truthy".

---
