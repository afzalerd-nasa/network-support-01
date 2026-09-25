import React, { useState } from 'react';
import {
  ExternalLink,
  Terminal,
  Layers,
  ArrowRight,
  Shield,
  Server,
  Cloud,
  CheckCircle2,
  Copy,
  Check,
  X,
  Network,
} from 'lucide-react';
import { Project } from '../types';
import { INITIAL_PROJECTS } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'architecture' | 'config' | 'results'>('architecture');
  const [activeSnippetIndex, setActiveSnippetIndex] = useState<number>(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getCategoryIcon = (category: Project['category']) => {
    switch (category) {
      case 'Enterprise Routing':
        return Network;
      case 'Security & Firewalls':
        return Shield;
      case 'Cloud & Hybrid':
        return Cloud;
      case 'Infrastructure & DevOps':
      default:
        return Server;
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            <span>Verified Lab & Enterprise Deployments</span>
            <span aria-hidden="true">·</span>
            <span>Real Configurations</span>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Networking Projects
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Hands-on architectures, Cisco IOS-XE CLI configs, Palo Alto security policies,
            AWS VPC provisioning, and automated container fabrics.
          </p>
        </div>

        {/* Projects Grid (6 Practical Projects) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INITIAL_PROJECTS.map((project, idx) => {
            const IconComp = getCategoryIcon(project.category);
            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Category & Duration unboxed metadata */}
                  <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-100">
                    <span className="flex items-center gap-1.5 font-medium text-blue-700">
                      <IconComp size={14} />
                      {project.category}
                    </span>
                    <span className="font-mono">{project.duration}</span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Technologies List with unboxed bullet layout */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[11px] font-mono px-1.5 py-0.5 text-slate-400">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* View Project Action */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setActiveTab('architecture');
                      setActiveSnippetIndex(0);
                    }}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-lg transition-colors cursor-pointer"
                  >
                    <span>View Project Deep-Dive</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Detailed Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn">
              
              {/* Modal Header */}
              <div className="px-6 py-5 border-b border-slate-200 flex items-start justify-between bg-slate-50">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
                    <span>{selectedProject.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{selectedProject.duration}</span>
                  </div>
                  <h3 className="mt-1 text-xl sm:text-2xl font-bold text-slate-900">
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Navigation Tabs (Architecture -> Configuration -> Result) */}
              <div className="px-6 pt-3 border-b border-slate-200 bg-white flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`pb-3 px-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'architecture'
                      ? 'border-blue-700 text-blue-700'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  1. Architecture & Nodes
                </button>
                <button
                  onClick={() => setActiveTab('config')}
                  className={`pb-3 px-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'config'
                      ? 'border-blue-700 text-blue-700'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  2. CLI Configuration ({selectedProject.configurationSnippets.length})
                </button>
                <button
                  onClick={() => setActiveTab('results')}
                  className={`pb-3 px-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'results'
                      ? 'border-blue-700 text-blue-700'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  3. Verification & Results
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6">
                
                {/* Summary & Tech Stack Always Visible */}
                <div className="space-y-3">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedProject.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* TAB 1: Architecture Diagram & Interconnects */}
                {activeTab === 'architecture' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-900 rounded-xl text-white">
                      <div className="text-xs font-mono text-blue-400 mb-2 font-medium">
                        TOPOLOGY INTERCONNECT MATRIX:
                      </div>
                      <p className="text-xs text-slate-300 mb-4">
                        {selectedProject.architectureDiagram.description}
                      </p>

                      {/* Node list */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        {selectedProject.architectureDiagram.nodes.map((node) => (
                          <div
                            key={node.id}
                            className="p-3 bg-slate-800/80 rounded-lg border border-slate-700"
                          >
                            <div className="text-xs font-bold text-slate-100">{node.label}</div>
                            <div className="text-[11px] text-slate-400">{node.role}</div>
                            <div className="text-[11px] font-mono text-emerald-400 mt-1">
                              IP: {node.ip}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Connection cables */}
                      <div className="border-t border-slate-800 pt-3">
                        <div className="text-[11px] font-mono text-slate-400 mb-1.5 font-medium">
                          Active Links:
                        </div>
                        <ul className="space-y-1 text-xs font-mono text-slate-300">
                          {selectedProject.architectureDiagram.connections.map((conn, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="text-blue-400">↔</span>
                              <span>{conn.from} to {conn.to}:</span>
                              <span className="text-amber-300">{conn.type}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: CLI Configurations */}
                {activeTab === 'config' && (
                  <div className="space-y-4">
                    {/* Snippet selector tabs */}
                    {selectedProject.configurationSnippets.length > 1 && (
                      <div className="flex items-center gap-2">
                        {selectedProject.configurationSnippets.map((snip, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveSnippetIndex(index)}
                            className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
                              activeSnippetIndex === index
                                ? 'bg-slate-900 text-white font-semibold'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                          >
                            {snip.device}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Active snippet block */}
                    {selectedProject.configurationSnippets[activeSnippetIndex] && (
                      <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
                        <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs">
                          <span className="font-mono text-slate-300">
                            {selectedProject.configurationSnippets[activeSnippetIndex].title} ·{' '}
                            {selectedProject.configurationSnippets[activeSnippetIndex].device}
                          </span>
                          <button
                            onClick={() =>
                              handleCopy(
                                selectedProject.configurationSnippets[activeSnippetIndex].code
                              )
                            }
                            className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-mono"
                          >
                            {copied ? <Check size={12} /> : <Copy size={12} />}
                            <span>{copied ? 'Copied' : 'Copy'}</span>
                          </button>
                        </div>
                        <pre className="p-4 text-xs font-mono text-emerald-400 overflow-x-auto terminal-scrollbar leading-relaxed">
                          {selectedProject.configurationSnippets[activeSnippetIndex].code}
                        </pre>
                      </div>
                    )}
                  </div>
                )}

                {/* TAB 3: Verification & Results */}
                {activeTab === 'results' && (
                  <div className="space-y-5">
                    {/* Verification outputs */}
                    <div>
                      <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Command Verification Logs
                      </h4>
                      <div className="space-y-3">
                        {selectedProject.verificationSteps.map((step, idx) => (
                          <div
                            key={idx}
                            className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-xs font-mono"
                          >
                            <div className="text-blue-400 font-bold mb-1">
                              # {step.command}
                            </div>
                            <pre className="text-slate-300 whitespace-pre overflow-x-auto terminal-scrollbar mb-2 text-[11px] leading-relaxed">
                              {step.output}
                            </pre>
                            <div className="text-emerald-400 text-[11px] border-t border-slate-800 pt-2 font-sans">
                              ✓ {step.explanation}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Results list */}
                    <div>
                      <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Operational Outcomes
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedProject.keyResults.map((res, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs font-medium text-slate-700"
                          >
                            <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                            <span>{res}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
