export const projects = [
  {
    id: 'network-analysis',
    title: 'College Network Analysis',
    category: 'Cybersecurity',
    description: 'Captured and reviewed network traffic to understand communication patterns, inspect active ports, and document potential configuration weaknesses.',
    tools: ['Wireshark', 'netstat', 'Packet analysis', 'Vulnerability assessment'],
  },
  {
    id: 'password-health-tracker',
    title: 'Password Health Tracker',
    category: 'Web security',
    description: 'A web-based security tool that evaluates password strength in real time, checks for breach exposure, and offers practical credential-hygiene recommendations.',
    tools: ['JavaScript', 'Password security', 'Breach detection'],
    links: [
      { label: 'Live demo', href: 'https://password-tracker-frontend-681629792414.us-central1.run.app' },
    ],
  },
  {
    id: 'inventory-api',
    title: 'Inventory Management Backend API',
    category: 'Backend',
    description: 'A RESTful backend built around structured endpoint routing, a normalized database schema, and session-based authentication, with requests validated in Postman.',
    tools: ['REST API', 'Database design', 'Session authentication', 'Postman'],
  },
  {
    id: 'c-inventory-system',
    title: 'C CLI E-Commerce & Inventory Management System',
    category: 'Programming',
    description: 'A C console application using custom structs, validated input with fgets and strtol, string manipulation, and memory shifting to manage a dynamic shopping cart.',
    tools: ['C', 'Structs', 'Input validation', 'Memory management'],
  },
  {
    id: 'docker-containerization-suite',
    title: 'Docker & Containerization Assignment Suite',
    category: 'DevOps',
    description: 'A set of containerized deployment configurations using Docker and Docker Compose to isolate services, manage environment variables securely, and coordinate multi-container applications.',
    tools: ['Docker', 'Docker Compose', 'Environment isolation', 'Container security'],
  },
  {
    id: 'web-architecture-repositories',
    title: 'Application Development & Web Architecture',
    category: 'Web development',
    description: 'A collection of progressive web projects focused on semantic HTML, responsive interface components, accessibility, and maintainable code organization.',
    tools: ['HTML5', 'CSS3', 'Responsive design', 'Accessibility'],
  },
]