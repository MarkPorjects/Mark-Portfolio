/* ====================================
   MARK ANGELO — PORTFOLIO SCRIPTS
   Navigation, Scroll Effects, Reveal
   ==================================== */

(function () {
  'use strict';

  // ===== DOM REFERENCES =====
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');

  // ===== MOBILE NAVIGATION TOGGLE =====
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close mobile menu when a nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close mobile menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      navToggle.focus();
    }
  });


  // ===== NAVBAR SCROLL EFFECT =====
  let lastScrollY = 0;
  let ticking = false;

  function updateNavbar() {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScrollY = scrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  }, { passive: true });


  // ===== ACTIVE NAV LINK HIGHLIGHT =====
  function updateActiveLink() {
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', () => {
    requestAnimationFrame(updateActiveLink);
  }, { passive: true });


  // ===== SCROLL REVEAL =====
  // Applies the 'reveal' class to elements and reveals them as they enter the viewport
  function initReveal() {
    const revealTargets = [
      '.about-content',
      '.skill-category',
      '.project-showcase',
      '.ai-dev-content',
      '.approach-card',
      '.learning-card',
      '.github-content',
      '.contact-links',
      '.section-heading',
      '.section-subtitle',
      '.contact-text'
    ];

    revealTargets.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add('reveal');
      });
    });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('revealed');
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Stagger animations for grid items
          const parent = entry.target.parentElement;
          if (parent) {
            const siblings = Array.from(parent.querySelectorAll('.reveal:not(.revealed)'));
            const index = siblings.indexOf(entry.target);
            const delay = Math.min(index * 80, 400);
            setTimeout(() => {
              entry.target.classList.add('revealed');
            }, delay);
          } else {
            entry.target.classList.add('revealed');
          }
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
  }


  // ===== SMOOTH SCROLL FOR INTERNAL LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  // ===== INIT =====
  document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    updateNavbar();
    updateActiveLink();
  });

})();
