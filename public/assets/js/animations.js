/* animations.js — Scroll reveals and transition logic */

(function () {
  const REVEAL_THRESHOLD = 0.12;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: REVEAL_THRESHOLD,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  function initReveal() {
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
  }

  // Re-run to catch dynamically added elements
  function observeNew() {
    const newElements = document.querySelectorAll('.reveal:not(.observed)');
    newElements.forEach((el) => {
      el.classList.add('observed');
      observer.observe(el);
    });
  }

  // Stagger delays for project cards
  function applyCardStagger() {
    const cards = document.querySelectorAll('.project-card.reveal');
    cards.forEach((card, i) => {
      card.style.setProperty('--i', i);
    });
  }

  window.initAnimations = function () {
    initReveal();
    applyCardStagger();
  };

  window.refreshReveal = observeNew;
})();
