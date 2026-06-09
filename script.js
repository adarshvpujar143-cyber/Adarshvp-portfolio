// Initialization Execution Sequence
document.addEventListener("DOMContentLoaded", () => {
    // Structural Staggered Content Entrance Cascade
    const cards = document.querySelectorAll('.glass');
    cards.forEach((card, index) => {
        card.animate([
            { opacity: 0, transform: 'translateY(35px) scale(0.99)' },
            { opacity: 1, transform: 'translateY(0) scale(1)' }
        ], {
            duration: 700,
            delay: index * 100,
            fill: 'forwards',
            easing: 'cubic-bezier(0.25, 1, 0.5, 1)'
        });
    });
});

// Dynamic Active Theme Panel Switcher Controller
function setTheme(themeName) {
    document.body.setAttribute('data-theme', themeName);
    
    // Switch Active Button Indicator Status
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Reference Active Click Event Source Target
    const eventTarget = window.event ? window.event.currentTarget : null;
    if(eventTarget) {
        eventTarget.classList.add('active');
    }
}

// Fullscreen Page Slide-In Routing Transitions Handlers
function openProject(projectId) {
    const targetOverlay = document.getElementById(`project-slide-${projectId}`);
    if(targetOverlay) {
        targetOverlay.classList.add('open');
        document.body.style.overflow = 'hidden'; // Locks body scrolling beneath the slide layout
    }
}

function closeProject(projectId) {
    const targetOverlay = document.getElementById(`project-slide-${projectId}`);
    if(targetOverlay) {
        targetOverlay.classList.remove('open');
        document.body.style.overflow = 'auto'; // Restores scrolling safety variables
    }
}

// Internal Navigation Smooth Scroll Target Controller
document.querySelectorAll('.nav-links a, .hero-actions a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const destinationSection = document.querySelector(targetId);
        
        if (destinationSection) {
            destinationSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
