'use strict'

// const str = "JavaScript"

// console.log(str.length)
// console.log(str[0])
// console.log(str[ str.length - 1])
// console.log(str.at(-1))
// console.log(str.at(10))
// console.log(str[10])


// const input = " приВЕТ МИР! ";

// console.log(input.trim())
// console.log(input.trim().toLowerCase())
// console.log(input.trim().toUpperCase())
// console.log(input.trimStart().trimEnd())

// const text = "Я люблю JavaScript, JavaScript — это круто!"

// console.log(text.indexOf('JavaScript', text.indexOf('JavaScript') + 1))
// console.log(text.includes('круто'))
// console.log(text.startsWith('Я'))
// console.log(text.endsWith('!'))

// const phrase = "apple, banana, apple, orange"

// const indexApple = phrase.indexOf('apple')

// console.log(phrase.indexOf('apple', indexApple + 1))
// console.log(phrase.includes('banana', 10))

// const str = "Hello, World!";

// console.log(str.substring(0, 5))
// console.log(str.slice(0, 5))

// console.log(str.substring(7))
// console.log(str.slice(7))

// console.log(str.substring(-6))
// console.log(str.slice(-6))

// const input = 'ha'

// console.log(input.repeat(3))

// const msg = "Кот — домашнее животное. Кот любит спать."

// console.log(msg.replace('Кот', 'Пёс'))
// console.log(msg.replaceAll('Кот', 'Пёс'))

// const csv = "Иван,Петр,Мария,Ольга"

// console.log(csv.split(','))
// console.log(csv.split(' '))
// console.log(csv.split(''))

// console.log(csv.split(',').join(';'))

// let s = "hello"

// console.log(s.slice(0, 1) + 'x' + s.slice(2))

function ValidateEmail(email) {
  const clearEmail = email.trim()

  if (!clearEmail) {
    return 'Ошибка'
  }

  if (!clearEmail.includes('@'))
    return 'Ошибка'

  if (clearEmail.startsWith('@'))
    return 'Ошибка'

  if (clearEmail.endsWith('.com') || clearEmail.endsWith('.ru')) {
    return 'Ошибка'
  }

  return true
}

ValidateEmail('markovilia007@gmail.com')