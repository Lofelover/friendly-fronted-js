'use strict'

// 1.1
// const user = {
//     name: 'Алексей',
//     age: 30,
//     isAdmin: false,
// }

// console.log(user.name, user.age, user.isAdmin)
// console.log(user['name'], user['age'], user['isAdmin'])

// 1.2 

// user.city = 'Москва'

// console.log(user)

// user.email = 'alex@example.com'

// console.log(user)

// user.age = 31

// console.log(user)

// user.isAdmin = true

// console.log(user)

// 1.3

// delete user.email

// console.log(user)

// delete user.city

// console.log(user)

// // 2.1 

// const name = "Мария";
// const age = 25;
// const job = "Дизайнер";

// const person = {
//     name,
//     age,
//     job,
// }

// console.log(person)


// // 2.2

// const title = "Ноутбук";
// const price = 1500;
// const inStock = true;

// const product = {
//     title,
//     price,
//     inStock,
//     category: 'Категория',
//     discount: 10,
// }

// console.log(product)

// // 3.1

// const config = {
//     ['user name']: 'Иван',
//     ['user-age']: 28,
//     ['is_admin']: true,
// }

// console.log(config)

// // 3.2

// const key = "status";
// const value = "active";

// const Object = {
//     [key]: value,
// }

// console.log(Object)

// // 4.1 

// const book = {
//   title: "Война и мир",
//   author: "Толстой",
//   pages: 1200
// };

// console.log('title' in book)
// console.log('year' in book)
// console.log('author' in book)
// console.log('pages' in book)

// // 4.2

// console.log(book.publisher)
// console.log('publisher' in book)

// // 5.1 

// const country = {
//   name: "Россия",
//   capital: "Москва",
//   population: 146000000,
//   language: "Русский"
// };

// for (const option in country) {
//     console.log(country[option])
// }

// // 5.2 

// for (const option in country) {
//     console.log(`${option}: ${country[option]}`)
// }

// 5.3

const student = {
  name: "Ольга",
  grades: {
    math: 5,
    history: 4,
    english: 5
  }
};

for (const option in student) {
    if (typeof student[option] === 'object') {
        const gradesObject = student[option];
        for (const key in gradesObject) {
            console.log(`Оценка по ${key}: ${gradesObject[key]}`)
        }
    }
}