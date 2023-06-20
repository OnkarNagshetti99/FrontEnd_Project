 const container=document.querySelector('.container');

 const btnPopup = document.querySelector('.btn');

 const Closeicon = document.querySelector('.close-icon');

btnPopup.addEventListener('click', ()=> {
    container.classList.add('active-popup');
});

Closeicon.addEventListener('click', ()=> {
    container.classList.remove('active-popup');
});