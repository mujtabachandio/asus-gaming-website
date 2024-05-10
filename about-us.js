// Function to check if an element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add fade-in animation to elements
function fadeIn(element) {
    element.classList.add('fade-in');
}

// Function to handle scroll event
function handleScroll() {
    const aboutSection = document.getElementById('about');

    if (isInViewport(aboutSection)) {
        aboutSection.classList.add('show');
    }
}

// Event listener for scroll event
window.addEventListener('scroll', handleScroll);
