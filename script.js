document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('mobile-nav').classList.toggle('active');
});

const anchorTag = document.querySelector('li a:has(i.fas.fa-shopping-cart)');

if (anchorTag) {
    // This is where you set the new destination link
    anchorTag.href = "Cart.html"; 
}