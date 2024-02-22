let btnBack = document.querySelector('backButton');
btnBack.addEventListener('click' ,()=>{
    window.history.back();
});
let btnNext = document.querySelector('nextButton');
btnNext.addEventListener('click' ,()=>{
    window.history.forward();
});