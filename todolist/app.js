const btnHome = document.querySelector('.btn-navHome')
const formContainer = document.querySelector('.div1')
let count = false
btnHome.addEventListener('click', () => {
    
    if(!count){
        formContainer.classList.add('animated-open')
        formContainer.classList.remove('animated-close')
    }
    else {
        formContainer.classList.add('animated-close')
        formContainer.classList.remove('animated-open')
    }

    count = !count
})

