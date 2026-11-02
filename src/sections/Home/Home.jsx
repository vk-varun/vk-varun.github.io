import { motion } from 'framer-motion';
import {
  fadeInUp,
  staggerContainer,
  slideInRight,
  floatingAnimation,
} from '../../animations/animations';
import InteractiveGrid from '../../components/InteractiveGrid';
import { scrollToSection } from '../../utils/navigation';
import styles from './Home.module.css';

export default function Home() {
  const handleScrollTo = (id) => {
    scrollToSection(id, true);
  };

  return (
    <section id="home" className={styles.heroSection}>
      {/* 3D Interactive Hover Grid Background */}
      <InteractiveGrid />

      {/* Ambient background glow orbs */}
      <div className={styles.ambientHalo1} aria-hidden="true" />
      <div className={styles.ambientHalo2} aria-hidden="true" />

      <div className="container">
        <div className={styles.grid}>
          {/* Left Column: Introduction & CTA */}
          <motion.div
            className={styles.introContent}
            variants={staggerContainer(0.12, 0.05)}
            initial="hidden"
            animate="visible"
          >
            {/* Status indicator pill */}
            <motion.div variants={fadeInUp} className={styles.availabilityBadge}>
              <span className={styles.waveIcon} role="img" aria-label="Waving hand">
                👋
              </span>
              <span>Available for engineering leadership & projects</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeInUp} className={styles.headline}>
              Engineering digital solutions
              <span className={styles.highlightText}>with a builder's mindset.</span>
            </motion.h1>

            {/* Subtitle / Bio */}
            <motion.p variants={fadeInUp} className={styles.leadBio}>
              I'm <strong>Varun Kumaravel</strong>, a Software Developer & Tech Entrepreneur
              specializing in full-stack web and mobile applications, cloud computing, and
              scalable network architectures based in Dubai, UAE.
            </motion.p>

            {/* Call to action buttons */}
            <motion.div variants={fadeInUp} className={styles.ctaGroup}>
              <button
                type="button"
                onClick={() => handleScrollTo('projects')}
                className={styles.primaryCta}
              >
                <span>Explore Projects</span>
                <i className="ri-arrow-right-line" aria-hidden="true"></i>
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className={styles.secondaryCta}
              >
                <span>Get in Touch</span>
                <i className="ri-chat-1-line" aria-hidden="true"></i>
              </button>
            </motion.div>

            {/* Live Metrics Row */}
            <motion.div variants={fadeInUp} className={styles.metricsRow}>
              <div className={styles.metricItem}>
                <span className={styles.metricValue}>5+</span>
                <span className={styles.metricLabel}>Years Experience</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricValue}>25+</span>
                <span className={styles.metricLabel}>Systems Shipped</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricValue}>99.9%</span>
                <span className={styles.metricLabel}>Uptime Standards</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Layered Card Showcase */}
          <motion.div
            className={styles.visualShowcase}
            variants={slideInRight}
            initial="hidden"
            animate="visible"
          >
            <div className={styles.cardStack}>
              {/* Primary Code Window Card */}
              <div className={styles.mainCard}>
                <div className={styles.windowBar}>
                  <div className={styles.windowDots}>
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                  </div>
                  <span className={styles.windowTitle}>architect.config.ts</span>
                  <i className="ri-braces-line" style={{ color: 'var(--color-secondary)' }}></i>
                </div>

                <div className={styles.codeSnippet}>
                  <p>
                    <span className={styles.keyword}>const</span> engineer = &#123;
                  </p>
                  <p style={{ paddingLeft: '1.25rem' }}>
                    <span className={styles.property}>name</span>: <span className={styles.string}>'Varun Kumaravel'</span>,
                  </p>
                  <p style={{ paddingLeft: '1.25rem' }}>
                    <span className={styles.property}>location</span>: <span className={styles.string}>'Dubai, UAE'</span>,
                  </p>
                  <p style={{ paddingLeft: '1.25rem' }}>
                    <span className={styles.property}>focus</span>: [
                    <span className={styles.string}>'Web & Mobile'</span>,{' '}
                    <span className={styles.string}>'Cloud & Networks'</span>,{' '}
                    <span className={styles.string}>'Full-Stack'</span>],
                  </p>
                  <p style={{ paddingLeft: '1.25rem' }}>
                    <span className={styles.property}>mindset</span>:{' '}
                    <span className={styles.string}>'Solve Real Problems'</span>,
                  </p>
                  <p style={{ paddingLeft: '1.25rem' }}>
                    <span className={styles.property}>status</span>:{' '}
                    <span className={styles.string}>'Open to collaborate'</span>
                  </p>
                  <p>&#125;;</p>
                  <p className={styles.comment}>// Turning innovative concepts into practical products</p>
                </div>

                <div className={styles.techPillsGroup}>
                  <span className={styles.techPill}>
                    <i className="ri-reactjs-line"></i> React 19
                  </span>
                  <span className={styles.techPill}>
                    <i className="ri-code-s-slash-line"></i> TypeScript
                  </span>
                  <span className={styles.techPill}>
                    <i className="ri-server-line"></i> Node.js
                  </span>
                  <span className={styles.techPill}>
                    <i className="ri-cloud-line"></i> AWS / Cloud
                  </span>
                </div>
              </div>

              {/* Floating Top Badge with subtle oscillation */}
              <motion.div
                className={styles.floatingBadge1}
                animate={floatingAnimation.animate}
              >
                <i className={`ri-shield-flash-line ${styles.badgeIcon}`}></i>
                <div className={styles.badgeText}>
                  <span className={styles.badgeTitle}>System Architecture</span>
                  <span className={styles.badgeSub}>Enterprise Ready</span>
                </div>
              </motion.div>

              {/* Floating Bottom Badge */}
              <motion.div
                className={styles.floatingBadge2}
                animate={{
                  y: [0, 8, 0],
                  transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                }}
              >
                <i
                  className="ri-sparkling-2-line"
                  style={{ fontSize: '1.25rem', color: 'var(--color-primary)' }}
                ></i>
                <div className={styles.badgeText}>
                  <span className={styles.badgeTitle}>Micro-interactions</span>
                  <span className={styles.badgeSub} style={{ color: 'var(--color-primary)' }}>
                    Framer Motion 60fps
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
