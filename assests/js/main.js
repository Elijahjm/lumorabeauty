// WhatsApp Order Configuration
const WHATSAPP_NUMBER = "+260974115510"; // Replace with your actual number

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



// Use document.addEventListener to catch the form even if it's loaded late
document.addEventListener('submit', function(e) {
    // Check if the submitted form is the newsletter form
    if (e.target && e.target.classList.contains('newsletter-form')) {
        e.preventDefault(); // This is the line that stops the Formspree page from loading
        
        const form = e.target;
        const emailInput = form.querySelector('input[type="email"]');
        const popup = document.getElementById('subscriptionSuccess');

        if (emailInput.value.trim() !== "") {
            // 1. Send to Formspree silently in the background
            fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            // 2. Show the Success Box
            if (popup) {
                popup.classList.add('show');
            }
            
            // 3. Fire the Confetti
                if (typeof confetti === "function") {
                    // This creates a burst of confetti from the center
                    var duration = 3 * 1000;
                    var animationEnd = Date.now() + duration;
                    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10001 };

                    function randomInRange(min, max) {
                    return Math.random() * (max - min) + min;
                    }

                    var interval = setInterval(function() {
                    var timeLeft = animationEnd - Date.now();

                    if (timeLeft <= 0) {
                        return clearInterval(interval);
                    }

                    var particleCount = 50 * (timeLeft / duration);
                    // since particles fall down, start a bit higher than random
                    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
                    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
                    }, 250);
                }

            // 4. Reset form
            form.reset();

            // 5. Hide after 3 seconds
            setTimeout(() => {
                if (popup) popup.classList.remove('show');
            }, 3000);
        }
    }
});