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

//hamburger: pojawianie się na zmianę wielkości okna; klik na burger powoduje odpalenie nav;
const burger = document.querySelector('button.hamburger');
const navigation = document.querySelector('div.main_nav_wrapper>ul');


//zadaniem burgera, jest na klik -> pokazać ul i zmienic sie na X, na kolejny -> unshow na ul i zmienic sie na burger. w momencie, gdy burger znika ,czyli szerokosc okna wieksza niz 550px, wszystko wraca do normy, czyli: pojawia sie normalnie ul, znika burger - mediaqueries css.

burger.addEventListener("click", ()=>{
    navigation.classList.toggle("show_ul");
    burger.classList.toggle("is-active");
})

//js for hamburger end