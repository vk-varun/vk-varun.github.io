import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../animations/animations';
import styles from './Experience.module.css';

const timelineEntries = [
  {
    type: 'work',
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
    type: 'education',
    role: 'M.Sc. Network Management & Cloud Computing',
    company: 'Middlesex University',
    period: '2025 — Present',
    location: 'Dubai, UAE',
    highlights: [
      'Advanced specialization in Cloud Infrastructure Architecture, Enterprise Network Security, and Virtualized Distributed Systems.',
      'Focused on high-performance cloud networks, scalable deployment paradigms, and automated systems management.',
    ],
    tech: ['Cloud Computing', 'Network Management', 'Cloud Security', 'Distributed Systems'],
  },
  {
    type: 'work',
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
    type: 'work',
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
    type: 'work',
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
    type: 'work',
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
  {
    type: 'education',
    role: 'Bachelor of Science in Computer Science',
    company: 'University Degree',
    period: 'Graduated',
    location: 'Academic Milestone',
    honor: 'Summa Cum Laude',
    highlights: [
      'Graduated with highest academic honors (Summa Cum Laude) specializing in Distributed Systems & Software Engineering.',
      'Core foundation in data structures, algorithms, operating systems, software engineering principles, and distributed architectures.',
    ],
    tech: ['Distributed Systems', 'Software Engineering', 'Algorithms', 'Computer Systems'],
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
          <span className="section-tag">Career & Education</span>
          <h2 className="section-title">Experience & Milestones</h2>
          <p className="section-subtitle">
            A chronological timeline of engineering leadership, industry experience, and academic
            achievements.
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
            {timelineEntries.map((item, idx) => {
              const isEducation = item.type === 'education';

              return (
                <motion.li key={idx} variants={fadeInUp} className={styles.timelineItem}>
                  <div
                    className={`${styles.timelineDot} ${
                      isEducation ? styles.educationDot : ''
                    }`}
                    aria-label={isEducation ? 'Education Milestone' : 'Work Experience'}
                  >
                    <i
                      className={isEducation ? 'ri-graduation-cap-fill' : 'ri-briefcase-4-fill'}
                      aria-hidden="true"
                    />
                  </div>

                  <div
                    className={`${styles.timelineCard} ${
                      isEducation ? styles.educationCard : ''
                    }`}
                  >
                    <div className={styles.cardTop}>
                      <div>
                        {isEducation && (
                          <div className={styles.educationTypeBadgeWrapper}>
                            <span className={styles.educationTypeBadge}>
                              <i className="ri-graduation-cap-line" aria-hidden="true" />
                              <span>Education</span>
                            </span>
                          </div>
                        )}
                        <div className={styles.roleTitleGroup}>
                          <h3 className={styles.roleTitle}>{item.role}</h3>
                          {item.honor && (
                            <span className={styles.honorBadge}>
                              <i className="ri-award-fill" aria-hidden="true" />
                              <span>{item.honor}</span>
                            </span>
                          )}
                        </div>
                        <p className={styles.companyName}>
                          {item.company} •{' '}
                          <span style={{ fontWeight: 400 }}>{item.location}</span>
                        </p>
                      </div>

                      <span className={styles.periodBadge}>
                        <i className="ri-calendar-line" aria-hidden="true" />
                        <span>{item.period}</span>
                      </span>
                    </div>

                    <ul className={styles.highlightsList}>
                      {item.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className={styles.highlightItem}>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <ul
                      className={styles.techTags}
                      aria-label="Technologies and competencies"
                    >
                      {item.tech.map((t) => (
                        <li key={t} className={styles.techTag}>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
