/* ========================================
   Component Loader - Header & Footer
   ======================================== */

/**
 * Loads HTML components and injects them into the page
 * @param {string} componentPath - Path to the component HTML file
 * @param {string} targetSelector - CSS selector for the target element
 * @returns {Promise} - Promise that resolves when component is loaded
 */
async function loadComponent(componentPath, targetSelector) {
  try {
    const response = await fetch(componentPath);
    if (!response.ok) {
      throw new Error(`Failed to load component: ${componentPath}`);
    }
    
    const html = await response.text();
    
    // Special handling for header - prepend to body
    if (targetSelector === '#header-placeholder') {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      const header = tempDiv.querySelector('.header') || tempDiv.firstElementChild;
      if (header && document.body) {
        document.body.insertBefore(header, document.body.firstChild);
        return true;
      }
    }
    
    const target = document.querySelector(targetSelector);
    
    if (target) {
      target.innerHTML = html;
      return true;
    } else {
      console.warn(`Target element not found: ${targetSelector}`);
      return false;
    }
  } catch (error) {
    console.error(`Error loading component ${componentPath}:`, error);
    return false;
  }
}

/**
 * Sets the active navigation link based on current page
 */
function setActiveNavLink() {
  // Get current page filename without extension
  let currentPage = window.location.pathname.split('/').pop().replace('.html', '');
  
  // Handle root/index page
  if (!currentPage || currentPage === '' || currentPage === 'index') {
    currentPage = 'index';
  }
  
  // Find all nav links
  const navLinks = document.querySelectorAll('.nav-menu a[data-page]');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('data-page');
    
    // Remove active class from all links
    link.classList.remove('active');
    
    // Add active class to current page link
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
}

/**
 * Initialize components - loads header and footer
 */
async function initComponents() {
  // Load header
  const headerLoaded = await loadComponent('components/header.html', '#header-placeholder');
  
  // Load footer
  const footerLoaded = await loadComponent('components/footer.html', '#footer-placeholder');
  
  // Set active nav link after header is loaded
  if (headerLoaded) {
    setActiveNavLink();
    
    // Initialize navigation dropdown after header is loaded
    setTimeout(() => {
      if (typeof initNavDropdown === 'function') {
        initNavDropdown();
      }
    }, 50);
  }
  
  return headerLoaded && footerLoaded;
}

// Load components when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initComponents);
} else {
  // DOM is already ready
  initComponents();
}

