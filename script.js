let images = [
    './assets/img/berries.jpg',
    './assets/img/cave.jpg',
    './assets/img/deer.jpg',
    './assets/img/fern.jpg',
    './assets/img/fire.jpg',
    './assets/img/flower_1.jpg',
    './assets/img/flower_2.jpg',
    './assets/img/forest_1.jpg',
    './assets/img/forest_2.jpg',
    './assets/img/fox.jpg',
    './assets/img/honey_bee.jpg',
    './assets/img/leaf.jpg',
    './assets/img/leaves_1.jpg',
    './assets/img/leaves_2.jpg',
    './assets/img/leaves_3.jpg',
    './assets/img/leaves_4.jpg',
    './assets/img/leaves_5.jpg',
    './assets/img/leaves_6.jpg',
    './assets/img/lion.jpg',
    './assets/img/lotus.jpg',
    './assets/img/moon.jpg',
    './assets/img/mountain_1.jpg',
    './assets/img/mountain_2.jpg',
    './assets/img/mushroom_1.jpg',
    './assets/img/mushroom_2.jpg',
    './assets/img/nature.jpg',
    './assets/img/nettle.jpg',
    './assets/img/owl.jpg',
    './assets/img/puma.jpg',
    './assets/img/raccoon.jpg',
    './assets/img/spider_web_1.jpg',
    './assets/img/spider_web_2.jpg',
    './assets/img/sundew_1.jpg',
    './assets/img/sundew_2.jpg',
    './assets/img/swan.jpg',
    './assets/img/waterfall.jpg'
];

let totalImages = images.length; // Store the number of all images in a variable
let actualImage; // Declare a variable to track which image is opened by user

function render() {
    let content = document.getElementById('content');
    content.innerHTML = generateStaticHTML();
    generateImages();
}

function generateImages() {
    shuffle(images); // Randomize all images

    for (let i = 0; i < totalImages; i++) {
        let imgContainer = document.getElementById('img-container');

        imgContainer.innerHTML += `
            <img src="${images[i]}" id="img-${i}" class="gallery-img" onclick="openImage(${i})" alt="${images[i]}">
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