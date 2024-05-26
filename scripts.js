document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Image carousel for the banner
    const bannerImages = ['κξξξ.png', 'another-banner-image.png']; // Add paths to more banner images
    let currentBannerIndex = 0;
    const bannerElement = document.querySelector('.banner img');
    
    function changeBannerImage() {
        currentBannerIndex = (currentBannerIndex + 1) % bannerImages.length;
        bannerElement.src = bannerImages[currentBannerIndex];
    }

    setInterval(changeBannerImage, 5000); // Change image every 5 seconds

    // Animations for sections when they come into view
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
