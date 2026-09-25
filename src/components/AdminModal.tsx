import React, { useState } from 'react';
import {
  X,
  Lock,
  Unlock,
  ShieldCheck,
  Mail,
  FolderGit2,
  Cpu,
  Award,
  BookOpen,
  Plus,
  Trash2,
  CheckCircle,
  Database,
  Download,
} from 'lucide-react';
import {
  Project,
  SkillItem,
  Certification,
  KnowledgeArticle,
  ContactMessage,
} from '../types';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  messages: ContactMessage[];
  onMarkMessageRead: (id: string) => void;
  onDeleteMessage: (id: string) => void;
  projects: Project[];
  onAddProject: (proj: Project) => void;
  onDeleteProject: (id: string) => void;
  skills: SkillItem[];
  onAddSkill: (skill: SkillItem) => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  messages,
  onMarkMessageRead,
  onDeleteMessage,
  projects,
  onAddProject,
  onDeleteProject,
  skills,
  onAddSkill,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(false);
  const [activeTab, setActiveTab] = useState<'messages' | 'projects' | 'skills' | 'db'>('messages');

  // Form states for adding project or skill
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillCat, setNewSkillCat] = useState<SkillItem['category']>('Networking');
  const [newSkillExp, setNewSkillExp] = useState(5);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === 'admin' || pin === '1234' || pin === 'netops') {
      setIsAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handleCreateSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName) return;

    const skill: SkillItem = {
      id: `sk-${Date.now()}`,
      name: newSkillName,
      category: newSkillCat,
      level: 'Advanced',
      experienceYears: Number(newSkillExp),
      highlight: 'Production configured across enterprise sites.',
      sampleCommand: `# Configured via Admin Portal\nshow running-config`,
    };

    onAddSkill(skill);
    setNewSkillName('');
  };

  const handleExportDB = () => {
    const data = {
      projects,
      skills,
      messages,
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `afzal-portfolio-database-${Date.now()}.json`;
    a.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn">
        
        {/* Title Bar */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-900 text-white">
          <div className="flex items-center gap-2.5">
            <ShieldCheck size={18} className="text-blue-400" />
            <h3 className="text-sm font-bold tracking-wide">
              Afzal Ahmad · Infrastructure Admin Dashboard
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Authentication Gate */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center max-w-md mx-auto text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <Lock size={24} />
            </div>

            <h4 className="text-lg font-bold text-slate-900">
              Admin Authentication
            </h4>
            <p className="text-xs text-slate-500">
              Enter your administration passcode to access incoming client messages and modify live portfolio records.
            </p>

            <form onSubmit={handleLogin} className="w-full space-y-3">
              <input
                type="password"
                placeholder="Enter PIN (Demo: 1234 or admin)"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-center font-mono text-sm tracking-widest focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              {pinError && (
                <div className="text-xs text-rose-600 font-medium">
                  Invalid passcode. Try "1234" or "admin".
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer"
              >
                Authenticate & Unlock
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsAuthenticated(true);
                }}
                className="text-[11px] text-slate-400 hover:text-slate-600 underline block mx-auto cursor-pointer"
              >
                Quick Demo Unlock (Skip PIN)
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated Dashboard */
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Tab navigation */}
            <div className="px-6 pt-3 border-b border-slate-200 bg-slate-50 flex items-center gap-4 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('messages')}
                className={`pb-3 px-1 border-b-2 flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'messages'
                    ? 'border-blue-700 text-blue-700'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Mail size={14} />
                <span>Contact Inquiries ({messages.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('projects')}
                className={`pb-3 px-1 border-b-2 flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'projects'
                    ? 'border-blue-700 text-blue-700'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <FolderGit2 size={14} />
                <span>Projects ({projects.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('skills')}
                className={`pb-3 px-1 border-b-2 flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'skills'
                    ? 'border-blue-700 text-blue-700'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Cpu size={14} />
                <span>Skills ({skills.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('db')}
                className={`pb-3 px-1 border-b-2 flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'db'
                    ? 'border-blue-700 text-blue-700'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Database size={14} />
                <span>Database Sync</span>
              </button>
            </div>

            {/* Tab Contents */}
            <div className="p-6 overflow-y-auto flex-1">
              
              {/* MESSAGES TAB */}
              {activeTab === 'messages' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Incoming Contact Messages
                    </h4>
                    <span className="text-xs text-slate-400">
                      Total: {messages.length} messages received
                    </span>
                  </div>

                  {messages.length === 0 ? (
                    <div className="py-8 text-center text-slate-400 text-xs">
                      No contact messages received yet.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <div className="font-bold text-slate-900 text-sm">
                              {msg.name} ({msg.subject})
                            </div>
                            <span className="text-[11px] font-mono text-slate-400">
                              {msg.timestamp}
                            </span>
                          </div>

                          <div className="text-slate-500">
                            Email: <a href={`mailto:${msg.email}`} className="text-blue-700 underline font-mono">{msg.email}</a> · Phone: <span className="font-mono">{msg.phone}</span>
                          </div>

                          <p className="text-slate-700 p-2.5 bg-white rounded border border-slate-100 leading-relaxed">
                            {msg.message}
                          </p>

                          <div className="flex items-center justify-end gap-2 pt-1">
                            <a
                              href={`mailto:${msg.email}?subject=Re: ${msg.subject}`}
                              className="px-2.5 py-1 text-xs rounded bg-blue-700 text-white font-medium hover:bg-blue-800"
                            >
                              Reply via Email
                            </a>
                            <button
                              onClick={() => onDeleteMessage(msg.id)}
                              className="px-2.5 py-1 text-xs rounded text-rose-600 hover:bg-rose-50 border border-rose-200"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* PROJECTS TAB */}
              {activeTab === 'projects' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Active Projects Catalog
                    </h4>
                  </div>

                  <div className="space-y-2">
                    {projects.map((proj) => (
                      <div
                        key={proj.id}
                        className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between text-xs"
                      >
                        <div>
                          <div className="font-bold text-slate-900">{proj.title}</div>
                          <div className="text-slate-500">
                            Category: {proj.category} · Duration: {proj.duration}
                          </div>
                        </div>
                        <button
                          onClick={() => onDeleteProject(proj.id)}
                          className="text-rose-600 hover:text-rose-700 p-1"
                          title="Delete Project"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SKILLS TAB */}
              {activeTab === 'skills' && (
                <div className="space-y-5">
                  <form onSubmit={handleCreateSkill} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Quick Add Skill
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="text-[11px] text-slate-500 block mb-1">Skill Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Cisco Nexus 9000"
                          value={newSkillName}
                          onChange={(e) => setNewSkillName(e.target.value)}
                          className="w-full px-2.5 py-1.5 text-xs border border-slate-200 rounded bg-white"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-slate-500 block mb-1">Category</label>
                        <select
                          value={newSkillCat}
                          onChange={(e) => setNewSkillCat(e.target.value as any)}
                          className="w-full px-2.5 py-1.5 text-xs border border-slate-200 rounded bg-white"
                        >
                          <option value="Networking">Networking</option>
                          <option value="Routing Protocols">Routing Protocols</option>
                          <option value="Security">Security</option>
                          <option value="Operating Systems">Operating Systems</option>
                          <option value="Cloud">Cloud</option>
                          <option value="Other Technologies">Other Technologies</option>
                        </select>
                      </div>
                      <div className="flex items-end">
                        <button
                          type="submit"
                          className="w-full py-1.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded cursor-pointer"
                        >
                          Add Skill
                        </button>
                      </div>
                    </div>
                  </form>

                  <div className="text-xs text-slate-500">
                    Currently displaying {skills.length} technical skills across 6 categories.
                  </div>
                </div>
              )}

              {/* DATABASE TAB */}
              {activeTab === 'db' && (
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-4 text-xs">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">PostgreSQL / JSON Data Store</h4>
                    <p className="text-slate-500 mt-1">
                      Tables provisioned: users, projects, skills, certifications, experience, blog_posts, contact_messages, resume.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-3 bg-white rounded border border-slate-200">
                      <div className="font-mono text-base font-bold text-blue-700">{projects.length}</div>
                      <div className="text-slate-500 text-[11px]">projects</div>
                    </div>
                    <div className="p-3 bg-white rounded border border-slate-200">
                      <div className="font-mono text-base font-bold text-blue-700">{skills.length}</div>
                      <div className="text-slate-500 text-[11px]">skills</div>
                    </div>
                    <div className="p-3 bg-white rounded border border-slate-200">
                      <div className="font-mono text-base font-bold text-blue-700">{messages.length}</div>
                      <div className="text-slate-500 text-[11px]">messages</div>
                    </div>
                    <div className="p-3 bg-white rounded border border-slate-200">
                      <div className="font-mono text-base font-bold text-emerald-700">Healthy</div>
                      <div className="text-slate-500 text-[11px]">db_status</div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={handleExportDB}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 cursor-pointer"
                    >
                      <Download size={14} />
                      <span>Export Database JSON</span>
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs">
              <span className="text-emerald-700 font-medium flex items-center gap-1">
                <CheckCircle size={13} />
                <span>Session Authenticated</span>
              </span>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-slate-500 hover:text-slate-800"
              >
                Lock Session
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
