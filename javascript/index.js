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

// burger.style.display = "block";
// navigation.classList.add("unshow_ul")
//zadaniem burgera, jest na klik -> pokazać ul i zmienic sie na X, na kolejny -> unshow na ul i zmienic sie na burger. w momencie, gdy burger znika ,czyli szerokosc okna wieksza niz 550px, wszystko wraca do normy, czyli: pojawia sie normalnie ul, znika burger.

burger.addEventListener("click", ()=>{
    navigation.classList.toggle("show_ul");
    burger.classList.toggle("is-active");
})


// burger.addEventListener("click", ()=>{
//     console.log("clicked button");
//     burger.classList.toggle("is-active");
//     navigation.classList.toggle("ul_show");
// })

// window.addEventListener("resize", function(){
//     if(window.innerWidth <= smartphone590width){
//         burger.addEventListener("click", function(){
//             burger.classList.toggle("is-active");
//             navigation.classList.toggle("unshow_ul");
//         });
//     navigation.classList.add("unshow_ul");
//     burger.classList.add("show_button");
// } else {
//     navigation.classList.remove("unshow_ul");
//     burger.classList.remove("show_button");
//     burger.classList.remove("is-active");
// };
// });

//js for hamburger end