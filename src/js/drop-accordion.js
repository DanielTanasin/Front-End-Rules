const links = document.querySelectorAll('.nav-item')
const searchBtn = document.querySelector('.search')


links.forEach((link) =>{
    const panel = link.querySelector('.drop-accordion')
    const arrow = link.querySelector('.nav-expand')

    link.addEventListener('click', () =>{

        arrow.classList.toggle('nav-expand--active');
        
        if (!panel.style.maxHeight) {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        } else {
              panel.style.maxHeight = null;
          }
       
    })
})
