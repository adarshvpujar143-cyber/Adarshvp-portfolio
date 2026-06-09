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

// Real-time Palette Customization Switch Controller Engine
function setTheme(themeName) {
    document.body.setAttribute('data-theme', themeName);
    
    // Clean indicator selection tags
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Set selected element highlight state smoothly
    const eventTarget = window.event ? window.event.currentTarget : null;
    if(eventTarget) {
        eventTarget.classList.add('active');
    }
}

// Project Modular Screen View Drawer Sliders Handlers
function openProject(projectId) {
    const targetOverlay = document.getElementById(`project-slide-${projectId}`);
    if(targetOverlay) {
        targetOverlay.classList.add('open');
        document.body.style.overflow = 'hidden'; // Prevents parent grid background viewport text scrolling
    }
}

function closeProject(projectId) {
    const targetOverlay = document.getElementById(`project-slide-${projectId}`);
    if(targetOverlay) {
        targetOverlay.classList.remove('open');
        document.body.style.overflow = 'auto'; // Restores active device swipe variables
    }
}
