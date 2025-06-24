const mySlider = document.querySelector('.slider')
const myCircle = document.querySelector('.circle')
const myH3_1 = document.querySelectorAll('.h3_1')
const myH3_2 = document.querySelectorAll('.h3_2')

let isFirstVisible = true

mySlider.addEventListener('click', function(){
    if(isFirstVisible){
        myCircle.style.float = 'left'
        myH3_1.forEach(h3_1 => h3_1.style.display = 'none')
        myH3_2.forEach(h3_2 => h3_2.style.display = 'block')
    }else{
        myCircle.style.float = 'right'
        myH3_1.forEach(h3_1 => h3_1.style.display = 'block')
        myH3_2.forEach(h3_2 => h3_2.style.display = 'none')
    }

    isFirstVisible = !isFirstVisible
})