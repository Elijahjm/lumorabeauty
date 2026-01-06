// WhatsApp Order Configuration
const WHATSAPP_NUMBER = "1234567890"; // Replace with your actual number

function orderViaWhatsApp(productName, price) {
    const message = `Hello LUMORA Beauty! ✨%0A%0A` +
                    `I would like to place an order:%0A` +
                    `🛍️ *Product:* ${productName}%0A` +
                    `💰 *Price:* ${price}%0A` +
                    `🚚 *Payment:* Cash on Delivery%0A%0A` +
                    `Please let me know the next steps!`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    
    // Smooth transition/feedback before redirecting
    console.log("Redirecting to WhatsApp for:", productName);
    window.open(whatsappURL, '_blank');
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.custom-nav');
    if (window.scrollY > 50) {
        nav.style.padding = "10px 0";
        nav.style.background = "rgba(255, 255, 255, 0.85)";
    } else {
        nav.style.padding = "15px 0";
        nav.style.background = "rgba(255, 255, 255, 0.35)";
    }
});





document.addEventListener("DOMContentLoaded", function() {
    // Load the footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(err => console.error('Error loading footer:', err));
    }
});