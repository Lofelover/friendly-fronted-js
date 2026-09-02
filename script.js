'use strict'

// 1.1
// try {
//   console.log(unknownVar)
// }
// catch(error) {
//   console.log(`Произошла ошибка: ${error}`)
// }

// 1.2

// function divide(a, b) {
//   if (b === 0) {
//     throw new Error('Деление на ноль')
//   } 
//   return a / b
// }

// try {
//   divide(10, 0)
// } catch(error) {
//   console.log(`Возникла ошибка ${error}`)
// }

// 2.1

// try {
//   eval("console.log('Привет'); // незакрытая строка");
// } catch (error) {
//   console.log("Ошибка поймана");
// }

// я не вижу здесь ошибок, так-то строка закрыта в консоль логе все корректно

// 3.1 и 3.2

// setTimeout(() => {
//   try {
//     throw new Error("Ошибка в таймере");
//   } catch (error) {
//     console.log("Ошибка поймана:", error.message);
//   }
// }, 1000);

// Ошибка ловится только в том случае, если констукций трай кетч находится внутри асинхронного кода. Здесь я перенес конструкцию внутрь и все заработало

// 4.1

// try {
//   JSON.parse('{ некорректный JSON }')
// } catch(error) {
//   console.log('error.name', error.name)
//   console.log('error.message', error.message)
//   console.log('error.stack',error.stack)
// }

// 4.2

// function parseJSON(str) {
//   try {
//     return JSON.parse(str)
//   } catch (error) {
//     console.log(error.name)
//     console.log(error.message)
//     return null
//   }
// }

// // console.log(parseJSON('{"name":"Анна"}'))
// console.log(parseJSON('{name: "Анна"}'))

// 5.1

// function checkAge(age) {
//   if (age < 0) {
//     throw new Error('Возраст не может быть отрицательным')
//   }
//   else if (age > 120) {
//     throw new Error('Возраст не может быть больше 120')
//   }
//   return 'Возраст корректен'
// }

// try {
//   checkAge(130)
// } catch (error) {
//   console.log(error)
// }

// 6.1

try {
  console.log(asdasdasd)
} catch(error) {
  console.log(error)
} finally {
  console.log('Закрываем файл')
}