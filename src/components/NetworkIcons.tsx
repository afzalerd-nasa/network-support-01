import React from 'react';
import {
  Server,
  Monitor,
  Shield,
  Cloud,
  Database,
  Terminal,
  Activity,
  Cpu,
  Layers,
  CheckCircle2,
} from 'lucide-react';

interface DeviceIconProps {
  type: 'router' | 'switch' | 'firewall' | 'server' | 'pc' | 'cloud' | 'database';
  className?: string;
  size?: number;
}

export const DeviceIcon: React.FC<DeviceIconProps> = ({ type, className = 'w-6 h-6', size = 24 }) => {
  switch (type) {
    case 'router':
      // Authentic Cisco-style Router icon (circle with 4 arrows pointing in and out)
      return (
        <svg
          viewBox="0 0 48 48"
          width={size}
          height={size}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <circle cx="24" cy="24" r="20" className="fill-blue-50/60 stroke-blue-600" />
          <path d="M14 24h20M24 14v20" stroke="currentColor" />
          <path d="M19 19l5-5 5 5M29 29l-5 5-5-5" stroke="currentColor" />
          <path d="M19 29l-5-5 5-5M29 19l5 5-5 5" stroke="currentColor" />
        </svg>
      );
    case 'switch':
      // Authentic Cisco-style Switch icon (rectangle with opposing bidirectional horizontal arrows)
      return (
        <svg
          viewBox="0 0 48 48"
          width={size}
          height={size}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <rect x="6" y="10" width="36" height="28" rx="5" className="fill-cyan-50/60 stroke-cyan-600" />
          {/* Top arrow right */}
          <path d="M14 20h20M29 16l5 4-5 4" stroke="currentColor" />
          {/* Bottom arrow left */}
          <path d="M34 28H14M19 24l-5 4 5 4" stroke="currentColor" />
        </svg>
      );
    case 'firewall':
      // Authentic Firewall icon (Brick wall shield / barrier)
      return (
        <svg
          viewBox="0 0 48 48"
          width={size}
          height={size}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <rect x="8" y="10" width="32" height="28" rx="4" className="fill-rose-50/60 stroke-rose-600" />
          <line x1="8" y1="19" x2="40" y2="19" stroke="currentColor" />
          <line x1="8" y1="28" x2="40" y2="28" stroke="currentColor" />
          <line x1="18" y1="10" x2="18" y2="19" stroke="currentColor" />
          <line x1="30" y1="10" x2="30" y2="19" stroke="currentColor" />
          <line x1="24" y1="19" x2="24" y2="28" stroke="currentColor" />
          <line x1="16" y1="28" x2="16" y2="38" stroke="currentColor" />
          <line x1="32" y1="28" x2="32" y2="38" stroke="currentColor" />
        </svg>
      );
    case 'cloud':
      return <Cloud className={`${className} text-sky-600`} size={size} />;
    case 'server':
      return <Server className={`${className} text-emerald-600`} size={size} />;
    case 'database':
      return <Database className={`${className} text-indigo-600`} size={size} />;
    case 'pc':
    default:
      return <Monitor className={`${className} text-slate-700`} size={size} />;
  }
};
