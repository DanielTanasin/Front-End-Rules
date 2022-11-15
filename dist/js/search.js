const searchBtn = document.querySelector('.search')
const searchModal = document.querySelector('.search-modal')
const closeBtn = document.querySelector('.close-search')


const searchOpen = () =>{
searchModal.classList.add("search-modal--active")
}

const searchClose = () =>{
    searchModal.classList.remove('search-modal--active')
}

searchBtn.addEventListener("click", searchOpen)
closeBtn.addEventListener('click', searchClose)

document.addEventListener("keydown", (e)=>{
    if(e.key === "Escape"){
    searchModal.classList.remove('search-modal--active')
    }
})
