const images = document.querySelectorAll('[role = "dotImage"]');

window.addEventListener('resize', changeImage);
window.addEventListener('DOMContentLoaded', changeImage);

function changeImage() {
    let w = window.innerWidth;
    if (w > 751) {
        images[0].src = "Files/space-tourism-website-main/starter-code/assets/technology/image-launch-vehicle-portrait.jpg";
        images[1].src = "Files/space-tourism-website-main/starter-code/assets/technology/image-spaceport-portrait.jpg";
        images[2].src = "Files/space-tourism-website-main/starter-code/assets/technology/image-space-capsule-portrait.jpg";
    }
    else {
        images[0].src = "Files/space-tourism-website-main/starter-code/assets/technology/image-launch-vehicle-landscape.jpg";
        images[1].src = "Files/space-tourism-website-main/starter-code/assets/technology/image-spaceport-landscape.jpg";
        images[2].src = "Files/space-tourism-website-main/starter-code/assets/technology/image-space-capsule-landscape.jpg";
    }
}
