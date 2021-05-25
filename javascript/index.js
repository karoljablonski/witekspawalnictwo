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
const navigation = document.querySelector('ul');
const smartphone590width = 590;

window.addEventListener("resize", function(){
    if(window.innerWidth <= smartphone590width){
    navigation.classList.add("unshow_ul");
    burger.classList.add("show_button");
} else {
    navigation.classList.remove("unshow_ul");
    burger.classList.remove("show_button")
};
});

burger.addEventListener("click", function(){
    burger.classList.toggle("is-active");
    navigation.classList.toggle("unshow_ul");
});
//js for hamburger end