import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { NetworkLab } from './components/NetworkLab';
import { NetworkSimulator } from './components/NetworkSimulator';
import { Certifications } from './components/Certifications';
import { Experience } from './components/Experience';
import { KnowledgeBase } from './components/KnowledgeBase';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { AdminModal } from './components/AdminModal';
import {
  INITIAL_PROJECTS,
  INITIAL_SKILLS,
  INITIAL_MESSAGES,
} from './data/portfolioData';
import { Project, SkillItem, ContactMessage } from './types';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Persistent state for projects, skills, and contact messages
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('afzal_projects');
    return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
  });

  const [skills, setSkills] = useState<SkillItem[]>(() => {
    const saved = localStorage.getItem('afzal_skills');
    return saved ? JSON.parse(saved) : INITIAL_SKILLS;
  });

  const [messages, setMessages] = useState<ContactMessage[]>(() => {
    const saved = localStorage.getItem('afzal_messages');
    return saved ? JSON.parse(saved) : INITIAL_MESSAGES;
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('afzal_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('afzal_skills', JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    localStorage.setItem('afzal_messages', JSON.stringify(messages));
  }, [messages]);

  // Message Handlers
  const handleMessageSent = (newMessage: ContactMessage) => {
    setMessages((prev) => [newMessage, ...prev]);
  };

  const handleMarkMessageRead = (id: string) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, read: true } : msg))
    );
  };

  const handleDeleteMessage = (id: string) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  // Project & Skill Handlers
  const handleAddProject = (newProj: Project) => {
    setProjects((prev) => [newProj, ...prev]);
  };

  const handleDeleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const handleAddSkill = (newSkill: SkillItem) => {
    setSkills((prev) => [newSkill, ...prev]);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Bar with Zone 1-2-3 contract */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Live Animated Network Topology */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* About Me Section with Profile Card & Metrics */}
        <About />

        {/* Technical Skills with Category Filtering & CLI Syntax Inspector */}
        <Skills />

        {/* Networking Projects (6 Deep Practical Deployments) */}
        <Projects />

        {/* Interactive Network Lab (Explore PC-SW-RTR-FW-Cloud & Multi-host) */}
        <NetworkLab />

        {/* Interactive Network Simulator (Build, Connect & Test Packet Routing) */}
        <NetworkSimulator />

        {/* Experience Timeline */}
        <Experience />

        {/* Certifications (CCNA, Network+, Linux, AWS, Palo Alto, Docker, SAP) */}
        <Certifications />

        {/* Network Engineer Knowledge Base & Troubleshooting Guides */}
        <KnowledgeBase />

        {/* Contact Section & Form */}
        <Contact onMessageSent={handleMessageSent} />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        messages={messages}
        onMarkMessageRead={handleMarkMessageRead}
        onDeleteMessage={handleDeleteMessage}
        projects={projects}
        onAddProject={handleAddProject}
        onDeleteProject={handleDeleteProject}
        skills={skills}
        onAddSkill={handleAddSkill}
      />
    </div>
  );
}
