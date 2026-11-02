// Known section routes
export const SECTION_ROUTES = ['home', 'about', 'projects', 'experience', 'contact'];

/**
 * Scroll smoothly to a section element by id
 */
export function scrollToSection(id, updateHistory = true) {
  const targetId = id === '' || id === '/' ? 'home' : id.replace(/^\/+/, '');
  const element = document.getElementById(targetId);

  if (element) {
    const topOffset = 70;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - topOffset;

    window.scrollTo({
      top: targetId === 'home' ? 0 : offsetPosition,
      behavior: 'smooth',
    });

    if (updateHistory) {
      const cleanPath = targetId === 'home' ? '/' : `/${targetId}`;
      if (window.location.pathname !== cleanPath) {
        window.history.pushState(null, '', cleanPath);
      }
    }
  }
}

/**
 * Process incoming redirect query params from 404.html (e.g. /?p=%2Fprojects)
 * or direct path navigation (e.g. /projects)
 */
export function handleInitialNavigation() {
  const urlParams = new URLSearchParams(window.location.search);
  const redirectPath = urlParams.get('p');

  let targetPath;

  if (redirectPath) {
    // Clean URL query parameter and restore the intended path in the address bar
    targetPath = decodeURIComponent(redirectPath).replace(/^\/+/, '');
    const cleanPath = targetPath === '' || targetPath === 'home' ? '/' : `/${targetPath}`;
    window.history.replaceState(null, '', cleanPath);
  } else {
    // Direct path (e.g. if loaded via local server or SPA dev server)
    targetPath = window.location.pathname.replace(/^\/+/, '');
  }

  if (targetPath) {
    const route = targetPath.toLowerCase().split('/')[0];
    if (SECTION_ROUTES.includes(route)) {
      // Delay slightly to ensure React elements and layout are fully mounted
      setTimeout(() => {
        scrollToSection(route, false);
      }, 100);
    }
  }
}
