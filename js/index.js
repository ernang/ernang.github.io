const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const btnSwitch = document.querySelector('#switch');
const dropdown = document.getElementById("dropdown");
const submenu = document.getElementById("submenu");


navToggle.addEventListener('click', () =>{
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link =>{
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});

submenu.style.display = "none";

dropdown.addEventListener("click", (event) =>{
    if(submenu.style.display == "none"){
        submenu.style.display = "block";
    }else{
        submenu.style.display = "none";
    }
});