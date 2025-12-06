const burger = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');

burger.addEventListener('click', () => {
    menu.style.left = "0";
});

closeBtn.addEventListener('click', () => {
    menu.style.left = "-100%";
});
