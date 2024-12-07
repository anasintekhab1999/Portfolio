// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50,  // Adjust for fixed header
            behavior: 'smooth'
        });
    });
});

// Fade-in animation when sections are scrolled into view
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.fade-in');
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if (scrollPosition > section.offsetTop) {
            section.classList.add('fade-in-visible');
        }
    });
});
