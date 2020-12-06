//nadanie fixed dla nava po zeskrolowaniu .information
const nav_main_nav = document.querySelector('.main_nav');
const infoY = document.querySelector('.information');
window.addEventListener("scroll", function(){
    let navY = nav_main_nav.offsetTop;
    let infoHeight = infoY.offsetHeight;
    if(scrollY > navY){
        nav_main_nav.classList.add('fixed');
    };
    if(scrollY <= infoHeight){
        nav_main_nav.classList.remove('fixed');
    };
});




//tutaj cos pokombinowac, czy burger swoj czy z tej durnej biblioteki XD

//js for hamburger start
// const burger = document.querySelector('button.hamburger');
// burger.addEventListener("click", function(){
//     burger.classList.toggle("is-active");
//js for hamburger end

// });