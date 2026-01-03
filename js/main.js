/* ========================================
   Security Tools Manual - JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initHeader();
    initNavDropdown();
    initScrollAnimations();
    initCarousels();
    initParticles();
});

/* ========================================
   Header Scroll Effect
   ======================================== */
function initHeader() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

/* ========================================
   Navigation Dropdown
   ======================================== */
function initNavDropdown() {
    const toggle = document.querySelector('.nav-toggle');
    const menuWrapper = document.querySelector('.nav-menu-wrapper');
    
    if (!toggle || !menuWrapper) return;
    
    // Prevent duplicate initialization
    if (toggle._navDropdownInitialized) return;
    toggle._navDropdownInitialized = true;
    
    function toggleMenu(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        const newState = !isExpanded;
        
        toggle.setAttribute('aria-expanded', newState);
        menuWrapper.classList.toggle('active', newState);
    }
    
    // Toggle on button click
    toggle.addEventListener('click', toggleMenu);
    
    // Close when clicking outside
    const outsideClickHandler = (e) => {
        if (menuWrapper.classList.contains('active') && 
            !menuWrapper.contains(e.target) && 
            !toggle.contains(e.target)) {
            toggle.setAttribute('aria-expanded', 'false');
            menuWrapper.classList.remove('active');
        }
    };
    document.addEventListener('click', outsideClickHandler);
    
    // Close on escape key
    const escapeKeyHandler = (e) => {
        if (e.key === 'Escape' && menuWrapper.classList.contains('active')) {
            toggle.setAttribute('aria-expanded', 'false');
            menuWrapper.classList.remove('active');
            toggle.focus();
        }
    };
    document.addEventListener('keydown', escapeKeyHandler);
    
    // Close when clicking a link
    const menu = menuWrapper.querySelector('.nav-menu');
    if (menu) {
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                toggle.setAttribute('aria-expanded', 'false');
                menuWrapper.classList.remove('active');
            });
        });
    }
}

/* ========================================
   Scroll Animations
   ======================================== */
function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    if (!elements.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(el => observer.observe(el));
}

/* ========================================
   Carousel Functionality
   ======================================== */
function initCarousels() {
    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach(container => {
        const track = container.querySelector('.carousel-track');
        const slides = container.querySelectorAll('.carousel-slide');
        const prevBtn = container.querySelector('.carousel-btn.prev');
        const nextBtn = container.querySelector('.carousel-btn.next');
        const dotsContainer = container.querySelector('.carousel-dots');
        
        if (!track || !slides.length) return;
        
        let currentIndex = 0;
        const totalSlides = slides.length;
        
        // Create dots
        if (dotsContainer) {
            slides.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
                dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
                dot.addEventListener('click', () => goToSlide(index));
                dotsContainer.appendChild(dot);
            });
        }
        
        function updateCarousel() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            // Update dots
            if (dotsContainer) {
                dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                });
            }
        }
        
        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }
        
        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        }
        
        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }
        
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        
        // Keyboard navigation
        container.setAttribute('tabindex', '0');
        container.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        });
        
        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;
        
        track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (diff > swipeThreshold) {
                nextSlide();
            } else if (diff < -swipeThreshold) {
                prevSlide();
            }
        }
    });
}

/* ========================================
   Floating Particles
   ======================================== */
function initParticles() {
    const container = document.querySelector('.particles');
    if (!container) return;
    
    // Create additional particles dynamically
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * -20}s`;
        particle.style.animationDuration = `${10 + Math.random() * 15}s`;
        particle.style.width = `${2 + Math.random() * 4}px`;
        particle.style.height = particle.style.width;
        particle.style.opacity = 0.3 + Math.random() * 0.4;
        
        // Random color between primary and secondary
        const colors = ['var(--primary)', 'var(--secondary)', 'var(--accent)'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        container.appendChild(particle);
    }
}

/* ========================================
   Smooth Scroll
   ======================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ========================================
   Page Transitions
   ======================================== */
function initPageTransitions() {
    // Add page-transition class to body on load
    document.body.classList.add('page-transition');
    
    // Handle internal link clicks for smooth transitions
    document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        
        // Only handle internal navigation (not anchors, external links, or same page)
        if (href && 
            !href.startsWith('#') && 
            !href.startsWith('http') && 
            !href.startsWith('mailto') &&
            href.endsWith('.html')) {
            
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetUrl = this.href;
                
                // Add exit animation
                document.body.classList.remove('page-transition');
                document.body.classList.add('page-exit');
                
                // Navigate after animation
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 150);
            });
        }
    });
}

// Initialize page transitions
document.addEventListener('DOMContentLoaded', initPageTransitions);

