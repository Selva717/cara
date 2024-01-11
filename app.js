const bar = document.querySelector('.fa-bars');
const nav = document.querySelector('.nav-bar');
const close = document.querySelector('.close');

if(bar){
    bar.addEventListener('click',()=>{
        console.log("shicked");
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}