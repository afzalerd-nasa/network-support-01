import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import { INITIAL_EXPERIENCE } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            <span>Career Milestones</span>
            <span aria-hidden="true">·</span>
            <span>Enterprise Environments</span>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Work Experience
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Over 6 years of frontline experience administering mission-critical network backbones,
            leading NOC operations, and securing hybrid enterprise IT infrastructure.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="mt-12 space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-8 before:w-0.5 before:bg-slate-200">
          {INITIAL_EXPERIENCE.map((exp) => (
            <div
              key={exp.id}
              className="relative flex items-start gap-4 sm:gap-6 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="relative z-10 w-10 sm:w-16 h-10 sm:h-16 rounded-2xl bg-white border-2 border-blue-600 flex items-center justify-center text-blue-700 shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                <Briefcase size={20} />
              </div>

              {/* Experience Card */}
              <div className="flex-1 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
                
                {/* Header: Role, Organization, Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-blue-700 mt-0.5">
                      {exp.organization}
                    </div>
                  </div>

                  {/* Clean unboxed metadata with separators */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} className="text-slate-400" />
                      {exp.period}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 font-sans">
                      <MapPin size={13} className="text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Core Responsibilities Checklist */}
                <div className="mt-5">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                    Core Operational Responsibilities:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {exp.responsibilities.map((resp, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100"
                      >
                        <CheckCircle2 size={15} className="text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics Proof Bar */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                  {exp.metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200"
                    >
                      ✓ {metric}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
