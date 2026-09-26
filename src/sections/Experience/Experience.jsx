import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../animations/animations';
import styles from './Experience.module.css';

const experiences = [
  {
    role: 'Senior Full-Stack Engineer / Lead',
    company: 'Veloce Systems',
    period: '2023 — Present',
    location: 'San Francisco, CA (Hybrid)',
    highlights: [
      'Spearheaded the migration of legacy monolithic dashboards to modular React micro-frontends, reducing median bundle load latency by 48%.',
      'Designed and deployed an internal edge-caching layer in Node.js & Redis serving 12M+ daily active requests with 99.98% uptime.',
      'Mentored 6 engineers in modern TypeScript, automated CI/CD testing with Vitest/Playwright, and accessibility standards.',
    ],
    tech: ['React 19', 'TypeScript', 'Node.js', 'Redis', 'Docker', 'GraphQL', 'AWS ECS'],
  },
  {
    role: 'Full-Stack Software Engineer',
    company: 'Quantico Labs',
    period: '2021 — 2023',
    location: 'Remote',
    highlights: [
      'Built a real-time collaborative workspace utilizing WebSockets, CRDTs, and TailwindCSS used by over 80,000 active product designers.',
      'Constructed automated background job pipelines with BullMQ and PostgreSQL, handling asynchronous file processing and Webhook events.',
      'Implemented OAuth 2.0 multi-tenant authentication, SOC2 audit trails, and strict role-based access control (RBAC).',
    ],
    tech: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'WebSockets', 'TailwindCSS', 'Jest'],
  },
  {
    role: 'Frontend Engineer',
    company: 'Kinetix Digital',
    period: '2019 — 2021',
    location: 'Austin, TX',
    highlights: [
      'Engineered interactive data visualizations and animated consumer journeys that lifted user engagement and conversion rates by 34%.',
      'Established the agency design system and reusable component repository, cutting project onboarding time by half.',
      'Achieved continuous 98+ Google Lighthouse scores across performance, SEO, and accessibility on all primary product landing pages.',
    ],
    tech: ['React', 'JavaScript', 'CSS Modules', 'Framer Motion', 'REST APIs', 'Webpack / Vite'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className="section-tag">Career Journey</span>
          <h2 className="section-title">Experience & Milestones</h2>
          <p className="section-subtitle">
            A track record of engineering scalable platforms, leading technical initiatives, and
            shipping resilient code.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className={styles.timelineContainer}>
          <div className={styles.timelineTrack} aria-hidden="true" />

          <motion.ul
            className={styles.timelineList}
            variants={staggerContainer(0.15, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {experiences.map((exp, idx) => (
              <motion.li key={idx} variants={fadeInUp} className={styles.timelineItem}>
                <div className={styles.timelineDot} aria-hidden="true" />

                <div className={styles.timelineCard}>
                  <div className={styles.cardTop}>
                    <div>
                      <h3 className={styles.roleTitle}>{exp.role}</h3>
                      <p className={styles.companyName}>
                        {exp.company} • <span style={{ fontWeight: 400 }}>{exp.location}</span>
                      </p>
                    </div>
                    <span className={styles.periodBadge}>
                      <i className="ri-calendar-line" aria-hidden="true"></i>
                      <span>{exp.period}</span>
                    </span>
                  </div>

                  <ul className={styles.highlightsList}>
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className={styles.highlightItem}>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <ul className={styles.techTags} aria-label="Technologies used in this position">
                    {exp.tech.map((t) => (
                      <li key={t} className={styles.techTag}>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          {/* Education Box */}
          <motion.div
            className={styles.educationBox}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            <div className={styles.eduIcon}>
              <i className="ri-graduation-cap-line" aria-hidden="true"></i>
            </div>
            <div>
              <h4 className={styles.eduTitle}>Bachelor of Science in Computer Science</h4>
              <p className={styles.eduSub}>
                Specialization in Distributed Systems & Software Engineering • Magna Cum Laude
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
