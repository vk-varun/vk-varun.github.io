import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const ssrDir = path.join(rootDir, 'dist-ssr');

async function prerender() {
  const templatePath = path.join(distDir, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf-8');

  const entryPath = pathToFileURL(path.join(ssrDir, 'entry-server.js')).href;
  const { render, blogs } = await import(entryPath);

  const routes = [
    {
      urlPath: '/',
      outFile: path.join(distDir, 'index.html'),
      initialPage: 'home-view',
      initialBlogSlug: '',
      title: 'Varun Kumaravel | Software Developer & Tech Entrepreneur',
    },
    {
      urlPath: '/all-projects',
      outFile: path.join(distDir, 'all-projects', 'index.html'),
      initialPage: 'all-projects',
      initialBlogSlug: '',
      title: 'All Projects | Varun Kumaravel',
    },
    {
      urlPath: '/blogs',
      outFile: path.join(distDir, 'blogs', 'index.html'),
      initialPage: 'blogs',
      initialBlogSlug: '',
      title: 'Engineering Insights & Articles | Varun Kumaravel',
    },
    ...blogs.map((blog) => ({
      urlPath: `/blogs/${blog.slug}`,
      outFile: path.join(distDir, 'blogs', blog.slug, 'index.html'),
      initialPage: 'blog-post',
      initialBlogSlug: blog.slug,
      title: `${blog.title} | Varun Kumaravel`,
    })),
    ...['about', 'projects', 'experience', 'contact'].map((section) => ({
      urlPath: `/${section}`,
      outFile: path.join(distDir, section, 'index.html'),
      initialPage: 'home-view',
      initialBlogSlug: '',
      title: 'Varun Kumaravel | Software Developer & Tech Entrepreneur',
    })),
  ];

  for (const route of routes) {
    const appHtml = render(route.initialPage, route.initialBlogSlug);
    let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    html = html.replace(
      /<title>.*?<\/title>/,
      `<title>${route.title}</title>`
    );

    const canonicalUrl =
      route.urlPath === '/'
        ? 'https://vk-varun.github.io/'
        : `https://vk-varun.github.io${route.urlPath}`;
    html = html.replace(
      /<link rel="canonical" href=".*?" \/>/,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );

    fs.mkdirSync(path.dirname(route.outFile), { recursive: true });
    fs.writeFileSync(route.outFile, html, 'utf-8');
    console.log(`Prerendered: ${route.urlPath} -> ${path.relative(rootDir, route.outFile)}`);
  }

  fs.rmSync(ssrDir, { recursive: true, force: true });
  console.log('Prerendering complete.');
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});

