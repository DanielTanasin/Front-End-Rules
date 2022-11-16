const questions = document.querySelectorAll('.question');
let currentBox = null;

questions.forEach((question)=>{
    question.addEventListener('click', ()=>{
        const parent = question.parentElement;
        const panel = parent.querySelector('.answer');


        questions.forEach(question => {
            const parent = question.parentElement;
            const panel = parent.querySelector(".answer");
            question.classList.remove("question--active");
            panel.style.maxHeight = null;
        });

        if(question === currentBox){   
            questions.forEach(signleQuestion => {
                const parent = signleQuestion.parentElement;
                const panel = parent.querySelector(".answer");
                setTimeout(()=>{
                    panel.style.maxHeight = null;
                    signleQuestion.classList.remove("question--active");
                },1);
            });
        }
        
        if(!question.classList.contains('question--active')){
            question.classList.add('question--active');
        }else {
            
                question.classList.remove('question--active');
    
        }

        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        }else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }

        
        currentBox = question;
    })
    

})