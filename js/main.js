/* =============================================
   NEW ERA HEATING & COOLING — MAIN JS
   ============================================= */

// Smooth anchor scroll
document.addEventListener('click', e => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  e.preventDefault();
  const target = document.querySelector(link.getAttribute('href'));
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Lazy load images (polyfill for older browsers)
if ('IntersectionObserver' in window) {
  const imgs = document.querySelectorAll('img[data-src]');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        io.unobserve(img);
      }
    });
  });
  imgs.forEach(img => io.observe(img));
}

// Track phone clicks
document.addEventListener('click', e => {
  if (e.target.closest('a[href^="tel:"]')) {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'phone_call', { event_category: 'engagement', event_label: 'header_phone' });
    }
  }
});

// Simple form validation UX
document.querySelectorAll('input[required],select[required],textarea[required]').forEach(field => {
  field.addEventListener('blur', () => {
    if (!field.value.trim()) {
      field.style.borderColor = 'var(--red)';
    } else {
      field.style.borderColor = 'var(--gray-300)';
    }
  });
  field.addEventListener('input', () => {
    if (field.value.trim()) field.style.borderColor = 'var(--gray-300)';
  });
});
