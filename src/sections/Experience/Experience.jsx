import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../animations/animations';
import styles from './Experience.module.css';

const experiences = [
  {
    role: 'Lead Developer & Technical Advisor',
    company: 'Creators Blueprint',
    period: 'Dec 2025 — Present',
    location: 'Dubai, UAE',
    highlights: [
      'Led full-stack development initiatives, overseeing the design, development, and deployment of portfolio platforms for influencers to strengthen brand presence and drive revenue generation.',
      'Translated client requirements into scalable web solutions, guided technical architecture decisions, and managed end-to-end development across multiple projects.',
      'Applied strong analytical and problem-solving skills to optimize web performance, search visibility, and conversion funnels.',
    ],
    tech: ['Next.js', 'React', 'GCP', 'SEO', 'Analytics', 'SQL', 'AI'],
  },
  {
    role: 'Operations Support & Digital Transformation Intern',
    company: 'ADNOC Offshore',
    period: 'May 2025 — Jul 2025',
    location: 'Abu Dhabi, UAE',
    highlights: [
      'Contributed to digital transformation initiatives within the Operations Support Department, focusing on AI tools, workflow automation, and business process improvements.',
      'Applied analytical research, project management, and critical thinking to streamline internal processes across cross-functional operations.',
    ],
    tech: ['AI Tools', 'Workflow Automation', 'Process Optimization', 'Analytics'],
  },
  {
    role: 'Full Stack Developer',
    company: 'HonetPay',
    period: 'Aug 2023 — Jun 2024',
    location: 'Edmonton, AB, Canada',
    highlights: [
      'Engineered full-stack features for a social investment platform merging finance with creator culture, enabling fans to invest in creator ventures.',
      'Developed responsive client interfaces and integrated transactional backend services ensuring security, high reliability, and smooth user onboarding.',
    ],
    tech: ['Full Stack Development', 'React', 'Node.js', 'Web APIs', 'FinTech'],
  },
  {
    role: 'Data Analysis & Geospatial Intern',
    company: 'Sightspectrum Technology Solutions LLC',
    period: 'Aug 2022',
    location: 'Abu Dhabi, UAE',
    highlights: [
      'Delivered data analysis and visual reports to uncover actionable trends and business insights from corporate datasets for UAE clients.',
      'Utilized SQL for relational database querying, data wrangling, and pipeline management.',
      'Leveraged ESRI mapping tools to visualize, interpret, and present geographic data distributions.',
    ],
    tech: ['SQL', 'Data Analytics', 'ESRI GIS', 'Data Visualization', 'Reporting'],
  },
  {
    role: 'Research & Spatial Analysis Intern',
    company: 'iSpatial Techno Solutions LLC',
    period: 'Jun 2022 — Jul 2022',
    location: 'Abu Dhabi, UAE',
    highlights: [
      'Contributed to the "Women Empowerment in the UAE" initiative through comprehensive research, spatial data analysis, and visual presentations.',
      'Leveraged the ESRI mapping platform to analyze and visualize spatial demographics highlighting contributions across diverse UAE industries.',
      'Conducted data analysis and created clear graphical dashboards and visual insights for project stakeholders.',
    ],
    tech: ['ESRI GIS', 'Spatial Analysis', 'Data Analysis', 'Data Visualization'],
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
