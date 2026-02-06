/* ================================================
   FORMA — Interactions & Animations
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Scroll Reveal ----
  const revealElements = document.querySelectorAll(
    '.philosophy, .featured__item, .product-card, .newsletter, .cta'
  );

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  // ---- Nav background on scroll ----
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.style.boxShadow = '0 2px 20px rgba(26, 23, 20, 0.06)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });

  // ---- Collection Page: Filter ----
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        productCards.forEach(card => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.classList.remove('hidden');
            // Re-trigger animation
            card.style.animation = 'none';
            card.offsetHeight; // force reflow
            card.style.animation = '';
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  // ---- Smooth parallax on hero cards ----
  const heroVisual = document.querySelector('.hero__visual');
  if (heroVisual) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const card1 = document.querySelector('.hero__card--1');
      const card2 = document.querySelector('.hero__card--2');
      if (card1) card1.style.transform = `translateY(${scrolled * 0.08}px)`;
      if (card2) card2.style.transform = `translateY(${scrolled * 0.04}px)`;
    });
  }

});
