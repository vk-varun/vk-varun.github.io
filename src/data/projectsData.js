// Helper to create bespoke SVG mockups with matching palette
const createMockupSvg = (title, accentShape) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 375" width="100%" height="100%">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FAF6EE" />
        <stop offset="100%" stop-color="#EFE8D8" />
      </linearGradient>
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="100%" stop-color="#FDFBF7" />
      </linearGradient>
      <filter id="shadow" x="-5%" y="-5%" width="110%" height="120%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#11120D" flood-opacity="0.08" />
      </filter>
    </defs>
    
    <!-- Background Canvas -->
    <rect width="600" height="375" fill="url(#bgGrad)" />
    
    <!-- Grid pattern lines -->
    <path d="M 0 50 L 600 50 M 0 100 L 600 100 M 0 150 L 600 150 M 0 200 L 600 200 M 0 250 L 600 250 M 0 300 L 600 300" stroke="#E5DEC9" stroke-width="0.7" stroke-dasharray="4,4" />
    <path d="M 100 0 L 100 375 M 200 0 L 200 375 M 300 0 L 300 375 M 400 0 L 400 375 M 500 0 L 500 375" stroke="#E5DEC9" stroke-width="0.7" stroke-dasharray="4,4" />

    <!-- Center Card Device / Dashboard UI -->
    <rect x="60" y="45" width="480" height="285" rx="12" fill="url(#cardGrad)" stroke="#D8CFBC" stroke-width="1.5" filter="url(#shadow)" />
    
    <!-- Window Header -->
    <rect x="60" y="45" width="480" height="38" rx="12" fill="#F4EFE3" />
    <circle cx="86" cy="64" r="5" fill="#D8CFBC" />
    <circle cx="102" cy="64" r="5" fill="#C7BCA3" />
    <circle cx="118" cy="64" r="5" fill="#B3A588" />
    <rect x="220" y="56" width="160" height="16" rx="4" fill="#E8DFCE" />
    
    <!-- Mockup Interior UI Elements -->
    ${accentShape}

    <!-- Watermark / Title badge inside preview -->
    <rect x="85" y="270" width="140" height="28" rx="6" fill="#11120D" opacity="0.9" />
    <text x="155" y="288" fill="#FFFBF4" font-family="Inter, sans-serif" font-size="11" font-weight="600" text-anchor="middle">${title}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const projects = [
  {
    id: 1,
    title: 'Apex Cloud Observability',
    category: 'Full Stack',
    categoryGroup: 'fullstack',
    description:
      'High-throughput distributed telemetry and trace visualization suite with real-time anomaly detection, interactive flame graphs, and low-latency metrics querying.',
    tags: ['React 19', 'TypeScript', 'Node.js', 'ClickHouse', 'WebGL', 'Tailwind'],
    image: createMockupSvg(
      'Apex Observability',
      `
      <!-- Observability UI graphs -->
      <rect x="85" y="105" width="100" height="55" rx="6" fill="#F6F0E2" stroke="#E4DCB" />
      <rect x="200" y="105" width="100" height="55" rx="6" fill="#F6F0E2" stroke="#E4DCB" />
      <rect x="315" y="105" width="205" height="55" rx="6" fill="#F6F0E2" stroke="#E4DCB" />
      <!-- Wave graph -->
      <path d="M 85 220 Q 140 160 210 210 T 360 170 T 520 200 L 520 240 L 85 240 Z" fill="#E5DEC9" opacity="0.6" />
      <path d="M 85 220 Q 140 160 210 210 T 360 170 T 520 200" fill="none" stroke="#11120D" stroke-width="2.5" />
      `
    ),
    liveUrl: 'https://github.com/vk-varun',
    githubUrl: 'https://github.com/vk-varun',
    featured: true,
  },
  {
    id: 2,
    title: 'Zenith Design System',
    category: 'Frontend & UI',
    categoryGroup: 'frontend',
    description:
      'Accessible, token-driven component architecture built with strict WCAG AAA guidelines, smooth micro-interactions, dark mode tokens, and automated visual regression testing.',
    tags: ['React', 'Framer Motion', 'CSS Modules', 'Storybook', 'Figma API'],
    image: createMockupSvg(
      'Zenith Design Kit',
      `
      <!-- Design Tokens & Components -->
      <rect x="85" y="105" width="130" height="34" rx="17" fill="#11120D" />
      <rect x="225" y="105" width="110" height="34" rx="17" fill="#E8DFCE" stroke="#D8CFBC" />
      <rect x="345" y="105" width="175" height="34" rx="8" fill="#F4EFE3" />
      <!-- Grid Cards -->
      <rect x="85" y="155" width="205" height="90" rx="8" fill="#F8F4EA" stroke="#E6DFD1" />
      <rect x="310" y="155" width="210" height="90" rx="8" fill="#F8F4EA" stroke="#E6DFD1" />
      `
    ),
    liveUrl: 'https://github.com/vk-varun',
    githubUrl: 'https://github.com/vk-varun',
    featured: true,
  },
  {
    id: 3,
    title: 'Chronicle AI Workspace',
    category: 'Full Stack',
    categoryGroup: 'fullstack',
    description:
      'Context-aware knowledge assistant supporting local LLMs, streaming token parsing, vector database retrieval, and collaborative document editing.',
    tags: ['Next.js', 'FastAPI', 'Python', 'Qdrant Vector DB', 'WebSockets'],
    image: createMockupSvg(
      'Chronicle AI Engine',
      `
      <!-- Chat & Document split view -->
      <rect x="85" y="105" width="130" height="140" rx="8" fill="#EFE8D8" />
      <rect x="230" y="105" width="290" height="28" rx="6" fill="#F2ECE0" />
      <rect x="230" y="145" width="260" height="42" rx="6" fill="#11120D" opacity="0.85" />
      <rect x="230" y="200" width="290" height="45" rx="6" fill="#F4EFE3" stroke="#D8CFBC" />
      `
    ),
    liveUrl: 'https://github.com/vk-varun',
    githubUrl: 'https://github.com/vk-varun',
    featured: false,
  },
  {
    id: 4,
    title: 'Aether FinTech Exchange',
    category: 'Systems & Cloud',
    categoryGroup: 'systems',
    description:
      'Ultra-responsive cryptocurrency and equities trading terminal featuring real-time order books, sub-50ms WebSocket streaming, and interactive candlestick charts.',
    tags: ['React', 'TypeScript', 'WebSockets', 'Canvas API', 'Redis'],
    image: createMockupSvg(
      'Aether Terminal',
      `
      <!-- Trading terminal candlesticks -->
      <rect x="85" y="105" width="280" height="140" rx="6" fill="#181A14" />
      <line x1="120" y1="120" x2="120" y2="200" stroke="#22c55e" stroke-width="2" />
      <rect x="114" y="140" width="12" height="40" fill="#22c55e" rx="1" />
      <line x1="160" y1="130" x2="160" y2="220" stroke="#ef4444" stroke-width="2" />
      <rect x="154" y="150" width="12" height="50" fill="#ef4444" rx="1" />
      <line x1="200" y1="115" x2="200" y2="185" stroke="#22c55e" stroke-width="2" />
      <rect x="194" y="125" width="12" height="35" fill="#22c55e" rx="1" />
      <rect x="380" y="105" width="140" height="140" rx="6" fill="#F4EFE3" stroke="#D8CFBC" />
      `
    ),
    liveUrl: 'https://github.com/vk-varun',
    githubUrl: 'https://github.com/vk-varun',
    featured: false,
  },
  {
    id: 5,
    title: 'Hyperflow DAG Automator',
    category: 'Systems & Cloud',
    categoryGroup: 'systems',
    description:
      'Visual node-based workflow automation engine allowing engineers to build, debug, and monitor complex asynchronous data pipelines with sandboxed execution.',
    tags: ['React Flow', 'Node.js', 'PostgreSQL', 'Docker', 'BullMQ'],
    image: createMockupSvg(
      'Hyperflow DAG',
      `
      <!-- DAG nodes connected by bezier curve -->
      <rect x="95" y="120" width="90" height="40" rx="8" fill="#11120D" />
      <rect x="250" y="105" width="90" height="40" rx="8" fill="#FAF6EE" stroke="#11120D" stroke-width="1.5" />
      <rect x="250" y="175" width="90" height="40" rx="8" fill="#FAF6EE" stroke="#11120D" stroke-width="1.5" />
      <rect x="410" y="140" width="90" height="40" rx="8" fill="#11120D" />
      <path d="M 185 140 C 215 140, 215 125, 250 125" fill="none" stroke="#8F8778" stroke-width="2" />
      <path d="M 185 140 C 215 140, 215 195, 250 195" fill="none" stroke="#8F8778" stroke-width="2" />
      <path d="M 340 125 C 375 125, 375 160, 410 160" fill="none" stroke="#8F8778" stroke-width="2" />
      <path d="M 340 195 C 375 195, 375 160, 410 160" fill="none" stroke="#8F8778" stroke-width="2" />
      `
    ),
    liveUrl: 'https://github.com/vk-varun',
    githubUrl: 'https://github.com/vk-varun',
    featured: false,
  },
  {
    id: 6,
    title: 'Vanguard Security Matrix',
    category: 'Frontend & UI',
    categoryGroup: 'frontend',
    description:
      'Continuous security audit dashboard analyzing container images, npm packages, and infrastructure-as-code manifests with contextual remediation guides.',
    tags: ['React', 'TypeScript', 'GraphQL', 'D3.js', 'Vite'],
    image: createMockupSvg(
      'Vanguard Matrix',
      `
      <!-- Security radar/donut & stats -->
      <circle cx="160" cy="170" r="45" fill="none" stroke="#E6DFD1" stroke-width="12" />
      <circle cx="160" cy="170" r="45" fill="none" stroke="#11120D" stroke-width="12" stroke-dasharray="210 282" />
      <rect x="250" y="115" width="270" height="30" rx="6" fill="#F4EFE3" />
      <rect x="250" y="155" width="270" height="30" rx="6" fill="#F4EFE3" />
      <rect x="250" y="195" width="270" height="30" rx="6" fill="#F4EFE3" />
      `
    ),
    liveUrl: 'https://github.com/vk-varun',
    githubUrl: 'https://github.com/vk-varun',
    featured: false,
  },
];
