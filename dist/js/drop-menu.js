const links = document.querySelectorAll('.nav-item');



links.forEach ((link) =>{
    link.addEventListener('mouseover', () =>{
        const menu =link.querySelector(".drop-menu");
        
    
        if(!menu?.classList.contains("drop-menu--active")&&
            !link?.classList.contains('nav-item--active')){
           menu?.classList.add("drop-menu--active");
            link?.classList.add("nav-item--active");
        }
           

        document.addEventListener('keydown' ,(e) =>{
            if(e.key ==="Escape"){
                menu.classList.remove("drop-menu--active");
                link.classList.remove("nav-item--active");
            }
        })
    }) 

    document.addEventListener("mouseout", (e) =>{
        const menu = link.querySelector(".drop-menu");

      if(!e.target.classList.contains("body") )
      menu?.classList.remove("drop-menu--active");
      link.classList.remove("nav-item--active");
    })
})


