const ham = document.querySelector(".hamburger")
const navMenu = document.querySelector(".header__nav")
console.log(navMenu);


const openHam = () =>{
    ham.classList.toggle('active')
    navMenu.classList.toggle('header__nav--active')
}

ham.addEventListener('click',openHam )