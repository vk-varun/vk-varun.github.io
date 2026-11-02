import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard';
import { fadeInUp, staggerContainer } from '../../animations/animations';
import { projects } from '../../data/projectsData';
import styles from './Projects.module.css';

const filterCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend & UI' },
  { id: 'systems', label: 'Systems & Cloud' },
];

export default function Projects({ onViewAllProjects }) {
  const [activeFilter, setActiveFilter] = useState('all');

  // Display only the original 6 featured projects on the homepage "Selected Engineering Projects"
  const homeProjects = projects.filter((project) => project.id <= 6);

  const filteredProjects =
    activeFilter === 'all'
      ? homeProjects
      : homeProjects.filter((project) => project.categoryGroup === activeFilter);

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">Selected Engineering Projects</h2>
          <p className="section-subtitle">
            A curation of production architectures, design systems, and distributed platforms
            engineered for performance and scale.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          className={styles.filterBar}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {filterCategories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`${styles.filterBtn} ${
                activeFilter === tab.id ? styles.filterBtnActive : ''
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className={styles.projectsGrid}
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects CTA Banner */}
        <motion.div
          className={styles.viewAllBanner}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <div className={styles.viewAllTextCol}>
            <span className={styles.viewAllTag}>Extended Archive</span>
            <h3 className={styles.viewAllHeading}>Looking to review my complete portfolio?</h3>
            <p className={styles.viewAllDescription}>
              Explore the full archive featuring web applications, mobile platforms, enterprise cloud
              architectures, and technical case studies designed for clients and partners.
            </p>
          </div>

          <a
            href="/all-projects"
            onClick={(e) => {
              e.preventDefault();
              if (onViewAllProjects) onViewAllProjects();
            }}
            className={styles.viewAllBtn}
          >
            <span>View All Projects</span>
            <i className="ri-arrow-right-line" aria-hidden="true"></i>
          </a>
        </motion.div>

        {/* GitHub Repositories Banner */}
        <motion.div
          className={styles.githubCtaBox}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <div className={styles.ctaTextCol}>
            <h3 className={styles.ctaHeading}>Looking for more experiments & open source?</h3>
            <p className={styles.ctaDescription}>
              I frequently publish experimental sandboxes, CLI tools, and architecture blueprints on
              GitHub. Explore over 30+ open source repositories and utilities.
            </p>
          </div>
          <a
            href="https://github.com/vk-varun"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubBtn}
          >
            <i className="ri-github-fill" aria-hidden="true"></i>
            <span>View GitHub Profile</span>
            <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
