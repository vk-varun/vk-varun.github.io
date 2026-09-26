import { motion } from 'framer-motion';
import {
  fadeInUp,
  staggerContainer,
  slideInLeft,
} from '../../animations/animations';
import styles from './About.module.css';

const philosophies = [
  {
    icon: 'ri-flashlight-line',
    title: 'Performance First',
    text: 'Sub-second response times, lean payloads, and optimized rendering lifecycles are foundational, never an afterthought.',
  },
  {
    icon: 'ri-palette-line',
    title: 'Visual Polish',
    text: 'Harmonious typography, deliberate micro-interactions, and responsive layouts that look intentional on every viewport.',
  },
  {
    icon: 'ri-layout-masonry-line',
    title: 'Modular Architecture',
    text: 'Composing decoupled, reusable modules with strict type safety and clear domain boundaries that scale as teams grow.',
  },
  {
    icon: 'ri-terminal-box-line',
    title: 'Continuous Delivery',
    text: 'Rigorous automated testing, CI/CD pipelines, and observability ensuring smooth deployments with zero downtime.',
  },
];

const skillGroups = [
  {
    category: 'Frontend Engineering',
    icon: 'ri-layout-3-line',
    skills: ['React 19', 'TypeScript', 'JavaScript (ESNext)', 'Next.js', 'Vite', 'Framer Motion', 'CSS Modules / Tailwind', 'HTML5 / Semantic a11y'],
  },
  {
    category: 'Backend & APIs',
    icon: 'ri-server-line',
    skills: ['Node.js', 'Express', 'Python / FastAPI', 'RESTful APIs', 'GraphQL', 'WebSockets', 'Microservices', 'Authentication (OAuth/JWT)'],
  },
  {
    category: 'Databases & Cloud',
    icon: 'ri-database-2-line',
    skills: ['PostgreSQL', 'MongoDB', 'Redis Caching', 'Prisma ORM', 'AWS (S3, Lambda, EC2)', 'Docker & Containers', 'Vercel / Cloudflare', 'CI/CD Pipelines'],
  },
  {
    category: 'Architecture & Craft',
    icon: 'ri-git-branch-line',
    skills: ['Design Systems', 'State Management', 'Testing (Vitest, Jest)', 'Core Web Vitals', 'Git & GitOps', 'Agile / Pair Programming', 'Code Review & Mentorship'],
  },
];

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Bridging architectural rigor and refined design.</h2>
          <p className="section-subtitle">
            A developer who treats code as craft and user experience as art.
          </p>
        </motion.div>

        {/* Narrative & Philosophy Grid */}
        <div className={styles.introGrid}>
          {/* Narrative Column */}
          <motion.div
            className={styles.storyCol}
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h3 className={styles.storyTitle}>
              Passionate about creating digital products that are as robust behind the scenes as they are beautiful on screen.
            </h3>
            <p className={styles.paragraph}>
              With over 7 years of engineering experience across high-growth startups and established tech environments, I've architected client-side applications, resilient distributed services, and high-conversion user interfaces.
            </p>
            <blockquote className={styles.highlightQuote}>
              "Great software balances speed, accessibility, structural clarity, and unforgettable aesthetic cohesion."
            </blockquote>
            <p className={styles.paragraph}>
              When I'm not architecting web platforms or tweaking motion curves, I contribute to open-source tooling, write technical notes on distributed systems, and mentor upcoming engineers.
            </p>

            <div className={styles.downloadRow}>
              <a
                href="#contact"
                className={styles.resumeBtn}
              >
                <i className="ri-mail-send-line" aria-hidden="true"></i>
                <span>Get in Touch for Opportunities</span>
              </a>
            </div>
          </motion.div>

          {/* 4 Philosophy Cards */}
          <motion.div
            className={styles.philosophyGrid}
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {philosophies.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className={styles.philosophyCard}
              >
                <div className={styles.iconCircle}>
                  <i className={item.icon} aria-hidden="true"></i>
                </div>
                <h4 className={styles.cardTitle}>{item.title}</h4>
                <p className={styles.cardText}>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technical Stack Section */}
        <div className={styles.skillsSection}>
          <motion.h3
            className={styles.skillsTitle}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            Technical Arsenal & Tooling
          </motion.h3>

          <motion.div
            className={styles.skillsGrid}
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {skillGroups.map((group) => (
              <motion.div
                key={group.category}
                variants={fadeInUp}
                className={styles.skillCategoryCard}
              >
                <div className={styles.categoryHeader}>
                  <i className={`${group.icon} ${styles.categoryIcon}`} aria-hidden="true"></i>
                  <h4 className={styles.categoryName}>{group.category}</h4>
                </div>
                <ul className={styles.skillsPillList}>
                  {group.skills.map((skill) => (
                    <li key={skill} className={styles.skillPill}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
