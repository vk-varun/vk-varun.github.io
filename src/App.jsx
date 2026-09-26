import Navbar from './components/Navbar';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Experience from './sections/Experience/Experience';
import Contact from './sections/Contact/Contact';
import Footer from './components/Footer';

function App() {
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
