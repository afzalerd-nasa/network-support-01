import React from 'react';
import { PROFILE_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenAdmin }) => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Identity */}
          <div className="space-y-1 text-center md:text-left">
            <div className="text-base font-bold text-slate-900">
              Afzal Ahmad
            </div>
            <p className="text-slate-500 max-w-sm">
              Network Engineer specializing in enterprise routing, switching, security, and cloud infrastructure.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-medium">
            <a href="#about" className="hover:text-blue-700 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-700 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-700 transition-colors">Projects</a>
            <a href="#network-lab" className="hover:text-blue-700 transition-colors">Network Lab</a>
            <a href="#simulator" className="hover:text-blue-700 transition-colors">Simulator</a>
            <a href="#knowledge-base" className="hover:text-blue-700 transition-colors">Knowledge Base</a>
            <a href="#contact" className="hover:text-blue-700 transition-colors">Contact</a>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="text-blue-700 hover:underline font-semibold cursor-pointer"
            >
              Resume PDF
            </button>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <button
              onClick={onOpenAdmin}
              className="text-slate-500 hover:text-slate-800 cursor-pointer"
            >
              Admin Portal
            </button>
          </div>
        </div>

        {/* Copyright and Metadata */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-400">
          <div>
            © {new Date().getFullYear()} Afzal Ahmad. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>India</span>
            <span aria-hidden="true">·</span>
            <span>Enterprise Infrastructure</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
