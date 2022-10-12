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
                    <input type="text" placeholder="Search" class="element-height" id="search-input">
                    <button class="btn" id="close-search-btn" onclick="closeSearch()"><img src="./assets/img/icons/close_search.svg" alt="Close Search" class="icons" title="Close Search"></button>
                </form>
            </div>
        </header>
        <main id="main" class="border-spacing">
            <div id="img-container" class="img-container"></div>
            <a href="#" id="icon-container-up" class="icon-container-up">
                    <img src="./assets/img/icons/double_up_arrow.svg" alt="Arrow Up" title="Up">
            </a>
            <div id="focus-img-container" class="d-none focus-img-container"></div>
        </main>
    `;
}

function generateFocusImage(image) {
    return `
        <div class="wrapper">
            <img src="${images[image].path}" alt="Focus-Image" class="focus-img" id="focus-img-${image}" onclick="event.stopPropagation()">
            <div class="tags-container" id="tags-container-${image}"></div>
            <div class="icon-container close-icon" onclick="closeImageFocus()">
                <img src="./assets/img/icons/close.svg" alt="Close icon" title="Close">
            </div>
            <div class="icon-container left-arrow-icon" onclick="nextImageLeft()">
                <img src="./assets/img/icons/left_arrow.svg" alt="Arrow Left" title="Left">
            </div>
            <div class="icon-container right-arrow-icon" onclick="nextImageRight()">
                <img src="./assets/img/icons/right_arrow.svg" alt="Arrow Right" title="Right">
            </div>
        </div>
    `;
}

function generateImageTagsHTML(i, j) {
    return `
        <span class="tag">${capitalizeFirstLetter(images[i].tags[j])}</span>
    `;
}