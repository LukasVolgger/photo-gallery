/**
 * Generates HTML code
 * @returns HTML
 */
function generateStaticHTML() {
    return `
        <header class="border-spacing">
            <div class="header-title">
                <span class="header-title-text">Photo Gallery</span>
                <span class="header-title-subtext">by Lukas Volgger</span>
            </div>
            <div class="header-subcontainer">
                <form onsubmit="return false" id="search-bar-container">
                    <button type="submit" class="btn" onclick="searchFunction()"><img src="./assets/img/icons/search.svg" alt="search" id="search-icon" class="icons" title="Search"></button>
                    <input type="text" placeholder="Search by tags" class="element-height" id="search-input">
                    <button class="btn" id="close-search-btn" onclick="closeSearch()"><img src="./assets/img/icons/close_search.svg" alt="Close Search" class="icons" title="Close Search"></button>
                </form>
            </div>
        </header>
        <main id="main" class="border-spacing">
            <div id="img-container" class="img-container"></div>
            <button id="icon-container-up" class="btn icon-container-up" onclick="scrollToTop()">
                    <img src="./assets/img/icons/double_up_arrow.svg" alt="Arrow Up" title="Up">
            </button>
            <div id="focus-img-container" class="d-none focus-img-container"></div>
        </main>
    `;
}

/**
 * Generates HTML code
 * @returns HTML
 */
function generateGalleryImgHTML(i) {
    return `
        <div class="gallery-img-container">
            <img src="${images[i].path}" id="img-${i}" class="gallery-img" onclick="openImage(${i})" alt="${images[i].path}">
        </div>
    `;
}

/**
 * Generates HTML code
 * @returns HTML
 */
function generateImageTagsHTML(imgPool, i, j) {
    return `
        <button class="tag-btn" onclick="searchFunction('${imgPool[i].tags[j]}')">${capitalizeFirstLetter(imgPool[i].tags[j])}</button>
    `;
}

/**
 * Generates HTML code
 * @returns HTML
 */
function generateFilteredImgHTML(i) {
    return `
        <div class="gallery-img-container">
            <img src="${filteredImages[i].path}" id="img-${i}" class="gallery-img" onclick="openFilteredImage(${i})" alt="${filteredImages[i].path}">
        </div>
    `;
}

/**
 * Generates HTML code
 * @returns HTML
 */
function generateFocusImage(image) {
    return `
        <div class="focus-img-wrapper" onclick="closeImageFocus()">
            <img src="${images[image].path}" alt="Focus-Image" class="focus-img  fade-in" id="focus-img-${image}" onclick="event.stopPropagation()">
            <div class="tags-container" id="tags-container-${image}"></div>
            <button class="btn icon-container close-icon" onclick="closeImageFocus()">
                <img src="./assets/img/icons/close.svg" alt="Close icon" title="Close">
            </button>
            <button class="btn icon-container left-arrow-icon" onclick="nextImageLeft(); event.stopPropagation()">
                <img src="./assets/img/icons/left_arrow.svg" alt="Arrow Left" title="Left">
            </button>
            <button class="btn icon-container right-arrow-icon" onclick="nextImageRight(); event.stopPropagation()">
                <img src="./assets/img/icons/right_arrow.svg" alt="Arrow Right" title="Right">
            </button>
        </div>
    `;
}

/**
 * Generates HTML code
 * @returns HTML
 */
function generateFilteredFocusImage(image) {
    return `
        <div class="focus-img-wrapper">
            <img src="${filteredImages[image].path}" alt="Focus-Image" class="focus-img fade-in" id="focus-img-${image}" onclick="event.stopPropagation()">
            <div class="tags-container" id="tags-container-${image}"></div>
            <button class="btn icon-container close-icon" onclick="closeImageFocus()">
                <img src="./assets/img/icons/close.svg" alt="Close icon" title="Close">
            </button>
            <button class="btn icon-container left-arrow-icon" onclick="nextFilteredImageLeft(); event.stopPropagation()">
                <img src="./assets/img/icons/left_arrow.svg" alt="Arrow Left" title="Left">
            </button>
            <button class="btn icon-container right-arrow-icon" onclick="nextFilteredImageRight(); event.stopPropagation()">
                <img src="./assets/img/icons/right_arrow.svg" alt="Arrow Right" title="Right">
            </button>
        </div>
    `;
}

/**
 * Generates HTML code
 * @returns HTML
 */
function generateNoImagesFoundHTML() {
    return `
        <div class="not-found-container">
            <h2 class="not-found-text">NO IMAGES FOUND!</h2>
            <button class="btn back-btn" onclick="closeSearch()"><img src="./assets/img/icons/back.svg" alt="Back" title="Back" class="icons back-icon"></button>
        </div>
    `;
}