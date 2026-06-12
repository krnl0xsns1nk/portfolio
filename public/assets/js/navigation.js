/* navigation.js — Nav scroll behavior, active states, mobile menu */

(function () {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  if (!nav || !toggle || !links) return;

  const inPageLinks = document.querySelectorAll('.nav__link[href^="#"], .nav__link[href^="/#"]');

  // Scroll shadow
  function handleScroll() {
    const scrolled = window.scrollY > 20;
    nav.classList.toggle('scrolled', scrolled);
    updateActiveLinkOnScroll();
  }

  // On the homepage, highlight nav links as user scrolls past sections.
  // On other pages, active state is set server-side via the `activePage` data
  // attribute (see nav.ejs), so this is a no-op there.
  function updateActiveLinkOnScroll() {
    if (inPageLinks.length === 0) return;

    const sections = ['hero', 'projects', 'case-studies', 'about', 'contact'];
    const scrollY = window.scrollY + 100;

    let current = '';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) current = id;
    });

    inPageLinks.forEach(link => {
      const href = link.getAttribute('href').replace('/#', '').replace('#', '');
      link.classList.toggle('active', href === current && current !== '');
    });
  }

  // Mobile menu
  function toggleMenu() {
    const isOpen = links.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMenu() {
    links.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';
  }

  // Smooth scroll with offset for nav height (same-page only)
  function smoothScrollTo(targetId) {
    const target = document.getElementById(targetId);
    if (!target) return false;
    const navHeight = nav.offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
    return true;
  }

  // Bind anchor links. Only intercept if the target section exists on
  // THIS page — otherwise let the browser navigate normally
  // (e.g. "/#contact" from /projects should load the homepage then jump).
  document.querySelectorAll('a[href*="#"]').forEach(link => {
    const href = link.getAttribute('href');
    const hashIndex = href.indexOf('#');
    const path = href.slice(0, hashIndex);
    const targetId = href.slice(hashIndex + 1);

    // Only same-page links (empty path, or path matches current page)
    const isSamePage = path === '' || path === '/' && (window.location.pathname === '/');

    link.addEventListener('click', e => {
      if (!isSamePage) return; // let browser navigate to other page + hash
      const didScroll = smoothScrollTo(targetId);
      if (didScroll) {
        e.preventDefault();
        closeMenu();
      }
    });
  });

  // If we landed on a page with a hash (e.g. coming from /projects to /#contact),
  // scroll to it after load.
  if (window.location.hash) {
    const targetId = window.location.hash.slice(1);
    window.addEventListener('load', () => {
      requestAnimationFrame(() => smoothScrollTo(targetId));
    });
  }

  toggle.addEventListener('click', toggleMenu);
  toggle.setAttribute('aria-expanded', false);

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Run on init
})();

