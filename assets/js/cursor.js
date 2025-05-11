document.addEventListener('DOMContentLoaded', function() {
    // Create cursor elements
    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    
    const cursorCircle = document.createElement('div');
    cursorCircle.classList.add('cursor-circle');
    
    // Add cursor elements to body
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorCircle);
    
    // Track mouse movement
    document.addEventListener('mousemove', function(e) {
        // Move cursor elements to mouse position with slight delay
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        
        // Add slight delay for circle follower
        setTimeout(function() {
            cursorCircle.style.left = e.clientX + 'px';
            cursorCircle.style.top = e.clientY + 'px';
        }, 50);
    });
    
    // Hide cursor when mouse leaves window
    document.addEventListener('mouseout', function() {
        cursorDot.classList.add('hidden-cursor');
        cursorCircle.classList.add('hidden-cursor');
    });
    
    document.addEventListener('mouseover', function() {
        cursorDot.classList.remove('hidden-cursor');
        cursorCircle.classList.remove('hidden-cursor');
    });
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn-style-one, .btn-style-two, input, textarea, .service-block_one-inner, .gallery-block_one-inner, .testimonial-block_one-inner, .journal-block_one-inner, .awards-block_one-inner, .team-block_one-inner, h1, h2, h3, h4, h5, h6');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorCircle.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorCircle.style.borderColor = 'rgba(255, 255, 255, 0.5)';
            cursorCircle.style.backgroundColor = 'rgba(186, 2, 74, 0.2)';
        });
        
        element.addEventListener('mouseleave', function() {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorCircle.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorCircle.style.borderColor = 'var(--main-color)';
            cursorCircle.style.backgroundColor = 'rgba(186, 2, 74, 0.1)';
        });
    });
});
