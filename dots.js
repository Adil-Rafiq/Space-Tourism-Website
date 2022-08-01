// crew page - dots

const dotList = document.querySelector('[role = "dot-list"]');
const dots = dotList.querySelectorAll('[role = "dot"]');


dotList.addEventListener('keydown', changeDotFocus);
dots.forEach( (dot) =>  {
    dot.addEventListener('click', changeDotPanel);
})


let dotFocus = 0;
function changeDotFocus(e) {
    const leftKey = 37;
    const rightKey = 39;


    if (e.keyCode == leftKey || e.keyCode == rightKey) {
        dots[dotFocus].setAttribute('tabindex', -1);   //tab index 0 means it can be selected using ketboard while -1 does the opposite

        if (e.keyCode == rightKey) {

            dotFocus = dotFocus == dots.length - 1 ? 0 : dotFocus + 1;
        }
        else {
            dotFocus = dotFocus == 0 ? dots.length - 1 : dotFocus - 1;
        }
    }

    dots[dotFocus].setAttribute('tabindex', 0);
    dots[dotFocus].focus();
}



function changeDotPanel(e) {
    // target elements
    const targetDot = e.target;
    const targetPanel = targetDot.getAttribute('aria-controls'); //targetPanel ID
    const targetImage = targetDot.getAttribute('data-image');    //targetImage ID
    

    // general elements
    const dotContainer = targetDot.parentNode;
    const mainContainer = dotContainer.parentNode;
    const panels = mainContainer.querySelectorAll('[role = "dotpanel"]');
    const images = mainContainer.querySelectorAll('[role = "dotImage"]');

    // hiding content
    dots
        .forEach((dot) => {
            dot.setAttribute('aria-selected', false);
        })

    panels
        .forEach((panel) => {
            panel.setAttribute('hidden', true);
        })

    images
        .forEach((image) => {
            image.style.display = 'none';
        })

    // show content
    targetDot.setAttribute('aria-selected', true);
    mainContainer
        .querySelector(`#${targetPanel}`)
        .removeAttribute('hidden');
    mainContainer
        .querySelector(`#${targetImage}`)
        .style.display = 'block';
}