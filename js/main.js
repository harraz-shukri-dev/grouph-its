/* ========================================
   Security Tools Manual - JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initHeader();
    initMobileMenu();
    initScrollAnimations();
    initCarousels();
    initParticles();
    initScrollToTop();
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
   Mobile Menu
   ======================================== */
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-toggle');
    const menu = document.querySelector('.nav-menu');
    
    if (!toggle || !menu) return;
    
    // Create overlay element
    let overlay = document.querySelector('.mobile-menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay';
        document.body.appendChild(overlay);
    }
    
    function toggleMenu() {
        const isActive = menu.classList.contains('active');
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        toggle.innerHTML = isActive 
            ? '<i class="fas fa-bars"></i>' 
            : '<i class="fas fa-times"></i>';
        
        // Prevent body scroll when menu is open
        if (!isActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    toggle.addEventListener('click', toggleMenu);
    
    // Close menu when clicking overlay
    overlay.addEventListener('click', () => {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        toggle.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = '';
    });
    
    // Close menu when clicking a link
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            overlay.classList.remove('active');
            toggle.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside (but not on toggle)
    document.addEventListener('click', (e) => {
        if (menu.classList.contains('active') && 
            !menu.contains(e.target) && 
            !toggle.contains(e.target) &&
            !overlay.contains(e.target)) {
            menu.classList.remove('active');
            overlay.classList.remove('active');
            toggle.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.style.overflow = '';
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu.classList.contains('active')) {
            menu.classList.remove('active');
            overlay.classList.remove('active');
            toggle.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.style.overflow = '';
        }
    });
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

/* ========================================
   Scroll to Top Button - Best Practices
   ======================================== */
function initScrollToTop() {
    // Check if button already exists to prevent duplicates
    let scrollBtn = document.querySelector('.scroll-to-top');
    
    if (!scrollBtn) {
        // Create scroll-to-top button
        scrollBtn = document.createElement('button');
        scrollBtn.className = 'scroll-to-top';
        scrollBtn.setAttribute('aria-label', 'Scroll to top');
        scrollBtn.setAttribute('title', 'Scroll to top');
        scrollBtn.innerHTML = '<i class="fas fa-chevron-up" aria-hidden="true"></i>';
        
        // Ensure it's appended directly to body (not inside any container)
        document.body.appendChild(scrollBtn);
        
        // Force fixed positioning with inline styles as backup
        scrollBtn.style.position = 'fixed';
        scrollBtn.style.bottom = '2rem';
        scrollBtn.style.right = '2rem';
        scrollBtn.style.zIndex = '9998';
    }
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Throttle function for scroll events (performance optimization)
    let ticking = false;
    const scrollThreshold = 400; // Show button after scrolling 400px
    
    function updateScrollButton() {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollY > scrollThreshold) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
        
        ticking = false;
    }
    
    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(updateScrollButton);
            ticking = true;
        }
    }
    
    // Scroll to top function
    function scrollToTop() {
        const scrollOptions = {
            top: 0,
            behavior: prefersReducedMotion ? 'auto' : 'smooth'
        };
        
        // Use scrollTo with smooth behavior, fallback for older browsers
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo(scrollOptions);
        } else {
            // Fallback for browsers that don't support smooth scroll
            window.scrollTo(0, 0);
        }
        
        // Remove focus after scrolling (accessibility)
        scrollBtn.blur();
    }
    
    // Click event
    scrollBtn.addEventListener('click', scrollToTop);
    
    // Keyboard support (Enter and Space keys)
    scrollBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scrollToTop();
        }
    });
    
    // Listen to scroll events with passive listener (performance)
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial check
    updateScrollButton();
    
    // Handle resize events to recalculate position if needed
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateScrollButton, 150);
    }, { passive: true });
}

