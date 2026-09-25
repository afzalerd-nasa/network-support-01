import React, { useState } from 'react';
import { Search, Terminal, Copy, Check, ChevronRight, Filter } from 'lucide-react';
import { SkillItem } from '../types';
import { INITIAL_SKILLS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inspectedSkill, setInspectedSkill] = useState<SkillItem | null>(null);
  const [copied, setCopied] = useState(false);

  const categories = [
    'All',
    'Networking',
    'Routing Protocols',
    'Security',
    'Operating Systems',
    'Cloud',
    'Other Technologies',
  ];

  const filteredSkills = INITIAL_SKILLS.filter((skill) => {
    const matchesCategory =
      activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.highlight.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopySnippet = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="skills" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            <span>Hardware, Protocols & Systems</span>
            <span aria-hidden="true">·</span>
            <span>Production Tested</span>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Technical Skills
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Enterprise hardware platforms, dynamic routing suites, next-generation firewall policies,
            and operating systems calibrated across production networks.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Segmented Category Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skills (e.g. BGP, VLAN, Docker)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="group bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-400 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {skill.name}
                  </h3>
                  {/* Clean unboxed metadata with separators */}
                  <span className="text-[11px] font-mono text-slate-500 font-medium">
                    {skill.experienceYears}y exp
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                  <span>{skill.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-blue-700 font-medium">{skill.level}</span>
                </div>

                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                  {skill.highlight}
                </p>
              </div>

              {/* Action: Inspect Command / Config */}
              {skill.sampleCommand && (
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setInspectedSkill(skill)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors cursor-pointer"
                  >
                    <Terminal size={13} />
                    <span>View CLI Syntax</span>
                    <ChevronRight size={13} />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredSkills.length === 0 && (
          <div className="py-12 text-center text-slate-500 text-sm">
            No technical skills found matching "{searchQuery}".
          </div>
        )}

        {/* Terminal Modal for Inspected Skill CLI Syntax */}
        {inspectedSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
            <div className="bg-slate-900 rounded-2xl max-w-xl w-full border border-slate-800 shadow-2xl overflow-hidden animate-fadeIn">
              {/* Terminal Titlebar */}
              <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-300 ml-2">
                    {inspectedSkill.name} · Terminal Syntax
                  </span>
                </div>

                <button
                  onClick={() => setInspectedSkill(null)}
                  className="text-xs text-slate-400 hover:text-white px-2 py-1"
                >
                  ✕ Close
                </button>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs text-emerald-400 bg-slate-900 overflow-x-auto terminal-scrollbar">
                <div className="text-slate-400 mb-2">
                  # Verified production CLI syntax for {inspectedSkill.name} ({inspectedSkill.category}):
                </div>
                <pre className="text-slate-100 whitespace-pre leading-relaxed">
                  {inspectedSkill.sampleCommand}
                </pre>
              </div>

              {/* Terminal Footer */}
              <div className="px-4 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono">
                  Level: {inspectedSkill.level} · {inspectedSkill.experienceYears} Years Production
                </span>
                <button
                  onClick={() => handleCopySnippet(inspectedSkill.sampleCommand || '')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-blue-700 hover:bg-blue-600 text-white font-medium transition-colors cursor-pointer"
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copied ? 'Copied!' : 'Copy Snippet'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
