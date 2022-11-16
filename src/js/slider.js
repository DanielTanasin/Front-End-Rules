
const next = document.querySelector('.next-box');
const  previous = document.querySelector('.previous-box');
const slideWrap = document.querySelector('.slides-wrap');
const slides = document.querySelectorAll('.slides');
const nextTwo = document.querySelector('.next-box-two');
const previousTwo = document.querySelector('.previous-box-two');
const slideWrapTwo = document.querySelector('.slides-wrap-two');
const slidesTwo = document.querySelectorAll('.slides-two');
let counter = 0;

slideWrap.style.width = slides.length * 100 + "%";


next.addEventListener('click', () =>{
    if(!next.classList.contains("next-box--active") ||
       previous.classList.contains("previous-box--active")){
        next.classList.add("next-box--active");
        previous.classList.remove("previous-box--active");
    }

    if(counter < slides.length - 1  ){
        slideWrap.style.transform += `translateX(-${100/slides.length}%)`;
        counter++;
    }else{
        return;
    }
})

previous.addEventListener("click", () =>{
    if(!previous.classList.contains("previous-box--active") ||
       next.classList.contains("next-box--active")){
        previous.classList.add("previous-box--active");
        next.classList.remove("next-box--active");
    }

    if(counter >= 1  ){
        slideWrap.style.transform += `translateX(${100/slides.length}%)`;
        counter--;
    }else{
        return;
    }

})

slideWrap.addEventListener('click', (e) =>{
    if(!e.target.classList.contains("previous-box") || !e.target.classList.contains("next-box")){
        next.classList.remove("next-box--active");
        previous.classList.remove("previous-box--active");
    }
    })
    
slideWrapTwo.style.width = slidesTwo.length * 100 + "%"


nextTwo.addEventListener('click', () =>{
    if(!nextTwo.classList.contains("next-box--active") ||
       previousTwo.classList.contains("previous-box--active")){
        nextTwo.classList.add("next-box--active");
        previousTwo.classList.remove("previous-box--active");
    }

    if(counter < slidesTwo.length - 1  ){
        slideWrapTwo.style.transform += `translateX(-${100/slidesTwo.length}%)`;
        counter++;
    }else{
        return;
    }
})

previousTwo.addEventListener("click", () =>{
    if(!previousTwo.classList.contains("previous-box--active") ||
       nextTwo.classList.contains("next-box--active")){
        previousTwo.classList.add("previous-box--active");
        nextTwo.classList.remove("next-box--active");
    }

    if(counter >= 1  ){
        slideWrapTwo.style.transform += `translateX(${100/slidesTwo.length}%)`;
        counter--;
    }else{
        return;
    }

})

slideWrapTwo.addEventListener('click', (e) =>{
    if(!e.target.classList.contains("previous-box-two") || !e.target.classList.contains("next-box=two")){
        nextTwo?.classList.remove("next-box--active");
        previousTwo?.classList.remove("previous-box--active");
    }
    })
    