const links = document.querySelectorAll('.nav-item')

links.forEach ((link) =>{
    const menu =link.querySelector(".drop-menu")

    link.addEventListener('mouseover', () =>{    
        if(!menu?.classList.contains("drop-menu--active")&&
            !link?.classList.contains('nav-item--active')){
           menu?.classList.add("drop-menu--active")
            link?.classList.add("nav-item--active")
        }

        link.addEventListener("mouseleave", () =>{
            menu?.classList.remove("drop-menu--active")
            link.classList.remove("nav-item--active")
          })

        document.addEventListener('keydown' ,(e) =>{
            if(e.key ==="Escape"){
                menu.classList.remove("drop-menu--active")
                link.classList.remove("nav-item--active")
            }
        })
    }) 
})


