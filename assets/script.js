document.addEventListener('DOMContentLoaded', function () {


    document.getElementById('hamburger').addEventListener('click', () => {
        document.getElementById('mobile-nav').style.left = '0'
    });

    document.querySelector('.close').addEventListener('click', () => {
        document.getElementById('mobile-nav').style.left = '-100%'

    });

    // SHOW MORE faqs
    document.querySelector('.show-more-btn').addEventListener('click', (e) => {
        const accordionWrapper = document.querySelector('.accordion-wrapper');
        if (accordionWrapper.style.height === '100%') {
            accordionWrapper.style.height = '900px';
            document.querySelector('.show-more-btn').textContent = 'Show More >'
        } else {
            accordionWrapper.style.height = '100%';
            document.querySelector('.show-more-btn').textContent = 'Show Less <'
        }
    });

    // faqs
    var acc = document.getElementsByClassName("accordion-heading");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            this.querySelector('.plus').classList.toggle('hidden')
            this.querySelector('.minus').classList.toggle('hidden')

            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

});
