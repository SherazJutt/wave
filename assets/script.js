document.addEventListener('DOMContentLoaded', function () {


    document.getElementById('hamburger').addEventListener('click', () => {
        document.getElementById('mobile-nav').style.left = '0'
    });

    document.querySelector('.close').addEventListener('click', () => {
        document.getElementById('mobile-nav').style.left = '-100%'

    });

});
