burger=document.querySelector('.burger');
navbar=document.querySelector('nav')
bef=window.getComputedStyle(navbar,'::before')
right=document.querySelector('.rightop')
ul=document.querySelector('ul')
burger.addEventListener('click',()=>{
    ul.classList.toggle('vopa');
    right.classList.toggle('vopa');
    if(bef.height=='77px')
    navbar.style.setProperty('--hg','310px')
    else
    navbar.style.setProperty('--hg','77px')
})