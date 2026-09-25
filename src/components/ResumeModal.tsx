import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, Github, Award, CheckCircle2 } from 'lucide-react';
import { PROFILE_INFO, INITIAL_SKILLS, INITIAL_EXPERIENCE, INITIAL_CERTIFICATIONS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-xs no-print-backdrop">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn">
        
        {/* Modal Controls Bar */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50 no-print">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Curriculum Vitae Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              <Printer size={13} />
              <span>Print / Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Canvas */}
        <div id="printable-resume" className="p-8 sm:p-10 overflow-y-auto space-y-7 bg-white text-slate-900 font-sans">
          
          {/* Resume Header */}
          <div className="border-b-2 border-slate-900 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                  {PROFILE_INFO.name}
                </h1>
                <p className="text-base font-semibold text-blue-700 mt-0.5">
                  Senior Network Engineer · IT Infrastructure Administrator
                </p>
              </div>

              {/* Contact Meta */}
              <div className="text-xs text-slate-600 space-y-1 sm:text-right font-medium">
                <div>
                  Email: <a href={`mailto:${PROFILE_INFO.email}`} className="text-blue-700 hover:underline">{PROFILE_INFO.email}</a>
                </div>
                <div>Phone: {PROFILE_INFO.phone}</div>
                <div>Location: {PROFILE_INFO.location}</div>
                <div className="text-[11px] text-slate-500">
                  LinkedIn: linkedin.com/in/afzal-ahmad-2615363a5/
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              {PROFILE_INFO.aboutBio}
            </p>
          </div>

          {/* Section: Technical Competencies */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
              Core Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
              <div>
                <strong className="text-slate-900">Routing Protocols:</strong>{' '}
                <span className="text-slate-700">OSPFv2/v3, BGP (eBGP/iBGP), EIGRP, RIPv2, Static/Floating Default Routing</span>
              </div>
              <div>
                <strong className="text-slate-900">Cisco Switching:</strong>{' '}
                <span className="text-slate-700">Catalyst 9300/3850/2960, VLAN, 802.1Q Trunking, Rapid-PVST+, EtherChannel/LACP, HSRP</span>
              </div>
              <div>
                <strong className="text-slate-900">Security & Firewalls:</strong>{' '}
                <span className="text-slate-700">Palo Alto PA-440 (PAN-OS 11), App-ID, Threat Prevention, NAT Policies, GlobalProtect VPN, IPsec</span>
              </div>
              <div>
                <strong className="text-slate-900">Operating Systems:</strong>{' '}
                <span className="text-slate-700">Linux (Ubuntu Server, Red Hat RHEL), Windows Server 2019/2022, Active Directory, systemd, bash</span>
              </div>
              <div>
                <strong className="text-slate-900">Cloud Infrastructure:</strong>{' '}
                <span className="text-slate-700">AWS VPC, EC2, NAT Gateways, Internet Gateways, Route Tables, Security Groups, Transit Gateway</span>
              </div>
              <div>
                <strong className="text-slate-900">Network Tools & Other:</strong>{' '}
                <span className="text-slate-700">Wireshark, PRTG, SNMPv3, Docker, Git, Python (Netmiko), SQL, SAP BASIS Administration</span>
              </div>
            </div>
          </div>

          {/* Section: Professional Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
              Work Experience
            </h2>
            <div className="space-y-4">
              {INITIAL_EXPERIENCE.map((exp) => (
                <div key={exp.id} className="text-xs">
                  <div className="flex justify-between items-baseline font-bold text-slate-900 text-sm">
                    <span>{exp.role}</span>
                    <span className="text-xs font-mono font-medium text-slate-500">{exp.period}</span>
                  </div>
                  <div className="text-xs font-semibold text-blue-700">
                    {exp.organization} · {exp.location}
                  </div>
                  <ul className="mt-2 list-disc list-inside space-y-1 text-slate-700 leading-relaxed">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
              Certifications & Accreditations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {INITIAL_CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="p-2 bg-slate-50 rounded border border-slate-200">
                  <div className="font-bold text-slate-900">{cert.title}</div>
                  <div className="text-[11px] text-slate-500">
                    {cert.issuer} · ID: <span className="font-mono">{cert.credentialId}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
              Education
            </h2>
            <div className="text-xs flex justify-between items-baseline">
              <div>
                <strong className="text-slate-900">Bachelor of Technology / Computer Science & Engineering</strong>
                <div className="text-slate-600">Focus on Network Systems, Operating Systems & Data Communications</div>
              </div>
              <div className="font-mono text-slate-500">India</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
