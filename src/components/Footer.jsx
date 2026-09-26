import styles from './Footer.module.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.topRow}>
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>VK</div>
              <span>Varun K.</span>
            </div>
            <p className={styles.bio}>
              Senior Full-Stack Engineer crafting scalable systems, performant web applications,
              and visually memorable digital products.
            </p>
            <div className={styles.statusIndicator}>
              <span className={styles.statusDot}></span>
              <span>Available for selected engineering & consulting projects</span>
            </div>
          </div>

          <div className={styles.linksCols}>
            <div>
              <h4 className={styles.colTitle}>Navigation</h4>
              <ul className={styles.linksList}>
                <li className={styles.linkItem}>
                  <a href="#home">Home</a>
                </li>
                <li className={styles.linkItem}>
                  <a href="#about">About</a>
                </li>
                <li className={styles.linkItem}>
                  <a href="#projects">Projects</a>
                </li>
                <li className={styles.linkItem}>
                  <a href="#experience">Experience</a>
                </li>
                <li className={styles.linkItem}>
                  <a href="#contact">Contact</a>
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
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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
                  <a href="mailto:varun.codes@gmail.com">
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
            © {currentYear} Varun K. All rights reserved. Built with React, Vite & Framer Motion.
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
