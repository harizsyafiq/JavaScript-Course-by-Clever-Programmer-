/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

function add(a, b) {
  return a + b
}

const add1 = (a, b) => a + b

function sub(a, b) {
  return a - b
}

const sub1 = (a, b) => a - b

function div(a, b) {
  return a / b
}

const div1 = (a,b) => a / b

function mul(a, b) {
  return a * b
}

const mul1 = (a,b) => a * b

console.log('hello from the SUM exercise')
/*
  TODO: create a function that console logs the result of any of the above operations.
*/

console.log(add1(3,6))
console.log(sub1(3,6))
console.log(div1(6,0))
console.log(mul1(3,6))
