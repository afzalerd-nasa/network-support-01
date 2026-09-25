import React, { useState } from 'react';
import {
  FileDown,
  ArrowRight,
  Send,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Server,
  Cloud,
  Monitor,
  Database,
  Radio,
  ExternalLink,
} from 'lucide-react';
import { DeviceIcon } from './NetworkIcons';
import { PROFILE_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

interface TopologyNode {
  id: string;
  name: string;
  role: string;
  type: 'cloud' | 'firewall' | 'switch' | 'router' | 'server' | 'pc' | 'database';
  ip: string;
  status: 'online' | 'active';
  x: number;
  y: number;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [selectedNode, setSelectedNode] = useState<TopologyNode | null>(null);
  const [isPingActive, setIsPingActive] = useState(false);
  const [pingLog, setPingLog] = useState<string | null>(null);

  const topologyNodes: TopologyNode[] = [
    { id: 'inet', name: 'Public Internet', role: 'BGP Transit / ISP Gateway', type: 'cloud', ip: '203.0.113.1', status: 'online', x: 260, y: 35 },
    { id: 'fw', name: 'Perimeter Firewall', role: 'Palo Alto PA-440 / App-ID', type: 'firewall', ip: '203.0.113.5', status: 'online', x: 260, y: 110 },
    { id: 'csw', name: 'Enterprise Core Switch', role: 'Catalyst 9300 / L3 Routing', type: 'switch', ip: '10.10.1.1', status: 'online', x: 260, y: 190 },
    { id: 'r1', name: 'Distribution Router R1', role: 'OSPF Area 1 Branch Gateway', type: 'router', ip: '10.10.10.1', status: 'online', x: 100, y: 280 },
    { id: 'r2', name: 'Backup Router R2', role: 'HSRP Standby Peer', type: 'router', ip: '10.10.20.1', status: 'online', x: 260, y: 280 },
    { id: 'srv', name: 'Application Server', role: 'Ubuntu Linux 22.04 LTS', type: 'server', ip: '10.10.50.10', status: 'online', x: 420, y: 280 },
    { id: 'pcs', name: 'Corporate Workstations', role: 'VLAN 10 Client Hosts', type: 'pc', ip: '192.168.10.x', status: 'online', x: 100, y: 360 },
    { id: 'db', name: 'Production Database', role: 'PostgreSQL Backend Store', type: 'database', ip: '10.10.50.20', status: 'online', x: 420, y: 360 },
  ];

  const triggerPingSimulation = () => {
    setIsPingActive(true);
    setPingLog('SENDING ICMP ECHO: PCs (192.168.10.45) -> Database (10.10.50.20)...');

    setTimeout(() => {
      setPingLog('HOP 1: R1 (10.10.10.1) -> Core Switch (10.10.1.1) [2ms]');
    }, 600);

    setTimeout(() => {
      setPingLog('HOP 2: Core Switch -> App Server (10.10.50.10) [3ms]');
    }, 1200);

    setTimeout(() => {
      setPingLog('HOP 3: DB Received & Replied: 4 packets transmitted, 0% packet loss, RTT 4.2ms');
      setIsPingActive(false);
    }, 1900);
  };

  return (
    <section
      className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-blue-950/80 bg-[#02133b] text-white bg-cover bg-no-repeat bg-right"
      style={{
        backgroundImage: "url('/61764.jpg'), url('/61764.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
      }}
    >
      {/* Contrast Scrim: Left-to-right gradient to ensure text readability on the left while showcasing the illuminated globe on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#010c22]/95 via-[#021844]/85 to-transparent pointer-events-none" />

      {/* Subtle digital grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_0.75px,transparent_0.75px)] [background-size:28px_28px] opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Core CTAs */}
          <div className="lg:col-span-6 space-y-6">
            {/* Unboxed Status Metadata */}
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-300 uppercase tracking-wider">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <Radio size={14} className="text-cyan-400 animate-pulse" />
                Network Infrastructure
              </span>
              <span aria-hidden="true" className="text-sky-500">·</span>
              <span className="text-sky-200">Enterprise IT Security</span>
              <span aria-hidden="true" className="text-sky-500">·</span>
              <span className="text-emerald-300 font-medium px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">
                Available for Hire
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-sm">
                Afzal Ahmad
              </h1>
              <p className="mt-2 text-lg sm:text-xl font-semibold text-cyan-300">
                Network Engineer · Network Administrator · IT Infrastructure Engineer
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Network Engineer specializing in enterprise networking, routing and switching,
              network security, Linux administration, cloud infrastructure, and IT support.
            </p>

            {/* Key Value Highlights */}
            <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs font-medium text-slate-200 pt-1">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-cyan-400" />
                Cisco Catalyst & ISR
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-cyan-400" />
                Palo Alto Firewalls
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-cyan-400" />
                BGP & OSPF Routing
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-cyan-400" />
                AWS VPC & Linux OS
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-600/30 ring-1 ring-blue-400/40 transition-all cursor-pointer"
              >
                <FileDown size={16} />
                <span>Download Resume</span>
              </button>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xs rounded-lg transition-colors cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight size={15} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-sky-200 hover:text-white transition-colors cursor-pointer"
              >
                <Send size={15} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Adjacency Proof Strip */}
            <div className="pt-4 border-t border-blue-900/60 grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-bold text-white font-mono tabular-nums">6+ Years</div>
                <div className="text-xs text-sky-300 font-medium">Enterprise Exp</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono tabular-nums">99.99%</div>
                <div className="text-xs text-sky-300 font-medium">Uptime Managed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono tabular-nums">500+</div>
                <div className="text-xs text-sky-300 font-medium">Active Devices</div>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Network Topology Architecture */}
          <div className="lg:col-span-6">
            <div className="bg-slate-950/85 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-sky-500/30 text-white relative">
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping opacity-75" />
                  <span className="text-xs font-mono font-semibold text-slate-300">
                    LIVE NETWORK TOPOLOGY
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={triggerPingSimulation}
                    disabled={isPingActive}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-blue-300 bg-blue-950/70 hover:bg-blue-900 border border-blue-800 rounded-md transition-colors cursor-pointer disabled:opacity-50"
                  >
                    <Zap size={13} className={isPingActive ? 'text-amber-400 animate-spin' : 'text-blue-400'} />
                    <span>{isPingActive ? 'Pinging...' : 'Simulate Ping'}</span>
                  </button>
                </div>
              </div>

              {/* Console log ticker */}
              {pingLog && (
                <div className="mt-2 px-3 py-1.5 bg-slate-950 rounded border border-blue-900/50 text-[11px] font-mono text-emerald-400 truncate">
                  &gt; {pingLog}
                </div>
              )}

              {/* SVG Topology Diagram */}
              <div className="relative w-full h-[400px] mt-2">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 520 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Cable Links */}
                  {/* Internet to Firewall */}
                  <line
                    x1="260"
                    y1="60"
                    x2="260"
                    y2="90"
                    stroke="#38bdf8"
                    strokeWidth="2"
                    strokeDasharray={isPingActive ? '4 4' : undefined}
                    className={isPingActive ? 'animate-packet-flow' : ''}
                  />

                  {/* Firewall to Core Switch */}
                  <line
                    x1="260"
                    y1="135"
                    x2="260"
                    y2="170"
                    stroke="#38bdf8"
                    strokeWidth="2.5"
                    strokeDasharray={isPingActive ? '4 4' : undefined}
                    className={isPingActive ? 'animate-packet-flow' : ''}
                  />

                  {/* Core Switch to R1 */}
                  <line
                    x1="240"
                    y1="210"
                    x2="120"
                    y2="265"
                    stroke="#60a5fa"
                    strokeWidth="2"
                    strokeDasharray={isPingActive ? '4 4' : undefined}
                    className={isPingActive ? 'animate-packet-flow' : ''}
                  />

                  {/* Core Switch to R2 */}
                  <line
                    x1="260"
                    y1="215"
                    x2="260"
                    y2="260"
                    stroke="#60a5fa"
                    strokeWidth="2"
                  />

                  {/* Core Switch to Server */}
                  <line
                    x1="280"
                    y1="210"
                    x2="400"
                    y2="265"
                    stroke="#60a5fa"
                    strokeWidth="2"
                    strokeDasharray={isPingActive ? '4 4' : undefined}
                    className={isPingActive ? 'animate-packet-flow' : ''}
                  />

                  {/* R1 to PCs */}
                  <line
                    x1="100"
                    y1="305"
                    x2="100"
                    y2="340"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                    strokeDasharray={isPingActive ? '4 4' : undefined}
                    className={isPingActive ? 'animate-packet-flow' : ''}
                  />

                  {/* Server to Database */}
                  <line
                    x1="420"
                    y1="305"
                    x2="420"
                    y2="340"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                    strokeDasharray={isPingActive ? '4 4' : undefined}
                    className={isPingActive ? 'animate-packet-flow' : ''}
                  />
                </svg>

                {/* Render Topology Nodes on Top of SVG */}
                {topologyNodes.map((node) => {
                  const isSelected = selectedNode?.id === node.id;
                  return (
                    <div
                      key={node.id}
                      onClick={() => setSelectedNode(node)}
                      style={{
                        left: `${(node.x / 520) * 100}%`,
                        top: `${(node.y / 400) * 100}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      className={`absolute cursor-pointer transition-transform duration-150 hover:scale-110 group ${
                        isSelected ? 'scale-110 z-20' : 'z-10'
                      }`}
                      title={`${node.name} (${node.ip}) - Click to inspect`}
                    >
                      <div
                        className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all ${
                          isSelected
                            ? 'bg-blue-600 ring-2 ring-blue-300 shadow-lg shadow-blue-500/50'
                            : 'bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700'
                        }`}
                      >
                        <DeviceIcon type={node.type} className="w-5 h-5 text-white" />
                        <span className="text-[10px] font-mono font-medium text-slate-200 mt-1 whitespace-nowrap">
                          {node.name.split(' ')[0]}
                        </span>
                        <span className="text-[9px] font-mono text-slate-400">
                          {node.ip}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Node Inspector Drawer / Card */}
              {selectedNode ? (
                <div className="mt-3 p-3 bg-slate-800 rounded-lg border border-slate-700 text-xs flex items-center justify-between animate-fadeIn">
                  <div>
                    <div className="font-semibold text-white flex items-center gap-2">
                      <span>{selectedNode.name}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                        {selectedNode.status.toUpperCase()}
                      </span>
                    </div>
                    <div className="text-slate-400 mt-0.5">
                      Role: {selectedNode.role} · IP: <span className="font-mono text-blue-300">{selectedNode.ip}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedNode(null)}
                    className="text-slate-400 hover:text-white px-2 py-1 text-[11px]"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div className="mt-3 px-3 py-2 bg-slate-950/60 rounded text-[11px] text-slate-400 text-center font-mono">
                  Click any network device (Firewall, Switch, Routers, Servers) to inspect parameters.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
