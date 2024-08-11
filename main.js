let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuicon.onclick = () => {
    menuicon.classList.toggle("fa-xmark");
    navbar.classList.toggle('active');
}


let sections = document.querySelector('section');
let navlink = document.querySelector("header nav a");

/*-- typed js ---*/
const typed = new Typed('.multiple-text', {
    strings: ['Full-stack Developer', 'Backend Developer', 'Data Analyst'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});