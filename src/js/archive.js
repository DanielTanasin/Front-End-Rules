// const archive = document.querySelector(".archive")
// const openBtns = document.querySelector('.buttons')
// const buttons = document.querySelectorAll('.mobile-tab__year');
// const mobileYear = document.querySelector('.mobile-years');
// const hiddenOne = document.querySelector('.hidden-div--one');
// const hiddenTwo = document.querySelector('.hidden-div--two');
// const hiddenThree = document.querySelector('.hidden-div--three');
// const hiddenFour = document.querySelector('.hidden-div--four');


// archive.addEventListener('click', () =>{
//    openBtns.classList.toggle('buttons--active') 
   
//    if(!openBtns?.classList.contains('buttons--active') || (hiddenOne) || (hiddenTwo)  || (hiddenThree) || (hiddenFour)){
//     openBtns.classList.add('buttons--active');
//     hiddenOne.classList.remove("hidden-div--active");
//     hiddenTwo.classList.remove("hidden-div--active");
//     hiddenThree.classList.remove("hidden-div--active");
//     hiddenFour.classList.remove("hidden-div--active");
//    }
//    else if(openBtns.classList.contains('buttons--active')){
//     openBtns.classList.remove('buttons--active');
//    }
    
 
// } )

// buttons.forEach((btn) =>{
//     btn.addEventListener('click',() =>{
//         mobileYear.textContent = btn.textContent;

//        if(btn.value == 0){ 
//         hiddenOne.classList.add("hidden-div--active");
//         openBtns.classList.remove('buttons--active');
//        }
//        else if(btn.value == 1){ 
//         hiddenTwo.classList.add("hidden-div--active");
//         openBtns.classList.remove('buttons--active');
//        }
//        else if(btn.value == 2){ 
//         hiddenThree.classList.add("hidden-div--active");
//         openBtns.classList.remove('buttons--active');
//        }
//        else if(btn.value == 3){ 
//         hiddenFour.classList.add("hidden-div--active");
//         openBtns.classList.remove('buttons--active');
//        }
//        else{
//         openBtns.classList.remove('buttons--active');
//        }
   
        
//     })
// })

const calendarYears = document.querySelectorAll('.js-calendar-tab');
const calendarTexts = document.querySelectorAll(".js-calendar__desc-box");
const calendarYearsBox = document.querySelector ('.js-calendar-years');
const btnCalendarArchive = document.querySelector('.js-calendar-archive');
const calendarDescContainer = document.querySelector('.js-calendar-desc-container');
const calendarSelectedYear = document.querySelector('.js-calendar-selected-year');


function pickYear(){
    const selectedYear = this;
    console.log(selectedYear);
    console.log(selectedYear.dataset.year)
    console.log("dataset poslednji log", calendarYears)

    calendarYears.forEach((year) =>  year.classList.remove("active"));
    selectedYear.classList.add('active');

    calendarTexts.forEach((text) => text.classList.add("hidden"));
    calendarTexts[selectedYear.dataset.year].classList.remove("hidden");

    calendarSelectedYear.textContent = selectedYear.textContent;

    if(innerWidth < 768) {
        calendarYearsBox.classList.toggle('shown');
        calendarDescContainer.classList.remove("hidden");
    } 

}


function toggleYears() {
    calendarYearsBox.classList.toggle('shown');
    calendarDescContainer.classList.toggle("hidden");
}

calendarYears.forEach((year) => year.addEventListener('click' , pickYear));
btnCalendarArchive.addEventListener('click', toggleYears);