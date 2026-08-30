'use strict'

// // 2.1
// const fruits = ["яблоко", "банан", "апельсин", "груша"];

// fruits.forEach((fruit, index) => console.log(`${index}: ${fruit}`))

// // 2.2
// const nums = [10, 20, 30, 40];

// let sum = 0

// nums.forEach((number) => { sum += number})

// console.log(sum)

// 3.1

// const items = ["книга", "ручка", "карандаш", "ручка", "ластик"];

// console.log(items.indexOf('ручка'))
// console.log(items.lastIndexOf('ручка'))
// console.log(items.indexOf('тетрадь')) /* Вернет отрицательный индекс */

// 3.2

// const scores = [10, 20, 30, 20, 40, 20];

// console.log(scores.indexOf(20, 2))

// 4.1

// const users = [
//   { id: 1, name: "Анна", age: 25 },
//   { id: 2, name: "Иван", age: 30 },
//   { id: 3, name: "Мария", age: 20 },
//   { id: 4, name: "Петр", age: 30 }
// ];

// users.findIndex(({age}) => age === 30)

// console.log(users.findIndex(({age}) => age === 30))
// console.log(users.findLastIndex(({age}) => age === 30))
// console.log(users.findIndex(({name}) => name === 'Ольга'))

// 5.1 

// const tags = ["js", "html", "css"];

// console.log(tags.includes('css'))
// console.log(tags.includes('react'))

// 5.2

// const numbers = [3, 5, 7, 10, 12];

// console.log(numbers.some((number) => number % 2 === 0))
// console.log(numbers.some((number) => number > 15))

// 5.3

// const ages = [18, 21, 17, 25, 19];

// console.log(ages.every((age) => age > 16))
// console.log(ages.every((age) => age > 20))

// 6.1

// const users = [
//   { id: 1, name: "Анна", age: 25 },
//   { id: 2, name: "Иван", age: 30 },
//   { id: 3, name: "Мария", age: 20 },
//   { id: 4, name: "Петр", age: 30 }
// ];


// console.log(
//   users.find(({age}) => age === 30)
// )
// console.log(
//   users.find(({age}) => age === 40)
// )

// 6.2

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(
//   nums.filter((num) => num % 2 === 0)
// )
// console.log(
//   nums.filter((num) => num > 5)
// )
// console.log(
//   nums.filter((num) => num % 3 === 0)
// )

// 7.1

// const numbers = [1, 2, 3, 4, 5];

// const newNumbers = numbers.map((number) => {
//   return number**2
// })

// const newNumbers1 = numbers.map((number) => {
//   return `Квадрат числа ${number} равен ${number**2}` 
// })

// console.log(newNumbers)
// console.log(newNumbers1)

// const users = [
//   { id: 1, name: "Анна", age: 25 },
//   { id: 2, name: "Иван", age: 30 },
//   { id: 3, name: "Мария", age: 20 },
//   { id: 4, name: "Петр", age: 30 }
// ];

// const newUserArray = users.map(({name}) => {
//   return name
// })

// console.log(newUserArray)

// 8.1 
// const prices = [10, 20, 30, 40];

// const pricesSum = prices.reduce( (accumulator, price) => {
//   return accumulator += price
// } , 0)

// console.log(pricesSum)

// 8.2 

const orders = [
    { product: "Книга", price: 500, count: 2 },
    { product: "Ручка", price: 50, count: 5 },
    { product: "Тетрадь", price: 100, count: 3 }
];

const ordersSum = orders.reduce( (accumulator, {price, count}) => {
  return accumulator += price * count
} , 0)

console.log(ordersSum)

// 8.3 

const letters = ["a", "b", "c", "d"];

const newArray = letters.reduceRight( (accumulator, letter) => {
 return accumulator += letter
}, '')

console.log(newArray)