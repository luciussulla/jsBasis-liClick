const btn = document.querySelector('button')
btn.addEventListener('click', add)
const myList = document.querySelector('ul')
let i = 0

function add() {
    i++
    const myLi = document.createElement('li')
    myLi.innerText = i + " some_li"
    myList.appendChild(myLi)
}