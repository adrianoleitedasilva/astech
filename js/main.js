// ===== Navbar scroll state =====
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 12;
  navbar.classList.toggle('is-scrolled', scrolled);
  backToTop.classList.toggle('is-visible', window.scrollY > 500);
});

// ===== Mobile menu toggle =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Back to top =====
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Scroll reveal =====
const revealItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealItems.forEach(item => revealObserver.observe(item));

// ===== Animated counters =====
const counters = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.count);
    const duration = 1400;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(step);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.4 });

counters.forEach(el => counterObserver.observe(el));

// ===== Terminal typewriter =====
const terminalBody = document.getElementById('terminalBody');
const terminalLines = [
  '$ astech --init',
  '> Analisando necessidades do negócio...',
  '> Desenhando solução sob medida...',
  '> Treinando o time...',
  '> Entregando resultado. ✔'
];

async function typeLines() {
  for (const line of terminalLines) {
    let current = '';
    for (const char of line) {
      current += char;
      terminalBody.textContent = terminalBody.textContent
        ? terminalBody.textContent.split('\n').slice(0, -1).concat(current).join('\n')
        : current;
      await new Promise(r => setTimeout(r, 22));
    }
    terminalBody.textContent += '\n';
    await new Promise(r => setTimeout(r, 260));
  }
}

const terminalObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      typeLines();
      terminalObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

if (terminalBody) terminalObserver.observe(terminalBody);

// ===== Contact form (placeholder submit) =====
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formFeedback.textContent = 'Mensagem enviada! Nosso time responde em até 1 dia útil.';
  contactForm.reset();
});

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();
