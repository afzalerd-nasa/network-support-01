import React, { useState } from 'react';
import {
  Plus,
  Play,
  RotateCcw,
  Trash2,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  Link as LinkIcon,
  Cable,
  Radio,
  Server,
  Cloud,
  Layers,
  Terminal,
} from 'lucide-react';
import { DeviceIcon } from './NetworkIcons';
import { SimNode, SimLink } from '../types';

export const NetworkSimulator: React.FC = () => {
  // Simulator State
  const [nodes, setNodes] = useState<SimNode[]>([
    { id: 'sim-pc-1', name: 'Workstation-1', type: 'pc', x: 80, y: 150, ip: '192.168.1.10', subnet: '255.255.255.0', gateway: '192.168.1.1', vlan: 'VLAN 10', protocol: 'DHCP' },
    { id: 'sim-sw-1', name: 'Core-Switch', type: 'switch', x: 260, y: 150, ip: '192.168.1.2', subnet: '255.255.255.0', gateway: '192.168.1.1', vlan: 'VLAN 10 Trunk', protocol: '802.1Q' },
    { id: 'sim-rtr-1', name: 'Edge-Router', type: 'router', x: 440, y: 150, ip: '192.168.1.1', subnet: '255.255.255.0', gateway: '203.0.113.1', vlan: 'Native', protocol: 'OSPF' },
    { id: 'sim-fw-1', name: 'Palo-Alto-FW', type: 'firewall', x: 620, y: 150, ip: '203.0.113.2', subnet: '255.255.255.248', gateway: '203.0.113.1', vlan: 'DMZ/Trust', protocol: 'App-ID' },
    { id: 'sim-cloud-1', name: 'Internet-Cloud', type: 'cloud', x: 800, y: 150, ip: '203.0.113.1', subnet: '255.255.255.248', gateway: '0.0.0.0', vlan: 'WAN', protocol: 'BGP' },
  ]);

  const [links, setLinks] = useState<SimLink[]>([
    { id: 'l1', fromId: 'sim-pc-1', toId: 'sim-sw-1', status: 'active' },
    { id: 'l2', fromId: 'sim-sw-1', toId: 'sim-rtr-1', status: 'active' },
    { id: 'l3', fromId: 'sim-rtr-1', toId: 'sim-fw-1', status: 'active' },
    { id: 'l4', fromId: 'sim-fw-1', toId: 'sim-cloud-1', status: 'active' },
  ]);

  const [selectedNode, setSelectedNode] = useState<SimNode | null>(nodes[0]);
  const [connectSourceNodeId, setConnectSourceNodeId] = useState<string | null>(null);

  // Packet simulation state
  const [srcNodeId, setSrcNodeId] = useState<string>('sim-pc-1');
  const [dstNodeId, setDstNodeId] = useState<string>('sim-cloud-1');
  const [simRunning, setSimRunning] = useState<boolean>(false);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    'Network Simulator Engine Initialized.',
    'Ready to test packet routing between nodes.',
  ]);

  // Presets
  const loadPreset = (preset: 'soho' | 'dmz' | 'ospf') => {
    if (preset === 'soho') {
      setNodes([
        { id: 'pc1', name: 'Home-PC', type: 'pc', x: 100, y: 150, ip: '192.168.0.50', subnet: '255.255.255.0', gateway: '192.168.0.1', vlan: 'VLAN 1', protocol: 'DHCP' },
        { id: 'sw1', name: 'L2-Switch', type: 'switch', x: 300, y: 150, ip: '192.168.0.2', subnet: '255.255.255.0', gateway: '192.168.0.1', vlan: 'VLAN 1', protocol: 'Unmanaged' },
        { id: 'r1', name: 'Gateway-Router', type: 'router', x: 500, y: 150, ip: '192.168.0.1', subnet: '255.255.255.0', gateway: '203.0.113.1', vlan: 'VLAN 1', protocol: 'Static NAT' },
        { id: 'cl1', name: 'Internet-ISP', type: 'cloud', x: 700, y: 150, ip: '203.0.113.1', subnet: '255.255.255.0', gateway: '0.0.0.0', vlan: 'Public', protocol: 'eBGP' },
      ]);
      setLinks([
        { id: 'l1', fromId: 'pc1', toId: 'sw1', status: 'active' },
        { id: 'l2', fromId: 'sw1', toId: 'r1', status: 'active' },
        { id: 'l3', fromId: 'r1', toId: 'cl1', status: 'active' },
      ]);
      setSrcNodeId('pc1');
      setDstNodeId('cl1');
      setSelectedNode(null);
    } else if (preset === 'dmz') {
      setNodes([
        { id: 'cl', name: 'External-User', type: 'cloud', x: 100, y: 150, ip: '198.51.100.4', subnet: '255.255.255.0', gateway: '0.0.0.0', vlan: 'WAN', protocol: 'BGP' },
        { id: 'fw', name: 'Perimeter-FW', type: 'firewall', x: 300, y: 150, ip: '198.51.100.1', subnet: '255.255.255.0', gateway: '198.51.100.1', vlan: 'DMZ/Trust', protocol: 'App-ID' },
        { id: 'srv', name: 'Web-Server-DMZ', type: 'server', x: 500, y: 90, ip: '172.16.1.10', subnet: '255.255.255.0', gateway: '172.16.1.1', vlan: 'VLAN 50 DMZ', protocol: 'HTTPS' },
        { id: 'rtr', name: 'Internal-Core', type: 'router', x: 500, y: 220, ip: '10.0.0.1', subnet: '255.255.0.0', gateway: '10.0.0.1', vlan: 'VLAN 10', protocol: 'OSPF' },
      ]);
      setLinks([
        { id: 'l1', fromId: 'cl', toId: 'fw', status: 'active' },
        { id: 'l2', fromId: 'fw', toId: 'srv', status: 'active' },
        { id: 'l3', fromId: 'fw', toId: 'rtr', status: 'active' },
      ]);
      setSrcNodeId('cl');
      setDstNodeId('srv');
      setSelectedNode(null);
    } else if (preset === 'ospf') {
      setNodes([
        { id: 'r1', name: 'HQ-Router-A0', type: 'router', x: 120, y: 150, ip: '10.254.0.1', subnet: '255.255.255.252', gateway: '10.254.0.2', vlan: 'Area 0', protocol: 'OSPF' },
        { id: 'r2', name: 'Branch-Router-A1', type: 'router', x: 360, y: 150, ip: '10.254.0.2', subnet: '255.255.255.252', gateway: '10.254.0.1', vlan: 'Area 1', protocol: 'OSPF' },
        { id: 'sw', name: 'Branch-Switch', type: 'switch', x: 600, y: 150, ip: '192.168.20.2', subnet: '255.255.255.0', gateway: '192.168.20.1', vlan: 'VLAN 20', protocol: '802.1Q' },
        { id: 'pc', name: 'Branch-Host', type: 'pc', x: 800, y: 150, ip: '192.168.20.15', subnet: '255.255.255.0', gateway: '192.168.20.1', vlan: 'VLAN 20', protocol: 'DHCP' },
      ]);
      setLinks([
        { id: 'l1', fromId: 'r1', toId: 'r2', status: 'active' },
        { id: 'l2', fromId: 'r2', toId: 'sw', status: 'active' },
        { id: 'l3', fromId: 'sw', toId: 'pc', status: 'active' },
      ]);
      setSrcNodeId('r1');
      setDstNodeId('pc');
      setSelectedNode(null);
    }
  };

  // Add Device
  const handleAddDevice = (type: SimNode['type']) => {
    const newId = `node-${Date.now()}`;
    const defaultName = `${type.toUpperCase()}-${nodes.length + 1}`;
    let defaultIp = '192.168.1.100';
    if (type === 'router') defaultIp = '10.0.0.1';
    if (type === 'firewall') defaultIp = '203.0.113.10';
    if (type === 'server') defaultIp = '10.10.50.10';
    if (type === 'cloud') defaultIp = '8.8.8.8';

    const newNode: SimNode = {
      id: newId,
      name: defaultName,
      type,
      x: 100 + (nodes.length % 5) * 140,
      y: 120 + Math.floor(nodes.length / 5) * 80,
      ip: defaultIp,
      subnet: '255.255.255.0',
      gateway: '192.168.1.1',
      vlan: 'VLAN 10',
      protocol: type === 'router' ? 'OSPF' : type === 'firewall' ? 'PAN-OS' : 'Static',
    };

    setNodes([...nodes, newNode]);
    setSelectedNode(newNode);
    setConsoleLogs((prev) => [`[Topology] Added new device: ${newNode.name} (${newNode.ip})`, ...prev]);
  };

  // Remove Device
  const handleRemoveNode = (id: string) => {
    setNodes(nodes.filter((n) => n.id !== id));
    setLinks(links.filter((l) => l.fromId !== id && l.toId !== id));
    if (selectedNode?.id === id) setSelectedNode(null);
  };

  // Connect Nodes
  const handleNodeClick = (node: SimNode) => {
    if (connectSourceNodeId) {
      if (connectSourceNodeId !== node.id) {
        // Create link
        const exists = links.some(
          (l) =>
            (l.fromId === connectSourceNodeId && l.toId === node.id) ||
            (l.fromId === node.id && l.toId === connectSourceNodeId)
        );
        if (!exists) {
          const newLink: SimLink = {
            id: `link-${Date.now()}`,
            fromId: connectSourceNodeId,
            toId: node.id,
            status: 'active',
          };
          setLinks([...links, newLink]);
          setConsoleLogs((prev) => [
            `[Cabling] Connected link between ${nodes.find((n) => n.id === connectSourceNodeId)?.name} and ${node.name}`,
            ...prev,
          ]);
        }
      }
      setConnectSourceNodeId(null);
    } else {
      setSelectedNode(node);
    }
  };

  // Run Test Connectivity Simulation
  const handleTestConnectivity = () => {
    const src = nodes.find((n) => n.id === srcNodeId);
    const dst = nodes.find((n) => n.id === dstNodeId);
    if (!src || !dst) return;

    setSimRunning(true);
    setConsoleLogs([
      `[SIMULATION START] ICMP Echo Request: ${src.name} (${src.ip}) -> ${dst.name} (${dst.ip})`,
      `[Layer 3 Check] Source subnet: ${src.subnet}. Target IP: ${dst.ip}. Different subnet detected.`,
      `[Gateway Lookup] Forwarding packet to Default Gateway: ${src.gateway}`,
    ]);

    setTimeout(() => {
      setConsoleLogs((prev) => [
        `[Routing Engine] Gateway evaluated routing table protocol: ${src.protocol}. Next-hop verified.`,
        `[Firewall Inspection] Inspecting stateful security policy and App-ID... PERMITTED.`,
        ...prev,
      ]);
    }, 500);

    setTimeout(() => {
      setConsoleLogs((prev) => [
        `[ICMP Echo Reply] Destination host ${dst.name} processed payload and replied.`,
        `SUCCESS: 5/5 packets received. 0% packet loss. Round-trip min/avg/max = 1.1/1.6/2.1 ms.`,
        ...prev,
      ]);
      setSimRunning(false);
    }, 1200);
  };

  return (
    <section id="simulator" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            <span>Feature 15</span>
            <span aria-hidden="true">·</span>
            <span>Virtual Packet Tracer & Builder</span>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Interactive Network Simulator
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Construct network topologies by placing routers, switches, firewalls, and servers. Connect
            cables, configure IP subnets and routing protocols, then execute packet traversal tests.
          </p>
        </div>

        {/* Toolbar & Presets */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
          
          {/* Add Hardware Palette */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1">
              Add Node:
            </span>
            {(['router', 'switch', 'firewall', 'server', 'pc', 'cloud'] as SimNode['type'][]).map(
              (type) => (
                <button
                  key={type}
                  onClick={() => handleAddDevice(type)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 rounded-lg text-xs font-semibold transition-colors cursor-pointer capitalize"
                >
                  <Plus size={13} />
                  <span>{type}</span>
                </button>
              )
            )}
          </div>

          {/* Quick Presets */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Presets:</span>
            <button
              onClick={() => loadPreset('soho')}
              className="px-2.5 py-1 text-xs rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium cursor-pointer"
            >
              SOHO
            </button>
            <button
              onClick={() => loadPreset('dmz')}
              className="px-2.5 py-1 text-xs rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium cursor-pointer"
            >
              DMZ Firewall
            </button>
            <button
              onClick={() => loadPreset('ospf')}
              className="px-2.5 py-1 text-xs rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium cursor-pointer"
            >
              OSPF Backbone
            </button>
            <button
              onClick={() => {
                setNodes([]);
                setLinks([]);
                setSelectedNode(null);
              }}
              className="p-1 text-slate-400 hover:text-rose-600 rounded"
              title="Clear Canvas"
            >
              <RotateCcw size={15} />
            </button>
          </div>
        </div>

        {/* Cable Connect helper notice */}
        <div className="mt-3 flex items-center justify-between text-xs px-2 text-slate-500">
          <div className="flex items-center gap-2">
            <Cable size={14} className="text-blue-600" />
            <span>
              {connectSourceNodeId ? (
                <strong className="text-blue-700">
                  Select destination device to link with{' '}
                  {nodes.find((n) => n.id === connectSourceNodeId)?.name}
                </strong>
              ) : (
                'Click "Link Cable" on any node to connect it with another hardware device.'
              )}
            </span>
          </div>
          {connectSourceNodeId && (
            <button
              onClick={() => setConnectSourceNodeId(null)}
              className="text-rose-600 hover:underline cursor-pointer"
            >
              Cancel Link
            </button>
          )}
        </div>

        {/* Simulator Grid & Configuration Panel */}
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Canvas (8 cols) */}
          <div className="lg:col-span-8 bg-slate-900 rounded-2xl border border-slate-800 shadow-md p-6 relative overflow-hidden min-h-[460px]">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

            {/* SVG Connecting Cables */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {links.map((link) => {
                const src = nodes.find((n) => n.id === link.fromId);
                const dst = nodes.find((n) => n.id === link.toId);
                if (!src || !dst) return null;

                return (
                  <line
                    key={link.id}
                    x1={src.x + 35}
                    y1={src.y + 35}
                    x2={dst.x + 35}
                    y2={dst.y + 35}
                    stroke={simRunning ? '#38bdf8' : '#64748b'}
                    strokeWidth="2.5"
                    strokeDasharray={simRunning ? '5 5' : undefined}
                    className={simRunning ? 'animate-packet-flow' : ''}
                  />
                );
              })}
            </svg>

            {/* Device Nodes */}
            <div className="relative z-10">
              {nodes.map((node) => {
                const isSelected = selectedNode?.id === node.id;
                const isConnecting = connectSourceNodeId === node.id;

                return (
                  <div
                    key={node.id}
                    style={{ left: `${node.x}px`, top: `${node.y}px` }}
                    className="absolute cursor-pointer group"
                    onClick={() => handleNodeClick(node)}
                  >
                    <div
                      className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all ${
                        isConnecting
                          ? 'bg-amber-500 ring-4 ring-amber-300 shadow-lg'
                          : isSelected
                          ? 'bg-blue-600 ring-2 ring-blue-300 shadow-lg shadow-blue-500/30'
                          : 'bg-slate-800/95 hover:bg-slate-700 border border-slate-700'
                      }`}
                    >
                      <DeviceIcon type={node.type} className="w-6 h-6 text-white" />
                      <span className="text-[11px] font-bold text-white mt-1 max-w-[85px] truncate">
                        {node.name}
                      </span>
                      <span className="text-[9px] font-mono text-slate-300">
                        {node.ip}
                      </span>
                    </div>

                    {/* Quick Link Affordance on hover */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setConnectSourceNodeId(node.id);
                      }}
                      title="Connect cable from this device"
                      className="absolute -top-2 -right-2 hidden group-hover:flex items-center justify-center w-5 h-5 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-sm text-[10px]"
                    >
                      <Cable size={10} />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Empty Canvas Notice */}
            {nodes.length === 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 text-sm">
                <span>The canvas is currently empty.</span>
                <span className="text-xs text-slate-400 mt-1">
                  Click a hardware type above to add devices or select a preset.
                </span>
              </div>
            )}
          </div>

          {/* Configuration & Packet Testing Panel (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* 1. Device Configuration Drawer */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Sliders size={16} className="text-blue-700" />
                  <span>Hardware Config</span>
                </h4>
                {selectedNode && (
                  <button
                    onClick={() => handleRemoveNode(selectedNode.id)}
                    className="text-rose-600 hover:text-rose-700 p-1"
                    title="Delete Node"
                  >
                    <Trash2 size={15} />
                  </button>
                )}
              </div>

              {selectedNode ? (
                <div className="mt-3 space-y-3 text-xs">
                  <div>
                    <label className="text-slate-500 font-medium block mb-1">Hostname</label>
                    <input
                      type="text"
                      value={selectedNode.name}
                      onChange={(e) => {
                        const updated = { ...selectedNode, name: e.target.value };
                        setSelectedNode(updated);
                        setNodes(nodes.map((n) => (n.id === updated.id ? updated : n)));
                      }}
                      className="w-full px-2.5 py-1.5 border border-slate-200 rounded font-mono text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-slate-500 font-medium block mb-1">IP Address</label>
                      <input
                        type="text"
                        value={selectedNode.ip}
                        onChange={(e) => {
                          const updated = { ...selectedNode, ip: e.target.value };
                          setSelectedNode(updated);
                          setNodes(nodes.map((n) => (n.id === updated.id ? updated : n)));
                        }}
                        className="w-full px-2.5 py-1.5 border border-slate-200 rounded font-mono text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="text-slate-500 font-medium block mb-1">Subnet Mask</label>
                      <input
                        type="text"
                        value={selectedNode.subnet}
                        onChange={(e) => {
                          const updated = { ...selectedNode, subnet: e.target.value };
                          setSelectedNode(updated);
                          setNodes(nodes.map((n) => (n.id === updated.id ? updated : n)));
                        }}
                        className="w-full px-2.5 py-1.5 border border-slate-200 rounded font-mono text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-slate-500 font-medium block mb-1">Gateway</label>
                      <input
                        type="text"
                        value={selectedNode.gateway}
                        onChange={(e) => {
                          const updated = { ...selectedNode, gateway: e.target.value };
                          setSelectedNode(updated);
                          setNodes(nodes.map((n) => (n.id === updated.id ? updated : n)));
                        }}
                        className="w-full px-2.5 py-1.5 border border-slate-200 rounded font-mono text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="text-slate-500 font-medium block mb-1">VLAN</label>
                      <input
                        type="text"
                        value={selectedNode.vlan}
                        onChange={(e) => {
                          const updated = { ...selectedNode, vlan: e.target.value };
                          setSelectedNode(updated);
                          setNodes(nodes.map((n) => (n.id === updated.id ? updated : n)));
                        }}
                        className="w-full px-2.5 py-1.5 border border-slate-200 rounded font-mono text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-500 font-medium block mb-1">Routing Protocol</label>
                    <select
                      value={selectedNode.protocol}
                      onChange={(e) => {
                        const updated = { ...selectedNode, protocol: e.target.value };
                        setSelectedNode(updated);
                        setNodes(nodes.map((n) => (n.id === updated.id ? updated : n)));
                      }}
                      className="w-full px-2.5 py-1.5 border border-slate-200 rounded font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-600 bg-white"
                    >
                      <option value="Static">Static Routing / Default GW</option>
                      <option value="OSPF">OSPFv2 (Open Shortest Path First)</option>
                      <option value="BGP">BGP (Border Gateway Protocol)</option>
                      <option value="EIGRP">EIGRP</option>
                      <option value="PAN-OS">Palo Alto App-ID Policy</option>
                    </select>
                  </div>
                </div>
              ) : (
                <div className="py-6 text-center text-slate-400 text-xs">
                  Click any node on the canvas to edit its IP, Subnet, VLAN, or Routing protocol.
                </div>
              )}
            </div>

            {/* 2. Packet Connectivity Tester Tool */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 pb-3 border-b border-slate-100">
                <Play size={16} className="text-emerald-600" />
                <span>Test Packet Connectivity</span>
              </h4>

              <div className="mt-3 space-y-2.5 text-xs">
                <div>
                  <label className="text-slate-500 font-medium block mb-1">Source Node</label>
                  <select
                    value={srcNodeId}
                    onChange={(e) => setSrcNodeId(e.target.value)}
                    className="w-full px-2.5 py-1.5 border border-slate-200 rounded bg-white text-slate-800"
                  >
                    {nodes.map((n) => (
                      <option key={n.id} value={n.id}>
                        {n.name} ({n.ip})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-slate-500 font-medium block mb-1">Destination Node</label>
                  <select
                    value={dstNodeId}
                    onChange={(e) => setDstNodeId(e.target.value)}
                    className="w-full px-2.5 py-1.5 border border-slate-200 rounded bg-white text-slate-800"
                  >
                    {nodes.map((n) => (
                      <option key={n.id} value={n.id}>
                        {n.name} ({n.ip})
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={handleTestConnectivity}
                  disabled={simRunning || nodes.length < 2}
                  className="w-full mt-2 py-2 px-3 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Play size={13} />
                  <span>{simRunning ? 'Transmitting Packets...' : 'Test Connectivity'}</span>
                </button>
              </div>

              {/* Console logs */}
              <div className="mt-3 p-3 bg-slate-950 rounded-lg font-mono text-[11px] text-emerald-400 max-h-36 overflow-y-auto terminal-scrollbar space-y-1">
                {consoleLogs.map((log, i) => (
                  <div key={i} className="leading-snug">
                    {log}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
