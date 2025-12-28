// Profile page animations only
document.addEventListener('DOMContentLoaded', () => {
    // Animate profile container
    const profileContainer = document.querySelector('.hero-profile-container');
    if (profileContainer) {
        profileContainer.style.opacity = '0';
        profileContainer.style.transform = 'translate3d(0, 30px, 0) scale(0.9)';
        profileContainer.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s';
        setTimeout(() => {
            profileContainer.style.opacity = '1';
            profileContainer.style.transform = 'translate3d(0, 0, 0) scale(1)';
        }, 200);
    }

    // Animate social icons with stagger
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon, index) => {
        icon.style.opacity = '0';
        icon.style.transform = 'scale(0)';
        icon.style.transition = `opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.5 + index * 0.1}s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.5 + index * 0.1}s`;
        setTimeout(() => {
            icon.style.opacity = '1';
            icon.style.transform = 'scale(1)';
        }, 500 + index * 100);
    });

    // Handle profile image loading
    const profileImage = document.getElementById('profileImage');
    if (profileImage) {
        profileImage.onload = () => {
            profileImage.classList.add('active');
            const placeholder = document.querySelector('.profile-placeholder');
            if (placeholder) placeholder.style.display = 'none';
        };
        profileImage.onerror = () => {
            // Keep placeholder if image fails to load
            console.error('Failed to load profile image: imn.jpeg');
        };
        // Trigger load check
        if (profileImage.complete) {
            profileImage.onload();
        }
    }

    // Hero Greeting Animation
    const greetingWords = document.querySelectorAll('.greeting-word');
    if (greetingWords.length > 0) {
        greetingWords.forEach((word, index) => {
            word.style.opacity = '0';
            word.style.transform = 'translate3d(-20px, 0, 0)';
            word.style.transition = `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + index * 0.1}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + index * 0.1}s`;
            word.style.willChange = 'transform, opacity';
        });

        // Trigger animation after a short delay
        setTimeout(() => {
            greetingWords.forEach(word => {
                word.style.opacity = '1';
                word.style.transform = 'translate3d(0, 0, 0)';
            });
        }, 200);
    }

    // Contact Me button handler
    const contactMeBtn = document.querySelector('a[href="#contact"].btn-primary');
    const contactSection = document.querySelector('.contact-section');
    const backToHomeBtn = document.getElementById('backToHome');

    if (contactMeBtn) {
        contactMeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (contactSection) {
                contactSection.classList.add('active');
            }
        });
    }

    // Back to home button
    if (backToHomeBtn) {
        backToHomeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (contactSection) {
                contactSection.classList.remove('active');
            }
        });
    }

    // Tech Stack button handler
    const techStackBtn = document.querySelector('a[href="#tech-stack"].btn-secondary');
    const techStackSection = document.querySelector('.tech-stack-section');
    const backToHomeTechBtn = document.getElementById('backToHomeTech');

    if (techStackBtn) {
        techStackBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (techStackSection) {
                techStackSection.classList.add('active');
            }
        });
    }

    // Back to home button for tech stack
    if (backToHomeTechBtn) {
        backToHomeTechBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (techStackSection) {
                techStackSection.classList.remove('active');
            }
        });
    }

    // Projects button handler
    const projectsBtn = document.querySelector('a[href="#projects"].btn-secondary');
    const projectsSection = document.querySelector('.projects-section');
    const backToHomeProjectsBtn = document.getElementById('backToHomeProjects');

    if (projectsBtn) {
        projectsBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (projectsSection) {
                projectsSection.classList.add('active');
            }
        });
    }

    // Back to home button for projects
    if (backToHomeProjectsBtn) {
        backToHomeProjectsBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (projectsSection) {
                projectsSection.classList.remove('active');
            }
        });
    }

    // About button handler
    const aboutBtn = document.querySelector('a[href="#about"].btn-secondary');
    const aboutSection = document.querySelector('.about-section');
    const backToHomeAboutBtn = document.getElementById('backToHomeAbout');

    if (aboutBtn) {
        aboutBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (aboutSection) {
                aboutSection.classList.add('active');
            }
        });
    }

    // Back to home button for about
    if (backToHomeAboutBtn) {
        backToHomeAboutBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (aboutSection) {
                aboutSection.classList.remove('active');
            }
        });
    }

    // Form submission - Mailto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            // Create mailto link with form data
            const subject = encodeURIComponent(`Contact Form Message from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            const mailtoLink = `mailto:trishirsingh9@gmail.com?subject=${subject}&body=${body}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert('Thank you for your message! Your email client will open to send the message.');
            
            // Reset form
            contactForm.reset();
        });
    }
});
