let totalImages = images.length; // Store the number of all images in a variable
let actualImage; // Declare a variable to track which image is opened by user
let totalFilteredImages; // Store the number of all images in a variable
let actualFilteredImage; // Declare a variable to track which image is opened by user

function render() {
    let content = document.getElementById('content');
    content.innerHTML = generateStaticHTML();
    generateImages();
}

function generateImages() {
    shuffle(images); // Randomize all images

    for (let i = 0; i < totalImages; i++) {
        let imgContainer = document.getElementById('img-container');
        imgContainer.innerHTML += generateGalleryImgHTML(i);
    }
}

function generateImageTags(i) {
    let container = document.getElementById(`tags-container-${i}`);

    for (let j = 0; j < images[i].tags.length; j++) {
        container.innerHTML += generateImageTagsHTML(i, j);
    }
}

function openImage(image) {
    showImageFocus();
    actualImage = image; // Set the actualImage variable to the given parameter number = true actual image

    let focusContainer = document.getElementById('focus-img-container');
    focusContainer.innerHTML = ''; // Clear focus container
    focusContainer.innerHTML += generateFocusImage(image);

    generateImageTags(image);
}

function openFilteredImage(image) {
    showImageFocus();
    actualFilteredImage = image; // Set the actualImage variable to the given parameter number = true actual image

    let focusContainer = document.getElementById('focus-img-container');
    focusContainer.innerHTML = ''; // Clear focus container
    focusContainer.innerHTML += generateFilteredFocusImage(image);

    generateImageTags(image);
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

            generateImageTags(actualImage);
        }
    }
}

function nextFilteredImageLeft() {
    if (actualFilteredImage !== 0) { // Avoid that the actualImage variable gets negative
        actualFilteredImage--; // actualImage is a positive number and can be decremented

        if (actualFilteredImage >= 0) { // Check if there are images left
            let focusContainer = document.getElementById('focus-img-container');
            focusContainer.innerHTML = ''; // Clear the focus container
            focusContainer.innerHTML += generateFilteredFocusImage(actualFilteredImage);

            generateImageTags(actualFilteredImage);
        }
    }
}

function nextImageRight() {
    if (actualImage !== totalImages - 1) { // Check to avoid that the actualImage variable gets higher as there are elements in the array (-1 because array starts at 0)
        actualImage++; // actualImage is less than the total images and can be incremented

        if (actualImage < totalImages) { // Check if there are images left
            let focusContainer = document.getElementById('focus-img-container');
            focusContainer.innerHTML = generateFocusImage(actualImage);

            generateImageTags(actualImage);
        }
    }
}

function nextFilteredImageRight() {
    if (actualFilteredImage !== totalFilteredImages - 1) { // Check to avoid that the actualImage variable gets higher as there are elements in the array (-1 because array starts at 0)
        actualFilteredImage++; // actualImage is less than the total images and can be incremented

        if (actualFilteredImage < totalFilteredImages) { // Check if there are images left
            let focusContainer = document.getElementById('focus-img-container');
            focusContainer.innerHTML = generateFilteredFocusImage(actualFilteredImage);

            generateImageTags(actualFilteredImage);
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

function searchFunction() {
    let searchInput = document.getElementById('search-input').value.toLowerCase();

    if (!searchInput.length == 0) {
        filteredImages = [];

        // Get container and clear it first
        let container = document.getElementById('img-container');
        container.innerHTML = '';

        // Iterate through array and generate items if the array includes the searchInput
        for (let i = 0; i < images.length; i++) {
            for (let j = 0; j < images[i].tags.length; j++) {
                if (images[i].tags[j].toLowerCase().includes(searchInput)) {
                    filteredImages.push(images[i]);
                }
            }
        }

        // When no image was found
        if (filteredImages.length < 1) {
            container.innerHTML = generateNoImagesFoundHTML();
        }

        totalFilteredImages = filteredImages.length; // Update total images

        // Render filtered images
        for (let k = 0; k < filteredImages.length; k++) {
            container.innerHTML += generateFilteredImgHTML(k);
        }

        document.getElementById('close-search-btn').style = 'display: flex'; // Make close btn visible
    }
}

function closeSearch() {
    document.getElementById('search-input').value = '';
    render();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}