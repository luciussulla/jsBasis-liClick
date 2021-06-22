const btn = document.createElement('button')
btn.innerText  = "Klik"
const lis = document.querySelectorAll('li')
btn.addEventListener('click', increase)
const body = document.querySelector('body')
body.appendChild(btn)

let fontSize = 16
function increase(){
    console.log("inisde incd")
    fontSize += 2
    lis.forEach(li => {
        li.style.fontSize = fontSize + "px"
    })
}
/* one two */ 

btn2
const ul2 = document.querySelector('.two')
