import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { fadeInUp } from '../animations/animations';
import { getBlogBySlug } from '../data/blogsData';
import styles from './BlogPost.module.css';

export default function BlogPost({ slug, onNavigateHome, onNavigateBlogs }) {
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <div className={styles.postPage}>
        <div className="container">
          <div className={styles.notFoundWrapper}>
            <h2>Article Not Found</h2>
            <p>The article you are looking for does not exist or has been moved.</p>
            <button
              onClick={() => (onNavigateBlogs ? onNavigateBlogs() : onNavigateHome())}
              className={styles.backBtn}
            >
              Back to Articles
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className={styles.postPage}>
      <div className="container">
        {/* Navigation Breadcrumb */}
        <motion.div
          className={styles.navRow}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <a
            href="/blogs"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateBlogs) onNavigateBlogs();
            }}
            className={styles.backBtn}
          >
            <i className="ri-arrow-left-line" aria-hidden="true"></i>
            <span>All Articles</span>
          </a>
        </motion.div>

        {/* Article Header */}
        <motion.header
          className={styles.articleHeader}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.headerMeta}>
            <span className={styles.categoryBadge}>{blog.category}</span>
            <span className={styles.metaDivider}>•</span>
            <span className={styles.date}>{blog.date}</span>
            <span className={styles.metaDivider}>•</span>
            <span className={styles.readTime}>{blog.readTime}</span>
          </div>

          <h1 className={styles.postTitle}>{blog.title}</h1>
          <p className={styles.postSummary}>{blog.summary}</p>

          <div className={styles.authorRow}>
            <div className={styles.authorAvatar}>VK</div>
            <div className={styles.authorInfo}>
              <span className={styles.authorName}>{blog.author}</span>
              <span className={styles.authorRole}>Software Developer & Tech Entrepreneur</span>
            </div>
          </div>
        </motion.header>

        {/* Markdown Content */}
        <motion.div
          className={styles.markdownContent}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{blog.content}</ReactMarkdown>
        </motion.div>

        {/* Tags Row */}
        {blog.tags && blog.tags.length > 0 && (
          <div className={styles.articleTags}>
            <span className={styles.tagsLabel}>Tagged with:</span>
            <div className={styles.tagsGroup}>
              {blog.tags.map((tag) => (
                <span key={tag} className={styles.tagBadge}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Navigation CTA */}
        <div className={styles.bottomNav}>
          <a
            href="/blogs"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateBlogs) onNavigateBlogs();
            }}
            className={styles.backToArchiveBtn}
          >
            <i className="ri-arrow-left-line" aria-hidden="true"></i>
            <span>Back to All Articles</span>
          </a>

          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateHome) onNavigateHome('contact');
            }}
            className={styles.contactBtn}
          >
            <span>Discuss this article</span>
            <i className="ri-chat-1-line" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </article>
  );
}

