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