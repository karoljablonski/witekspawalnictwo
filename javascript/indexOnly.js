//proba zrobienia napisow floating dla little_about i little_services
//nie wiem czemu pierwsza sekcja "rozwala napisy" a skrolowanie drugiej sekcji "scala" p do jednego marginu :O
const wykonuje = document.querySelector('header.section_content>p:nth-child(1)');
const naprawiam = document.querySelector('header.section_content>p:nth-child(2)');
const regeneruje = document.querySelector('header.section_content>p:nth-child(3)');
const bramy = document.querySelector('header.services_content>p:nth-child(1)');
const maszyny = document.querySelector('header.services_content>p:nth-child(2)');
const konstrukcje = document.querySelector('header.services_content>p:nth-child(3)');
const sekcjaAbout = document.querySelector('section.little-about');
const sekcjaServices = document.querySelector('section.little_services');

window.addEventListener("scroll", function(){
    valueY = window.scrollY;
    wykonuje.style.marginLeft = .15 * valueY + "px";
    naprawiam.style.marginLeft = -.1 * valueY + "px";
    regeneruje.style.marginLeft = .1 * valueY + "px";
});
window.addEventListener("scroll", function(){
    valueY = window.scrollY;
    if(valueY > (sekcjaServices.offsetTop - window.innerHeight)){
    bramy.style.marginLeft = -.15 * (valueY - sekcjaServices.offsetTop) + "px";
    maszyny.style.marginLeft = .1 * (valueY - sekcjaServices.offsetTop) + "px";
    konstrukcje.style.marginLeft = -.1 * (valueY - konstrukcje.offsetTop) + "px";
    }
});