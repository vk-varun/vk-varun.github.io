import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Experience from './sections/Experience/Experience';
import Contact from './sections/Contact/Contact';
import Footer from './components/Footer';
import { handleInitialNavigation } from './utils/navigation';

function App() {
  useEffect(() => {
    handleInitialNavigation();

    // Listen for browser forward/backward buttons
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\/+/, '') || 'home';
      const element = document.getElementById(path);
      if (element) {
        const topOffset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({
          top: path === 'home' ? 0 : offsetPosition,
          behavior: 'smooth',
        });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="portfolio-app">
      {/* Background organic grain texture for luxury feel */}
      <div className="bg-grain" aria-hidden="true" />

      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

export default App;
