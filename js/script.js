let totalImages = images.length;
let actualImage;
let totalFilteredImages;
let actualFilteredImage;

/**
 * Generates the static HTML page and the gallery images
 */
function render() {
    let content = document.getElementById('content');
    content.innerHTML = generateStaticHTML();
    generateImages();
}

/**
 * Arranges the images in random order and generates each individual image
 */
function generateImages() {
    shuffle(images); // Randomize all images

    for (let i = 0; i < totalImages; i++) {
        let imgContainer = document.getElementById('img-container');
        imgContainer.innerHTML += generateGalleryImgHTML(i);
    }
}

/**
 * Generates the images tags
 * @param {integer} i Image counter
 */
function generateImageTags(i) {
    let container = document.getElementById(`tags-container-${i}`);

    for (let j = 0; j < images[i].tags.length; j++) {
        container.innerHTML += generateImageTagsHTML(i, j);
    }
}

/**
 * Opens the selected image and shows it in full screen
 * @param {integer} i Image counter 
 */
function openImage(i) {
    showImageFocus();
    actualImage = i; // Set the actualImage variable to the given parameter number = true actual image

    let focusContainer = document.getElementById('focus-img-container');
    focusContainer.innerHTML = '';
    focusContainer.innerHTML += generateFocusImage(i);

    generateImageTags(i);
}

/**
 * Opens the selected image and shows it in full screen
 * @param {integer} i Image counter 
 */
function openFilteredImage(i) {
    showImageFocus();
    actualFilteredImage = i; // Set the actualImage variable to the given parameter number = true actual image

    let focusContainer = document.getElementById('focus-img-container');
    focusContainer.innerHTML = '';
    focusContainer.innerHTML += generateFilteredFocusImage(i);

    generateImageTags(i);
}

/**
 *  Places the container for the image to be opened over the screen 
 */
function showImageFocus() {
    document.getElementById('focus-img-container').classList.remove('d-none'); // Makes container visible
    document.getElementById('icon-container-up').classList.add('d-none'); // Hides scroll-up icon
    document.body.style = 'overflow: hidden'; // Make the body not scrollable as long as focus container is shown
}

/**
 * Navigates one image to the left
 */
function nextImageLeft() {
    if (actualImage !== 0) { // Avoid that the actualImage variable gets negative
        actualImage--; // actualImage is a positive number and can be decremented

        if (actualImage >= 0) { // Check if there are images left
            let focusContainer = document.getElementById('focus-img-container');
            focusContainer.innerHTML = '';
            focusContainer.innerHTML += generateFocusImage(actualImage);

            generateImageTags(actualImage);
        }
    }
}

/**
 * Navigates one image to the left
 */
function nextFilteredImageLeft() {
    if (actualFilteredImage !== 0) { // Avoid that the actualImage variable gets negative
        actualFilteredImage--; // actualImage is a positive number and can be decremented

        if (actualFilteredImage >= 0) { // Check if there are images left
            let focusContainer = document.getElementById('focus-img-container');
            focusContainer.innerHTML = '';
            focusContainer.innerHTML += generateFilteredFocusImage(actualFilteredImage);

            generateImageTags(actualFilteredImage);
        }
    }
}

/**
 * Navigates one image to the right
 */
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

/**
 * Navigates one image to the right
 */
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

/**
 * Closes the overlay of the opened image 
 */
function closeImageFocus() {
    let focusContainer = document.getElementById('focus-img-container')
    focusContainer.innerHTML = ''
    focusContainer.classList.add('d-none');

    document.getElementById('icon-container-up').classList.remove('d-none'); // Show scroll-up icon
    document.body.style = 'overflow: auto'; // Make the body scrollable
}

/**
 * Filters all images based on the user input and displays the result
 */
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

/**
 * Closes the filtered images and displays the normal gallery
 */
function closeSearch() {
    document.getElementById('search-input').value = '';
    render();
}

/**
 * Scrolls to the top of the page
 */
function scrollToTop() {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 200)
}

/**
 * Randomly arranges the contents of an array
 * @param {Array} array 
 */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Makes the first letter of a string an uppercase letter
 * @param {string} string 
 * @returns 
 */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}