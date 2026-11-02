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
    <rect x="85" y="270" width="170" height="28" rx="6" fill="#11120D" opacity="0.9" />
    <text x="170" y="288" fill="#FFFBF4" font-family="Inter, sans-serif" font-size="11" font-weight="600" text-anchor="middle">${title}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const projects = [
  // ==========================================
  // ORIGINAL 6 PROJECTS (FEATURED / HOMEPAGE)
  // ==========================================
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
      <!-- Design Tokens &amp; Components -->
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
      <!-- Chat &amp; Document split view -->
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
      <!-- Security radar/donut &amp; stats -->
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

  // ==========================================
  // EXTENDED ARCHIVE PROJECTS (FOR /ALL-PROJECTS)
  // ==========================================
  {
    id: 7,
    title: 'Smart Grid Monitoring & Anomaly Detection',
    subtitle: "Master's Dissertation Project",
    category: 'Systems & Cloud',
    categoryGroup: 'systems',
    badge: "Master's Dissertation",
    description:
      'Proof-of-concept smart grid monitoring system demonstrating a multi-layered Edge-Fog-Cloud architecture for scalable, low-latency, and intelligent monitoring and anomaly detection across distributed energy systems.',
    tags: ['Python', 'MQTT', 'FastAPI', 'Google Cloud', 'Virtual Machines', 'SCADA', 'Anomaly Detection'],
    image: createMockupSvg(
      'Smart Grid Telemetry',
      `
      <!-- Smart Grid SCADA nodes &amp; flow lines -->
      <rect x="85" y="105" width="110" height="48" rx="6" fill="#11120D" />
      <text x="140" y="134" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="11" font-weight="600" text-anchor="middle">EDGE SENSORS</text>
      
      <rect x="245" y="105" width="110" height="48" rx="6" fill="#F4EFE3" stroke="#11120D" stroke-width="1.5" />
      <text x="300" y="134" fill="#11120D" font-family="Inter, sans-serif" font-size="11" font-weight="600" text-anchor="middle">FOG VM LAYER</text>

      <rect x="405" y="105" width="110" height="48" rx="6" fill="#11120D" />
      <text x="460" y="134" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="11" font-weight="600" text-anchor="middle">GCP CLOUD</text>

      <!-- Connecting data buses -->
      <line x1="195" y1="129" x2="245" y2="129" stroke="#8F8778" stroke-width="2" stroke-dasharray="4,3" />
      <line x1="355" y1="129" x2="405" y2="129" stroke="#8F8778" stroke-width="2" stroke-dasharray="4,3" />

      <!-- SCADA Anomaly graph chart -->
      <rect x="85" y="170" width="430" height="75" rx="6" fill="#F6F0E2" stroke="#E4DCB" />
      <path d="M 95 220 L 160 210 L 220 225 L 280 185 L 340 230 L 400 190 L 460 215 L 505 200" fill="none" stroke="#11120D" stroke-width="2.5" />
      <circle cx="280" cy="185" r="4.5" fill="#ef4444" stroke="#FAF6EE" stroke-width="1.5" />
      <text x="310" y="188" fill="#ef4444" font-family="Inter, sans-serif" font-size="10" font-weight="600">Anomaly Triggered</text>
      `
    ),
    liveUrl: null,
    githubUrl: 'https://github.com/vk-varun/smart-grid-anomaly-detection',
    featured: false,
  },
  {
    id: 8,
    title: 'CB Studio',
    subtitle: 'Creator Monetization Platform',
    category: 'Full Stack',
    categoryGroup: 'fullstack',
    badge: 'Production SaaS',
    description:
      'Creator-focused SaaS web platform designed to help creators in the UAE monetize and sell digital content online, featuring AI-assisted digital product creation, Stripe checkout workflows, and social media performance analytics.',
    tags: ['Next.js', 'React', 'JavaScript', 'SQL', 'Stripe', 'Google Cloud', 'AI Workflows'],
    image: createMockupSvg(
      'CB Studio SaaS',
      `
      <!-- Creator Studio Analytics Dashboard Mockup -->
      <rect x="85" y="105" width="130" height="60" rx="8" fill="#11120D" />
      <text x="100" y="128" fill="#E8DFCE" font-family="Inter, sans-serif" font-size="10">REVENUE (AED)</text>
      <text x="100" y="152" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="16" font-weight="700">AED 42,850</text>

      <rect x="230" y="105" width="135" height="60" rx="8" fill="#F8F4EA" stroke="#E6DFD1" />
      <text x="245" y="128" fill="#8F8778" font-family="Inter, sans-serif" font-size="10">ACTIVE SUBSCRIBERS</text>
      <text x="245" y="152" fill="#11120D" font-family="Inter, sans-serif" font-size="16" font-weight="700">1,480</text>

      <rect x="380" y="105" width="135" height="60" rx="8" fill="#F8F4EA" stroke="#E6DFD1" />
      <text x="395" y="128" fill="#8F8778" font-family="Inter, sans-serif" font-size="10">AI PRODUCTS CREATED</text>
      <text x="395" y="152" fill="#11120D" font-family="Inter, sans-serif" font-size="16" font-weight="700">238</text>

      <!-- Bar charts -->
      <rect x="85" y="180" width="430" height="70" rx="8" fill="#F4EFE3" />
      <rect x="110" y="215" width="22" height="25" rx="3" fill="#C7BCA3" />
      <rect x="150" y="200" width="22" height="40" rx="3" fill="#C7BCA3" />
      <rect x="190" y="208" width="22" height="32" rx="3" fill="#C7BCA3" />
      <rect x="230" y="195" width="22" height="45" rx="3" fill="#11120D" />
      <rect x="270" y="205" width="22" height="35" rx="3" fill="#C7BCA3" />
      <rect x="310" y="190" width="22" height="50" rx="3" fill="#11120D" />
      <rect x="350" y="202" width="22" height="38" rx="3" fill="#C7BCA3" />
      <rect x="390" y="188" width="22" height="52" rx="3" fill="#11120D" />
      `
    ),
    liveUrl: 'https://creatorsblueprint.io/',
    githubUrl: null,
    featured: false,
  },
  {
    id: 9,
    title: 'CuriousMe',
    subtitle: 'iOS Mobile Pain & Health Journal',
    category: 'Full Stack',
    categoryGroup: 'fullstack',
    badge: 'App Store',
    description:
      'iOS mobile healthcare app designed to help users track and understand pain patterns through an interactive anatomical body map, medication tracking, medical records storage, and chronological health timelines.',
    tags: ['Flutter', 'Google Firebase', 'Firebase Auth', 'Cloud Storage', 'iOS App Store', 'HealthTech'],
    image: createMockupSvg(
      'CuriousMe iOS App',
      `
      <!-- Mobile Device Frame in center -->
      <rect x="240" y="85" width="120" height="165" rx="16" fill="#11120D" stroke="#333" stroke-width="2" />
      <rect x="246" y="93" width="108" height="149" rx="12" fill="#FAF6EE" />
      
      <!-- Body Map Anatomical Pinpoints representation -->
      <circle cx="300" cy="120" r="14" fill="#E8DFCE" />
      <rect x="290" y="137" width="20" height="38" rx="6" fill="#E8DFCE" />
      <line x1="284" y1="145" x2="274" y2="165" stroke="#B3A588" stroke-width="4" stroke-linecap="round" />
      <line x1="316" y1="145" x2="326" y2="165" stroke="#B3A588" stroke-width="4" stroke-linecap="round" />
      
      <!-- Active Pain Pinpoint -->
      <circle cx="300" cy="150" r="4.5" fill="#ef4444" />
      <circle cx="300" cy="150" r="8" fill="none" stroke="#ef4444" stroke-width="1.2" opacity="0.6" />
      
      <!-- Side cards showing Timeline &amp; Meds -->
      <rect x="95" y="115" width="125" height="50" rx="8" fill="#F4EFE3" stroke="#D8CFBC" />
      <text x="108" y="135" fill="#11120D" font-family="Inter, sans-serif" font-size="10" font-weight="600">Medication Log</text>
      <text x="108" y="152" fill="#8F8778" font-family="Inter, sans-serif" font-size="9">Daily tracking and alerts</text>

      <rect x="380" y="115" width="125" height="50" rx="8" fill="#F4EFE3" stroke="#D8CFBC" />
      <text x="393" y="135" fill="#11120D" font-family="Inter, sans-serif" font-size="10" font-weight="600">Health Timeline</text>
      <text x="393" y="152" fill="#8F8778" font-family="Inter, sans-serif" font-size="9">Chronological records</text>
      `
    ),
    liveUrl: 'https://apps.apple.com/us/app/curiousme/id6802816539',
    githubUrl: null,
    featured: false,
  },
  {
    id: 10,
    title: 'Autonomous Private Cloud for Digital Healthcare',
    subtitle: 'Conference Research Paper (IEEE)',
    category: 'Systems & Cloud',
    categoryGroup: 'systems',
    badge: 'IEEE Research Paper',
    description:
      'Research paper proposing an automated, resilient private cloud infrastructure framework for digital healthcare in smart cities, addressing strict data privacy, sovereignty, regulatory compliance, and operational resilience.',
    tags: ['IEEE', 'Terraform', 'Kolla-Ansible', 'OpenStack', 'Ceph', 'GCP', 'IaC', 'Healthcare Cloud'],
    image: createMockupSvg(
      'IEEE Cloud Research',
      `
      <!-- Multi-node OpenStack Architecture on GCP -->
      <rect x="85" y="105" width="95" height="135" rx="8" fill="#181A14" />
      <text x="132" y="130" fill="#FFFBF4" font-family="Inter, sans-serif" font-size="9" font-weight="600" text-anchor="middle">CONTROLLER</text>
      <rect x="95" y="145" width="75" height="20" rx="4" fill="#292A23" />
      <rect x="95" y="172" width="75" height="20" rx="4" fill="#292A23" />
      <rect x="95" y="199" width="75" height="20" rx="4" fill="#292A23" />

      <rect x="195" y="105" width="95" height="135" rx="8" fill="#181A14" />
      <text x="242" y="130" fill="#FFFBF4" font-family="Inter, sans-serif" font-size="9" font-weight="600" text-anchor="middle">COMPUTE NODE</text>
      <rect x="205" y="145" width="75" height="20" rx="4" fill="#292A23" />
      <rect x="205" y="172" width="75" height="20" rx="4" fill="#292A23" />
      <rect x="205" y="199" width="75" height="20" rx="4" fill="#292A23" />

      <rect x="305" y="105" width="95" height="135" rx="8" fill="#181A14" />
      <text x="352" y="130" fill="#FFFBF4" font-family="Inter, sans-serif" font-size="9" font-weight="600" text-anchor="middle">STORAGE (CEPH)</text>
      <rect x="315" y="145" width="75" height="20" rx="4" fill="#292A23" />
      <rect x="315" y="172" width="75" height="20" rx="4" fill="#292A23" />
      <rect x="315" y="199" width="75" height="20" rx="4" fill="#292A23" />

      <rect x="415" y="105" width="100" height="135" rx="8" fill="#FAF6EE" stroke="#11120D" stroke-width="1.5" />
      <text x="465" y="130" fill="#11120D" font-family="Inter, sans-serif" font-size="9" font-weight="600" text-anchor="middle">IaC PIPELINE</text>
      <text x="465" y="160" fill="#8F8778" font-family="Inter, sans-serif" font-size="9" text-anchor="middle">Terraform</text>
      <text x="465" y="180" fill="#8F8778" font-family="Inter, sans-serif" font-size="9" text-anchor="middle">Kolla-Ansible</text>
      <text x="465" y="200" fill="#11120D" font-family="Inter, sans-serif" font-size="9" font-weight="600" text-anchor="middle">AIOps Scaling</text>
      `
    ),
    liveUrl: null,
    githubUrl: null,
    publicationStatus: 'Conference Ongoing / Publication Pending',
    featured: false,
  },
  {
    id: 11,
    title: 'IT Asset Management System',
    subtitle: 'Enterprise InTrack Platform',
    category: 'Full Stack',
    categoryGroup: 'fullstack',
    badge: 'MEVN Stack',
    description:
      'Web-based enterprise application allowing IT administrators to manage and track company assets, hardware inventories, and equipment lifecycles while enabling employees to submit seamless IT asset requests.',
    tags: ['MongoDB', 'Express.js', 'Vue.js', 'Node.js', 'MEVN Stack', 'RESTful APIs', 'Asset Tracking'],
    image: createMockupSvg(
      'InTrack Asset Manager',
      `
      <!-- Asset Inventory Table & Request Flow -->
      <rect x="85" y="105" width="430" height="30" rx="6" fill="#11120D" />
      <text x="105" y="125" fill="#FAF6EE" font-family="Inter, sans-serif" font-size="10" font-weight="600">ASSET INVENTORY &amp; APPROVAL PIPELINE</text>
      
      <rect x="85" y="145" width="430" height="28" rx="4" fill="#F4EFE3" stroke="#E4DCB" />
      <circle cx="105" cy="159" r="4" fill="#22c55e" />
      <text x="120" y="163" fill="#11120D" font-family="Inter, sans-serif" font-size="10">MacBook Pro 16 M2 — Assigned to Engineering</text>
      <rect x="445" y="150" width="55" height="18" rx="4" fill="#11120D" />
      <text x="472" y="163" fill="#FAF6EE" font-family="Inter, sans-serif" font-size="8" text-anchor="middle">ACTIVE</text>

      <rect x="85" y="180" width="430" height="28" rx="4" fill="#F4EFE3" stroke="#E4DCB" />
      <circle cx="105" cy="194" r="4" fill="#eab308" />
      <text x="120" y="198" fill="#11120D" font-family="Inter, sans-serif" font-size="10">Dell UltraSharp 4K — Pending Manager Approval</text>
      <rect x="445" y="185" width="55" height="18" rx="4" fill="#eab308" />
      <text x="472" y="198" fill="#11120D" font-family="Inter, sans-serif" font-size="8" font-weight="600" text-anchor="middle">PENDING</text>

      <rect x="85" y="215" width="430" height="28" rx="4" fill="#F4EFE3" stroke="#E4DCB" />
      <circle cx="105" cy="229" r="4" fill="#22c55e" />
      <text x="120" y="233" fill="#11120D" font-family="Inter, sans-serif" font-size="10">YubiKey 5C Security Token — Dispatched</text>
      <rect x="445" y="220" width="55" height="18" rx="4" fill="#11120D" />
      <text x="472" y="233" fill="#FAF6EE" font-family="Inter, sans-serif" font-size="8" text-anchor="middle">ACTIVE</text>
      `
    ),
    liveUrl: null,
    githubUrl: 'https://github.com/vk-varun/InTrack',
    featured: false,
  },
  {
    id: 12,
    title: 'AfterBell',
    subtitle: 'Extracurricular Booking & Training Platform',
    category: 'Full Stack',
    categoryGroup: 'fullstack',
    badge: 'MEVN Stack',
    description:
      'Web application for managing extracurricular activities, enabling students to browse, discover, and book specialized training classes based on their interests, with integrated MongoDB listings and user profiles.',
    tags: ['MongoDB', 'Express.js', 'Vue.js', 'Node.js', 'MEVN Stack', 'Course Booking', 'Database Design'],
    image: createMockupSvg(
      'AfterBell Activity Hub',
      `
      <!-- Extracurricular Course Discovery Grid -->
      <rect x="85" y="105" width="135" height="65" rx="8" fill="#11120D" />
      <circle cx="115" cy="130" r="12" fill="#E8DFCE" />
      <text x="140" y="134" fill="#FFFBF4" font-family="Inter, sans-serif" font-size="10" font-weight="600">Robotics Club</text>
      <text x="105" y="158" fill="#8F8778" font-family="Inter, sans-serif" font-size="9">18 Students Enrolled</text>

      <rect x="235" y="105" width="135" height="65" rx="8" fill="#F4EFE3" stroke="#D8CFBC" />
      <circle cx="265" cy="130" r="12" fill="#11120D" />
      <text x="290" y="134" fill="#11120D" font-family="Inter, sans-serif" font-size="10" font-weight="600">Chess Master</text>
      <text x="255" y="158" fill="#8F8778" font-family="Inter, sans-serif" font-size="9">12 Students Enrolled</text>

      <rect x="385" y="105" width="130" height="65" rx="8" fill="#F4EFE3" stroke="#D8CFBC" />
      <circle cx="415" cy="130" r="12" fill="#11120D" />
      <text x="440" y="134" fill="#11120D" font-family="Inter, sans-serif" font-size="10" font-weight="600">Creative Writing</text>
      <text x="405" y="158" fill="#8F8778" font-family="Inter, sans-serif" font-size="9">24 Students Enrolled</text>

      <!-- Calendar schedule preview -->
      <rect x="85" y="185" width="430" height="60" rx="8" fill="#181A14" />
      <text x="105" y="210" fill="#FFFBF4" font-family="Inter, sans-serif" font-size="10" font-weight="600">UPCOMING TRAINING SESSIONS</text>
      <rect x="105" y="222" width="120" height="15" rx="4" fill="#292A23" />
      <rect x="240" y="222" width="120" height="15" rx="4" fill="#292A23" />
      <rect x="375" y="222" width="120" height="15" rx="4" fill="#292A23" />
      `
    ),
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 13,
    title: 'HonetPay Platform',
    subtitle: 'Creator Investment Web Application',
    category: 'Full Stack',
    categoryGroup: 'fullstack',
    badge: 'FinTech Platform',
    description:
      'Web application cultivating connections between creators and followers, merging finance with creator culture to enable fan investment, monetization of unique creator offerings, and secure transactional flows.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Web APIs', 'FinTech', 'User Authentication'],
    image: createMockupSvg(
      'HonetPay Platform',
      `
      <!-- FinTech Creator Cards &amp; Investment Flow -->
      <rect x="85" y="105" width="200" height="140" rx="8" fill="#181A14" />
      <circle cx="125" cy="145" r="22" fill="#E8DFCE" />
      <text x="160" y="140" fill="#FFFFFF" font-family="Inter, sans-serif" font-size="11" font-weight="600">CREATOR POOL</text>
      <text x="160" y="156" fill="#8F8778" font-family="Inter, sans-serif" font-size="9">Tier 1 Investment</text>
      <rect x="105" y="185" width="160" height="24" rx="4" fill="#FAF6EE" />
      <text x="185" y="201" fill="#11120D" font-family="Inter, sans-serif" font-size="10" font-weight="600" text-anchor="middle">Fund Creator Campaign</text>

      <rect x="305" y="105" width="210" height="140" rx="8" fill="#F4EFE3" stroke="#D8CFBC" />
      <text x="325" y="130" fill="#11120D" font-family="Inter, sans-serif" font-size="11" font-weight="600">Fan Backer Equity</text>
      <rect x="325" y="145" width="170" height="18" rx="4" fill="#E8DFCE" />
      <rect x="325" y="170" width="170" height="18" rx="4" fill="#E8DFCE" />
      <rect x="325" y="195" width="170" height="18" rx="4" fill="#E8DFCE" />
      `
    ),
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 14,
    title: 'SnapScan',
    subtitle: 'QR Code-Based Mobile Game',
    category: 'Systems & Cloud',
    categoryGroup: 'systems',
    badge: 'Android Mobile Game',
    description:
      'Interactive QR code-based mobile game developed for Android. Enables interactive real-world scanning, competitive player scoreboards, geolocation tagging via Google Maps API, and real-time cloud data tracking with Firebase.',
    tags: ['Android Studio', 'Java', 'Google Maps API', 'Firebase', 'XML', 'Mobile Game Dev'],
    image: createMockupSvg(
      'SnapScan Android',
      `
      <!-- QR Scanner viewfinder &amp; Map pin mockup -->
      <rect x="110" y="95" width="150" height="150" rx="12" fill="#181A14" />
      <!-- Target Viewfinder corners -->
      <path d="M 125 115 L 140 115 M 125 115 L 125 130" stroke="#FFFBF4" stroke-width="2.5" />
      <path d="M 245 115 L 230 115 M 245 115 L 245 130" stroke="#FFFBF4" stroke-width="2.5" />
      <path d="M 125 225 L 140 225 M 125 225 L 125 210" stroke="#FFFBF4" stroke-width="2.5" />
      <path d="M 245 225 L 230 225 M 245 225 L 245 210" stroke="#FFFBF4" stroke-width="2.5" />
      <!-- Stylized QR blocks -->
      <rect x="155" y="140" width="15" height="15" fill="#FFFBF4" />
      <rect x="175" y="140" width="15" height="15" fill="#FFFBF4" />
      <rect x="155" y="160" width="15" height="15" fill="#FFFBF4" />
      <rect x="195" y="160" width="15" height="15" fill="#FAF6EE" />
      <rect x="175" y="180" width="15" height="15" fill="#FFFBF4" />

      <!-- Map &amp; Leaderboard Side Container -->
      <rect x="285" y="95" width="220" height="150" rx="12" fill="#F4EFE3" stroke="#D8CFBC" />
      <text x="305" y="125" fill="#11120D" font-family="Inter, sans-serif" font-size="11" font-weight="600">Geo Scavenger Map</text>
      <circle cx="390" cy="170" r="12" fill="#11120D" />
      <circle cx="390" cy="170" r="4" fill="#FAF6EE" />
      <text x="305" y="215" fill="#8F8778" font-family="Inter, sans-serif" font-size="9">Google Maps API &amp; Firebase Live</text>
      `
    ),
    liveUrl: null,
    githubUrl: 'https://github.com/CMPUT301W23T51/SnapScan',
    featured: false,
  },
];
