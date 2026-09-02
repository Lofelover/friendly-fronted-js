'use strict'


// 1.1
// setTimeout( () => {
//   console.log('Прошло 2 сек')
// }, 2000)

// 1.2

// function greet(name) {
//   console.log(`Привет, ${name}`)
// }

// setTimeout(greet, 1500, 'Анна')

// 1.3 Сначала выведутся все консоль логи, так как в сеттаймаут если даже указать 0мс, то она будет вызвана через 4мс, что дольше, чем консоль логи

// 2.1

// const cancelTimeout = setTimeout(() => {
//   console.log("Это сообщение не должно появиться")
// }, 3000)


// clearTimeout(cancelTimeout)

// 2.2

// const shouldCancel = true

// if (!shouldCancel) {
//   setTimeout(() => {
//     console.log("Таймер сработал")
//   }, 5000)
// }

// 3.1

// setInterval(() => {
//   console.log(new Date().toLocaleTimeString())
// }, 1000)

// 3.2

// let count = 0

// const intervalID = setInterval(() => {
//   count++;
//   console.log(count)
//   if (count === 5) {
//     clearInterval(intervalID)
//   }
// }, 1000)

// 4.2

let count = 0

const timeoutID = setTimeout(function Counting() {
  count++;
  console.log(count)
  if (count === 5) {
    clearTimeout(timeoutID)
  } else {
    setTimeout(Counting, 1000)
  }
}, 1000)