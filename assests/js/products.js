/**
 * Product Filter and Search Logic
 * LUMORA Beauty
 */

// Filter Logic
function filterProducts(type, event) {
    const items = document.querySelectorAll('.product-card-item');
    const categories = document.querySelectorAll('.product-category');
    
    // Update active button state
    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
    if (event) {
        event.currentTarget.classList.add('active');
    }

    items.forEach(item => {
        if (type === 'all' || item.getAttribute('data-type') === type) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    categories.forEach(cat => {
        if (type === 'all' || cat.getAttribute('data-type') === type) {
            cat.style.display = 'block';
        } else {
            cat.style.display = 'none';
        }
    });
}

// Search Logic
document.getElementById('productSearch').addEventListener('keyup', function() {
    let value = this.value.toLowerCase();
    const items = document.querySelectorAll('.product-card-item');
    const categories = document.querySelectorAll('.product-category');
    
    items.forEach(item => {
        let text = item.getAttribute('data-name').toLowerCase();
        item.style.display = text.includes(value) ? 'block' : 'none';
    });

    // Hide categories if no products in them match search
    categories.forEach(cat => {
        const type = cat.getAttribute('data-type');
        const matchingInCat = Array.from(items).some(item => 
            item.getAttribute('data-type') === type && 
            item.style.display === 'block'
        );
        cat.style.display = matchingInCat ? 'block' : 'none';
    });
});

/**
 * Redirects the user to WhatsApp with a pre-filled message
 * Note: Update the phone number below to your actual business number
 */
function orderViaWhatsApp(productName, price) {
    const phoneNumber = "1234567890"; // REPLACE WITH YOUR PHONE NUMBER
    const message = `Hello LUMORA Beauty! I would like to order the ${productName} for ${price}. Is it available?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
}