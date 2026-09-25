export interface Project {
  id: string;
  title: string;
  category: 'Enterprise Routing' | 'Security & Firewalls' | 'Cloud & Hybrid' | 'Infrastructure & DevOps';
  summary: string;
  technologies: string[];
  duration: string;
  architectureDiagram: {
    description: string;
    nodes: { id: string; label: string; role: string; ip: string }[];
    connections: { from: string; to: string; type: string }[];
  };
  configurationSnippets: {
    title: string;
    device: string;
    language: string;
    code: string;
  }[];
  verificationSteps: {
    command: string;
    output: string;
    explanation: string;
  }[];
  keyResults: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Networking' | 'Routing Protocols' | 'Security' | 'Operating Systems' | 'Cloud' | 'Other Technologies';
  level: 'Expert' | 'Advanced' | 'Proficient';
  experienceYears: number;
  highlight: string;
  sampleCommand?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  credentialId: string;
  issuedDate: string;
  skillsValidated: string[];
  description: string;
  verificationUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  metrics: string[];
}

export interface KnowledgeArticle {
  id: string;
  title: string;
  category: 'Cisco' | 'Routing' | 'Switching' | 'Firewall' | 'Linux' | 'AWS' | 'Docker' | 'Network Security';
  readTime: string;
  level: 'Fundamental' | 'Intermediate' | 'Advanced';
  summary: string;
  symptoms?: string[];
  prerequisites: string[];
  steps: {
    stepNumber: number;
    title: string;
    explanation?: string;
    command?: string;
    expectedOutput?: string;
  }[];
  troubleshootingTips: string[];
}

export interface NetworkLabDevice {
  id: string;
  name: string;
  type: 'router' | 'switch' | 'firewall' | 'server' | 'pc' | 'cloud' | 'database';
  ip: string;
  subnet: string;
  vlan: string;
  mac: string;
  defaultGateway: string;
  interfaces: { name: string; ip: string; status: 'up' | 'down'; speed: string }[];
  protocol: string;
  status: 'online' | 'standby' | 'alert';
  routingTable?: { prefix: string; nextHop: string; protocol: string; metric: number; iface: string }[];
  activeSessions?: number;
  configSnippet?: string;
}

export interface SimNode {
  id: string;
  name: string;
  type: 'router' | 'switch' | 'firewall' | 'server' | 'pc' | 'cloud';
  x: number;
  y: number;
  ip: string;
  subnet: string;
  gateway: string;
  vlan: string;
  protocol: string;
}

export interface SimLink {
  id: string;
  fromId: string;
  toId: string;
  status: 'active' | 'transiting' | 'down';
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  timestamp: string;
  read: boolean;
}
