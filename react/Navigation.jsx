/* ════════════════════════════════════════════════════════════════
   ESENCIA HIPNÓTICA - COMPONENTE NAVIGATION
   Navbar premium con los 3 pilares de servicio
   ════════════════════════════════════════════════════════════════ */

import React, { useState } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const pillars = [
    {
      name: 'Clínico & Mental',
      href: '/clinico',
      description: 'Psicología Gestalt, Terapia Psicológica, PNL',
      icon: '🧠'
    },
    {
      name: 'Consciencia Ampliada',
      href: '/consciencia',
      description: 'Hipnosis Presencial/Distancia, Regresiones',
      icon: '✨'
    },
    {
      name: 'Espiritual & Holístico',
      href: '/espiritual',
      description: 'Canalización, Mediunidad, Guía Espiritual, Tarot',
      icon: '🔮'
    }
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoWrapper}>
          <a href="/" className={styles.logo}>
            <span className={styles.logoIcon}>◈</span>
            <span className={styles.logoText}>Esencia Hipnótica</span>
          </a>
        </div>

        {/* Hamburger Menu para Mobile */}
        <button 
          className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu Desktop/Mobile */}
        <div className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
          {/* Navegación principal */}
          <div className={styles.menuGroup}>
            <h3 className={styles.menuTitle}>Servicios</h3>
            <div className={styles.pillarsMenu}>
              {pillars.map((pillar, idx) => (
                <a 
                  key={idx}
                  href={pillar.href}
                  className={styles.pillarLink}
                  onClick={() => setIsOpen(false)}
                >
                  <span className={styles.pillarIcon}>{pillar.icon}</span>
                  <div className={styles.pillarInfo}>
                    <span className={styles.pillarName}>{pillar.name}</span>
                    <span className={styles.pillarDesc}>{pillar.description}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Links Secundarios */}
          <div className={styles.menuGroup}>
            <h3 className={styles.menuTitle}>Recursos</h3>
            <ul className={styles.secondaryLinks}>
              <li><a href="/blog">Blog & Artículos</a></li>
              <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
              <li><a href="/testimonios">Testimonios</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </div>

          {/* CTA Button */}
          <div className={styles.ctaWrapper}>
            <button className={styles.ctaButton}>
              Reservar Sesión
            </button>
          </div>
        </div>

        {/* CTA Desktop (solo visible en desktop) */}
        <button className={styles.ctaDesktop}>
          Reservar Sesión
        </button>
      </div>
    </nav>
  );
}

/* ════════════════════════════════════════════════════════════════
   ESTILOS DEL COMPONENTE
   ════════════════════════════════════════════════════════════════ */

/* Navigation.module.css */

/*
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(20, 184, 166, 0.1);
  z-index: 1000;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.08);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-6);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logoWrapper {
  display: flex;
  align-items: center;
  min-width: 300px;
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  text-decoration: none;
  transition: var(--transition-base);
}

.logo:hover {
  transform: translateX(2px);
}

.logoIcon {
  font-size: 2rem;
  background: linear-gradient(135deg, var(--color-gold-500), var(--color-turquoise-500));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.logoText {
  font-family: var(--font-serif);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  letter-spacing: -0.5px;
}

/* ─── MENU ─── */

.menu {
  display: flex;
  gap: var(--space-8);
  align-items: center;
  flex: 1;
  justify-content: center;
}

.menuGroup {
  display: none;
}

.menuTitle {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-tertiary);
  margin-bottom: var(--space-4);
}

.pillarsMenu {
  display: flex;
  gap: var(--space-4);
  flex-direction: column;
}

.pillarLink {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--border-radius-lg);
  color: var(--text-primary);
  text-decoration: none;
  transition: var(--transition-base);
  border: 1px solid transparent;
}

.pillarLink:hover {
  background-color: rgba(20, 184, 166, 0.05);
  border-color: var(--color-turquoise-300);
  color: var(--color-turquoise-600);
}

.pillarIcon {
  font-size: 1.5rem;
  min-width: 24px;
  text-align: center;
}

.pillarInfo {
  display: flex;
  flex-direction: column;
}

.pillarName {
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-sm);
  color: var(--text-primary);
}

.pillarDesc {
  font-size: var(--font-size-xs);
  color: var(--text-tertiary);
  font-weight: var(--font-weight-light);
}

.secondaryLinks {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.secondaryLinks a {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  transition: var(--transition-base);
  padding: var(--space-2) 0;
}

.secondaryLinks a:hover {
  color: var(--color-turquoise-600);
  padding-left: var(--space-2);
}

/* ─── BUTTONS ─── */

.ctaDesktop {
  display: none;
  padding: var(--space-3) var(--space-6);
  background: var(--color-turquoise-500);
  color: white;
  border: none;
  border-radius: var(--border-radius-lg);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: var(--transition-base);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: var(--shadow-turquoise);
}

.ctaDesktop:hover {
  background: var(--color-turquoise-600);
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(20, 184, 166, 0.2);
}

.ctaWrapper {
  display: none;
}

.ctaButton {
  width: 100%;
  padding: var(--space-4) var(--space-6);
  background: var(--color-turquoise-500);
  color: white;
  border: none;
  border-radius: var(--border-radius-lg);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-base);
  cursor: pointer;
  transition: var(--transition-base);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.ctaButton:hover {
  background: var(--color-turquoise-600);
}

/* ─── HAMBURGER MENU ─── */

.hamburger {
  display: none;
  flex-direction: column;
  gap: var(--space-1);
  border: none;
  background: none;
  cursor: pointer;
  padding: var(--space-2);
}

.hamburger span {
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  transition: var(--transition-base);
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(8px, -8px);
}

/* ─── RESPONSIVE ─── */

@media (min-width: 1024px) {
  .menu {
    display: flex !important;
    position: static;
    flex-direction: row;
    gap: var(--space-12);
    background: none;
    border: none;
    padding: 0;
    opacity: 1 !important;
  }

  .menuGroup {
    display: block !important;
  }

  .menuGroup:first-child {
    flex: 1;
  }

  .pillarsMenu {
    flex-direction: row;
    gap: var(--space-2);
  }

  .pillarLink {
    flex-direction: column;
    padding: var(--space-2) var(--space-3);
    min-width: 200px;
    text-align: center;
  }

  .pillarIcon {
    width: 100%;
    font-size: 1.75rem;
  }

  .ctaDesktop {
    display: block;
  }

  .hamburger {
    display: none;
  }

  .ctaWrapper {
    display: none;
  }
}

@media (max-width: 1023px) {
  .container {
    padding: 0 var(--space-4);
  }

  .menu {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    gap: var(--space-6);
    padding: var(--space-6);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: var(--transition-base);
    max-height: calc(100vh - 80px);
    overflow-y: auto;
    border-bottom: 1px solid var(--color-silver-200);
  }

  .menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .menuGroup {
    display: block;
    width: 100%;
  }

  .hamburger {
    display: flex;
    order: 2;
  }

  .ctaDesktop {
    display: none;
  }

  .ctaWrapper {
    display: block;
    width: 100%;
    order: 3;
  }

  .logoWrapper {
    order: 1;
    flex: 1;
  }
}
*/
