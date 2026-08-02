'use strict'

// function logMessage(message, count) {
//   for (let i = 0; i < count; i++) {
//     console.log(message)
//   }
// }

// logMessage('Хейййй', 3)


// function multiply(a, b) {
//     return a * b
// }

// const multiplyExpr = function(a, b) {
//   return a * b
// }

// const multiplyArrow = (a, b) => {
//   return a * b;
// }

// const isEven = (number) => !Boolean(number % 2)

// console.log(isEven(4))

// 3.1 

// function greet(name) {
//   return `Привет, ${name}`
// }

// const sayHi = greet

// console.log(sayHi('Илья'))

// 3.2

// function processUserInput(callback) {
//   const sign = prompt('Как тебя зовут?')
//   callback(sign)
// }


// function yourName(name) {
//   console.log(`Тебя зовут ${name}`)
// }

// processUserInput(yourName)

function createMultiplier(multiplier) {
    return function(n) {
        return n * multiplier;
    };
}

const double = createMultiplier(2);
console.log(double); // Должно вывести 10