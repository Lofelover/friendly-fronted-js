'use strict'

// const fruits = ['яблоко', 'банан', 'апельсин']

// console.log(fruits[0], fruits[1], fruits[2])

// fruits[1] = 'груша'

// console.log(fruits)

// const arr = []

// arr[5] = 'привет'

// console.log(arr, arr.length)

// const numbers = [10, 20, 30, 40, 50];

// console.log(numbers.length)
// console.log(numbers[numbers.length - 1])
// console.log(numbers.at(-1))

// const stack = [1, 2, 3]

// stack.push(4)
// stack.push(5)
// const lastElement = stack.pop()

// console.log(lastElement)
// console.log(stack)


// const queue = [10, 20, 30];

// queue.unshift(5)
// queue.unshift(0)
// const lastElementofQueue = queue.shift()

// console.log(lastElementofQueue)
// console.log(queue)

// const letters = ['a', 'b'];

// letters.push('c')
// letters.unshift('z')

// letters.pop()
// letters.shift()

// console.log(letters)

// const items = ["книга", "ручка", "карандаш"];

// console.log(items.toString())
// console.log(items.join())
// console.log(items.join(' | '))

// const str = "Иван,Петр,Мария,Ольга";

// const stringToArray = str.split(',')

// console.log(stringToArray)

// const arrayToString = stringToArray.join(' / ')

// console.log(arrayToString)

// const original = [1, 2, 3];

// const copyArray = [...original]

// copyArray[1] = 100

// console.log(original)
// console.log(copyArray)

// const colors = ["красный", "зеленый", "синий", "желтый"];

// const colorsCopy = colors.slice()
// const colorsCopy1 = colors.slice(1, 3)
// const colorsCopy2 = colors.slice(-2)

// console.log(colors)
// console.log(colorsCopy1)
// console.log(colorsCopy2)

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const newArray = [...arr1, ...arr2]

// console.log(newArray)

// const newArray1 = arr1.concat(arr2)

// console.log(newArray1)

// const fruits = ["яблоко", "банан"];

// const newArray = fruits.concat('апельсин', 'груша')

// console.log(newArray)


// const arraysEqual = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     const value1 = arr1[i]
//     const value2 = arr2[i]

//     if (value1 !== value2) {
//       return false
//     } else {
//       continue
//     }
//   }

//   return true
// }

// const array = [1, 2, 3]
// const array1 = [1, 2, 3]
// const array2 = [1, 2, 4]

// console.log(arraysEqual(array, array1))
// console.log(arraysEqual(array, array2))


console.log(Array.isArray([1, 2, 3]))
console.log(Array.isArray({ name: "Тест" }))
console.log(Array.isArray("строка"))
console.log(Array.isArray(null))
console.log(Array.isArray([]))

console.log(typeof [1, 2, 3])