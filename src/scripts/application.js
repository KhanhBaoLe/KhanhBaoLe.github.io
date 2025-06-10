import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/style.css';
import initScrollReveal from './scroll-reveal';

// Initialize animations with error handling
try {
    initScrollReveal();
    AOS.init({
        duration: 800,
        once: false,
        mirror: true,
        disable: 'mobile', // Disable on mobile for better performance
    });
} catch (error) {
    console.error('Error initializing animations:', error);
}

// Use event delegation for card flips
document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.grid');
    if (cardContainer) {
        cardContainer.addEventListener('click', (e) => {
            const card = e.target.closest('.card-flip');
            if (card) {
                card.classList.toggle('flipped');
            }
        });
    }
});

// Mobile menu toggle with improved accessibility
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            }
        });

        // Close mobile menu when pressing Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            }
        });
    }
});

// Add smooth scroll behavior with error handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            try {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } catch (error) {
                console.error('Error during smooth scroll:', error);
                // Fallback to regular scroll
                window.location.href = targetId;
            }
        }
    });
});
