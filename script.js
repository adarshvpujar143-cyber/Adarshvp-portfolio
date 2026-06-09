document.querySelectorAll('.glass').forEach((e, i) => {
    e.animate([
        { opacity: 0, transform: 'translateY(30px)' },
        { opacity: 1, transform: 'translateY(0)' }
    ], {
        duration: 600 + i * 120,
        fill: 'forwards',
        easing: 'ease-out'
    })
});
