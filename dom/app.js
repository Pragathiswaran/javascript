const number = document.querySelector("h1")
const increase = document.querySelector(".btn-increase")
const decrease = document.querySelector(".btn-decrease")

var count = 0

increase.addEventListener("click", function(){
    count++
    number.textContent = count
})

decrease.addEventListener("click", function(){
    count = count <= 0 ? 0 : count -1
    number.textContent = count
})

document.addEventListener('DOMContentLoaded', ()=>{
    count = 0 
    number.textContent = count
})

setInterval(()=>{
    count = count < 10 ? count - 1 : 0
    number.textContent = count
}, 1000)