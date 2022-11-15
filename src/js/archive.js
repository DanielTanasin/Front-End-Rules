const archive = document.querySelector(".archive")
const openBtns = document.querySelector('.buttons')
const buttons = document.querySelectorAll('.mobile-tab__year')
const mobileYear = document.querySelector('.mobile-years')
const hiddenOne = document.querySelector('.hidden-div--one')
// console.log(hiddenOne);

archive.addEventListener('click', () =>{
   if(!openBtns.classList.contains('buttons--active') && (hiddenOne) ){
    openBtns.classList.add('buttons--active')
    hiddenOne.classList.remove("hidden-div--one-active");
   }else{
    openBtns.classList.remove('buttons--active')
   }
    
} )

buttons.forEach((btn) =>{
    btn.addEventListener('click',() =>{
        mobileYear.textContent = btn.textContent;

       if(btn.value == 0){ 
        hiddenOne.classList.add("hidden-div--one-active");
        openBtns.classList.remove('buttons--active')
       }else {
        hiddenOne.classList.remove("hidden-div--one-active");
       }
   
    
        
    })
})