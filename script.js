document.addEventListener('DOMContentLoaded', () => {
    
    // --- Hamburger Menu Logic (for all pages) ---
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }

    // --- Automatic Slideshow Logic (for all slideshows) ---
    // This code finds every slideshow container on a page and runs them independently.
    const slideshowContainers = document.querySelectorAll('.slideshow-container');
    
    if (slideshowContainers.length > 0) {
        slideshowContainers.forEach(container => {
            let slideIndex = 0;
            const slides = container.querySelectorAll('img');

            if (slides.length > 0) {
                // Make the first image active initially
                slides[0].classList.add('active');

                const showSlides = () => {
                    slides.forEach(slide => slide.classList.remove('active'));
                    slideIndex++;
                    if (slideIndex > slides.length) {
                        slideIndex = 1;
                    }
                    slides[slideIndex - 1].classList.add('active');
                };

                setInterval(showSlides, 3000); // Change image every 3 seconds
            }
        });
    }

    // --- Certificate Modal Logic (for certifications.html) ---
    const modal = document.getElementById('modal');
    
    // Only run this code if the modal element exists on the page
    if (modal) {
        const modalImage = document.getElementById('modalImage');
        const closeBtn = document.getElementById('closeBtn');

        document.querySelectorAll('.certifications-grid img').forEach(img => {
            img.addEventListener('click', () => {
                const fullSrc = img.getAttribute('data-full');
                modalImage.src = fullSrc;
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });

        const closeModal = () => {
            modal.style.display = 'none';
            modalImage.src = '';
            document.body.style.overflow = 'auto';
        };

        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                closeModal();
            }
        });
    }
});