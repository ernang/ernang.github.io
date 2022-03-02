const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const btnSwitch = document.querySelector('#switch');

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