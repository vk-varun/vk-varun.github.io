import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/animations';
import styles from './ProjectCard.module.css';

export default function ProjectCard({
  title,
  subtitle,
  description,
  tags = [],
  image,
  category,
  badge,
  liveUrl,
  githubUrl,
  publicationStatus,
}) {
  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={styles.card}
    >
      <div className={styles.imageWrapper}>
        <span className={styles.cardBadge}>{badge || category}</span>
        <img
          src={image}
          alt={`${title} project preview`}
          className={styles.cardImage}
          loading="lazy"
        />
      </div>

      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <div>
            <h3 className={styles.cardTitle}>{title}</h3>
            {subtitle && <span className={styles.cardSubtitle}>{subtitle}</span>}
          </div>
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
              <span>{liveUrl.includes('apps.apple.com') ? 'App Store' : 'Live Demo'}</span>
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

          {publicationStatus && (
            <span className={styles.paperBadge}>
              <i className="ri-article-line" aria-hidden="true"></i>
              <span>{publicationStatus}</span>
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
