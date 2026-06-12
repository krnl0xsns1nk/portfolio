/* main.js — Entry point, bootstraps all modules */

document.addEventListener('DOMContentLoaded', () => {
  // Render dynamic content
  renderProjects();
  renderCaseStudies();

  // Init animations after content is in DOM
  requestAnimationFrame(() => {
    initAnimations();
    refreshReveal();
  });

  // Hero elements reveal on load with stagger
  const heroElements = document.querySelectorAll('.hero .reveal');
  heroElements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 120 + i * 110);
  });
});
