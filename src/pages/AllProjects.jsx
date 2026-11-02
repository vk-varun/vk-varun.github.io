import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { fadeInUp, staggerContainer } from '../animations/animations';
import { projects } from '../data/projectsData';
import styles from './AllProjects.module.css';

const filterCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend & UI' },
  { id: 'systems', label: 'Systems & Cloud' },
];

export default function AllProjects({ onNavigateHome }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.categoryGroup === activeFilter);

  return (
    <div className={styles.allProjectsPage}>
      <div className="container">
        {/* Back Link & Header */}
        <motion.div
          className={styles.pageHeader}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateHome) onNavigateHome();
            }}
            className={styles.backHomeBtn}
          >
            <i className="ri-arrow-left-line" aria-hidden="true"></i>
            <span>Back to Home</span>
          </a>

          <h1 className={styles.pageTitle}>Complete Projects Archive</h1>
          <p className={styles.pageSubtitle}>
            A comprehensive catalog of engineering platforms, client systems, interactive web
            applications, and open-source software architectures.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          className={styles.filterBar}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
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

        {/* Grid of All Projects */}
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

        {/* Client Collaboration Banner */}
        <motion.div
          className={styles.clientShareBanner}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <div>
            <h2 className={styles.bannerHeading}>Have a project or partnership in mind?</h2>
            <p className={styles.bannerText}>
              I collaborate with founders, brands, and engineering teams to design and build
              scalable web and mobile solutions from concept to deployment.
            </p>
          </div>

          <div className={styles.bannerActions}>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigateHome) onNavigateHome('contact');
              }}
              className={styles.contactCtaBtn}
            >
              <span>Let's Build Together</span>
              <i className="ri-arrow-right-line" aria-hidden="true"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

