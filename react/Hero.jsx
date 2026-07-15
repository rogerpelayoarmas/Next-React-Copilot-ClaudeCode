/* ════════════════════════════════════════════════════════════════
   ESENCIA HIPNÓTICA - COMPONENTE HERO
   Sección principal con slogan premium y CTA
   ════════════════════════════════════════════════════════════════ */

import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Fondo decorativo sutil */}
      <div className={styles.backgroundDecoration}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
      </div>

      <div className={styles.container}>
        {/* Logo Principal */}
        <div className={styles.logoSection}>
          <div className={styles.logoMainContainer}>
            <svg 
              className={styles.logoMain}
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Círculo externo degradado - Dorado a Turquesa */}
              <defs>
                <linearGradient id="goldTurquoise" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              
              {/* Círculo principal */}
              <circle cx="100" cy="100" r="95" fill="none" stroke="url(#goldTurquoise)" strokeWidth="2"/>
              
              {/* Símbolo interior - Mariposa/Transformación abstracta */}
              <g transform="translate(100, 100)">
                {/* Ala superior izquierda */}
                <path 
                  d="M -15 -10 Q -30 -25 -25 -45 Q -15 -35 -10 -20 Z" 
                  fill="#14b8a6" 
                  opacity="0.8"
                />
                {/* Ala superior derecha */}
                <path 
                  d="M 15 -10 Q 30 -25 25 -45 Q 15 -35 10 -20 Z" 
                  fill="#14b8a6" 
                  opacity="0.8"
                />
                {/* Ala inferior izquierda */}
                <path 
                  d="M -12 8 Q -28 15 -30 35 Q -18 25 -10 15 Z" 
                  fill="#f59e0b" 
                  opacity="0.6"
                />
                {/* Ala inferior derecha */}
                <path 
                  d="M 12 8 Q 28 15 30 35 Q 18 25 10 15 Z" 
                  fill="#f59e0b" 
                  opacity="0.6"
                />
                {/* Cuerpo central */}
                <ellipse cx="0" cy="0" rx="4" ry="12" fill="#14b8a6" />
                {/* Antena izquierda */}
                <line x1="-2" y1="-12" x2="-5" y2="-25" stroke="#14b8a6" strokeWidth="1.5"/>
                {/* Antena derecha */}
                <line x1="2" y1="-12" x2="5" y2="-25" stroke="#14b8a6" strokeWidth="1.5"/>
              </g>
            </svg>
          </div>
        </div>

        {/* Contenido principal */}
        <div className={styles.content}>
          {/* Tagline superior */}
          <div className={styles.tagline}>
            <span className={styles.taglineIcon}>✨</span>
            <span className={styles.taglineText}>Transformación Integral</span>
            <span className={styles.taglineIcon}>✨</span>
          </div>

          {/* Título principal - Slogan elegido: Opción 3 */}
          <h1 className={styles.mainTitle}>
            Conectando tu mente, <br />
            <span className={styles.highlight}>transformando tu esencia</span>
          </h1>

          {/* Subtítulo descriptivo */}
          <p className={styles.subtitle}>
            Un enfoque multidisciplinario que une terapia clínica, consciencia expandida 
            y profundidad espiritual en un espacio premium, seguro y personalizado.
          </p>

          {/* Pilares destacados en fila */}
          <div className={styles.pillarsPreview}>
            <div className={styles.pillarBadge}>
              <span className={styles.pillarBadgeIcon}>🧠</span>
              <span className={styles.pillarBadgeText}>Clínico</span>
            </div>
            <div className={styles.pillarBadge}>
              <span className={styles.pillarBadgeIcon}>✨</span>
              <span className={styles.pillarBadgeText}>Consciencia</span>
            </div>
            <div className={styles.pillarBadge}>
              <span className={styles.pillarBadgeIcon}>🔮</span>
              <span className={styles.pillarBadgeText}>Espiritual</span>
            </div>
          </div>

          {/* CTA Botones */}
          <div className={styles.ctaSection}>
            <button className={`${styles.button} ${styles.buttonPrimary}`}>
              Reservar Sesión
              <span className={styles.buttonArrow}>→</span>
            </button>
            <button className={`${styles.button} ${styles.buttonSecondary}`}>
              Explorar Servicios
            </button>
          </div>

          {/* Credibilidad rápida */}
          <div className={styles.credibility}>
            <div className={styles.credItem}>
              <span className={styles.credNumber}>15+</span>
              <span className={styles.credLabel}>Años de experiencia</span>
            </div>
            <div className={styles.credDivider}></div>
            <div className={styles.credItem}>
              <span className={styles.credNumber}>2000+</span>
              <span className={styles.credLabel}>Vidas transformadas</span>
            </div>
            <div className={styles.credDivider}></div>
            <div className={styles.credItem}>
              <span className={styles.credNumber}>3</span>
              <span className={styles.credLabel}>Pilares de sanación</span>
            </div>
          </div>
        </div>

        {/* Elemento visual derecha - Ondas de energía */}
        <div className={styles.energyWaves}>
          <div className={styles.wave}></div>
          <div className={styles.wave}></div>
          <div className={styles.wave}></div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Descubre más</span>
        <div className={styles.scrollArrow}></div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   ESTILOS - Hero.module.css
   ════════════════════════════════════════════════════════════════ */

/*

.hero {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 80px;
  margin-bottom: var(--space-12);
}

.backgroundDecoration {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
}

.orb1 {
  position: absolute;
  top: 5%;
  right: 10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(20, 184, 166, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(60px);
  animation: floatOrb 6s ease-in-out infinite;
}

.orb2 {
  position: absolute;
  bottom: 10%;
  left: 5%;
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.05) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(60px);
  animation: floatOrb 8s ease-in-out infinite reverse;
}

@keyframes floatOrb {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, -30px); }
}

.container {
  max-width: 1280px;
  width: 100%;
  padding: 0 var(--space-6);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
  position: relative;
  z-index: 10;
}

/* ─── LOGO SECCIÓN ─── */

.logoSection {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
}

.logoMainContainer {
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: floatLogo 3s ease-in-out infinite;
}

.logoMain {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 20px 40px rgba(20, 184, 166, 0.15));
}

@keyframes floatLogo {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* ─── CONTENIDO ─── */

.content {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.tagline {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--color-turquoise-600);
  margin-bottom: var(--space-4);
}

.taglineIcon {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

.mainTitle {
  font-family: var(--font-serif);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: var(--font-weight-bold);
  line-height: 1.15;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.highlight {
  background: linear-gradient(135deg, var(--color-turquoise-500), var(--color-gold-500));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: var(--font-size-lg);
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 550px;
  font-weight: var(--font-weight-light);
}

/* ─── PILARES PREVIEW ─── */

.pillarsPreview {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
  margin: var(--space-6) 0;
}

.pillarBadge {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-4);
  background: rgba(20, 184, 166, 0.08);
  border: 1px solid rgba(20, 184, 166, 0.2);
  border-radius: var(--border-radius-full);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-turquoise-700);
  transition: var(--transition-base);
}

.pillarBadge:hover {
  background: rgba(20, 184, 166, 0.12);
  border-color: var(--color-turquoise-400);
  transform: translateY(-2px);
}

.pillarBadgeIcon {
  font-size: 1.2rem;
}

/* ─── CTA BUTTONS ─── */

.ctaSection {
  display: flex;
  gap: var(--space-4);
  margin-top: var(--space-6);
  flex-wrap: wrap;
}

.button {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-4) var(--space-8);
  border: none;
  border-radius: var(--border-radius-lg);
  font-family: var(--font-sans);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: var(--transition-base);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.buttonPrimary {
  background: var(--color-turquoise-500);
  color: white;
  box-shadow: var(--shadow-turquoise);
}

.buttonPrimary:hover {
  background: var(--color-turquoise-600);
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(20, 184, 166, 0.25);
}

.buttonSecondary {
  background: white;
  color: var(--color-turquoise-600);
  border: 2px solid var(--color-turquoise-200);
}

.buttonSecondary:hover {
  background: rgba(20, 184, 166, 0.05);
  border-color: var(--color-turquoise-500);
}

.buttonArrow {
  transition: transform 0.3s ease;
}

.buttonPrimary:hover .buttonArrow {
  transform: translateX(4px);
}

/* ─── CREDIBILIDAD ─── */

.credibility {
  display: flex;
  align-items: center;
  gap: var(--space-8);
  margin-top: var(--space-12);
  padding-top: var(--space-8);
  border-top: 1px solid rgba(20, 184, 166, 0.1);
}

.credItem {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.credNumber {
  font-family: var(--font-serif);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-turquoise-600);
}

.credLabel {
  font-size: var(--font-size-sm);
  color: var(--text-tertiary);
  font-weight: var(--font-weight-light);
}

.credDivider {
  width: 1px;
  height: 40px;
  background: rgba(20, 184, 166, 0.2);
}

/* ─── ELEMENTOS VISUALES ─── */

.energyWaves {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 200px;
  height: 200px;
  opacity: 0.3;
  display: none;
}

.wave {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid var(--color-turquoise-300);
  border-radius: 50%;
  animation: expandWave 3s ease-out infinite;
}

.wave:nth-child(2) {
  animation-delay: 1s;
}

.wave:nth-child(3) {
  animation-delay: 2s;
}

@keyframes expandWave {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

/* ─── SCROLL INDICATOR ─── */

.scrollIndicator {
  position: absolute;
  bottom: var(--space-8);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  cursor: pointer;
  animation: bobbing 2s ease-in-out infinite;
}

.scrollText {
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-tertiary);
  font-weight: var(--font-weight-semibold);
}

.scrollArrow {
  width: 20px;
  height: 20px;
  border-right: 2px solid var(--color-turquoise-500);
  border-bottom: 2px solid var(--color-turquoise-500);
  transform: rotate(-45deg);
}

@keyframes bobbing {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(10px); }
}

/* ─── RESPONSIVE ─── */

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .logoSection {
    min-height: 300px;
    order: 2;
  }

  .logoMainContainer {
    width: 200px;
    height: 200px;
  }

  .content {
    order: 1;
  }

  .mainTitle {
    font-size: clamp(1.875rem, 4vw, 2.5rem);
  }

  .ctaSection {
    flex-direction: column;
  }

  .button {
    width: 100%;
    justify-content: center;
  }

  .credibility {
    flex-wrap: wrap;
    gap: var(--space-6);
  }

  .credDivider {
    display: none;
  }

  .energyWaves {
    display: none;
  }
}

*/
