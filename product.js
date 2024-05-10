document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.querySelector(".products-container");

    productContainer.addEventListener("wheel", function(event) {
        event.preventDefault(); // Prevent default vertical scrolling behavior
        productContainer.scrollLeft += event.deltaY; // Adjust the scroll position based on the mouse wheel delta
        // Optional: Add smooth scrolling effect
        window.scrollTo({
            top: window.scrollY,
            left: productContainer.scrollLeft,
            behavior: 'smooth'
        });
    });
});
