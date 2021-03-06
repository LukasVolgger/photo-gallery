let images = [
    './img/berries.jpg',
    './img/cave.jpg',
    './img/deer.jpg',
    './img/fern.jpg',
    './img/fire.jpg',
    './img/flower_1.jpg',
    './img/flower_2.jpg',
    './img/forest_1.jpg',
    './img/forest_2.jpg',
    './img/fox.jpg',
    './img/honey_bee.jpg',
    './img/leaf.jpg',
    './img/leaves_1.jpg',
    './img/leaves_2.jpg',
    './img/leaves_3.jpg',
    './img/leaves_4.jpg',
    './img/leaves_5.jpg',
    './img/leaves_6.jpg',
    './img/lion.jpg',
    './img/lotus.jpg',
    './img/moon.jpg',
    './img/mountain_1.jpg',
    './img/mountain_2.jpg',
    './img/mushroom_1.jpg',
    './img/mushroom_2.jpg',
    './img/nature.jpg',
    './img/nettle.jpg',
    './img/owl.jpg',
    './img/puma.jpg',
    './img/raccoon.jpg',
    './img/spider_web_1.jpg',
    './img/spider_web_2.jpg',
    './img/sundew_1.jpg',
    './img/sundew_2.jpg',
    './img/swan.jpg',
    './img/waterfall.jpg'
];

let totalImages = images.length; // Store the number of all images in a variable
let actualImage; // Declare a variable to track which image is opened by user

function render() {
    let content = document.getElementById('content');
    content.innerHTML = generateStaticHTML();
    generateImages();
}

function generateStaticHTML() {
    return `
        <header class="border-spacing">
            <div class="header-title">
                <span class="header-title-text">Fotogallerie</span>
                <span class="header-title-subtext">by Lukas Volgger</span>
            </div>
            <div class="header-subcontainer">
                <div id="search-bar-container">
                    <a href="#" class="search-bar-link"><img src="./img/icons/search.svg" alt="search" id="search-icon" class="icons"></a>
                    <input type="text" placeholder="Suche" class="element-height" id="search-bar">
                </div>
            </div>
        </header>
        <main id="main" class="border-spacing">
            <div id="img-container" class="img-container">
                <a href="#" id="icon-container-up" class="icon-container-up">
                    <img src="./img/icons/double_up_arrow.svg">
                </a>
                <div id="focus-img-container" class="d-none focus-img-container"></div>
            </div>
        </main>
    `;
}

function generateImages() {
    shuffle(images); // Randomize all images

    for (let i = 0; i < totalImages; i++) {
        let imgContainer = document.getElementById('img-container');

        imgContainer.innerHTML += `
            <img src="${images[i]}" id="img-${i}" class="gallery-img" onclick="openImage(${i})">
        `;
    }
}

function openImage(image) {
    showImageFocus();
    actualImage = image; // Set the actualImage variable to the given parameter number = true actual image

    let focusContainer = document.getElementById('focus-img-container');
    focusContainer.innerHTML = ''; // Clear focus container
    focusContainer.innerHTML += generateFocusImage(image);
}

function showImageFocus() {
    document.getElementById('focus-img-container').classList.remove('d-none'); // Makes container visible
    document.getElementById('icon-container-up').classList.add('d-none'); // Hides scroll-up icon
    document.body.style = 'overflow: hidden'; // Make the body not scrollable as long as focus container is shown
}

function nextImageLeft() {
    if (actualImage !== 0) { // Avoid that the actualImage variable gets negative
        actualImage--; // actualImage is a positive number and can be decremented

        if (actualImage >= 0) { // Check if there are images left
            let focusContainer = document.getElementById('focus-img-container');
            focusContainer.innerHTML = ''; // Clear the focus container
            focusContainer.innerHTML += generateFocusImage(actualImage);
        }
    }
}

function nextImageRight() {
    if (actualImage !== totalImages - 1) { // Check to avoid that the actualImage variable gets higher as there are elements in the array (-1 because array starts at 0)
        actualImage++; // actualImage is less than the total images and can be incremented

        if (actualImage < totalImages) { // Check if there are images left
            let focusContainer = document.getElementById('focus-img-container');
            focusContainer.innerHTML = generateFocusImage(actualImage);
        } else {
            // Nothing should happen
        }
    }
}

function generateFocusImage(image) {
    return `
        <img src="${images[image]}" alt="Focus-Image" class="focus-img" id="focus-img-${image}" onclick="event.stopPropagation()">
        <div class="icon-container close-icon" onclick="closeImageFocus()">
            <img src="./img/icons/close.svg">
        </div>
        <div class="icon-container left-arrow-icon" onclick="nextImageLeft()">
            <img src="./img/icons/left_arrow.svg">
        </div>
        <div class="icon-container right-arrow-icon" onclick="nextImageRight()">
            <img src="./img/icons/right_arrow.svg">
        </div>
    `;
}

function closeImageFocus() {
    let focusContainer = document.getElementById('focus-img-container')
    focusContainer.innerHTML = ''; // Clear focus container
    focusContainer.classList.add('d-none'); // Hide focus container

    document.getElementById('icon-container-up').classList.remove('d-none'); // Show scroll-up icon
    document.body.style = 'overflow: auto'; // Make the body scrollable
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}