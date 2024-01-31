let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.header .search-form');

searchBtn.onclick = () => {
    searchBtn.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searchBtn.classList.remove('fa-times');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchForm.classList.remove('active');
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}

window.addEventListener('DOMContentLoaded', function () {
    const logoImage = document.getElementById('logoImage');

    function checkScreenWidth() {
        if (window.innerWidth <= 1370 && window.innerWidth > 1070) {
            logoImage.src = 'Images/logo2.png';
            logoImage.style.width = '70px';
            logoImage.style.height = '100%';
        } else {
            logoImage.src = 'Images/logo.png';
            logoImage.style.width = '200px';
        }
    }

    checkScreenWidth();

    window.addEventListener('resize', checkScreenWidth);
});
