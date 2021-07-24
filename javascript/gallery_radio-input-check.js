//potrzebuje pobrac input radio, sprawdzic czy jest check, i jesli tak, to odpowiedniemu labelowi o for=x nadac bgc.
//funkcja sprawdzenia ma sie wykonac na klik!
// const radio1 = document.getElementById("radio1");
// const radio2 = document.getElementById("radio2");
// const radio3 = document.getElementById("radio3");
// const label1 = document.querySelector("label[for=radio1");
// const label2 = document.querySelector("label[for=radio2");
// const label3 = document.querySelector("label[for=radio3");
// label1.style.backgroundColor = "blue"; works

// const radios = [radio1, radio2, radio3];
// const labels = [label1, label2, label3];

// const checkRadio = document.querySelector("input[name='radio']:checked");
// if(checkRadio){
//     console.log(checkRadio.id);
// }
// const test = document.querySelectorAll("label");
// for(let i = 0; i < test.length; i++){
//     test[i].addEventListener("click", ()=>{
//         if(checkRadio){
//             test[`for=${checkRadio.id}`].style.backgroundColor = "blue";
//             };
//         });
// }
// test.addEventListener("click", ()=>{
//     if(checkRadio){
//         test[`for=${checkRadio.id}`].style.backgroundColor = "blue";
//     };
// });



// function setBgc(){
//     labels.forEach((label)=>{
//         label.style.backgroundColor = "$element-color";
//     });
// };
// function radioCheck(){
// radios.forEach((radio, index)=>{
//     if(radio.checked){
//         labels[index].style.backgroundColor = "blue";
//     };
// });
// };
// labels.forEach((label)=>{
//     label.addEventListener("click", radioCheck);
//     label.addEventListener("click", setBgc);
// });


//na razie poleglem xd

//nadanie sticky na nava z galerii:
const nav_gallery = document.querySelector("nav.gallery_navigation");
window.addEventListener("scroll", ()=>{
    let navY = nav_gallery.offsetTop - nav_gallery.offsetHeight;
    let main_nav_height = nav_main_nav.offsetHeight;
    if(scrollY > navY){
        nav_gallery.classList.add("sticky");
        nav_gallery.style.top = `${main_nav_height - 5}px`;
    };
    if(scrollY <= main_nav_height){
        nav_gallery.classList.remove('sticky');
    };
});
