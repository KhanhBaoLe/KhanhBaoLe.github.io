import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/style.css';
import initScrollReveal from './scroll-reveal';

initScrollReveal();
AOS.init({
    duration: 800,
    once: false,
    mirror: true,
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card-flip');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});
