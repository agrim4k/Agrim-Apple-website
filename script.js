document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('mobile-nav').classList.toggle('active');
});

const anchorTag = document.querySelector('li a:has(i.fas.fa-shopping-cart)');

if (anchorTag) {
    // This is where you set the new destination link
    anchorTag.href = "Cart.html"; 
}
// ONE consistent key for both saving and loading
const SHOP_KEY = 'apple_india_replica_2025'; // Ensure this is here!

document.addEventListener('click', (e) => {
    const btn = e.target.closest('.product-btn, .hero-btn');
    if (!btn) return;

    const btnText = btn.innerText.toLowerCase().trim();
    console.log("Button clicked:", btnText); // Debugging log

    if (btnText === 'buy' || btnText === 'buy now') {
        const pName = btn.getAttribute('data-product-name');
        console.log("Product detected:", pName); // Debugging log
        
        if (pName) {
            e.preventDefault();
            let cart = JSON.parse(localStorage.getItem(SHOP_KEY)) || [];

            const exists = cart.find(item => item.name === pName);
            if (exists) {
                exists.quantity += 1;
            } else {
                cart.push({ name: pName, quantity: 1 });
            }

            localStorage.setItem(SHOP_KEY, JSON.stringify(cart));
            console.log("Cart saved. Redirecting..."); // Debugging log
            
            window.location.href = 'Cart.html';
        } else {
            console.error("This button is missing the data-product-name attribute!");
        }
    }
});

























document.addEventListener('DOMContentLoaded', () => {
    // Select all buttons with the class 'product-btn' or 'buy-now-btn'
    const buyButtons = document.querySelectorAll('.product-btn, .buy-now-btn');

    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default anchor/button action

            // Get product details from data attributes
            const productName = button.getAttribute('data-product-name');
            const productPrice = parseFloat(button.getAttribute('data-product-price'));

            // Retrieve current cart items from localStorage, or initialize an empty array
            let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

            // Check if the product is already in the cart
            const existingProductIndex = cart.findIndex(item => item.name === productName);

            if (existingProductIndex > -1) {
                // If yes, increment the quantity
                cart[existingProductIndex].quantity += 1;
            } else {
                // If no, add the new product to the cart array
                cart.push({
                    name: productName,
                    price: productPrice,
                    quantity: 1
                });
            }

            // Save the updated cart array back to localStorage
            localStorage.setItem('shoppingCart', JSON.stringify(cart));

            // Redirect to the Cart page
            window.location.href = 'Cart.html';
        });
    });
});
 
document.addEventListener('DOMContentLoaded', () => {
    // Select all buttons with the class 'product-btn' or 'buy-now-btn'
    const buyButtons = document.querySelectorAll('.product-btn, .buy-now-btn');

    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default anchor/button action

            // Get product details from data attributes
            const productName = button.getAttribute('data-product-name');
            const productPrice = parseFloat(button.getAttribute('data-product-price'));

            // Retrieve current cart items from localStorage, or initialize an empty array
            let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

            // Check if the product is already in the cart
            const existingProductIndex = cart.findIndex(item => item.name === productName);

            if (existingProductIndex > -1) {
                // If yes, increment the quantity
                cart[existingProductIndex].quantity += 1;
            } else {
                // If no, add the new product to the cart array
                cart.push({
                    name: productName,
                    price: productPrice,
                    quantity: 1
                });
            }

            // Save the updated cart array back to localStorage
            localStorage.setItem('shoppingCart', JSON.stringify(cart));

            // Redirect to the Cart page
            window.location.href = 'Cart.html';
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Retrieve the cart data from localStorage
    const cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

    let totalSum = 0;

    // Display cart items and calculate the total sum
    cart.forEach(item => {
        const listItem = document.createElement('li');
        const itemTotalPrice = item.price * item.quantity;
        listItem.textContent = `${item.name} x ${item.quantity} - $${itemTotalPrice.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);

        totalSum += itemTotalPrice;
    });

    // Display the total sum
    cartTotalElement.textContent = totalSum.toFixed(2);
});


const switcher = document.querySelector(".switcher");

const trackPrevious = (el) => {
  const radios = el.querySelectorAll('input[type="radio"]');
  let previousValue = null;

  // init first select
  const initiallyChecked = el.querySelector('input[type="radio"]:checked');
  if (initiallyChecked) {
    previousValue = initiallyChecked.getAttribute("c-option");
    el.setAttribute("c-previous", previousValue);
  }

  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.checked) {
        el.setAttribute("c-previous", previousValue ?? "");
        previousValue = radio.getAttribute("c-option");
      }
    });
  });
};

trackPrevious(switcher);


