import React, { useState } from 'react';
import {
  Layers,
  Zap,
  Radio,
  CheckCircle2,
  AlertCircle,
  Terminal,
  Activity,
  ArrowRight,
  Shield,
  Server,
  Cloud,
  Network,
  RotateCcw,
} from 'lucide-react';
import { DeviceIcon } from './NetworkIcons';
import { NetworkLabDevice } from '../types';
import { LAB_TOPOLOGIES } from '../data/portfolioData';

export const NetworkLab: React.FC = () => {
  const [activeTopologyId, setActiveTopologyId] = useState<'topo-core' | 'topo-branch'>('topo-core');
  const [selectedDevice, setSelectedDevice] = useState<NetworkLabDevice | null>(
    LAB_TOPOLOGIES[0].devices[0]
  );
  
  // Interactive Ping simulation state
  const [pingSourceId, setPingSourceId] = useState<string>('dev-pc1');
  const [pingTargetId, setPingTargetId] = useState<string>('dev-inet');
  const [isPinging, setIsPinging] = useState(false);
  const [pingConsoleLines, setPingConsoleLines] = useState<string[]>([]);

  const currentTopology =
    LAB_TOPOLOGIES.find((t) => t.id === activeTopologyId) || LAB_TOPOLOGIES[0];

  const handleSelectTopology = (id: 'topo-core' | 'topo-branch') => {
    setActiveTopologyId(id);
    const topo = LAB_TOPOLOGIES.find((t) => t.id === id) || LAB_TOPOLOGIES[0];
    setSelectedDevice(topo.devices[0]);
    setPingSourceId(topo.devices[0].id);
    setPingTargetId(topo.devices[topo.devices.length - 1].id);
    setPingConsoleLines([]);
  };

  const executePing = () => {
    const src = currentTopology.devices.find((d) => d.id === pingSourceId);
    const dst = currentTopology.devices.find((d) => d.id === pingTargetId);
    if (!src || !dst) return;

    setIsPinging(true);
    setPingConsoleLines([
      `PING initiated from ${src.name} (${src.ip}) to ${dst.name} (${dst.ip}) with 64 bytes of ICMP data:`,
      `[ARP] Checking ARP cache for default gateway... Cache hit! MAC: ${src.mac}`,
    ]);

    setTimeout(() => {
      setPingConsoleLines((prev) => [
        ...prev,
        `[ICMP Echo Req] Packet egress interface ${src.interfaces[0]?.name || 'eth0'} -> next hop`,
        `[L2/L3 Hop] 802.1Q tagged frame traversed switch fabric with 0 errors`,
      ]);
    }, 450);

    setTimeout(() => {
      setPingConsoleLines((prev) => [
        ...prev,
        `[Firewall / NAT] Stateful inspection evaluated rules. Action: PERMIT`,
        `64 bytes from ${dst.ip}: icmp_seq=1 ttl=56 time=1.84 ms`,
        `64 bytes from ${dst.ip}: icmp_seq=2 ttl=56 time=1.42 ms`,
        `--- ${dst.ip} ping statistics ---`,
        `2 packets transmitted, 2 received, 0% packet loss, rtt avg 1.63ms`,
      ]);
      setIsPinging(false);
    }, 1100);
  };

  return (
    <section id="network-lab" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            <span>Interactive Hardware Exploration</span>
            <span aria-hidden="true">·</span>
            <span>Real Node Telemetry</span>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Interactive Network Lab
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Inspect real enterprise topologies. Click any hardware device (Router, Switch, Firewall,
            Workstation) to examine its IP configuration, VLAN memberships, and active routing tables.
          </p>
        </div>

        {/* Topology Selector Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <button
            onClick={() => handleSelectTopology('topo-core')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTopologyId === 'topo-core'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Diagram 1: PC → Switch → Router → Firewall → Internet
          </button>

          <button
            onClick={() => handleSelectTopology('topo-branch')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTopologyId === 'topo-branch'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Diagram 2: PC1/PC2/PC3 ─┬─ Switch ── Router ── Internet
          </button>
        </div>

        {/* Lab Workspace Layout */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Area (8 cols): Interactive Diagram Canvas */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl p-6 border border-slate-800 text-white shadow-lg">
            
            {/* Canvas Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-sm font-bold text-slate-100">
                  {currentTopology.name}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {currentTopology.description}
                </p>
              </div>
              <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>ONLINE</span>
              </div>
            </div>

            {/* Visual Topology Representation */}
            <div className="my-8 py-4">
              {activeTopologyId === 'topo-core' ? (
                /* Linear Flow: PC -> Switch -> Router -> Firewall -> Internet */
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative">
                  {currentTopology.devices.map((device, index) => {
                    const isSelected = selectedDevice?.id === device.id;
                    return (
                      <React.Fragment key={device.id}>
                        <div
                          onClick={() => setSelectedDevice(device)}
                          className={`flex flex-col items-center p-3 rounded-xl cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-blue-600 ring-2 ring-blue-300 shadow-md shadow-blue-500/30'
                              : 'bg-slate-800 hover:bg-slate-700/80 border border-slate-700'
                          }`}
                        >
                          <DeviceIcon type={device.type} className="w-6 h-6 text-white" />
                          <span className="text-[11px] font-bold text-slate-100 mt-2 text-center max-w-[80px] truncate">
                            {device.name.split(' ')[0]}
                          </span>
                          <span className="text-[9px] font-mono text-slate-400">
                            {device.ip}
                          </span>
                        </div>

                        {index < currentTopology.devices.length - 1 && (
                          <div className="flex flex-col items-center">
                            <span className="text-xs font-mono text-blue-400">
                              {isPinging ? '···►' : '──►'}
                            </span>
                            <span className="text-[9px] font-mono text-slate-500 hidden sm:inline">
                              {currentTopology.connections[index]?.bandwidth}
                            </span>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              ) : (
                /* Multi-Host Tree: PC1, PC2, PC3 -> Switch -> Router -> Internet */
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
                    {/* Left Column: 3 PCs */}
                    <div className="space-y-2">
                      {currentTopology.devices.slice(0, 3).map((device) => {
                        const isSelected = selectedDevice?.id === device.id;
                        return (
                          <div
                            key={device.id}
                            onClick={() => setSelectedDevice(device)}
                            className={`flex items-center gap-2 p-2.5 rounded-lg cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-blue-600 ring-2 ring-blue-300'
                                : 'bg-slate-800 hover:bg-slate-700 border border-slate-700'
                            }`}
                          >
                            <DeviceIcon type="pc" className="w-4 h-4 text-white" />
                            <div className="truncate">
                              <div className="text-[11px] font-bold text-white truncate">
                                {device.name}
                              </div>
                              <div className="text-[9px] font-mono text-slate-400">
                                {device.ip}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Switch Node */}
                    <div className="flex justify-center">
                      {(() => {
                        const sw = currentTopology.devices[3];
                        const isSelected = selectedDevice?.id === sw?.id;
                        return (
                          <div
                            onClick={() => setSelectedDevice(sw)}
                            className={`flex flex-col items-center p-3 rounded-xl cursor-pointer ${
                              isSelected
                                ? 'bg-blue-600 ring-2 ring-blue-300'
                                : 'bg-slate-800 hover:bg-slate-700 border border-slate-700'
                            }`}
                          >
                            <DeviceIcon type="switch" className="w-6 h-6 text-white" />
                            <span className="text-[11px] font-bold text-white mt-1">Branch Switch</span>
                            <span className="text-[9px] font-mono text-slate-400">{sw?.ip}</span>
                          </div>
                        );
                      })()}
                    </div>

                    {/* Router Node */}
                    <div className="flex justify-center">
                      {(() => {
                        const rtr = currentTopology.devices[4];
                        const isSelected = selectedDevice?.id === rtr?.id;
                        return (
                          <div
                            onClick={() => setSelectedDevice(rtr)}
                            className={`flex flex-col items-center p-3 rounded-xl cursor-pointer ${
                              isSelected
                                ? 'bg-blue-600 ring-2 ring-blue-300'
                                : 'bg-slate-800 hover:bg-slate-700 border border-slate-700'
                            }`}
                          >
                            <DeviceIcon type="router" className="w-6 h-6 text-white" />
                            <span className="text-[11px] font-bold text-white mt-1">Gateway</span>
                            <span className="text-[9px] font-mono text-slate-400">{rtr?.ip}</span>
                          </div>
                        );
                      })()}
                    </div>

                    {/* Cloud Node */}
                    <div className="flex justify-center">
                      {(() => {
                        const cloud = currentTopology.devices[5];
                        const isSelected = selectedDevice?.id === cloud?.id;
                        return (
                          <div
                            onClick={() => setSelectedDevice(cloud)}
                            className={`flex flex-col items-center p-3 rounded-xl cursor-pointer ${
                              isSelected
                                ? 'bg-blue-600 ring-2 ring-blue-300'
                                : 'bg-slate-800 hover:bg-slate-700 border border-slate-700'
                            }`}
                          >
                            <DeviceIcon type="cloud" className="w-6 h-6 text-white" />
                            <span className="text-[11px] font-bold text-white mt-1">Internet</span>
                            <span className="text-[9px] font-mono text-slate-400">{cloud?.ip}</span>
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Live Packet Ping Trigger Tool */}
            <div className="pt-4 border-t border-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs mb-3">
                <span className="font-mono text-slate-300 font-semibold flex items-center gap-1.5">
                  <Zap size={14} className="text-amber-400" />
                  Live ICMP Connectivity Test
                </span>

                <div className="flex items-center gap-2">
                  <select
                    value={pingSourceId}
                    onChange={(e) => setPingSourceId(e.target.value)}
                    className="bg-slate-800 text-slate-200 text-xs px-2 py-1 rounded border border-slate-700 focus:outline-none"
                  >
                    {currentTopology.devices.map((d) => (
                      <option key={d.id} value={d.id}>
                        Src: {d.name.split(' ')[0]} ({d.ip})
                      </option>
                    ))}
                  </select>

                  <ArrowRight size={13} className="text-slate-500" />

                  <select
                    value={pingTargetId}
                    onChange={(e) => setPingTargetId(e.target.value)}
                    className="bg-slate-800 text-slate-200 text-xs px-2 py-1 rounded border border-slate-700 focus:outline-none"
                  >
                    {currentTopology.devices.map((d) => (
                      <option key={d.id} value={d.id}>
                        Dst: {d.name.split(' ')[0]} ({d.ip})
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={executePing}
                    disabled={isPinging}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded font-medium transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {isPinging ? 'Pinging...' : 'Send Ping'}
                  </button>
                </div>
              </div>

              {/* Terminal Packet Flow Output */}
              {pingConsoleLines.length > 0 && (
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-[11px] text-emerald-400 space-y-1 terminal-scrollbar max-h-36 overflow-y-auto">
                  {pingConsoleLines.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Right Area (5 cols): Device Details Inspector Drawer */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            {selectedDevice ? (
              <div className="space-y-5">
                
                {/* Inspector Titlebar */}
                <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                      <DeviceIcon type={selectedDevice.type} className="w-6 h-6 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">
                        {selectedDevice.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-mono mt-0.5">
                        MAC: {selectedDevice.mac}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {selectedDevice.status.toUpperCase()}
                  </span>
                </div>

                {/* Core Parameters Table */}
                <div className="space-y-2.5 text-xs divide-y divide-slate-100">
                  <div className="pt-2 first:pt-0 flex justify-between">
                    <span className="text-slate-500 font-medium">Device Role</span>
                    <span className="font-semibold text-slate-800 capitalize">
                      {selectedDevice.type}
                    </span>
                  </div>

                  <div className="pt-2 flex justify-between">
                    <span className="text-slate-500 font-medium">IP Address</span>
                    <span className="font-mono font-bold text-blue-700">
                      {selectedDevice.ip}
                    </span>
                  </div>

                  <div className="pt-2 flex justify-between">
                    <span className="text-slate-500 font-medium">Subnet Mask</span>
                    <span className="font-mono text-slate-700">
                      {selectedDevice.subnet}
                    </span>
                  </div>

                  <div className="pt-2 flex justify-between">
                    <span className="text-slate-500 font-medium">Default Gateway</span>
                    <span className="font-mono text-slate-700">
                      {selectedDevice.defaultGateway}
                    </span>
                  </div>

                  <div className="pt-2 flex justify-between">
                    <span className="text-slate-500 font-medium">VLAN ID / Tag</span>
                    <span className="font-semibold text-slate-900">
                      {selectedDevice.vlan}
                    </span>
                  </div>

                  <div className="pt-2 flex justify-between">
                    <span className="text-slate-500 font-medium">Active Protocol</span>
                    <span className="font-medium text-slate-800">
                      {selectedDevice.protocol}
                    </span>
                  </div>
                </div>

                {/* Interfaces List */}
                <div>
                  <h5 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Physical Interfaces
                  </h5>
                  <div className="space-y-1.5">
                    {selectedDevice.interfaces.map((iface) => (
                      <div
                        key={iface.name}
                        className="flex items-center justify-between p-2 bg-slate-50 rounded-lg text-xs font-mono"
                      >
                        <span className="font-bold text-slate-800">{iface.name}</span>
                        <span className="text-slate-500">{iface.ip}</span>
                        <span className="text-emerald-600 font-semibold">{iface.status.toUpperCase()}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Routing Table (if router) */}
                {selectedDevice.routingTable && selectedDevice.routingTable.length > 0 && (
                  <div>
                    <h5 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Active IP Routing Table
                    </h5>
                    <div className="bg-slate-900 rounded-lg p-3 text-[11px] font-mono text-slate-300 space-y-1 overflow-x-auto terminal-scrollbar">
                      <div className="text-slate-500 text-[10px] pb-1 border-b border-slate-800">
                        Proto Prefix Next-Hop Metric
                      </div>
                      {selectedDevice.routingTable.map((route, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-blue-400 font-bold w-12">{route.protocol}</span>
                          <span className="text-emerald-300 w-28">{route.prefix}</span>
                          <span className="text-slate-400 w-24">{route.nextHop}</span>
                          <span className="text-slate-500">via {route.iface}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            ) : (
              <div className="py-12 text-center text-slate-400 text-sm">
                Select any device in the topology diagram to inspect interface properties and status.
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
