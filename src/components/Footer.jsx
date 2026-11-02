import { scrollToSection } from '../utils/navigation';
import styles from './Footer.module.css';

export default function Footer({ onNavigateHome }) {
  const scrollToTop = () => {
    if (onNavigateHome) {
      onNavigateHome('home');
      return;
    }
    scrollToSection('home', true);
  };

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome(id);
      return;
    }
    scrollToSection(id, true);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.topRow}>
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>VK</div>
              <span>Varun Kumaravel</span>
            </div>
            <p className={styles.bio}>
              Software Developer & Tech Entrepreneur building scalable web and mobile solutions,
              cloud infrastructure, and user-focused digital products.
            </p>
            <div className={styles.statusIndicator}>
              <i className={`ri-map-pin-2-fill ${styles.locationIcon}`} aria-hidden="true"></i>
              <span>Based in Dubai, UAE • Available for collaborations</span>
            </div>
          </div>

          <div className={styles.linksCols}>
            <div>
              <h4 className={styles.colTitle}>Navigation</h4>
              <ul className={styles.linksList}>
                <li className={styles.linkItem}>
                  <a href="/" onClick={(e) => handleLinkClick(e, 'home')}>Home</a>
                </li>
                <li className={styles.linkItem}>
                  <a href="/about" onClick={(e) => handleLinkClick(e, 'about')}>About</a>
                </li>
                <li className={styles.linkItem}>
                  <a href="/projects" onClick={(e) => handleLinkClick(e, 'projects')}>Projects</a>
                </li>
                <li className={styles.linkItem}>
                  <a href="/experience" onClick={(e) => handleLinkClick(e, 'experience')}>Experience</a>
                </li>
                <li className={styles.linkItem}>
                  <a href="/contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className={styles.colTitle}>Connect</h4>
              <ul className={styles.linksList}>
                <li className={styles.linkItem}>
                  <a href="https://github.com/vk-varun" target="_blank" rel="noopener noreferrer">
                    <i className="ri-github-line" aria-hidden="true"></i>
                    <span>GitHub</span>
                  </a>
                </li>
                <li className={styles.linkItem}>
                  <a href="https://www.linkedin.com/in/varun-kumaravel/" target="_blank" rel="noopener noreferrer">
                    <i className="ri-linkedin-box-line" aria-hidden="true"></i>
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li className={styles.linkItem}>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="ri-twitter-x-line" aria-hidden="true"></i>
                    <span>Twitter / X</span>
                  </a>
                </li>
                <li className={styles.linkItem}>
                  <a href="mailto:">
                    <i className="ri-mail-line" aria-hidden="true"></i>
                    <span>Email</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} Varun Kumaravel. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className={styles.scrollTopBtn}
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <i className="ri-arrow-up-line" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}
