/* ════════════════════════════════════════════════════════════════
   ESENCIA HIPNÓTICA - COMPONENTE PILLAR CARDS
   Grid de 3 pilares de servicio con detalle premium
   ════════════════════════════════════════════════════════════════ */

import React, { useState } from 'react';
import styles from './PillarCards.module.css';

export default function PillarCards() {
  const [expandedPillar, setExpandedPillar] = useState(null);

  const pillars = [
    {
      id: 1,
      icon: '🧠',
      title: 'Bienestar Clínico & Mental',
      subtitle: 'Fundamentos terapéuticos rigurosos',
      color: 'turquoise',
      description: 'Abordaje profesional basado en psicología clínica validada científicamente.',
      services: [
        'Psicología Gestalt',
        'Terapia Psicológica Integrativa',
        'Programación Neurolingüística (PNL)',
        'Manejo del estrés y ansiedad',
        'Resolución de traumas emocionales'
      ],
      benefits: ['Recupera tu equilibrio mental', 'Supera bloqueos emocionales', 'Mejora tu autoestima'],
      cta: 'Consulta Clínica',
      href: '/clinico'
    },
    {
      id: 2,
      icon: '✨',
      title: 'Procesos de Consciencia Ampliada',
      subtitle: 'Exploración profunda del subconsciente',
      color: 'gold',
      description: 'Técnicas comprobadas para acceder a estados expandidos de consciencia y sanación.',
      services: [
        'Hipnosis Regresiva',
        'Hipnosis Terapéutica Presencial',
        'Hipnosis en Línea',
        'Regresiones a Vidas Pasadas',
        'Hipnobirthing'
      ],
      benefits: ['Desbloquea memorias y patrones', 'Accede a tu sabiduría interior', 'Transforma creencias limitantes'],
      cta: 'Explorar Hipnosis',
      href: '/consciencia'
    },
    {
      id: 3,
      icon: '🔮',
      title: 'Conexión Espiritual & Holística',
      subtitle: 'Abordaje transpersonal y energético',
      color: 'warm',
      description: 'Técnicas ancestrales que honran tu espiritualidad y tu conexión con lo trascendente.',
      services: [
        'Canalización Ética',
        'Mediunidad de Luz',
        'Guía Espiritual Personalizada',
        'Lectura de Tarot',
        'Conexión con Seres de Luz'
      ],
      benefits: ['Recibe mensajes de tu guía espiritual', 'Sana a nivel energético', 'Eleva tu vibración'],
      cta: 'Sesión Espiritual',
      href: '/espiritual'
    }
  ];

  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>Nuestros Tres Pilares de Transformación</h2>
        <p className={styles.subtitle}>
          Una arquitectura integral que integra la mente clínica, la consciencia expandida y la espiritualidad profunda.
        </p>
        <div className={styles.divider}></div>
      </div>

      {/* Grid de Tarjetas */}
      <div className={styles.grid}>
        {pillars.map((pillar) => (
          <div 
            key={pillar.id}
            className={`${styles.card} ${styles[`card${pillar.color}`]} ${expandedPillar === pillar.id ? styles.expanded : ''}`}
            onClick={() => setExpandedPillar(expandedPillar === pillar.id ? null : pillar.id)}
          >
            {/* Fondo decorativo gradiente */}
            <div className={styles.cardBackground}></div>

            {/* Contenido */}
            <div className={styles.cardContent}>
              {/* Header de tarjeta */}
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{pillar.icon}</span>
                </div>
                <div className={styles.cardTitles}>
                  <h3 className={styles.cardTitle}>{pillar.title}</h3>
                  <p className={styles.cardSubtitle}>{pillar.subtitle}</p>
                </div>
              </div>

              {/* Descripción */}
              <p className={styles.cardDescription}>{pillar.description}</p>

              {/* Servicios - Expandible */}
              <div className={`${styles.servicesList} ${expandedPillar === pillar.id ? styles.visible : ''}`}>
                <h4 className={styles.servicesTitle}>Servicios Incluidos:</h4>
                <ul>
                  {pillar.services.map((service, idx) => (
                    <li key={idx}>{service}</li>
                  ))}
                </ul>
              </div>

              {/* Beneficios */}
              <div className={`${styles.benefits} ${expandedPillar === pillar.id ? styles.visible : ''}`}>
                <h4 className={styles.benefitsTitle}>¿Qué conseguirás?</h4>
                <ul className={styles.benefitsList}>
                  {pillar.benefits.map((benefit, idx) => (
                    <li key={idx}>
                      <span className={styles.benefitIcon}>→</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button className={`${styles.cardCTA} ${styles[`cta${pillar.color}`]}`}>
                {pillar.cta}
                <span className={styles.ctaArrow}>→</span>
              </button>

              {/* Expand indicator */}
              <div className={styles.expandIndicator}>
                <span className={styles.expandIcon}>
                  {expandedPillar === pillar.id ? '▼' : '▶'}
                </span>
              </div>
            </div>

            {/* Línea decorativa de color en esquina */}
            <div className={styles.cornerAccent}></div>
          </div>
        ))}
      </div>

      {/* Sección CTA complementaria */}
      <div className={styles.complementaryCTA}>
        <h3>¿No sabes por dónde empezar?</h3>
        <p>Realiza una consulta inicial para descubrir cuál de nuestros pilares es el ideal para ti.</p>
        <button className={styles.consultationButton}>
          Agendar Consulta Diagnóstica Gratis
        </button>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   ESTILOS - PillarCards.module.css
   ════════════════════════════════════════════════════════════════ */

/*

.section {
  max-width: 1280px;
  margin: 0 auto;
  padding: var(--space-20) var(--space-6);
  background: var(--color-white);
}

/* ─── HEADER ─── */

.header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin-bottom: var(--space-4);
}

.subtitle {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto var(--space-8);
  line-height: 1.7;
}

.divider {
  width: 60px;
  height: 3px;
  margin: 0 auto;
  background: linear-gradient(90deg, var(--color-gold-500), var(--color-turquoise-500));
  border-radius: 2px;
}

/* ─── GRID ─── */

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-8);
  margin-bottom: var(--space-20);
}

/* ─── TARJETAS BASE ─── */

.card {
  position: relative;
  background: var(--color-white);
  border: 2px solid var(--color-silver-200);
  border-radius: var(--border-radius-2xl);
  padding: var(--space-8);
  cursor: pointer;
  transition: var(--transition-slow);
  overflow: hidden;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-sm);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-8px);
  border-color: var(--text-tertiary);
}

/* ─── VARIANTES DE COLOR ─── */

.cardTurquoise {
  --primary-color: var(--color-turquoise-500);
  --light-color: rgba(20, 184, 166, 0.08);
}

.cardGold {
  --primary-color: var(--color-gold-500);
  --light-color: rgba(245, 158, 11, 0.08);
}

.cardWarm {
  --primary-color: var(--color-warm-500);
  --light-color: rgba(234, 88, 12, 0.08);
}

.cardBackground {
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  height: 150px;
  background: var(--light-color);
  border-radius: 50%;
  filter: blur(40px);
  z-index: 0;
}

.cardContent {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* ─── HEADER DE TARJETA ─── */

.cardHeader {
  display: flex;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
  align-items: flex-start;
}

.iconWrapper {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--light-color);
  border-radius: var(--border-radius-xl);
  flex-shrink: 0;
}

.icon {
  font-size: 2rem;
}

.cardTitles {
  flex: 1;
}

.cardTitle {
  font-family: var(--font-serif);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin-bottom: var(--space-1);
}

.cardSubtitle {
  font-size: var(--font-size-sm);
  color: var(--primary-color);
  font-weight: var(--font-weight-semibold);
}

/* ─── DESCRIPCIÓN ─── */

.cardDescription {
  font-size: var(--font-size-base);
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-6);
  flex-grow: 1;
}

/* ─── SERVICIOS ─── */

.servicesList {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.4s ease;
  margin-bottom: var(--space-4);
}

.servicesList.visible {
  max-height: 400px;
  opacity: 1;
}

.servicesTitle {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--primary-color);
  margin-bottom: var(--space-3);
}

.servicesList ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.servicesList li {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  padding-left: var(--space-4);
  position: relative;
}

.servicesList li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

/* ─── BENEFICIOS ─── */

.benefits {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.4s ease 0.1s;
  margin-bottom: var(--space-6);
}

.benefits.visible {
  max-height: 300px;
  opacity: 1;
}

.benefitsTitle {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--primary-color);
  margin-bottom: var(--space-3);
}

.benefitsList {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.benefitsList li {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
}

.benefitIcon {
  color: var(--primary-color);
  font-weight: bold;
  font-size: var(--font-size-sm);
}

/* ─── CTA BUTTON ─── */

.cardCTA {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  border: none;
  border-radius: var(--border-radius-lg);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: var(--transition-base);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: auto;
}

.ctaTurquoise {
  background: var(--color-turquoise-500);
  color: white;
}

.ctaTurquoise:hover {
  background: var(--color-turquoise-600);
  transform: translateX(4px);
}

.ctaGold {
  background: var(--color-gold-500);
  color: white;
}

.ctaGold:hover {
  background: var(--color-gold-600);
  transform: translateX(4px);
}

.ctaWarm {
  background: var(--color-warm-500);
  color: white;
}

.ctaWarm:hover {
  background: var(--color-warm-600);
  transform: translateX(4px);
}

.ctaArrow {
  transition: transform 0.3s ease;
}

.cardCTA:hover .ctaArrow {
  transform: translateX(4px);
}

/* ─── EXPAND INDICATOR ─── */

.expandIndicator {
  position: absolute;
  bottom: var(--space-4);
  right: var(--space-4);
  opacity: 0.5;
  transition: var(--transition-base);
}

.card:hover .expandIndicator {
  opacity: 1;
  color: var(--primary-color);
}

.expandIcon {
  font-size: var(--font-size-sm);
  font-weight: bold;
}

/* ─── CORNER ACCENT ─── */

.cornerAccent {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), transparent);
  border-radius: 0 var(--border-radius-2xl) 0 0;
}

/* ─── COMPLEMENTARY CTA ─── */

.complementaryCTA {
  text-align: center;
  padding: var(--space-12);
  background: linear-gradient(135deg, rgba(20, 184, 166, 0.05), rgba(245, 158, 11, 0.05));
  border: 2px solid rgba(20, 184, 166, 0.1);
  border-radius: var(--border-radius-2xl);
  margin-top: var(--space-8);
}

.complementaryCTA h3 {
  font-family: var(--font-serif);
  font-size: var(--font-size-2xl);
  margin-bottom: var(--space-3);
  color: var(--text-primary);
}

.complementaryCTA p {
  font-size: var(--font-size-base);
  color: var(--text-secondary);
  margin-bottom: var(--space-6);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.consultationButton {
  padding: var(--space-4) var(--space-8);
  background: linear-gradient(135deg, var(--color-turquoise-500), var(--color-gold-500));
  color: white;
  border: none;
  border-radius: var(--border-radius-lg);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-base);
  cursor: pointer;
  transition: var(--transition-base);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 10px 30px rgba(20, 184, 166, 0.2);
}

.consultationButton:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(20, 184, 166, 0.3);
}

/* ─── RESPONSIVE ─── */

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .card {
    min-height: auto;
  }

  .cardHeader {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .cardTitle {
    font-size: var(--font-size-xl);
  }

  .cardDescription {
    font-size: var(--font-size-sm);
  }

  .title {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
  }
}

*/
