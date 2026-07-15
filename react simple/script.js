// ════════════════════════════════════════════════════════════════
// ESENCIA HIPNÓTICA - JavaScript puro (sin librerías extra)
// ════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function () {
  /* ─── NAVBAR: hamburguesa móvil ─── */
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Cierra el menú al hacer click en cualquier link dentro de él
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  /* ─── PILLAR CARDS: expandir/contraer al hacer click ─── */
  const cards = document.querySelectorAll('.pillar-card');

  cards.forEach(function (card) {
    card.addEventListener('click', function (e) {
      // Evita que el click en el botón CTA interno dispare el toggle dos veces
      if (e.target.closest('.card-cta')) return;

      const isExpanded = card.classList.contains('expanded');

      // Contrae las demás tarjetas (comportamiento tipo acordeón, igual al useState original)
      cards.forEach(function (c) {
        c.classList.remove('expanded');
        const services = c.querySelector('.services-list');
        const benefits = c.querySelector('.benefits');
        const icon = c.querySelector('.expand-icon');
        if (services) services.classList.remove('visible');
        if (benefits) benefits.classList.remove('visible');
        if (icon) icon.textContent = '▶';
      });

      if (!isExpanded) {
        card.classList.add('expanded');
        const services = card.querySelector('.services-list');
        const benefits = card.querySelector('.benefits');
        const icon = card.querySelector('.expand-icon');
        if (services) services.classList.add('visible');
        if (benefits) benefits.classList.add('visible');
        if (icon) icon.textContent = '▼';
      }
    });
  });

  /* ─── SCROLL INDICATOR: baja suavemente a la siguiente sección ─── */
  const scrollIndicator = document.getElementById('scrollIndicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function () {
      const nextSection = document.getElementById('pilares');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
