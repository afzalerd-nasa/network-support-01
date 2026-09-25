import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  ChevronRight,
  Clock,
  Terminal,
  Copy,
  Check,
  X,
  AlertTriangle,
  Lightbulb,
  Bookmark,
} from 'lucide-react';
import { KnowledgeArticle } from '../types';
import { INITIAL_KNOWLEDGE_BASE } from '../data/portfolioData';

export const KnowledgeBase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [readingArticle, setReadingArticle] = useState<KnowledgeArticle | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Cisco',
    'Routing',
    'Switching',
    'Firewall',
    'Linux',
    'AWS',
    'Docker',
    'Network Security',
  ];

  const filteredArticles = INITIAL_KNOWLEDGE_BASE.filter((art) => {
    const matchesCategory =
      selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="knowledge-base" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            <span>Engineering Runbooks & Tutorials</span>
            <span aria-hidden="true">·</span>
            <span>Production Proven</span>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Network Engineer Knowledge Base
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            In-depth technical guides, configuration walkthroughs, and diagnostic procedures written
            for enterprise networking engineers and infrastructure administrators.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Segmented Category Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles & commands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setReadingArticle(article)}
              className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Unboxed category metadata with separator */}
                <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-100">
                  <span className="font-semibold text-blue-700">{article.category}</span>
                  <span className="flex items-center gap-1 font-mono">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="mt-3 text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>

                {article.symptoms && article.symptoms.length > 0 && (
                  <div className="mt-3 text-[11px] text-amber-700 bg-amber-50/70 p-2 rounded-lg border border-amber-200/60 line-clamp-1">
                    <strong>Symptom:</strong> {article.symptoms[0]}
                  </div>
                )}
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-700 group-hover:text-blue-900">
                <span>Read Full Walkthrough</span>
                <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="py-12 text-center text-slate-500 text-sm">
            No articles found matching "{searchQuery}".
          </div>
        )}

        {/* Article Reader Modal */}
        {readingArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn">
              
              {/* Reader Header */}
              <div className="px-6 py-5 border-b border-slate-200 flex items-start justify-between bg-slate-50">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
                    <span>{readingArticle.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{readingArticle.readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-slate-500">{readingArticle.level}</span>
                  </div>
                  <h3 className="mt-1 text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                    {readingArticle.title}
                  </h3>
                </div>

                <button
                  onClick={() => setReadingArticle(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Reader Content Body */}
              <div className="p-6 overflow-y-auto space-y-6">
                
                {/* Summary Box */}
                <div className="p-4 bg-blue-50/70 rounded-xl border border-blue-200 text-xs sm:text-sm text-blue-950 leading-relaxed">
                  <strong>Overview: </strong>
                  {readingArticle.summary}
                </div>

                {/* Symptoms Alert */}
                {readingArticle.symptoms && readingArticle.symptoms.length > 0 && (
                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs">
                    <div className="font-bold text-amber-900 flex items-center gap-1.5 mb-1.5">
                      <AlertTriangle size={15} className="text-amber-700" />
                      <span>Diagnosed Symptoms:</span>
                    </div>
                    <ul className="list-disc list-inside text-amber-800 space-y-1">
                      {readingArticle.symptoms.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Step-by-Step Walkthrough */}
                <div className="space-y-5">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Configuration & Execution Steps:
                  </h4>

                  {readingArticle.steps.map((step, idx) => (
                    <div
                      key={step.stepNumber}
                      className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-700 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                          {step.stepNumber}
                        </span>
                        <h5 className="text-sm font-bold text-slate-900">
                          {step.title}
                        </h5>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.explanation}
                      </p>

                      {step.command && (
                        <div className="rounded-lg overflow-hidden border border-slate-800 bg-slate-900">
                          <div className="px-3 py-1.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-[11px]">
                            <span className="font-mono text-slate-400">Terminal Command</span>
                            <button
                              onClick={() => handleCopy(step.command || '', idx)}
                              className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-mono text-[11px]"
                            >
                              {copiedIndex === idx ? <Check size={12} /> : <Copy size={12} />}
                              <span>{copiedIndex === idx ? 'Copied' : 'Copy'}</span>
                            </button>
                          </div>
                          <pre className="p-3 text-xs font-mono text-emerald-400 overflow-x-auto terminal-scrollbar leading-relaxed">
                            {step.command}
                          </pre>
                        </div>
                      )}

                      {step.expectedOutput && (
                        <div className="p-2.5 bg-slate-100 rounded border border-slate-200 text-[11px] font-mono text-slate-700">
                          <div className="text-[10px] text-slate-500 font-semibold mb-1">Expected Output:</div>
                          <pre className="whitespace-pre overflow-x-auto terminal-scrollbar">
                            {step.expectedOutput}
                          </pre>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Troubleshooting Tips */}
                {readingArticle.troubleshootingTips && (
                  <div className="p-4 bg-slate-900 rounded-xl text-white space-y-2">
                    <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                      <Lightbulb size={15} />
                      <span>Troubleshooting Tips & Gotchas:</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {readingArticle.troubleshootingTips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-400 font-bold">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>

              {/* Reader Footer */}
              <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Article Author: <strong>Afzal Ahmad</strong> (Senior Network Engineer)
                </span>
                <button
                  onClick={() => setReadingArticle(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg cursor-pointer"
                >
                  Close Article
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
