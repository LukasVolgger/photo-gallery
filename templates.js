function generateStaticHTML() {
    return `
        <header class="border-spacing">
            <div class="header-title">
                <span class="header-title-text">Photo Gallery</span>
                <span class="header-title-subtext">by Lukas Volgger</span>
            </div>
            <div class="header-subcontainer">
                <div id="search-bar-container">
                    <a href="#" class="search-bar-link"><img src="./assets/img/icons/search.svg" alt="search" id="search-icon" class="icons" title="Search"></a>
                    <input type="text" placeholder="Search" class="element-height" id="search-bar">
                </div>
            </div>
        </header>
        <main id="main" class="border-spacing">
            <div id="img-container" class="img-container">
                <a href="#" id="icon-container-up" class="icon-container-up">
                    <img src="./assets/img/icons/double_up_arrow.svg" alt="Arrow Up" title="Up">
                </a>
                <div id="focus-img-container" class="d-none focus-img-container"></div>
            </div>
        </main>
    `;
}

function generateFocusImage(image) {
    return `
        <img src="${images[image].path}" alt="Focus-Image" class="focus-img" id="focus-img-${image}" onclick="event.stopPropagation()">
        <div class="icon-container close-icon" onclick="closeImageFocus()">
            <img src="./assets/img/icons/close.svg" alt="Close icon" title="Close">
        </div>
        <div class="icon-container left-arrow-icon" onclick="nextImageLeft()">
            <img src="./assets/img/icons/left_arrow.svg" alt="Arrow Left" title="Left">
        </div>
        <div class="icon-container right-arrow-icon" onclick="nextImageRight()">
            <img src="./assets/img/icons/right_arrow.svg" alt="Arrow Right" title="Right">
        </div>
    `;
}