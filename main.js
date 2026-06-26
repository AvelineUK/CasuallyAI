/* ── Scroll reveal ── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  els.forEach(el => observer.observe(el));
}

/* ── Active nav link ── */
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop().split('#')[0];
    if (href === page) a.classList.add('active');
  });
}

/* ── Mobile nav toggle ── */
function initNavToggle() {
  const toggle = document.getElementById('nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}

/* ── TOC active highlighting on scroll ── */
function initTocHighlight() {
  const tocLinks = document.querySelectorAll('.toc-list a');
  if (!tocLinks.length) return;

  const sections = Array.from(tocLinks).map(a => {
    const id = a.getAttribute('href').slice(1);
    return document.getElementById(id);
  }).filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tocLinks.forEach(a => a.classList.remove('toc-active'));
        const active = document.querySelector(`.toc-list a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('toc-active');
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ── Init on load ── */
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  setActiveNav();
  initNavToggle();
  initTocHighlight();
});

/* ── Archive: filter + search ── */
document.addEventListener('DOMContentLoaded', function () {
  if (!document.getElementById('type-filters')) return;

  const state = { type: 'all', model: 'all', search: '' };

  function applyFilters() {
    const cards = document.querySelectorAll('.archive-card:not(.placeholder)');
    const placeholders = document.querySelectorAll('.archive-card.placeholder');
    let visible = 0;

    cards.forEach(card => {
      const typeMatch  = state.type  === 'all' || card.dataset.type  === state.type;
      const modelMatch = state.model === 'all' || (card.dataset.models || '').includes(state.model);
      const searchMatch = !state.search || (card.dataset.title || '').includes(state.search);
      const show = typeMatch && modelMatch && searchMatch;
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    const filtersActive = state.type !== 'all' || state.model !== 'all' || state.search;
    placeholders.forEach(p => p.style.display = filtersActive ? 'none' : '');

    const empty = document.getElementById('empty-state');
    if (empty) empty.style.display = visible === 0 ? 'block' : 'none';

    const countEl = document.getElementById('results-count');
    if (countEl) countEl.innerHTML =
      visible === 1
        ? `<strong>${visible}</strong> experiment (more coming soon)`
        : `<strong>${visible}</strong> experiments`;
  }

  document.querySelectorAll('[data-filter="type"]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter="type"]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.type = btn.dataset.value;
      applyFilters();
    });
  });

  document.querySelectorAll('[data-filter="model"]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter="model"]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.model = btn.dataset.value;
      applyFilters();
    });
  });

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      state.search = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }

  applyFilters();
});
