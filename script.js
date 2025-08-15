// Redirect protection - ensure only Coming Soon page is accessible
(function() {
    const currentPath = window.location.pathname;
    const allowedPaths = ['/', '/index.html', '/coming-soon.html'];
    
    if (!allowedPaths.includes(currentPath)) {
        window.location.replace('/');
        return;
    }
})();

// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    const body = document.body;

    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply the saved theme
    if (savedTheme === 'light') {
        body.removeAttribute('data-theme');
        themeIcon.className = 'fas fa-moon';
        themeText.textContent = 'Dark Mode';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
        themeText.textContent = 'Light Mode';
    }

    // Theme toggle event listener
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            // Switch to light mode
            body.removeAttribute('data-theme');
            themeIcon.className = 'fas fa-moon';
            themeText.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light');
        } else {
            // Switch to dark mode
            body.setAttribute('data-theme', 'dark');
            themeIcon.className = 'fas fa-sun';
            themeText.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark');
        }
        
        // Add a subtle animation to the button
        themeToggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    });

    // Add hover effects to icon items
    const iconItems = document.querySelectorAll('.icon-item');
    iconItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'scale(1.2) rotate(5deg)';
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Add smooth scroll behavior for any future navigation
    document.documentElement.style.scrollBehavior = 'smooth';

    // Optional: Add a subtle parallax effect to the main title
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const mainTitle = document.querySelector('.main-title');
        if (mainTitle) {
            mainTitle.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });

    // Add keyboard accessibility for theme toggle
    themeToggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            themeToggle.click();
        }
    });
});
