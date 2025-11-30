document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('mobile-nav').classList.toggle('active');
});
/ Wait until the DOM is fully loaded/
document.addEventListener('DOMContentLoaded', (event) => {
    // Select all elements with the class 'product-btn'
    const buttons = document.querySelectorAll('.product-btn');

    const targetDivId = 'cart-section';

    // Iterate over each button and add a click event listener
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Prevent the default anchor link behavior (e.g., scrolling to the top)
            e.preventDefault();

            // Get the product name from the 'data-product-name' attribute
            const productName = this.getAttribute('data-product-name');

            // Define the target page URL
            const targetPage = 'product-details.html';

            // Encode the product name for safe URL transmission
            const encodedProductName = encodeURIComponent(productName);

            // Construct the final URL with a query parameter
            const redirectUrl = `${targetPage}?product=${encodedProductName}`;

            // Redirect the user to the new page
            Cart.html = redirectUrl;
        });
    });
});