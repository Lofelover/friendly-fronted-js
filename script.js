'use strict'

// // 1.2

// console.log("Начало");

// // Запоминаем время старта цикла в миллисекундах
// const startTime = Date.now();


// while (Date.now() - startTime < 2000) {

// }

// console.log("Конец");

// setTimeout(() => {
//   console.log("Я должен был выполниться раньше")
// }, 0)


// 2.1

// function greetUser(name, callback) {
//   console.log(`Привет, ${name}`)
//   callback();
// }

// greetUser('Илья', () => {
//   console.log('Колбэк выполнен')
// })

// 2.2

// function loadData(callback) {
//   setTimeout(() => {
//     console.log('Данные загружены')
//   }, 1000)
//   callback()
// }

// loadData(() => {
//   console.log('Обработка данных завершена')
// })

// function getUser(callback) {
//   setTimeout(() => {
//     callback({ id: 1, name: "Анна" })
//   }, 1000)
  
// }

// function getOrders(userId, callback) {
//   setTimeout(() => {
//     callback(["Заказ 1", "Заказ 2"])
//   }, 1000)
// }

// function getOrderDetails(orderId, callback) {
//   setTimeout(() => {
//     callback(`Детали заказа: ${orderId}`)
//   }, 1000)
// }

// getUser((user) => {
//     console.log("Пользователь:", user);
//     getOrders(user.id, (orders) => {
//         console.log("Заказы:", orders);
//         getOrderDetails(orders[0], (details) => {
//             console.log(details);
//         });
//     });
// });

// 3.1

const promise = new Promise((fullfill, reject) => {
  setTimeout(() => {
    fullfill('Успех')
  }, 1000)
})

promise.then(result => console.log(result))