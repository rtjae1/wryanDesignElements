const menuBTN = document.querySelector('.menu-btn');
let menuOPEN = false;
menuBTN.addEventListener('click',() => {
    if(!menuOPEN) {
        menuBTN.classList.add('open');
        menuOpen = true;
    } else {
        menuBTN.classList.remove('open');
        menuOpen = false;
    }
});