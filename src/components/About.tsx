import React from 'react';
import {
  ShieldCheck,
  Server,
  Network,
  Cpu,
  Activity,
  MapPin,
  Clock,
  Briefcase,
  Layers,
  Terminal,
  Cloud,
  CheckCircle,
} from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const coreCompetencies = [
    {
      title: 'Enterprise Network Administration',
      desc: 'Deep operational expertise managing campus-scale LAN/WAN topologies, VLAN segmentation, 802.1Q trunking, Spanning Tree Protocol (RSTP/MSTP), and high-availability default gateway redundancy (HSRP/VRRP).',
      icon: Network,
    },
    {
      title: 'Routing & Multi-Homed BGP',
      desc: 'Designing and maintaining deterministic dynamic routing fabrics utilizing OSPFv2/v3 multi-area designs and border gateway protocol (eBGP/iBGP) with route maps, AS-path manipulation, and BFD sub-second failover.',
      icon: Layers,
    },
    {
      title: 'Next-Gen Firewall & Security',
      desc: 'Hardening enterprise perimeters with Palo Alto Networks (PAN-OS), implementing App-ID, dynamic source/destination NAT policies, SSL forward decryption, threat prevention signatures, and GlobalProtect VPNs.',
      icon: ShieldCheck,
    },
    {
      title: 'Linux Server Administration',
      desc: 'Hands-on system engineering in Ubuntu Server and Red Hat Enterprise Linux (RHEL). Managing systemd services, netplan, nftables/iptables firewalls, SSH key security, cron automation, and DNS/DHCP daemons.',
      icon: Terminal,
    },
    {
      title: 'Cloud & Hybrid Infrastructure',
      desc: 'Provisioning AWS Virtual Private Clouds (VPC), public/private subnet architectures, Route Tables, NAT Gateways, Transit Gateways, and stateful Security Groups interconnecting on-premises sites via IPsec VPN.',
      icon: Cloud,
    },
    {
      title: 'Structured Troubleshooting & Monitoring',
      desc: 'Methodical OSI Layer 1 through 7 root-cause diagnostics using Wireshark packet captures, SNMPv3, PRTG, and Zabbix telemetry to maintain 99.99% network SLA and rapid MTTR.',
      icon: Activity,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            <span>Engineering Profile</span>
            <span aria-hidden="true">·</span>
            <span>OSI Layers 1 to 7</span>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            About Me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Bridging hardware switching fabrics, perimeter firewalls, and cloud connectivity with
            rock-solid reliability and proactive monitoring.
          </p>
        </div>

        {/* Content Grid: Profile Card + Narrative */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Profile Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200">
            <div className="flex items-start justify-between pb-5 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{PROFILE_INFO.name}</h3>
                <p className="text-xs font-medium text-blue-700 mt-0.5">Senior Infrastructure Specialist</p>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Active</span>
              </div>
            </div>

            {/* Profile Specifications List */}
            <div className="py-5 space-y-4 text-sm divide-y divide-slate-100">
              <div className="pt-3 first:pt-0 flex items-center justify-between">
                <span className="text-slate-500 font-medium flex items-center gap-2">
                  <Briefcase size={15} className="text-slate-400" />
                  Role
                </span>
                <span className="font-semibold text-slate-900">Network Engineer</span>
              </div>

              <div className="pt-3 flex items-center justify-between">
                <span className="text-slate-500 font-medium flex items-center gap-2">
                  <Layers size={15} className="text-slate-400" />
                  Specialization
                </span>
                <span className="font-semibold text-slate-900">Network Infrastructure</span>
              </div>

              <div className="pt-3 flex items-center justify-between">
                <span className="text-slate-500 font-medium flex items-center gap-2">
                  <Clock size={15} className="text-slate-400" />
                  Experience
                </span>
                <span className="font-semibold text-slate-900 font-mono">6+ Years</span>
              </div>

              <div className="pt-3 flex items-center justify-between">
                <span className="text-slate-500 font-medium flex items-center gap-2">
                  <MapPin size={15} className="text-slate-400" />
                  Location
                </span>
                <span className="font-semibold text-slate-900">India</span>
              </div>

              <div className="pt-3 flex items-center justify-between">
                <span className="text-slate-500 font-medium flex items-center gap-2">
                  <CheckCircle size={15} className="text-emerald-500" />
                  Availability
                </span>
                <span className="font-semibold text-emerald-700">Open to Opportunities</span>
              </div>
            </div>

            {/* Direct Connect Action */}
            <div className="pt-4 border-t border-slate-100">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <span>Initiate Direct Inquiry</span>
              </a>
            </div>
          </div>

          {/* Right Column: Detailed Narrative & Core Metrics */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200 text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                {PROFILE_INFO.aboutBio}
              </p>
              <p>
                Whether diagnosing transient MTU black holes, designing high-availability
                HSRP gateway failover, or automating daily configuration backups via Python Netmiko,
                my commitment is to deliver predictable, robust, and hardened infrastructure that
                keeps businesses online 24/7/365.
              </p>
            </div>

            {/* Core Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {PROFILE_INFO.coreMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs"
                >
                  <div className="text-2xl font-extrabold text-blue-700 font-mono tabular-nums">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-slate-600">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6 Core Competency Cards */}
        <div className="mt-12">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
            Specialized Engineering Disciplines
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreCompetencies.map((comp) => {
              const IconComp = comp.icon;
              return (
                <div
                  key={comp.title}
                  className="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-300 transition-colors shadow-xs"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-3">
                    <IconComp size={20} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{comp.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {comp.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
