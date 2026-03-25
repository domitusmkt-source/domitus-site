// Initialize Lucide icons
lucide.createIcons();

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        mobileMenu.classList.remove('hidden');
        mobileMenuBtn.innerHTML = '<i data-lucide="x"></i>';
    } else {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.innerHTML = '<i data-lucide="menu"></i>';
    }
    lucide.createIcons();
}

mobileMenuBtn.addEventListener('click', toggleMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (isMenuOpen) toggleMenu();
    });
});

// Intersection Observer for Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: stop observing once animated
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with animation classes
document.querySelectorAll('.fade-in, .fade-in-up, .scale-in, .stagger-container').forEach(el => {
    observer.observe(el);
});

// Trigger initial animations for elements already in viewport on load
setTimeout(() => {
    document.querySelectorAll('.fade-in, .fade-in-up, .scale-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
}, 100);
