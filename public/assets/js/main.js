/**
 * DOT Compliance Demo - Main JavaScript
 * Minimal JavaScript for enhanced user experience
 */

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
      mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });
  }
  
  // Form Validation & Enhancement
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Basic validation
      const requiredFields = contactForm.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = '#dc2626';
        } else {
          field.style.borderColor = '';
        }
      });
      
      if (isValid) {
        // In a real implementation, this would submit to a backend
        // For demo, we'll redirect to thank you page
        console.log('Form would be submitted with:', new FormData(contactForm));
        window.location.href = '/thank-you.html';
      } else {
        alert('Please fill in all required fields.');
      }
    });
    
    // Clear error styling on input
    const inputs = contactForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        input.style.borderColor = '';
      });
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  // Lazy loading images with Intersection Observer
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          // Image will load automatically due to loading="lazy"
          // This observer is just for additional enhancements if needed
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }
  
  // FAQ Accordion (if present on service pages)
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    if (question && answer) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        
        // Close all other FAQs
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
        
        // Toggle current FAQ
        item.classList.toggle('active');
      });
    }
  });
  
  // Analytics event tracking (placeholder)
  const trackEvent = (category, action, label) => {
    // GA4 event tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        'event_category': category,
        'event_label': label
      });
    }
    
    // UET event tracking
    if (typeof window.uetq !== 'undefined') {
      window.uetq = window.uetq || [];
      window.uetq.push('event', action, {'event_category': category, 'event_label': label});
    }
    
    console.log('Event tracked:', category, action, label);
  };
  
  // Track CTA button clicks
  document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.textContent.trim();
      trackEvent('CTA', 'click', text);
    });
  });
  
  // Track service card clicks
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.service-title')?.textContent || 'Unknown Service';
      trackEvent('Service', 'view', title);
    });
  });
  
  // Track outbound links
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', () => {
      trackEvent('Outbound Link', 'click', link.href);
    });
  });
  
  console.log('DOT Compliance Demo initialized successfully');
});