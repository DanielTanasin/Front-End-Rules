const years = document.querySelectorAll('.year-box');
const btns = document.querySelectorAll('.year');
const tabs = document.querySelectorAll('.year-box__drop');


years.forEach((year) =>{
    const btn = year.querySelector('.year');
    const tab = year.querySelector('.year-box__drop');
    
    year.addEventListener('click', () =>{
        btns.forEach((btn)=>{
            btn.classList.remove('year--active');
        })
    
        tabs.forEach((tab)=>{
            tab.classList.remove('year-box__drop--active');
        })
    
        btn.classList.add('year--active');
        tab.classList.add('year-box__drop--active');
    });
   
})



