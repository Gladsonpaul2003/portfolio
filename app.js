
function setupInfiniteSlider() {
    const list = document.querySelector('.slider .list');
    if (list) {
        const items = list.innerHTML;
        list.innerHTML = items + items; 
    }
}

// WhatsApp Send Button
function openWhatsApp() {
    const phoneNumber = '916382628494'; 
    const message = 'Hi Gladson! I came across your portfolio and would like to connect with you.';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Initialize on page load
window.addEventListener('load', () => {
    setupInfiniteSlider();
    
    // Add WhatsApp functionality to Send button
    const sendButton = document.querySelector('.hero-info button');
    if (sendButton) {
        sendButton.addEventListener('click', openWhatsApp);
    }
    
    // Add WhatsApp functionality to Contact Me button
    const contactButton = document.querySelector('.card button');
    if (contactButton) {
        contactButton.addEventListener('click', openWhatsApp);
    }
    
    console.log('Portfolio loaded successfully!');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fix scroll-down button
const scrollDownBtn = document.querySelector('.scroll-down');
if (scrollDownBtn) {
    scrollDownBtn.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Optional: Add word-by-word animation to h1
function animateWords() {
    const h1 = document.querySelector('.hero-info h1');
    if (h1 && !h1.classList.contains('word-animation')) {
        const text = h1.textContent;
        const words = text.split(' ');
        h1.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');
        h1.classList.add('word-animation');
    }
}

// Optional: Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
        }
    });
}, observerOptions);

// Observe cards for scroll animations
document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});

// Add parallax effect to gradient image
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const gradient = document.querySelector('.image-gradient');
    if (gradient) {
        gradient.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Cursor glow effect (DISABLED - uncomment to enable)
/*
document.addEventListener('mousemove', (e) => {
    const layerBlur = document.querySelector('.layer-blur');
    if (layerBlur && window.innerWidth > 768) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        layerBlur.style.top = `${y}%`;
        layerBlur.style.right = `${100 - x}%`;
    }
});
*/

// Initialize animations on page load
window.addEventListener('load', () => {
    // Uncomment the line below if you want word-by-word animation
    // animateWords();
    
    console.log('Portfolio loaded successfully!');
});

// Add active state to navigation
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('header ul a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// CONTACT FORM SUBMISSION HANDLER
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const button = form.querySelector('button[type="submit"]');
            const originalButtonText = button.innerHTML;
            
            // Change button text to loading state
            button.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Sending...';
            button.disabled = true;
            
            // Send form data
            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Show success message
                    form.style.display = 'none';
                    successMessage.style.display = 'block';
                    
                    // Reset form
                    form.reset();
                    
                    // Hide success message and show form again after 5 seconds
                    setTimeout(() => {
                        form.style.display = 'block';
                        successMessage.style.display = 'none';
                        button.innerHTML = originalButtonText;
                        button.disabled = false;
                    }, 5000);
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Oops! There was a problem sending your message. Please try again.');
                button.innerHTML = originalButtonText;
                button.disabled = false;
            });
        });
    }
});
// ============================================
// JAVASCRIPT CODE - Add this to the end of app.js
// ============================================

// Back to top button functionality
window.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        // Scroll to top when clicked
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Smooth scroll for footer links
    document.querySelectorAll('.footer a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});


