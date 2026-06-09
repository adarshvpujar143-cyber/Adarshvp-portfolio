// Initialization Configuration Flow Sequence
document.addEventListener("DOMContentLoaded", () => {
    // Dynamic Staggered Animations Entrance Cascade
    const cards = document.querySelectorAll('.glass');
    cards.forEach((card, index) => {
        card.animate([
            { opacity: 0, transform: 'translateY(35px) scale(0.99)' },
            { opacity: 1, transform: 'translateY(0) scale(1)' }
        ], {
            duration: 600,
            delay: index * 100,
            fill: 'forwards',
            easing: 'cubic-bezier(0.25, 1, 0.5, 1)'
        });
    });
});

// Tracking active theme state array index counter
let currentThemeIndex = 1;
const totalThemesCount = 5;

// Single top-right button click handler cycling through themes 1 to 5 cleanly
function cycleTheme() {
    currentThemeIndex++;
    if (currentThemeIndex > totalThemesCount) {
        currentThemeIndex = 1; // resets index state seamlessly
    }
    document.body.setAttribute('data-theme', `theme${currentThemeIndex}`);
}

// Project Modular Screen View Drawer Sliders Handlers
function openProject(projectId) {
    const targetOverlay = document.getElementById(`project-slide-${projectId}`);
    if(targetOverlay) {
        targetOverlay.classList.add('open');
        document.body.style.overflow = 'hidden'; // Prevents parent background page scrolling
    }
}

// Closes full window sliders smoothly
function closeProject(projectId) {
    const targetOverlay = document.getElementById(`project-slide-${projectId}`);
    if(targetOverlay) {
        targetOverlay.classList.remove('open');
        document.body.style.overflow = 'auto'; // Restores device viewport swipe functionality
    }
}
