import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import { fadeInUp, staggerContainer } from '../animations/animations';
import { blogs } from '../data/blogsData';
import styles from './Blogs.module.css';

const categories = [
  'All Articles',
  'Cloud & Distributed Systems',
  'Cloud Infrastructure & Security',
  'Full Stack & SaaS',
];

export default function Blogs({ onNavigateHome, onSelectBlog }) {
  const [activeFilter, setActiveFilter] = useState('All Articles');

  const filteredBlogs =
    activeFilter === 'All Articles'
      ? blogs
      : blogs.filter((blog) => blog.category === activeFilter);

  return (
    <div className={styles.blogsPage}>
      <div className="container">
        {/* Page Header */}
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

          <h1 className={styles.pageTitle}>Engineering Insights & Articles</h1>
          <p className={styles.pageSubtitle}>
            Reflections, architecture deep-dives, and technical lessons learned from building
            distributed cloud platforms, scalable web applications, and developer systems.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          className={styles.filterBar}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`${styles.filterBtn} ${
                activeFilter === category ? styles.filterBtnActive : ''
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Cards Grid */}
        <motion.div
          layout
          className={styles.blogsGrid}
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="popLayout">
            {filteredBlogs.map((blog) => (
              <motion.div
                key={blog.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <BlogCard {...blog} onSelectBlog={onSelectBlog} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Collaboration Banner */}
        <motion.div
          className={styles.newsletterBanner}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <div>
            <h2 className={styles.bannerHeading}>Interested in technical collaboration?</h2>
            <p className={styles.bannerText}>
              I write about cloud systems, full-stack architecture, and software craftsmanship.
              Reach out if you'd like to discuss engineering solutions or have a project in mind.
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
              <span>Get In Touch</span>
              <i className="ri-arrow-right-line" aria-hidden="true"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

