const slide = document.querySelectorAll('.slide')
const prevButton = document.querySelector('.prev-btn')
const nextButton = document.querySelector('.next-btn')
let count = 0;

// Add event listener to next button
nextButton.addEventListener('click',()=>{

    if(count < slide.length - 1){
        slide[count].classList.remove('active')
        count++
        slide[count].classList.add('active')
    } else {
        slide[count].classList.remove('active')
        count = 0
        slide[count].classList.add('active')
    }
})

prevButton.addEventListener('click',()=>{
    if(count > 0){
        slide[count].classList.remove('active')
        count--
        slide[count].classList.add('active')
    } else {
        slide[count].classList.remove('active')
        count = slide.length - 1
        slide[count].classList.add('active')
    }
})