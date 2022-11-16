const ham = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header__nav");



const openHam = () =>{
    ham.classList.toggle('active');
    navMenu.classList.toggle('header__nav--active');
}

ham.addEventListener('click',openHam );