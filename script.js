// 'use strict'

// 1.1-2

// const headerElement = document.getElementById('main-title')
// const textElement = document.getElementById('description')

// console.log(mainTitle)
// console.log(description)

// 2.1

// const firstCard = document.querySelector('.card')

// console.log(firstCard)

// const firstTitle = document.querySelector('.card-title')

// console.log(firstTitle)

// const firstParagraph = document.querySelector('.card-text')

// console.log(firstParagraph)


// 2.2

// const firstCard = document.querySelectorAll('.card')

// console.log(firstCard.length)

// const firstTitle = document.querySelectorAll('.card-title')

// firstTitle.forEach((element) => {
//   console.log(element.textContent)
// })

// const firstParagraph = document.querySelectorAll('.card-text')

// firstParagraph.forEach((element) => {
//   console.log(element.textContent)
// })

// 2.3

// const firstCard = document.querySelector('.card .card-title')

// console.log(firstCard)

// const firstTitle = document.querySelector('.card .card-text')

// console.log(firstTitle)

// const firstParagraph = document.querySelector('.card:nth-child(2)')

// console.log(firstParagraph)

// 3.1

// const containerElement = document.getElementById('container')

// console.log(containerElement)

// const allElementInContainer = containerElement.querySelectorAll('.text')

// console.log(allElementInContainer)
// console.log(allElementInContainer.length)

// const otherElement = document.getElementById('other')

// console.log(otherElement)

// const allElementInOther = otherElement.querySelectorAll('.text')

// console.log(allElementInOther)
// console.log(allElementInOther.length)

// 4.1

// const headerElement = document.querySelector('.title')

// const closestCardElement = headerElement.closest('.card')

// console.log(closestCardElement.dataset.id)

// console.log(headerElement.closest('unknown'))

// 6.1

// const liveList = document.getElementsByTagName("li");
// const staticList = document.querySelectorAll("li");
// console.log(liveList.length);   // ?
// console.log(staticList.length); // ?

// const newLi = document.createElement("li");
// newLi.textContent = "Элемент 3";
// document.getElementById("list").appendChild(newLi);

// console.log(liveList.length);   // ?
// console.log(staticList.length); // ?

// 7.1

const headerElement = document.getElementById("header");
const itemElement = document.querySelectorAll(".item");
const buttonElement = document.querySelector(".btn");
const modalElement = document.querySelector(".modal");

