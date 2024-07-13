
    document.addEventListener('DOMContentLoaded', function() {
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        const nav = document.querySelector('nav');

        hamburgerMenu.addEventListener('click', function() {
            document.body.classList.toggle('show-nav');
        });
    });

