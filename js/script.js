// Dynamic menu icon
const menuBtn = document.querySelector('.navbar-toggler');

menuBtn.addEventListener('click', function() {
    const menuIcon = document.querySelector('.fa-align-right');
    const closeIcon = document.querySelector('.fa-times');

    menuIcon.classList.toggle('d-none');
    closeIcon.classList.toggle('d-none');
});