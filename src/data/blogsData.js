import smartGridMd from '../content/blogs/smart-grid-edge-fog-cloud.md?raw';
import healthcareCloudMd from '../content/blogs/autonomous-private-clouds-healthcare.md?raw';
import cbStudioMd from '../content/blogs/engineering-cb-studio-creator-monetization.md?raw';

export const blogs = [
  {
    slug: 'smart-grid-edge-fog-cloud',
    title: 'Building an Edge-Fog-Cloud Architecture for Smart Grid Telemetry',
    summary:
      'Designing a multi-tiered distributed architecture with MQTT and FastAPI to achieve low-latency anomaly detection across distributed energy grids.',
    date: 'Nov 2, 2026',
    readTime: '6 min read',
    category: 'Cloud & Distributed Systems',
    tags: ['Edge Computing', 'MQTT', 'FastAPI', 'Google Cloud', 'SCADA', 'Python'],
    author: 'Varun Kumaravel',
    content: smartGridMd,
  },
  {
    slug: 'autonomous-private-clouds-healthcare',
    title: 'Architecting Resilient Private Clouds for Digital Healthcare in Smart Cities',
    summary:
      'Proposing an automated, reproducible private cloud framework combining Terraform, Kolla-Ansible, OpenStack, and Ceph storage for sovereign health data.',
    date: 'Oct 24, 2026',
    readTime: '7 min read',
    category: 'Cloud Infrastructure & Security',
    tags: ['OpenStack', 'Terraform', 'Ansible', 'Ceph', 'Healthcare IoT', 'Cloud Security'],
    author: 'Varun Kumaravel',
    content: healthcareCloudMd,
  },
  {
    slug: 'engineering-cb-studio-creator-monetization',
    title: 'From Concept to Scale: Engineering CB Studio for Creator Monetization',
    summary:
      'How we architected a high-converting full-stack creator platform in Dubai featuring Stripe checkout, Next.js rendering, and AI product generation.',
    date: 'Oct 12, 2026',
    readTime: '5 min read',
    category: 'Full Stack & SaaS',
    tags: ['Next.js', 'React', 'Stripe', 'SQL', 'GCP', 'SaaS Architecture'],
    author: 'Varun Kumaravel',
    content: cbStudioMd,
  },
];

export function getBlogBySlug(slug) {
  return blogs.find((b) => b.slug === slug);
}

