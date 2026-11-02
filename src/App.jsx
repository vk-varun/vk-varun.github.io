import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Experience from './sections/Experience/Experience';
import Contact from './sections/Contact/Contact';
import Footer from './components/Footer';
import AllProjects from './pages/AllProjects';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import { handleInitialNavigation, scrollToSection } from './utils/navigation';

function App() {
  const [currentPage, setCurrentPage] = useState('home-view'); // 'home-view' | 'all-projects' | 'blogs' | 'blog-post'
  const [activeBlogSlug, setActiveBlogSlug] = useState('');

  useEffect(() => {
    handleInitialNavigation((page, fullPath) => {
      if (page === 'blogs') {
        const parts = (fullPath || '').split('/');
        if (parts.length > 1 && parts[1]) {
          setActiveBlogSlug(parts[1]);
          setCurrentPage('blog-post');
          return;
        }
        setCurrentPage('blogs');
        return;
      }
      setCurrentPage(page);
    });

    // Listen for browser forward/backward buttons
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\/+/, '') || 'home';
      const parts = path.toLowerCase().split('/');
      const rootPath = parts[0];

      if (rootPath === 'all-projects') {
        setCurrentPage('all-projects');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      if (rootPath === 'blogs') {
        if (parts.length > 1 && parts[1]) {
          setActiveBlogSlug(parts[1]);
          setCurrentPage('blog-post');
        } else {
          setCurrentPage('blogs');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      setCurrentPage('home-view');
      const element = document.getElementById(rootPath);
      if (element) {
        const topOffset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({
          top: rootPath === 'home' ? 0 : offsetPosition,
          behavior: 'smooth',
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToAllProjects = () => {
    setCurrentPage('all-projects');
    window.history.pushState(null, '', '/all-projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToBlogs = () => {
    setCurrentPage('blogs');
    window.history.pushState(null, '', '/blogs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToBlogPost = (slug) => {
    setActiveBlogSlug(slug);
    setCurrentPage('blog-post');
    window.history.pushState(null, '', `/blogs/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHomeSection = (sectionId = 'home') => {
    setCurrentPage('home-view');
    const cleanPath = sectionId === 'home' ? '/' : `/${sectionId}`;
    window.history.pushState(null, '', cleanPath);
    setTimeout(() => {
      scrollToSection(sectionId, false);
    }, 50);
  };

  return (
    <div className="portfolio-app">
      {/* Background organic grain texture for luxury feel */}
      <div className="bg-grain" aria-hidden="true" />

      {/* Sticky Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigateHome={navigateToHomeSection}
        onNavigateBlogs={navigateToBlogs}
      />

      {/* Main Content Sections or Dedicated Standalone Pages */}
      <main id="main-content">
        {currentPage === 'all-projects' ? (
          <AllProjects onNavigateHome={navigateToHomeSection} />
        ) : currentPage === 'blogs' ? (
          <Blogs
            onNavigateHome={navigateToHomeSection}
            onSelectBlog={navigateToBlogPost}
          />
        ) : currentPage === 'blog-post' ? (
          <BlogPost
            slug={activeBlogSlug}
            onNavigateHome={navigateToHomeSection}
            onNavigateBlogs={navigateToBlogs}
          />
        ) : (
          <>
            <Home />
            <About />
            <Projects onViewAllProjects={navigateToAllProjects} />
            <Experience />
            <Contact />
          </>
        )}
      </main>

      {/* Site Footer */}
      <Footer
        onNavigateHome={navigateToHomeSection}
        onNavigateBlogs={navigateToBlogs}
      />
    </div>
  );
}

export default App;
