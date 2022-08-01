// navigation toggle

const burger = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-nav');
const navLinks = document.querySelectorAll('.primary-nav li');
// const screenWidth = screen.width;
const screenWidth = window.innerWidth;


burger.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        burger.setAttribute("aria-expanded", true);

        //nav-links animation
         navLinks.forEach(function(link, index) {
            // for 35rem screen
            if (screenWidth <= 560) {
                link.style.opacity = 0;
            }
            else {
                link.style.opacity = 1;
            }

            link.style.animation = `navLinksFadeIn 500ms ease forwards ${index/5 + .3}s`;
        })
    }
    else {
        primaryNav.setAttribute("data-visible", false);
        burger.setAttribute("aria-expanded", false);
        
        navLinks.forEach(function(link, index) {
        link.style.opacity = 1;
        link.style.animation = '';
    })
}
})

