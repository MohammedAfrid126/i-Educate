burger = document.querySelector('.burger');
navBar = document.querySelector('.navBar');
navList = document.querySelector('.navList');
navRight = document.querySelector('.navRight');


burger.addEventListener('click', ()=>{
    navRight.classList.toggle('navVisResp');
    navList.classList.toggle('navVisResp');
    navBar.classList.toggle('navHeightResp');
});