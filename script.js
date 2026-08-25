// Optional scroll-spy helper — not currently linked from any page.
// Kept for future use; selectors match the shared .site-nav markup
// used across index.html, resume.html, frost-research.html, and datafest.html.
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.site-nav .links a')];

const observer = new IntersectionObserver((entries) => {
  const visible = entries
    .filter(entry => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach(link =>
    link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`)
  );
}, { threshold: 0.4 });

sections.forEach(section => observer.observe(section));
