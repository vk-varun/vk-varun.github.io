import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/animations';
import styles from './ProjectCard.module.css';

export default function ProjectCard({
  title,
  description,
  tags = [],
  image,
  category,
  liveUrl,
  githubUrl,
}) {
  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={styles.card}
    >
      <div className={styles.imageWrapper}>
        {category && <span className={styles.cardBadge}>{category}</span>}
        <img
          src={image}
          alt={`${title} project preview`}
          className={styles.cardImage}
          loading="lazy"
        />
      </div>

      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{title}</h3>
        </div>

        <p className={styles.cardDescription}>{description}</p>

        {tags.length > 0 && (
          <ul className={styles.tagsList} aria-label="Technologies used">
            {tags.map((tag) => (
              <li key={tag} className={styles.tagItem}>
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className={styles.cardFooter}>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.actionLink} ${styles.liveBtn}`}
              aria-label={`View live demo of ${title}`}
            >
              <span>Live Demo</span>
              <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.actionLink} ${styles.codeLink}`}
              aria-label={`View GitHub repository for ${title}`}
            >
              <i className="ri-github-line" aria-hidden="true"></i>
              <span>Source</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
