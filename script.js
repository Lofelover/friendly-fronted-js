'use strict'


const chainCalculator = {
    value: 0,
    add(n) {
        this.value += n
        return this
    },
    substract(n) {
        this.value -= n
        return this
    },
}

chainCalculator.add(5).substract(2)
console.log(chainCalculator.value)
