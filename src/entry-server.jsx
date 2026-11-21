import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import { blogs } from './data/blogsData.js';

export function render(initialPage = 'home-view', initialBlogSlug = '') {
  return renderToString(
    <StrictMode>
      <App initialPage={initialPage} initialBlogSlug={initialBlogSlug} />
    </StrictMode>
  );
}

export { blogs };

