const archive = document.querySelector(".archive")
const openBtns = document.querySelector('.buttons')
const buttons = document.querySelectorAll('.mobile-tab__year');
const mobileYear = document.querySelector('.mobile-years');
const hiddenOne = document.querySelector('.hidden-div--one');
const hiddenTwo = document.querySelector('.hidden-div--two');
const hiddenThree = document.querySelector('.hidden-div--three');
const hiddenFour = document.querySelector('.hidden-div--four');


archive.addEventListener('click', () =>{
   openBtns.classList.toggle('buttons--active') 
   
   if(!openBtns?.classList.contains('buttons--active') || (hiddenOne) || (hiddenTwo)  || (hiddenThree) || (hiddenFour)){
    openBtns.classList.add('buttons--active');
    hiddenOne.classList.remove("hidden-div--active");
    hiddenTwo.classList.remove("hidden-div--active");
    hiddenThree.classList.remove("hidden-div--active");
    hiddenFour.classList.remove("hidden-div--active");
   }else{
    openBtns?.classList.remove('buttons--active');
   }
    
} )

buttons.forEach((btn) =>{
    btn.addEventListener('click',() =>{
        mobileYear.textContent = btn.textContent;

       if(btn.value == 0){ 
        hiddenOne.classList.add("hidden-div--active");
        openBtns.classList.remove('buttons--active');
       }
       else if(btn.value == 1){ 
        hiddenTwo.classList.add("hidden-div--active");
        openBtns.classList.remove('buttons--active');
       }
       else if(btn.value == 2){ 
        hiddenThree.classList.add("hidden-div--active");
        openBtns.classList.remove('buttons--active');
       }
       else if(btn.value == 3){ 
        hiddenFour.classList.add("hidden-div--active");
        openBtns.classList.remove('buttons--active');
       }
       else{
        openBtns.classList.remove('buttons--active');
       }
   
        
    })
})