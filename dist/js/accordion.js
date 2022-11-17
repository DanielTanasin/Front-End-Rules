

const questions = document.querySelectorAll('.question');

const openAcc = (question) =>{
    const parent = question.parentElement;
    const panel = parent.querySelector(".answer")
    question.classList.add('question--active')
    panel.style.maxHeight = panel.scrollHeight + "px"    
}
const closeAcc = (question) =>{
    const parent = question.parentElement;
    const panel = parent.querySelector(".answer")
    question.classList.remove('question--active')
    panel.style.maxHeight = null;
}

questions.forEach((question) =>{
    const parent = question.parentElement;
    const panel = parent.querySelector(".answer")
    
    question.addEventListener('click',() =>{
        if(panel.style.maxHeight){
            closeAcc(question);
        }else{
            questions.forEach((question) => closeAcc(question));
            openAcc(question);
        }
    })
})