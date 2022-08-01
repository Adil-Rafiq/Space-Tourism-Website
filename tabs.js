// destination page - tabs 
const tabList = document.querySelector('[role = "tab-list"]');
const tabs = tabList.querySelectorAll('[role = "tab"]');


// creat a function for keyboard user that can change the tabs focus ONLY

tabList.addEventListener('keydown', changeTabFocus);
tabs.forEach(function(tab) {
    tab.addEventListener('click', changeTabPanel);
})



//functions
let tabFocus = 0;
function changeTabFocus(e) {
    const leftKey = 37;
    const rightKey = 39;

    if (e.keyCode == leftKey || e.keyCode == rightKey) {
        tabs[tabFocus].setAttribute('tabindex', -1);

            if (e.keyCode == rightKey) {
                if (tabFocus == tabs.length -1) {
                    tabFocus = 0;
                }
                else {
                    tabFocus++;
                }
            }
            else {
                if (tabFocus == 0) {
                    tabFocus = tabs.length - 1;
                }
                else {
                    tabFocus--;
                }
            }
        
        
            tabs[tabFocus].setAttribute('tabindex', 0);
            tabs[tabFocus].focus(); //shifts the focus of tab
    }
}



function changeTabPanel(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute('aria-controls');
    const targetImage = targetTab.getAttribute('data-image');

    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;

    //hiding content
    mainContainer
    .querySelectorAll('[role = "tabpanel"]')
    .forEach((panel) => {
        panel.setAttribute('hidden', true);
    })
    
    //showing content
    mainContainer
    .querySelector(`#${targetPanel}`)
    .removeAttribute('hidden');
    
    //hiding content
     mainContainer
        .querySelectorAll('[role = "tabImage"]')
        .forEach((image) => {
            image.style.display = 'none';
        })

    //showing images
    mainContainer
     .querySelector(`#${targetImage}`).style.display = 'block';

    //removing focus from all tabs
    tabs
    .forEach((tab) => {
        tab.setAttribute('aria-selected', false);
    })
    //shifting focus to target tab
    targetTab.setAttribute('aria-selected', true);
}







// ------------------------------------------------------------------------------------------------------//
// my appraoch
/*
const tabList = document.querySelector('[role = "tab-list"]');
const tabs = tabList.querySelectorAll('[role = "tab"]');
const images = document.querySelectorAll('main img');

let currentTabIndex = 0;
let newIndex;


tabList.addEventListener('keydown', (e) => {
    const leftKey = 37;
    const rightKey = 39;
    let contentId; 
    let article;

        
    if (e.keyCode == leftKey || e.keyCode == rightKey) {
        tabs[currentTabIndex].setAttribute('tabindex', -1);
        tabs[currentTabIndex].setAttribute('aria-selected', false);
        images[currentTabIndex].style.display = 'none';
        contentId = tabs[currentTabIndex].getAttribute('aria-controls');
        article =  document.getElementById(`${contentId}`);
        article.setAttribute("hidden", true);
    }
    
    
    //  left key
     if (e.keyCode == leftKey) {
         if (currentTabIndex == 0) {
             newIndex = tabs.length - 1;
         }
         else {
             newIndex = currentTabIndex - 1;
         }
     }


     // right key
     if (e.keyCode == rightKey) {
         if (currentTabIndex == tabs.length - 1) {
             newIndex = 0;
         }
         else {
             newIndex = currentTabIndex + 1;
        }
    }


    newTab = tabs[newIndex];
    images[newIndex].style.display = 'block';
    newTab.setAttribute('tabindex', 0)
    newTab.setAttribute('aria-selected', true)
    contentId = newTab.getAttribute('aria-controls');
    article =  document.getElementById(`${contentId}`);
    article.removeAttribute("hidden");
    //rest
    currentTabIndex = newIndex;
})

*/