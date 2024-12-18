// Toggle the navigation menu
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

// Toggle 'active' class on navbar when clicking the menu toggle
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    // Apply transition effect on the navbar toggle
    menuToggle.classList.toggle('active');
});

// Close the menu if the user clicks outside of it
document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
        navbar.classList.remove('active');
        menuToggle.classList.remove('active'); // Close the menu toggle icon
    }
});

// Smooth Scroll for anchor links inside the navbar
const anchorLinks = navbar.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - navbar.offsetHeight, // Adjust for navbar height
            behavior: 'smooth',
        });

        // Close the navbar after clicking on a link (for mobile view)
        navbar.classList.remove('active');
        menuToggle.classList.remove('active'); // Reset menu toggle icon
    });
});

// Highlight active link in navbar based on scroll position
const sections = document.querySelectorAll('section');
const links = navbar.querySelectorAll('a');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    links.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

// Close navbar on window resize if it's open (useful for mobile)
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navbar.classList.remove('active');
        menuToggle.classList.remove('active'); // Reset menu toggle icon when resizing to larger screens
    }
});

// Adding hover effect to menu toggle icon (for better interaction feedback)
menuToggle.addEventListener('mouseenter', () => {
    menuToggle.style.opacity = 0.7; // Slightly fade in on hover
});
menuToggle.addEventListener('mouseleave', () => {
    menuToggle.style.opacity = 1; // Reset opacity after hover
});
