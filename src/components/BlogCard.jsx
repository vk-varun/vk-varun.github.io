import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/animations';
import styles from './BlogCard.module.css';

export default function BlogCard({
  title,
  summary,
  date,
  readTime,
  category,
  tags = [],
  slug,
  onSelectBlog,
}) {
  const handleCardClick = (e) => {
    e.preventDefault();
    if (onSelectBlog) {
      onSelectBlog(slug);
    }
  };

  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className={styles.card}
    >
      <div className={styles.cardHeader}>
        {category && <span className={styles.categoryBadge}>{category}</span>}
        <div className={styles.metaInfo}>
          <span className={styles.dateText}>{date}</span>
          <span className={styles.dotSeparator}>•</span>
          <span className={styles.readTimeText}>{readTime}</span>
        </div>
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.title}>
          <a href={`/blogs/${slug}`} onClick={handleCardClick} className={styles.titleLink}>
            {title}
          </a>
        </h3>
        <p className={styles.summary}>{summary}</p>
      </div>

      {tags.length > 0 && (
        <ul className={styles.tagList} aria-label="Article tags">
          {tags.map((tag) => (
            <li key={tag} className={styles.tagItem}>
              {tag}
            </li>
          ))}
        </ul>
      )}

      <div className={styles.cardFooter}>
        <a
          href={`/blogs/${slug}`}
          onClick={handleCardClick}
          className={styles.readArticleLink}
        >
          <span>Read Article</span>
          <i className="ri-arrow-right-line" aria-hidden="true"></i>
        </a>
      </div>
    </motion.article>
  );
}

