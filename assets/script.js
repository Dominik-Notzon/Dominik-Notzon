// Minimal JS: mobile nav toggle + basic UX niceties
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') links.classList.remove('open');
    });
  }

  // Simple form “sent” feedback for mailto usage
  const contactForm = document.querySelector('form[data-kind="contact"]');
  if (contactForm) {
    contactForm.addEventListener('submit', () => {
      setTimeout(() => alert('Danke! Ihr E-Mail-Client öffnet sich gleich.'), 10);
    });
  }
})();

