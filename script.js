// Sacred Space Therapeutic Ministry - JavaScript

// Header hide/show on scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const scrollThreshold = 100;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > scrollThreshold) {
        if (scrollTop > lastScrollTop) {
            // Scrolling down - hide navbar
            navbar.classList.add('navbar-hidden');
        } else {
            // Scrolling up - show navbar
            navbar.classList.remove('navbar-hidden');
        }
    } else {
        // At top of page - always show navbar
        navbar.classList.remove('navbar-hidden');
    }
    
    lastScrollTop = scrollTop;
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            this.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-container')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#" or if the target doesn't exist
        if (href === '#' || href === '#!') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
});

// FAQ Accordion functionality
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
        question.addEventListener('click', function() {
            // Toggle active class
            item.classList.toggle('faq-active');
            
            // Close other FAQs (optional - comment out for multiple open)
            // faqItems.forEach(otherItem => {
            //     if (otherItem !== item) {
            //         otherItem.classList.remove('faq-active');
            //     }
            // });
        });
    }
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual backend endpoint)
        // In production, you would send this data to your server/backend
        setTimeout(() => {
            // Show success message
            document.getElementById('formSuccess').style.display = 'block';
            document.getElementById('formError').style.display = 'none';
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
            
            // Scroll to success message
            document.getElementById('formSuccess').scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                document.getElementById('formSuccess').style.display = 'none';
            }, 5000);
            
        }, 1500);
        
        // Example of how to send data to a backend (uncomment and modify for production):
        /*
        fetch('https://your-backend-api.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('formSuccess').style.display = 'block';
            document.getElementById('formError').style.display = 'none';
            contactForm.reset();
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        })
        .catch(error => {
            document.getElementById('formError').style.display = 'block';
            document.getElementById('formSuccess').style.display = 'none';
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        });
        */
    });
}

// Appointment buttons functionality
const scheduleButtons = document.querySelectorAll('.schedule-btn');
scheduleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const serviceType = this.getAttribute('data-service');
        
        // Scroll to scheduling section
        const schedulingSection = document.querySelector('.scheduling-section');
        if (schedulingSection) {
            schedulingSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
        
        // In production, you could pre-select the service type in your scheduling widget
        console.log('Selected service:', serviceType);
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.service-card, .philosophy-card, .testimonial-card, .workshop-card, .appointment-card, .info-card');
animateElements.forEach(element => {
    observer.observe(element);
});

// Form validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Add real-time validation to form fields
const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('blur', function() {
        if (this.value && !validateEmail(this.value)) {
            this.style.borderColor = '#DC3545';
        } else {
            this.style.borderColor = '';
        }
    });
}

const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('blur', function() {
        if (this.value && !validatePhone(this.value)) {
            this.style.borderColor = '#DC3545';
        } else {
            this.style.borderColor = '';
        }
    });
}

// Testimonials slider (simple version)
const testimonialSlider = document.querySelector('.testimonials-slider');
if (testimonialSlider && testimonialSlider.children.length > 3) {
    let currentIndex = 0;
    const testimonials = Array.from(testimonialSlider.children);
    const testimonialsToShow = 3;
    
    // Clone first few testimonials for infinite loop
    testimonials.slice(0, testimonialsToShow).forEach(testimonial => {
        testimonialSlider.appendChild(testimonial.cloneNode(true));
    });
    
    function slideTestimonials() {
        currentIndex++;
        const slideWidth = testimonials[0].offsetWidth + 40; // width + gap
        testimonialSlider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        testimonialSlider.style.transition = 'transform 0.5s ease-in-out';
        
        if (currentIndex >= testimonials.length) {
            setTimeout(() => {
                testimonialSlider.style.transition = 'none';
                currentIndex = 0;
                testimonialSlider.style.transform = 'translateX(0)';
            }, 500);
        }
    }
    
    // Auto-slide every 5 seconds
    // setInterval(slideTestimonials, 5000);
}

// Back to top button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.className = 'back-to-top';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--sage-green);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    display: none;
    z-index: 999;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
`;

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

backToTopButton.addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'var(--sage-dark)';
    this.style.transform = 'translateY(-5px)';
});

backToTopButton.addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'var(--sage-green)';
    this.style.transform = 'translateY(0)';
});

// Print functionality
function printPage() {
    window.print();
}

// Accessibility: Keyboard navigation for cards
const interactiveCards = document.querySelectorAll('.service-card, .workshop-card, .appointment-card');
interactiveCards.forEach(card => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            const link = this.querySelector('a, button');
            if (link) {
                link.click();
            }
        }
    });
});

// Analytics event tracking (placeholder)
function trackEvent(category, action, label) {
    // Replace with your analytics tracking code
    console.log('Event tracked:', category, action, label);
    
    // Example for Google Analytics:
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', action, {
    //         'event_category': category,
    //         'event_label': label
    //     });
    // }
}

// Track button clicks
const trackableButtons = document.querySelectorAll('.btn, .service-link');
trackableButtons.forEach(button => {
    button.addEventListener('click', function() {
        const text = this.textContent.trim();
        trackEvent('Button Click', 'click', text);
    });
});

// Lazy loading images (for better performance)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Cookie consent (basic implementation)
function showCookieConsent() {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
        // Show cookie consent banner (you can create HTML for this)
        console.log('Cookie consent needed');
    }
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    // Hide cookie banner
}

// Initialize on page load
showCookieConsent();

// Console message
console.log('%cSacred Space Therapeutic Ministry', 'color: #9CAF88; font-size: 20px; font-weight: bold;');
console.log('%cA holistic platform for healing and wellness', 'color: #5B9AA0; font-size: 14px;');
console.log('Website developed with care for body, mind, and spirit integration.');

// Prevent console errors for missing elements
window.addEventListener('error', function(e) {
    // Silently handle errors in development
    // In production, you might want to send these to an error tracking service
    console.warn('Non-critical error:', e.message);
}, true);