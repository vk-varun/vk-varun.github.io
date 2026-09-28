import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky style
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect active section
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Brand Logo */}
        <a
          href="#home"
          className={styles.logo}
          onClick={(e) => handleNavClick(e, 'home')}
          aria-label="Varun Portfolio Home"
        >
          <div className={styles.logoIcon}>VK</div>
          <span className={styles.logoText}>
            Varun<span className={styles.logoDot}>.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <ul className={styles.navLinksList}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className={styles.navItem}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`${styles.navLink} ${isActive ? styles.activeLink : ''}`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className={styles.activeIndicator}
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className={styles.navLabel}>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className={styles.contactBtn}
          >
            <span>Let's Talk</span>
            <i className="ri-arrow-right-up-line" aria-hidden="true"></i>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
        >
          <i className={mobileMenuOpen ? 'ri-close-line' : 'ri-menu-4-line'} aria-hidden="true"></i>
        </button>
      </div>

      {/* Mobile Animated Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <ul className={styles.mobileNavLinks}>
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`${styles.mobileNavLink} ${
                        isActive ? styles.mobileNavLinkActive : ''
                      }`}
                    >
                      <span>{item.label}</span>
                      <i className="ri-arrow-right-s-line" aria-hidden="true"></i>
                    </a>
                  </li>
                );
              })}
            </ul>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className={styles.mobileContactBtn}
            >
              <span>Get in Touch</span>
              <i className="ri-mail-send-line" aria-hidden="true"></i>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div className={styles.progressBar} style={{ scaleX }} />
    </header>
  );
}
