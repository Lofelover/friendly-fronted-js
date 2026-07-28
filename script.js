'use strict'


const year = 2026

if (year === 2026) {
  console.log(`Сейчас ${year} год!`)
} else {
  console.log('Сейчас не 2026 год (((')
}

const result = null || undefined

console.log(result)

const age = 17

const isYoung = age < 18

isYoung && console.log('Покажите паспорт')