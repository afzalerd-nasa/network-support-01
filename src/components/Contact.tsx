import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';
import { ContactMessage } from '../types';

interface ContactProps {
  onMessageSent: (msg: ContactMessage) => void;
}

export const Contact: React.FC<ContactProps> = ({ onMessageSent }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const newMsg: ContactMessage = {
      id: `msg-${Date.now()}`,
      name: formData.name,
      email: formData.email,
      phone: formData.phone || 'N/A',
      subject: formData.subject || 'General Inquiry',
      message: formData.message,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
      read: false,
    };

    onMessageSent(newMsg);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            <span>Get in Touch</span>
            <span aria-hidden="true">·</span>
            <span>Direct Communication</span>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Contact Me
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Have an enterprise network opportunity, infrastructure project, or consulting inquiry?
            Reach out directly or send a message below.
          </p>
        </div>

        {/* Content Grid: Direct Details + Contact Form */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 cols): Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Direct Inquiries</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Prompt response within 24 hours for corporate roles and consulting engagements.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href={`mailto:${PROFILE_INFO.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Email Address</div>
                    <div className="font-semibold text-slate-900 group-hover:text-blue-700 font-mono">
                      {PROFILE_INFO.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${PROFILE_INFO.phone}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Telephone / WhatsApp</div>
                    <div className="font-semibold text-slate-900 group-hover:text-blue-700 font-mono">
                      {PROFILE_INFO.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Location</div>
                    <div className="font-semibold text-slate-900">
                      {PROFILE_INFO.location} (Open to Relocation / Remote)
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Professional Profiles:
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={PROFILE_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 bg-blue-50 hover:bg-blue-100 text-blue-800 rounded-lg text-xs font-semibold transition-colors"
                  >
                    <Linkedin size={15} />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PROFILE_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold transition-colors"
                  >
                    <Github size={15} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column (7 cols): Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <MessageSquare size={18} className="text-blue-700" />
              <span>Send a Direct Message</span>
            </h3>

            {submitted ? (
              <div className="mt-6 p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-fadeIn">
                <CheckCircle2 size={32} className="text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-emerald-900">Message Transmitted Successfully!</h4>
                <p className="text-xs text-emerald-700">
                  Thank you for reaching out. Your communication has been dispatched to Afzal Ahmad.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 inline-block text-xs font-semibold text-emerald-800 underline cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Enterprise Network Architect Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your network requirements, vacancy specifications, or consultation inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900 leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-xs hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={15} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
