'use strict'


// 1.1
// class User {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }

//   sayHello() {
//     console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет`)
//   }
// }

// const user1 = new User('Анна', 25)
// const user2 = new User('Иван', 30)

// user1.sayHello()
// user2.sayHello()

// 1.2

// class Book {
//   isRead = false;

//   constructor(title, author) {
//     this.title = title
//     this.author = author
//   }

//   markAsRead() {
//     this.isRead = true
//   }

//   getInfo() {
//     return `Книга: ${this.title}, Автор: ${this.author}, Прочитана: ${this.isRead ? 'да' : 'нет'}`
//   }
// }

// const user1 = new Book('Хроники заводной птицы', 'Харуки Мураками')

// user1.markAsRead()

// console.log(user1.getInfo())

// 2.1

// class Person {
//   _age

//   constructor(name, age) {
//     this.name = name
//     this._age = age
//   }

//   get age() {
//     return this._age
//   }
  
//   get canVote() {
//     return this._age >= 18 ? true : false;
//   }

//   set age(value) {
//     if (value < 0 || value > 120) {
//       throw new Error("Некорректный возраст");
//     } else {
//       this._age = value;
//     } 
//   }
// }

// const user1 = new Person('Илья', 20)

// console.log(user1.canVote)
// console.log(user1.age)

// const user2 = new Person('Маша', 16)

// console.log(user2.canVote)
// console.log(user2.age)

// 2.2

// const user3 = new Person('Илья')

// user3.age = -5

// console.log(user3.age)

// 3.1

// class BankAccount {
//   #balance = 0
//   #owner

//   constructor(owner, balance) {
//     this.#balance = balance
//     this.#owner = owner
//   }

//   deposit(amount) {
//     if (this.#balance > 0) {
//       this.#balance += amount
//     } else {
//       throw new Error("Ваш баланс меньше 0");
//     }
//   }

//   withdraw(amount) {
//     if (this.#balance - amount > 0) {
//       this.#balance -= amount
//     } else {
//       throw new Error("Ваш баланс не может стать меньше 0");
//     }
//   }

//   get balance() {
//     return this.#balance
//   }

//   getOwner() {
//     return this.#owner
//   }
// }

// const user1 = new BankAccount('Илья', 80000)

// console.log(user1.balance)
// user1.deposit(10000)
// console.log(user1.balance)
// user1.withdraw(30000)
// console.log(user1.balance)
// console.log(user1.getOwner())


// // 3.2

// class Test {
//   static _public = 'Публичный'
//   #private = 'Приватный'

//   showPrivate() {
//     return this.#private
//   }
// }

// console.log(Test._public)
// // console.log(Test.#private)
// Test._public = 'Новый_публичный'
// // Test.#private = 'Новый_приватный'

// 4.1

// class MathHelper {
//   static VERSION = '1.0'

//   static sum(a, b) {
//     return a + b
//   }

//   static multiply(a, b) {
//     return a * b
//   }
// }

// console.log(MathHelper.VERSION)
// console.log(MathHelper.sum(5, 10))
// console.log(MathHelper.multiply(5, 10))

// 4.2

// class Product {
//   static count = 0

//   constructor(name) {
//     this.name = name
//     Product.count++;
//   }

//   static getCount() {
//     return Product.count
//   }
// }

// const user1 = new Product('лол')
// const user2 = new Product('кек')
// const user3 = new Product('чебурек')

// console.log(Product.getCount())


// 5.1

// class Animal {
//   constructor(name) {
//     this.name = name
//   }

//   speak() {
//     console.log(`${this.name} издает звук`)
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log(`${this.name} говорит: Гав!`)
//   }
// }

// const animalJazz = new Dog('Бобик')
// animalJazz.speak()

// 5.2

// class Vehicle {
//   constructor(brand, year) {
//     this.brand = brand
//     this.year = year
//   }

//   getInfo() {
//     console.log(`Бренд: ${this.brand}, Год: ${this.year}`)
//   }
// }

// class Car extends Vehicle {
//   constructor(brand, year, model) {
//     super(brand, year)
//     this.model = model
//   }

//   getInfo() {
//     console.log(`Бренд: ${this.brand}, Модель: ${this.model}, Год: ${this.year}`)
//   }
// }

// const personHave = new Car('Toyota', 2020, 'Camry')

// personHave.getInfo()

// 5.3

// class Employe {
//   constructor(name, salary) {
//     this.name = name
//     this.salary = salary
//   }

//   work() {
//     console.log(`${this.name} работает`)
//   }
// }

// class Manager extends Employe {
//   constructor(name, salary, teamSize) {
//     super (name, salary)
//     this.teamSize = teamSize
//   }

//   work() {
//     super.work()
//     console.log(`${this.name} управляет командой из ${this.teamSize} человек`)
//   }
// }

// const userFromYandex = new Manager('Илья', 120000, 10)

// userFromYandex.work()

// 6.1

class User {
  #id;
  #name
  #email

  constructor(name, email) {
    this.#name = name
    this.#email = email
    this.#id = ++User.userCount;
  }

  get id() {
    return this.#id
  }

  get name() {
    return this.#name
  }

  get email() {
    return this.#email
  }

  getInfo(){
    console.log(`ID: ${this.#id}, Имя: ${this.#name}, Email: ${this.#email}`)
  }

  static userCount = 0

  static getUserInfo() {
    console.log(`Всего пользователей: ${User.userCount}`);
  }
}

class Admin extends User {
  #role = 'admin'

  getInfo() {
    console.log(`ID: ${this.id}, Имя: ${this.name}, Email: ${this.email}, Роль: ${this.#role}`)
  }

  manageUsers() {
    console.log(`Администратор ${this.name} управляет пользователями`)
  }
}

class Guest extends User {
  #role = 'guest'

  getInfo() {
    console.log(`ID: ${this.id}, Имя: ${this.name}, Email: ${this.email}, Роль: ${this.#role}`)
  }

  viewContent() {
    console.log(`Гость ${this.name} просматривает контент`)
  }
}

const person1 = new Admin('Илья', 'markovilia007@gmail.com')
const person2 = new Guest('Дамир', 'damirahmetzyanov@gmail.com')

person1.getInfo()
person2.getInfo()
User.getUserInfo()
