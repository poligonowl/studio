document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling with easing
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Highlight active link on scroll
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.7
    };
    const observer = new IntersectionObserver(navCheck, options);

    function navCheck(entries) {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const navLink = document.querySelector(`nav ul li a[href="#${id}"]`);
            if (entry.isIntersecting) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        });
    }

    sections.forEach(section => {
        observer.observe(section);
    });
});
