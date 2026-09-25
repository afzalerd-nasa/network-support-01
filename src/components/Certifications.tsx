import React, { useState } from 'react';
import { Award, CheckCircle2, ExternalLink, ShieldCheck, Download, FileText, X } from 'lucide-react';
import { Certification } from '../types';
import { INITIAL_CERTIFICATIONS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            <span>Industry Credentials</span>
            <span aria-hidden="true">·</span>
            <span>Vendor Validated</span>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Certifications
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Professional certifications affirming expertise across Cisco routing & switching,
            Palo Alto Next-Gen security, AWS cloud architecture, Linux systems, and SAP infrastructure.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INITIAL_CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-sm transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between pb-3 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                    <Award size={20} />
                  </div>
                  <span className="text-xs font-mono font-medium text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-emerald-500" />
                    <span>Verified</span>
                  </span>
                </div>

                <h3 className="mt-4 text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                  <span>{cert.issuer}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-slate-600 font-medium">{cert.credentialId}</span>
                </div>

                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  {cert.description}
                </p>

                {/* Validated Skills */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Core Competencies:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {cert.skillsValidated.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-50 text-slate-700 border border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setActiveCert(cert)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  <FileText size={13} />
                  <span>View Credential Sheet</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden animate-fadeIn">
              
              <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-2">
                  <Award size={18} className="text-blue-700" />
                  <span className="text-xs font-bold text-slate-800">
                    Official Credential Record
                  </span>
                </div>
                <button
                  onClick={() => setActiveCert(null)}
                  className="p-1 rounded text-slate-400 hover:text-slate-700"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{activeCert.title}</h3>
                  <div className="text-xs text-blue-700 font-medium mt-0.5">
                    Issuing Authority: {activeCert.issuer}
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Candidate Name:</span>
                    <span className="font-semibold text-slate-900">Afzal Ahmad</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Credential Verification ID:</span>
                    <span className="font-mono font-bold text-blue-700">{activeCert.credentialId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Status:</span>
                    <span className="text-emerald-700 font-semibold">Active & Valid</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Verified Domains & Topics:
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {activeCert.skillsValidated.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed italic border-t border-slate-100 pt-3">
                  This document confirms verified examination completion and active standing for Afzal Ahmad in enterprise infrastructure technologies.
                </p>
              </div>

              <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-end gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Download size={13} />
                  <span>Print Document</span>
                </button>
                <button
                  onClick={() => setActiveCert(null)}
                  className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg cursor-pointer"
                >
                  Done
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
