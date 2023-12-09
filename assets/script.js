document.addEventListener('DOMContentLoaded', function () {


    document.getElementById('hamburger').addEventListener('click', () => {
        document.getElementById('mobile-nav').style.left = '0'
    });

    document.querySelector('.close').addEventListener('click', () => {
        document.getElementById('mobile-nav').style.left = '-100%'

    });

    // faqs
    var acc = document.getElementsByClassName("accordion-heading");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

});
