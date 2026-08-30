'use strict'

// 1.1

// const user = {
//   name: "Анна",
//   age: 25,
//   city: "Москва",
//   isAdmin: false
// };

// for (const key in user) {
//   console.log(key)
// }

// for (const key in user) {
//   console.log(user[key])
// }

// for (const key in user) {
//   console.log(`${key}: ${user[key]}`)
// }

// 1.2

// const user = {
//   name: "Анна",
//   age: 25,
//   city: "Москва",
//   isAdmin: false
// };

// const userKeys = Object.keys(user)
// const userValues = Object.values(user)
// const userEntries = Object.entries(user)


// console.log(userKeys)
// console.log(userValues)
// console.log(userEntries)

// // 1.3

// for (const key of userEntries) {
//   console.log(`${key[0]}: ${key[1]}`)
// }

// 2.1

// const entries = [
//   ["name", "Иван"],
//   ["age", 30],
//   ["city", "СПБ"]
// ];


// const objectFromEntries = Object.fromEntries(entries)

// console.log(objectFromEntries)

// 2.2

// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2020
// };

// const arrayFromObject = Object.entries(car)
// console.log(arrayFromObject)

// const objectFromArray = Object.fromEntries(arrayFromObject)
// console.log(objectFromArray)

// 3.1

// const userMap = new Map()

// userMap.set('name', 'Ольга')
// userMap.set('age', '28')
// userMap.set('city', 'Казань')

// console.log(userMap)
// console.log(userMap.get('name'))

// userMap.delete('city')
// console.log(userMap)

// console.log(userMap.size)

// userMap.clear()
// console.log(userMap)

// 3.2

// const testMap = new Map()

// testMap.set(1, 'один')
// testMap.set({ id: 1 }, 'объект')
// testMap.set([1, 2], 'массив')

// console.log(testMap)

// console.log(testMap.get(1))
// console.log(testMap.get({ id: 1 }))

// 3.3

// const scores = new Map([
//   ["Анна", 85],
//   ["Иван", 92],
//   ["Мария", 78]
// ]);

// for (const entry of scores.entries()) {
//   console.log(entry)
// }

// for (const key of scores.keys()) {
//   console.log(key)
// }

// for (const value of scores.values()) {
//   console.log(value)
// }

// scores.forEach((key, value) => {
//   return console.log(key, value)
// })

// // 3.4

// const settings = {
//   theme: "dark",
//   language: "ru",
//   notifications: true
// };

// const mapSetting = new Map(Object.entries(settings))

// mapSetting.set('fonsize', 16)

// console.log(Object.fromEntries(mapSetting))

// 4.1

// const newSet = new Set();

// [1, 2, 3, 3, 4, 4, 5].forEach(element => newSet.add(element));

// console.log(newSet);

// console.log(newSet.has(3))
// console.log(newSet.has(10))

// newSet.delete(2)

// console.log(newSet);
// console.log(newSet.size);

// newSet.clear()
// console.log(newSet);

// 4.2

// const numbers = [1, 2, 2, 3, 3, 4, 5, 5, 5];

// const newSet = new Set(numbers)

// const backToArray = Array.from(newSet)

// console.log(backToArray)

// 4.3

// const colors = new Set(["красный", "зеленый", "синий"]);

// for (const key of colors) {
//   console.log(key)
// }

// colors.forEach( value => console.log(value))

// console.log([...colors.values()]);
// console.log([...colors.keys()]);
// console.log(colors)

// 5.1 

const users = [
  { id: 1, name: "Анна", age: 25, city: "Москва" },
  { id: 2, name: "Иван", age: 30, city: "СПБ" },
  { id: 3, name: "Мария", age: 20, city: "Казань" },
  { id: 4, name: "Петр", age: 30, city: "Москва" }
];

const userMap = new Map();

users.forEach(user => userMap.set(user.id, user))

console.log(userMap)

console.log(userMap.get(3))

userMap.set(5, { id: 5, name: "Ольга", age: 22, city: "Новосибирск"})

console.log(userMap)

const userCity = new Set()

for (const [id, name] of userMap) {
  userCity.add(name.city)
}

console.log(userCity)

const cityCount = {};

for (const [id, name] of userMap) {
  cityCount[name.city] = (cityCount[name.city] || 0) + 1;
}

console.log(cityCount)
