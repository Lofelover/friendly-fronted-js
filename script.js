'use strict'

const user = {
    name: "Иван",
    age: 30,
    address: {
        city: "СПБ",
        street: "Невский"
    }
};

const userCopy = { ...user }


userCopy.name = 'Петр'

userCopy.address.city = "Москва"

console.log('userCopy: ', userCopy)
console.log('user: ', user)

