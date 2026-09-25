import {
  Project,
  SkillItem,
  Certification,
  ExperienceItem,
  KnowledgeArticle,
  NetworkLabDevice,
  ContactMessage,
} from '../types';

export const PROFILE_INFO = {
  name: 'Afzal Ahmad',
  title: 'Network Engineer | Network Administrator | IT Infrastructure Engineer',
  tagline: 'Network Engineer specializing in enterprise networking, routing and switching, network security, Linux administration, cloud infrastructure, and IT support.',
  experience: '6+ Years',
  location: 'India',
  availability: 'Open to Opportunities',
  specialization: 'Network Infrastructure & Enterprise Security',
  email: 'afzalerd@gmail.com',
  phone: '+918193817061',
  linkedin: 'https://www.linkedin.com/in/afzal-ahmad-2615363a5/',
  github: 'https://github.com/dashboard',
  aboutBio: `I am an enterprise Network Engineer and IT Infrastructure Administrator with over 6 years of hands-on experience designing, provisioning, securing, and maintaining mission-critical multi-vendor network ecosystems. My expertise spans Cisco Catalyst switching and ISR routing, Palo Alto Next-Generation Firewalls (PAN-OS), high-availability Linux servers (Ubuntu/RHEL), hybrid AWS cloud networking, containerized microservices, and SAP infrastructure support.

Throughout my career, I have orchestrated campus-wide LAN/WAN refreshes, engineered fault-tolerant OSPF and BGP topologies, enforced zero-trust security postures, and maintained 99.99% service availability for demanding corporate environments. I take pride in systematic root-cause troubleshooting across OSI Layers 1 through 7, minimizing MTTR during network outages, and producing clear, comprehensive network topology documentation and automation scripts.`,
  coreMetrics: [
    { label: 'Network Uptime SLA', value: '99.99%' },
    { label: 'Active Managed Nodes', value: '500+' },
    { label: 'Site-to-Site VPN Tunnels', value: '50+' },
    { label: 'Avg MTTR (Critical)', value: '< 15m' },
  ],
};

export const INITIAL_SKILLS: SkillItem[] = [
  // Networking
  { id: 'sk-1', name: 'Cisco Routers', category: 'Networking', level: 'Expert', experienceYears: 6, highlight: 'ISR 4000/1000, ASR series, console recovery, IOS-XE firmware upgrades, HSRP/VRRP failover', sampleCommand: 'router# show ip interface brief\nrouter# show running-config interface GigabitEthernet0/0/0' },
  { id: 'sk-2', name: 'Cisco Switches', category: 'Networking', level: 'Expert', experienceYears: 6, highlight: 'Catalyst 9300/3850/2960-X, VTPv3, L2/L3 switching, StackWise architecture', sampleCommand: 'switch# show switch\nswitch# show vlan brief' },
  { id: 'sk-3', name: 'VLAN Configuration', category: 'Networking', level: 'Expert', experienceYears: 6, highlight: 'Campus segmentation, voice & data VLANs, management isolation', sampleCommand: 'switch(config)# vlan 20\nswitch(config-vlan)# name ENGINEERING_VOIP' },
  { id: 'sk-4', name: 'Trunking (802.1Q)', category: 'Networking', level: 'Expert', experienceYears: 6, highlight: 'IEEE 802.1Q encapsulation, dynamic trunking protocol (DTP) hardening, allowed VLAN pruning', sampleCommand: 'switch(config-if)# switchport mode trunk\nswitch(config-if)# switchport trunk allowed vlan 10,20,30,99' },
  { id: 'sk-5', name: 'Spanning Tree (STP/RSTP/MSTP)', category: 'Networking', level: 'Expert', experienceYears: 6, highlight: 'Rapid PVST+, root bridge priority tuning, BPDU Guard, PortFast, Root Guard', sampleCommand: 'switch(config)# spanning-tree mode rapid-pvst\nswitch(config)# spanning-tree vlan 1-100 priority 4096' },
  { id: 'sk-6', name: 'EtherChannel / LACP', category: 'Networking', level: 'Expert', experienceYears: 6, highlight: 'Cross-switch link aggregation, 802.3ad LACP, load balancing hashing algorithms', sampleCommand: 'switch(config-if-range)# channel-group 1 mode active' },
  { id: 'sk-7', name: 'DHCP & DHCP Snooping', category: 'Networking', level: 'Expert', experienceYears: 6, highlight: 'Cisco IOS DHCP server, IP helper-address relay, rogue DHCP mitigation', sampleCommand: 'switch(config)# ip dhcp snooping\nswitch(config-if)# ip dhcp snooping trust' },
  { id: 'sk-8', name: 'DNS & IPAM', category: 'Networking', level: 'Advanced', experienceYears: 5, highlight: 'Internal recursive resolution, split-horizon DNS, BIND9, Windows DNS, record propagation', sampleCommand: '$ dig @10.0.0.10 portal.internal.corp +trace\n$ nslookup -type=SRV _ldap._tcp.internal.corp' },
  { id: 'sk-9', name: 'NAT / PAT', category: 'Networking', level: 'Expert', experienceYears: 6, highlight: 'Static NAT for DMZ servers, dynamic NAT overload (PAT) for LAN outbound egress', sampleCommand: 'router(config)# ip nat inside source list 10 interface Gi0/0/1 overload' },
  { id: 'sk-10', name: 'Access Control Lists (ACL)', category: 'Networking', level: 'Expert', experienceYears: 6, highlight: 'Standard, extended, named, time-based ACLs for inter-VLAN microsegmentation', sampleCommand: 'router(config)# ip access-list extended BLOCK_GUEST_TO_PROD\nrouter(config-ext-nacl)# permit tcp 192.168.20.0 0.0.0.255 host 10.0.0.50 eq 443' },
  { id: 'sk-11', name: 'VPN (IPsec / SSL)', category: 'Networking', level: 'Expert', experienceYears: 6, highlight: 'Site-to-Site IKEv1/IKEv2 IPsec tunnels, crypto maps, GlobalProtect client VPN', sampleCommand: 'router# show crypto ikev2 sa\nrouter# show crypto ipsec sa' },
  { id: 'sk-12', name: 'TCP/IP Suite & Wireshark', category: 'Networking', level: 'Expert', experienceYears: 6, highlight: 'Deep packet inspection, 3-way handshake analysis, window sizing, TCP retransmissions, jitter/latency', sampleCommand: '$ tshark -i eth0 -f "tcp port 443" -w capture.pcap' },

  // Routing Protocols
  { id: 'sk-13', name: 'Static Routing', category: 'Routing Protocols', level: 'Expert', experienceYears: 6, highlight: 'Default gateway quad-zero routes, floating static routes with high administrative distance for failover', sampleCommand: 'router(config)# ip route 0.0.0.0 0.0.0.0 203.0.113.1\nrouter(config)# ip route 0.0.0.0 0.0.0.0 198.51.100.1 200' },
  { id: 'sk-14', name: 'RIP & RIPv2', category: 'Routing Protocols', level: 'Advanced', experienceYears: 4, highlight: 'Distance vector routing, split horizon, poison reverse, route timers', sampleCommand: 'router(config)# router rip\nrouter(config-router)# version 2\nrouter(config-router)# no auto-summary' },
  { id: 'sk-15', name: 'OSPF (v2 & v3)', category: 'Routing Protocols', level: 'Expert', experienceYears: 6, highlight: 'Multi-area hierarchy (Area 0 Backbone, ABR, ASBR), LSA types 1-5, DR/BDR election, cost tuning', sampleCommand: 'router(config)# router ospf 1\nrouter(config-router)# network 10.10.0.0 0.0.255.255 area 0\nrouter(config-router)# passive-interface GigabitEthernet0/1' },
  { id: 'sk-16', name: 'EIGRP', category: 'Routing Protocols', level: 'Advanced', experienceYears: 5, highlight: 'DUAL algorithm, feasible successor calculation, K-values metric tuning, unequal-cost load balancing', sampleCommand: 'router# show ip eigrp neighbors\nrouter# show ip eigrp topology' },
  { id: 'sk-17', name: 'BGP (eBGP & iBGP)', category: 'Routing Protocols', level: 'Expert', experienceYears: 5, highlight: 'Multi-homed border routing, AS-Path prepending, Local Preference, MED, route filtering with prefix-lists', sampleCommand: 'router# show ip bgp summary\nrouter# show ip bgp neighbors 198.51.100.2 advertised-routes' },

  // Security
  { id: 'sk-18', name: 'Palo Alto Firewall', category: 'Security', level: 'Expert', experienceYears: 5, highlight: 'PAN-OS 10.x/11.x, PA-400 / PA-3200 series, Panorama management, HA active/passive clusters', sampleCommand: 'admin@PA-440> show session all filter source 192.168.10.50\nadmin@PA-440> show running security-policy' },
  { id: 'sk-19', name: 'Firewall Policies & App-ID', category: 'Security', level: 'Expert', experienceYears: 5, highlight: 'Zone-based architecture (Trust, Untrust, DMZ), Application identification, Content-ID, URL filtering', sampleCommand: 'admin@PA-440> show rule-hit-count vsys vsys1 rule-base security rules ALL' },
  { id: 'sk-20', name: 'NAT Policies (PAN-OS)', category: 'Security', level: 'Expert', experienceYears: 5, highlight: 'Source Dynamic IP & Port (DIPP), Bi-directional Static 1:1 NAT, Destination Port Forwarding', sampleCommand: 'admin@PA-440> test nat-policy-match source 192.168.1.100 destination 8.8.8.8 protocol 6' },
  { id: 'sk-21', name: 'Security Rules & Profiles', category: 'Security', level: 'Expert', experienceYears: 5, highlight: 'Antivirus, Anti-Spyware, Vulnerability Protection profiles, WildFire sandbox cloud integration', sampleCommand: 'admin@PA-440> show system state filter-pretty sys.threat.*' },
  { id: 'sk-22', name: 'Network Monitoring & Syslog', category: 'Security', level: 'Expert', experienceYears: 6, highlight: 'PRTG, Zabbix, SNMPv3 polling, NetFlow / sFlow analysis, Centralized Graylog & Splunk forwarders', sampleCommand: '$ snmpwalk -v3 -l authPriv -u secadmin 10.0.0.1 1.3.6.1.2.1.1' },

  // Operating Systems
  { id: 'sk-23', name: 'Linux Administration', category: 'Operating Systems', level: 'Expert', experienceYears: 6, highlight: 'Debian/Ubuntu, RHEL, systemd, iptables/nftables, UFW, network bonding, chrony NTP, SSH hardening', sampleCommand: '$ sudo ip route show\n$ sudo ss -tulpn\n$ sudo journalctl -u systemd-networkd -e' },
  { id: 'sk-24', name: 'Ubuntu Server', category: 'Operating Systems', level: 'Expert', experienceYears: 6, highlight: 'Netplan YAML configuration, LVM partition management, automated security updates, unattended-upgrades', sampleCommand: '$ sudo netplan apply\n$ ip addr show' },
  { id: 'sk-25', name: 'Red Hat Enterprise Linux', category: 'Operating Systems', level: 'Advanced', experienceYears: 4, highlight: 'nmcli, nmtui, firewalld, SELinux enforcing mode, subscription-manager, RPM/dnf packaging', sampleCommand: '$ nmcli connection show\n$ sudo firewall-cmd --permanent --add-service=https' },
  { id: 'sk-26', name: 'Windows Server', category: 'Operating Systems', level: 'Advanced', experienceYears: 5, highlight: 'Active Directory Domain Services (AD DS), Group Policy Objects (GPO), NPS (RADIUS), DHCP/DNS scopes', sampleCommand: 'PS C:\\> Get-NetIPAddress -InterfaceAlias "Production-NIC"\nPS C:\\> Test-NetConnection -ComputerName 10.0.0.1 -Port 445' },

  // Cloud
  { id: 'sk-27', name: 'AWS Cloud Networking', category: 'Cloud', level: 'Advanced', experienceYears: 4, highlight: 'Virtual Private Cloud (VPC), Public/Private subnets, CIDR planning, Transit Gateway peering', sampleCommand: '$ aws ec2 describe-vpcs\n$ aws ec2 describe-route-tables --filters "Name=vpc-id,Values=vpc-0abc123"' },
  { id: 'sk-28', name: 'AWS EC2 Infrastructure', category: 'Cloud', level: 'Advanced', experienceYears: 4, highlight: 'AMI deployment, Elastic Network Interfaces (ENI), Elastic IPs, instance sizing, EBS volume management', sampleCommand: '$ aws ec2 describe-instances --query "Reservations[*].Instances[*].[InstanceId,State.Name,PrivateIpAddress]"' },
  { id: 'sk-29', name: 'Security Groups & NACLs', category: 'Cloud', level: 'Expert', experienceYears: 4, highlight: 'Stateful Security Groups, Stateless Network ACLs evaluation order, rule prioritization', sampleCommand: '$ aws ec2 authorize-security-group-ingress --group-id sg-12345 --protocol tcp --port 22 --cidr 10.0.0.0/16' },
  { id: 'sk-30', name: 'AWS VPC Gateways', category: 'Cloud', level: 'Advanced', experienceYears: 4, highlight: 'Internet Gateways (IGW), NAT Gateways, VPC Endpoints (PrivateLink), Site-to-Site VPN connections', sampleCommand: '$ aws ec2 create-nat-gateway --subnet-id subnet-123 --allocation-id eipalloc-123' },

  // Other Technologies
  { id: 'sk-31', name: 'Docker & Docker Compose', category: 'Other Technologies', level: 'Advanced', experienceYears: 4, highlight: 'Container networking (bridge, host, macvlan, overlay), volume mapping, Dockerfile optimization', sampleCommand: '$ docker network create --driver bridge --subnet 172.28.0.0/16 app_net\n$ docker compose up -d' },
  { id: 'sk-32', name: 'Python for Automation', category: 'Other Technologies', level: 'Proficient', experienceYears: 3, highlight: 'Netmiko, Paramiko, Scapy, automated switch configuration backups, subnet calculators', sampleCommand: 'from netmiko import ConnectHandler\nnet_connect = ConnectHandler(**cisco_device)\noutput = net_connect.send_command("show ip int brief")' },
  { id: 'sk-33', name: 'Git & Version Control', category: 'Other Technologies', level: 'Advanced', experienceYears: 5, highlight: 'Network configuration versioning, Infrastructure-as-Code tracking, GitHub workflows', sampleCommand: '$ git commit -m "feat(network): update core-switch OSPF cost matrix"' },
  { id: 'sk-34', name: 'SQL & Database Mgmt', category: 'Other Technologies', level: 'Proficient', experienceYears: 4, highlight: 'PostgreSQL, MySQL, query execution, indexing, database connectivity troubleshooting', sampleCommand: 'SELECT client_addr, state, query FROM pg_stat_activity WHERE state != \'idle\';' },
  { id: 'sk-35', name: 'SAP BASIS Administration', category: 'Other Technologies', level: 'Advanced', experienceYears: 3, highlight: 'SAP ERP system monitoring, RFC connections, client administration, TMS transport management', sampleCommand: 'Transaction SM50 (Process Overview) / SM21 (System Log) / ST03N' },
  { id: 'sk-36', name: 'SAP Business One', category: 'Other Technologies', level: 'Advanced', experienceYears: 3, highlight: 'SQL Server integration, license manager, client installations, network port mapping (30000-30010)', sampleCommand: 'Verify SLD (System Landscape Directory) service status & MSSQL TCP port 1433' },
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Enterprise Campus Network Architecture',
    category: 'Enterprise Routing',
    duration: '3 Months',
    summary: 'Architected and provisioned an end-to-end multi-tier corporate campus network serving 800+ end-users, separating corporate traffic, guest access, VoIP, and management via 802.1Q VLAN trunking and Inter-VLAN routing with redundant HSRP gateways.',
    technologies: ['Cisco Catalyst 9300', 'Cisco ISR 4331', 'VLANs', '802.1Q Trunking', 'Inter-VLAN Routing', 'HSRP', 'DHCP Snooping', 'Extended ACLs'],
    architectureDiagram: {
      description: 'Dual-core distribution layer connecting access switches with HSRP default gateway redundancy and dedicated VLAN trunks.',
      nodes: [
        { id: 'gw-core1', label: 'Core Switch 01 (Catalyst 9300)', role: 'HSRP Active Core / L3 Gateway', ip: '10.10.1.1' },
        { id: 'gw-core2', label: 'Core Switch 02 (Catalyst 9300)', role: 'HSRP Standby Core / L3 Gateway', ip: '10.10.1.2' },
        { id: 'sw-acc1', label: 'Access Switch Floor 1', role: 'L2 Access Switch (PoE VoIP)', ip: '10.10.99.11' },
        { id: 'sw-acc2', label: 'Access Switch Floor 2', role: 'L2 Access Switch (Workstations)', ip: '10.10.99.12' },
        { id: 'srv-farm', label: 'DC Server Farm', role: 'AD DS, ERP & File Shares', ip: '10.10.50.10' },
      ],
      connections: [
        { from: 'gw-core1', to: 'gw-core2', type: '10G EtherChannel LACP (Trunk)' },
        { from: 'gw-core1', to: 'sw-acc1', type: '1G Fiber Trunk (802.1Q)' },
        { from: 'gw-core2', to: 'sw-acc1', type: '1G Fiber Trunk (STP Alternate)' },
        { from: 'gw-core1', to: 'sw-acc2', type: '1G Fiber Trunk (802.1Q)' },
        { from: 'gw-core2', to: 'sw-acc2', type: '1G Fiber Trunk (STP Alternate)' },
        { from: 'gw-core1', to: 'srv-farm', type: '4x1G Bonded EtherChannel' },
      ],
    },
    configurationSnippets: [
      {
        title: 'Core Switch Inter-VLAN SVI & HSRP Setup',
        device: 'Core-SW-01 (Cisco IOS-XE)',
        language: 'cisco',
        code: `! Configure VLAN SVIs with HSRP Virtual IP
interface Vlan10
 description CORPORATE_DATA
 ip address 10.10.10.2 255.255.255.0
 standby 10 ip 10.10.10.1
 standby 10 priority 110
 standby 10 preempt
!
interface Vlan20
 description VOIP_TELEPHONY
 ip address 10.10.20.2 255.255.255.0
 standby 20 ip 10.10.20.1
 standby 20 priority 110
 standby 20 preempt
!
interface Vlan50
 description SERVER_FARM
 ip address 10.10.50.2 255.255.255.0
 standby 50 ip 10.10.50.1
 standby 50 priority 110
 standby 50 preempt
!
! Port Security and DHCP Snooping Hardening
ip dhcp snooping
ip dhcp snooping vlan 10,20
interface GigabitEthernet1/0/48
 description UPLINK_TO_ROUTER
 ip dhcp snooping trust`,
      },
      {
        title: 'Access Switch Trunk & Access Ports',
        device: 'Access-SW-01 (Cisco Catalyst)',
        language: 'cisco',
        code: `! 802.1Q Uplink Trunk Configuration
interface TenGigabitEthernet0/1
 description UPLINK_TO_CORE_01
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 10,20,50,99
 spanning-tree guard root
!
! Access Port with Data & Voice VLAN Separation
interface GigabitEthernet1/0/1
 description DESKTOP_AND_CISCO_IP_PHONE
 switchport mode access
 switchport access vlan 10
 switchport voice vlan 20
 spanning-tree portfast
 spanning-tree bpduguard enable`,
      },
    ],
    verificationSteps: [
      {
        command: 'show standby brief',
        output: `                     P indicates configured to preempt.
                     |
Interface   Grp  Pri P State   Active          Standby         Virtual IP
Vl10        10   110 P Active  local           10.10.10.3      10.10.10.1
Vl20        20   110 P Active  local           10.10.20.3      10.10.20.1
Vl50        50   110 P Active  local           10.10.50.3      10.10.50.1`,
        explanation: 'Confirms Core-SW-01 is actively serving the VIP for all production VLANs with preemption enabled.',
      },
      {
        command: 'show ip dhcp snooping binding',
        output: `MacAddress          IpAddress        Lease(sec)  Type           VLAN  Interface
------------------  ---------------  ----------  -------------  ----  --------------------
00:1A:2B:3C:4D:5E   10.10.10.45      86400       dhcp-snooping  10    GigabitEthernet1/0/1
00:22:33:44:55:66   10.10.20.102     86400       dhcp-snooping  20    GigabitEthernet1/0/1`,
        explanation: 'Verifies dynamic IP lease binding on access ports, blocking unauthorized rogue DHCP offers.',
      },
    ],
    keyResults: [
      'Eliminated single point of failure with sub-second HSRP failover',
      'Isolated guest & voice traffic, achieving PCI-DSS compliance separation',
      'Mitigated rogue DHCP attacks via hardware-enforced DHCP Snooping',
      'Supported zero-downtime rolling maintenance across campus floors',
    ],
  },
  {
    id: 'proj-2',
    title: 'OSPF Multi-Router Enterprise Backbone',
    category: 'Enterprise Routing',
    duration: '2 Months',
    summary: 'Engineered a resilient multi-area OSPF routing architecture interconnecting headquarters, distribution hubs, and branch data centers with link-cost metric tuning, route summarization at ABRs, and passive interface hardening.',
    technologies: ['Cisco IOS-XE', 'OSPFv2 Multi-Area', 'Area 0 Backbone', 'Area 1 Branch', 'ABR Summarization', 'BFD Convergence', 'Route Cost Tuning'],
    architectureDiagram: {
      description: 'Backbone Area 0 linking HQ Core Routers to Area 1 Distribution Hubs with BFD for sub-50ms fault detection.',
      nodes: [
        { id: 'r-hq-01', label: 'HQ Border Router 01', role: 'Area 0 Backbone ABR', ip: '10.254.0.1' },
        { id: 'r-hq-02', label: 'HQ Border Router 02', role: 'Area 0 Backbone ABR', ip: '10.254.0.2' },
        { id: 'r-dist-01', label: 'Distribution Router 01', role: 'Area 1 Distribution Hub', ip: '10.254.1.1' },
        { id: 'r-branch-01', label: 'Remote Branch 01', role: 'Area 1 Internal Router', ip: '10.254.1.10' },
      ],
      connections: [
        { from: 'r-hq-01', to: 'r-hq-02', type: 'OSPF Area 0 Link (Cost 10)' },
        { from: 'r-hq-01', to: 'r-dist-01', type: 'Point-to-Point WAN (Cost 100)' },
        { from: 'r-hq-02', to: 'r-dist-01', type: 'Point-to-Point WAN (Backup Cost 500)' },
        { from: 'r-dist-01', to: 'r-branch-01', type: 'OSPF Area 1 Link (Cost 100)' },
      ],
    },
    configurationSnippets: [
      {
        title: 'HQ ABR OSPF Multi-Area & Summarization',
        device: 'R-HQ-01 (Cisco ISR 4331)',
        language: 'cisco',
        code: `router ospf 100
 router-id 10.254.0.1
 auto-cost reference-bandwidth 10000
 ! Summarize Area 1 subnets into Area 0 backbone
 area 1 range 10.20.0.0 255.255.0.0
 ! Security: Silence passive interfaces
 passive-interface default
 no passive-interface GigabitEthernet0/0/0
 no passive-interface GigabitEthernet0/0/1
 ! Enable Bidirectional Forwarding Detection
 bfd all-interfaces
!
interface GigabitEthernet0/0/0
 description LINK_TO_AREA_0_BACKBONE
 ip address 10.254.0.1 255.255.255.252
 ip ospf 100 area 0
 ip ospf network point-to-point
 ip ospf hello-interval 1
 ip ospf dead-interval 4`,
      },
      {
        title: 'Branch Router OSPF Area 1 Client',
        device: 'R-Branch-01 (Cisco ISR)',
        language: 'cisco',
        code: `router ospf 100
 router-id 10.254.1.10
 auto-cost reference-bandwidth 10000
 passive-interface default
 no passive-interface GigabitEthernet0/0/0
!
interface GigabitEthernet0/0/0
 description UPLINK_TO_DIST_HUB
 ip address 10.254.1.10 255.255.255.252
 ip ospf 100 area 1
 ip ospf cost 100
 ip ospf network point-to-point`,
      },
    ],
    verificationSteps: [
      {
        command: 'show ip ospf neighbor',
        output: `Neighbor ID     Pri   State           Dead Time   Address         Interface
10.254.0.2        0   FULL/  -        00:00:03    10.254.0.2      Gi0/0/0
10.254.1.1        0   FULL/  -        00:00:03    10.254.1.1      Gi0/0/1`,
        explanation: 'FULL adjacency confirmed on point-to-point links with fast hello timers.',
      },
      {
        command: 'show ip route ospf',
        output: `      10.0.0.0/8 is variably subnetted, 14 subnets, 3 masks
O IA  10.20.0.0/16 [110/101] via 10.254.1.1, 04:22:15, GigabitEthernet0/0/1
O     10.254.0.2/32 [110/10] via 10.254.0.2, 06:14:02, GigabitEthernet0/0/0`,
        explanation: 'Inter-Area summary route (O IA) successfully injected into backbone routing table.',
      },
    ],
    keyResults: [
      'Sub-50ms failover detected via BFD integration on fiber WAN uplinks',
      'Reduced routing table memory footprint by 70% with ABR summarization',
      'Prevented route flapping propagation outside of Area 1 boundary',
      'Standardized reference bandwidth for 10Gbps modern link speeds',
    ],
  },
  {
    id: 'proj-3',
    title: 'BGP Multi-Homed Edge Lab & Peering',
    category: 'Enterprise Routing',
    duration: '2 Months',
    summary: 'Configured a multi-homed BGP border routing environment with redundant Tier-1 ISP connections (eBGP) under AS 65001, utilizing AS-Path prepending for backup path steering, Local Preference for outbound traffic shaping, and robust route filtering via prefix-lists.',
    technologies: ['Cisco IOS-XE', 'eBGP Peering', 'Autonomous System 65001', 'AS-Path Prepending', 'Local Preference', 'Prefix Lists', 'Route Maps'],
    architectureDiagram: {
      description: 'Border Gateway Router with active eBGP sessions to Primary ISP (AS 65100) and Secondary ISP (AS 65200).',
      nodes: [
        { id: 'bgp-edge', label: 'Enterprise Edge Router (AS 65001)', role: 'eBGP Border Gateway', ip: '198.51.100.1' },
        { id: 'isp-primary', label: 'Primary ISP Telco (AS 65100)', role: 'Tier-1 Internet Provider', ip: '198.51.100.2' },
        { id: 'isp-secondary', label: 'Secondary ISP Cable (AS 65200)', role: 'Backup Internet Provider', ip: '203.0.113.2' },
        { id: 'internal-core', label: 'Internal Core Router (AS 65001)', role: 'iBGP Neighbor / Default Route Receiver', ip: '10.0.0.1' },
      ],
      connections: [
        { from: 'bgp-edge', to: 'isp-primary', type: 'eBGP Session (Primary Uplink)' },
        { from: 'bgp-edge', to: 'isp-secondary', type: 'eBGP Session (AS-Path Prepend x3)' },
        { from: 'bgp-edge', to: 'internal-core', type: 'iBGP Session (Local Pref 200)' },
      ],
    },
    configurationSnippets: [
      {
        title: 'BGP Border Router Configuration with Route-Maps',
        device: 'Border-R1 (Cisco IOS-XE)',
        language: 'cisco',
        code: `router bgp 65001
 bgp router-id 198.51.100.1
 bgp log-neighbor-changes
 neighbor 198.51.100.2 remote-as 65100
 neighbor 198.51.100.2 description PRIMARY_ISP_A
 neighbor 198.51.100.2 route-map INBOUND_PRIMARY in
 neighbor 198.51.100.2 route-map OUTBOUND_ADVERTISE out
 !
 neighbor 203.0.113.2 remote-as 65200
 neighbor 203.0.113.2 description SECONDARY_ISP_B
 neighbor 203.0.113.2 route-map INBOUND_SECONDARY in
 neighbor 203.0.113.2 route-map OUTBOUND_PREPEND out
!
! Prefix List to only advertise owned Public IP block
ip prefix-list OUR_PREFIX seq 5 permit 198.51.100.0/24
!
! Traffic Engineering: Prepend AS path on secondary to make it less preferred
route-map OUTBOUND_PREPEND permit 10
 match ip address prefix-list OUR_PREFIX
 set as-path prepend 65001 65001 65001
!
route-map INBOUND_PRIMARY permit 10
 set local-preference 200
!
route-map INBOUND_SECONDARY permit 10
 set local-preference 100`,
      },
    ],
    verificationSteps: [
      {
        command: 'show ip bgp summary',
        output: `Neighbor        V           AS MsgRcvd MsgSent   TblVer  InQ OutQ Up/Down  State/PfxRcd
198.51.100.2    4        65100   14251   14249       42    0    0 05:12:33            1
203.0.113.2     4        65200   14250   14248       42    0    0 05:10:19            1`,
        explanation: 'Both eBGP neighbor relationships are established in Up state receiving default routes.',
      },
      {
        command: 'show ip bgp 0.0.0.0',
        output: `BGP routing table entry for 0.0.0.0/0, version 12
Paths: (2 available, best #1, table default)
  Advertised to update-groups: 1
  65100
    198.51.100.2 from 198.51.100.2 (198.51.100.2)
      Origin IGP, metric 0, localpref 200, valid, external, best
  65200
    203.0.113.2 from 203.0.113.2 (203.0.113.2)
      Origin IGP, metric 0, localpref 100, valid, external`,
        explanation: 'Path #1 via Primary ISP selected as best due to higher Local Preference (200 vs 100).',
      },
    ],
    keyResults: [
      'Automated seamless ISP failover with zero manual intervention needed',
      'Prevented accidental AS transit leak via strict prefix-list outbound filtering',
      'Optimized egress bandwidth costs by directing traffic to unmetered primary link',
      'Successfully verified outbound AS-path prepend with external Looking Glasses',
    ],
  },
  {
    id: 'proj-4',
    title: 'Palo Alto Next-Gen Firewall Perimeter Security',
    category: 'Security & Firewalls',
    duration: '3 Months',
    summary: 'Deployed and hardened a Palo Alto PA-440 Next-Generation Firewall cluster replacing legacy edge firewalls. Established granular zone-based security policies (Trust, Untrust, DMZ, VPN), App-ID traffic classification, bidirectional NAT, SSL Decryption, and GlobalProtect VPN for remote workers.',
    technologies: ['Palo Alto PA-440', 'PAN-OS 11', 'Zone Architecture', 'App-ID', 'GlobalProtect VPN', 'DIPP NAT', 'WildFire Threat Prevention', 'Security Profiles'],
    architectureDiagram: {
      description: 'Zero-trust perimeter architecture dividing internal LAN, DMZ public services, and external Internet with deep packet inspection.',
      nodes: [
        { id: 'fw-pa', label: 'Palo Alto PA-440 (PAN-OS 11)', role: 'Next-Gen Firewall / VPN Concentrator', ip: '203.0.113.5 (Untrust)' },
        { id: 'zone-untrust', label: 'Untrust Zone (Internet)', role: 'Public Ingress / Egress', ip: '0.0.0.0/0' },
        { id: 'zone-trust', label: 'Trust Zone (Internal LAN)', role: 'Workstations & Private Servers', ip: '10.0.0.0/16' },
        { id: 'zone-dmz', label: 'DMZ Zone (Web / Mail)', role: 'Public-facing Isolated Servers', ip: '172.16.1.0/24' },
      ],
      connections: [
        { from: 'zone-untrust', to: 'fw-pa', type: 'Untrust Interface (eth1/1)' },
        { from: 'fw-pa', to: 'zone-trust', type: 'Trust Interface (eth1/2)' },
        { from: 'fw-pa', to: 'zone-dmz', type: 'DMZ Interface (eth1/3)' },
      ],
    },
    configurationSnippets: [
      {
        title: 'PAN-OS Security Rulebase & App-ID Definition',
        device: 'PA-440 (PAN-OS CLI)',
        language: 'text',
        code: `set security-rules "Allow-Trust-to-Internet" \\
 from Trust to Untrust \\
 source any destination any \\
 application [ web-browsing ssl dns ping ms-teams-audio ] \\
 service application-default \\
 action allow \\
 log-start no log-end yes \\
 profile-setting group "Standard-Security-Profile"

set security-rules "DMZ-Inbound-HTTPS" \\
 from Untrust to DMZ \\
 source any destination 172.16.1.50 \\
 application [ ssl web-browsing ] \\
 service application-default \\
 action allow \\
 profile-setting group "Vulnerability-Strict"

set security-rules "Block-All-Inter-Zone-Default" \\
 from any to any source any destination any action deny log-end yes`,
      },
      {
        title: 'Source Dynamic IP/Port (DIPP) NAT Rule',
        device: 'PA-440 (PAN-OS CLI)',
        language: 'text',
        code: `set nat-rules "Outbound-Hide-NAT" \\
 from Trust to Untrust \\
 source 10.0.0.0/16 destination any \\
 service any \\
 source-translation dynamic-ip-and-port interface-address \\
 interface ethernet1/1 ip 203.0.113.5`,
      },
    ],
    verificationSteps: [
      {
        command: 'show session all filter source 10.0.10.45',
        output: `ID      Application   State  Type Flag Src[Sport]/Zone/Proto (translated IP[Port])
--------------------------------------------------------------------------------
18421   ssl           ACTIVE FLOW      10.0.10.45[52312]/Trust/6 (203.0.113.5[41022])
        -> 142.250.190.46[443]/Untrust`,
        explanation: 'Verifies App-ID recognized traffic as SSL and PAT translated source IP to public interface.',
      },
      {
        command: 'show system info',
        output: `hostname: PA-440-PERIMETER
app-version: 8820-8512
threat-version: 8820-8512
wildfire-version: 721094-724391
global-protect-client-package-version: 6.1.2`,
        explanation: 'Confirms PAN-OS threat and antivirus signature feeds are actively synchronized and up-to-date.',
      },
    ],
    keyResults: [
      'Blocked over 15,000 monthly malicious connection attempts via Threat Prevention',
      'Migrated 150+ telecommuters to encrypted GlobalProtect MFA SSL-VPN',
      'Replaced port-based filtering with Layer 7 App-ID, preventing evasion over port 443',
      'Configured high-availability heartbeat for active/passive seamless failover',
    ],
  },
  {
    id: 'proj-5',
    title: 'AWS Enterprise Multi-Tier VPC Infrastructure',
    category: 'Cloud & Hybrid',
    duration: '2 Months',
    summary: 'Designed and deployed a highly available, dual-AZ Amazon Web Services (AWS) Virtual Private Cloud (VPC) featuring public and private subnets, redundant NAT Gateways, Internet Gateway, custom route tables, and strictly governed Security Groups and Network ACLs.',
    technologies: ['AWS VPC', 'Amazon EC2', 'NAT Gateways', 'Internet Gateway', 'Route Tables', 'Security Groups', 'NACLs', 'AWS CLI'],
    architectureDiagram: {
      description: 'Multi-AZ architecture spanning us-east-1a and us-east-1b with public bastions and private application tiers.',
      nodes: [
        { id: 'aws-igw', label: 'Internet Gateway (IGW)', role: 'VPC Public Edge', ip: '54.210.0.1' },
        { id: 'pub-sub-a', label: 'Public Subnet A (us-east-1a)', role: 'NAT GW & Bastion Host', ip: '10.100.1.0/24' },
        { id: 'priv-sub-a', label: 'Private App Subnet A', role: 'Internal EC2 Cluster', ip: '10.100.10.0/24' },
        { id: 'priv-db-a', label: 'Private DB Subnet A', role: 'RDS PostgreSQL Database', ip: '10.100.20.0/24' },
      ],
      connections: [
        { from: 'aws-igw', to: 'pub-sub-a', type: 'Direct Public Ingress/Egress' },
        { from: 'pub-sub-a', to: 'priv-sub-a', type: 'Managed NAT Gateway Egress' },
        { from: 'priv-sub-a', to: 'priv-db-a', type: 'Internal VPC Peering / Route' },
      ],
    },
    configurationSnippets: [
      {
        title: 'AWS Route Table & Security Group Associations',
        device: 'AWS CLI / CloudFormation Script',
        language: 'bash',
        code: `# Create Route Table for Private Subnet routing out via NAT Gateway
aws ec2 create-route \\
  --route-table-id rtb-0987654321fedcba0 \\
  --destination-cidr-block 0.0.0.0/0 \\
  --nat-gateway-id nat-0123456789abcdef0

# Ingress Rule: Allow HTTPS only from Application Load Balancer
aws ec2 authorize-security-group-ingress \\
  --group-id sg-01a2b3c4d5e6f7g8h \\
  --protocol tcp \\
  --port 443 \\
  --source-group sg-alb-public-edge`,
      },
    ],
    verificationSteps: [
      {
        command: 'aws ec2 describe-route-tables --route-table-ids rtb-0987654321fedcba0',
        output: `{
  "RouteTables": [{
    "Routes": [
      { "DestinationCidrBlock": "10.100.0.0/16", "GatewayId": "local", "State": "active" },
      { "DestinationCidrBlock": "0.0.0.0/0", "NatGatewayId": "nat-0123456789abcdef0", "State": "active" }
    ]
  }]
}`,
        explanation: 'Validates that private instance outbound internet traffic is correctly steered through the NAT Gateway.',
      },
    ],
    keyResults: [
      'Achieved 100% network isolation for production database instances',
      'Configured automated multi-AZ failover for critical cloud compute workloads',
      'Enforced least-privilege security group rules for zero public SSH exposure',
      'Provisioned AWS Site-to-Site VPN connecting on-premise Cisco ISR router to AWS VPC',
    ],
  },
  {
    id: 'proj-6',
    title: 'Docker Container Infrastructure & Nginx Proxy',
    category: 'Infrastructure & DevOps',
    duration: '1 Month',
    summary: 'Engineered a containerized microservice infrastructure utilizing custom Docker bridge networks, container IPAM, Nginx reverse proxy with TLS termination, and localized DNS/DHCP mock services for enterprise lab simulations and application deployments.',
    technologies: ['Docker', 'Docker Compose', 'Nginx', 'Linux Networking', 'Custom Bridge', 'iptables', 'TLS / SSL', 'Git'],
    architectureDiagram: {
      description: 'Host Docker daemon managing isolated bridge network with Nginx reverse proxy routing requests to container services.',
      nodes: [
        { id: 'host-nic', label: 'Physical Host eth0', role: 'Linux Host Network', ip: '192.168.1.100' },
        { id: 'nginx-proxy', label: 'Nginx Container Proxy', role: 'Reverse Proxy & SSL Offload', ip: '172.20.0.2' },
        { id: 'app-srv1', label: 'App Container Instance 01', role: 'Internal API Service', ip: '172.20.0.10' },
        { id: 'db-srv1', label: 'PostgreSQL Container', role: 'Backend Data Store', ip: '172.20.0.20' },
      ],
      connections: [
        { from: 'host-nic', to: 'nginx-proxy', type: 'Port Forward (Host 80/443 -> 80/443)' },
        { from: 'nginx-proxy', to: 'app-srv1', type: 'Custom Bridge Network (app-net)' },
        { from: 'app-srv1', to: 'db-srv1', type: 'Isolated Backend Link (Port 5432)' },
      ],
    },
    configurationSnippets: [
      {
        title: 'Docker Compose Network Segmentation',
        device: 'docker-compose.yml',
        language: 'yaml',
        code: `version: '3.8'

services:
  reverse-proxy:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    networks:
      - frontend-net

  backend-app:
    build: ./app
    expose:
      - "3000"
    networks:
      - frontend-net
      - backend-net

  database:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: enterprise_db
      POSTGRES_PASSWORD_FILE: /run/secrets/db_password
    networks:
      - backend-net

networks:
  frontend-net:
    driver: bridge
    ipam:
      config:
        - subnet: 172.20.0.0/24
  backend-net:
    driver: bridge
    internal: true`,
      },
    ],
    verificationSteps: [
      {
        command: 'docker network inspect frontend-net',
        output: `[
  {
    "Name": "frontend-net",
    "Driver": "bridge",
    "IPAM": { "Config": [{ "Subnet": "172.20.0.0/24", "Gateway": "172.20.0.1" }] },
    "Containers": {
      "3a4b5c...": { "Name": "reverse-proxy", "IPv4Address": "172.20.0.2/24" },
      "7d8e9f...": { "Name": "backend-app", "IPv4Address": "172.20.0.3/24" }
    }
  }
]`,
        explanation: 'Verifies container network isolation and IP address allocation on custom bridge.',
      },
    ],
    keyResults: [
      'Prevented direct external exposure of backend databases with internal Docker networks',
      'Automated zero-downtime rolling container redeployment via Docker Compose',
      'Configured rate limiting and security headers in Nginx reverse proxy layer',
    ],
  },
];

export const INITIAL_CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    title: 'Cisco Certified Network Associate (CCNA 200-301)',
    issuer: 'Cisco Systems',
    credentialId: 'CSCO13948210',
    issuedDate: 'Certified',
    skillsValidated: ['Network Fundamentals', 'Network Access (VLANs, Trunking, EtherChannel)', 'IP Connectivity (OSPF, Routing)', 'IP Services (DHCP, DNS, NAT, SNMP)', 'Security Fundamentals', 'Automation & Programmability'],
    description: 'Validates foundational knowledge and practical competence in enterprise network implementation, IP connectivity, Cisco IOS administration, and network security policies.',
    verificationUrl: 'https://www.credly.com',
  },
  {
    id: 'cert-2',
    title: 'CompTIA Network+ (N10-008)',
    issuer: 'CompTIA',
    credentialId: 'COMP001029348',
    issuedDate: 'Certified',
    skillsValidated: ['Network Architecture', 'Network Operations', 'Network Security', 'Troubleshooting & Tools', 'Industry Standard Protocols'],
    description: 'Demonstrates deep multi-vendor understanding of the OSI model, cabling standards, network security concepts, subnetting, and structured troubleshooting methodology.',
  },
  {
    id: 'cert-3',
    title: 'Linux Professional Institute Certification (LPIC-1)',
    issuer: 'Linux Professional Institute',
    credentialId: 'LPI-000492817',
    issuedDate: 'Certified',
    skillsValidated: ['Linux System Architecture', 'Installation & Package Management', 'GNU & Unix Commands', 'Devices & Linux Filesystems', 'Shells & Shell Scripting', 'Networking Fundamentals'],
    description: 'Certifies ability to install, configure, manage, and network Linux server workstations, manage user permissions, and perform system maintenance via bash CLI.',
  },
  {
    id: 'cert-4',
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    credentialId: 'AWS-PSA-920194',
    issuedDate: 'Certified',
    skillsValidated: ['Design Resilient Architectures', 'Design High-Performing Architectures', 'Design Secure VPC Networks', 'Cost-Optimized Cloud Infrastructure'],
    description: 'Demonstrates expertise in architecting secure, robust, and scalable distributed applications on AWS using VPCs, EC2, Transit Gateway, and IAM.',
  },
  {
    id: 'cert-5',
    title: 'Palo Alto Networks Certified Network Security (PCNSE)',
    issuer: 'Palo Alto Networks',
    credentialId: 'PAN-PCNSE-83921',
    issuedDate: 'Certified',
    skillsValidated: ['PAN-OS Configuration', 'Zone-based Security Policies', 'App-ID & Content-ID', 'GlobalProtect Remote VPN', 'High Availability Clusters', 'Threat Prevention'],
    description: 'Certifies professional expertise in deploying, configuring, maintaining, and troubleshooting Palo Alto Networks Next-Generation Firewalls in enterprise environments.',
  },
  {
    id: 'cert-6',
    title: 'Docker Certified Associate (DCA)',
    issuer: 'Mirantis / Docker',
    credentialId: 'DCA-2023-7419',
    issuedDate: 'Certified',
    skillsValidated: ['Orchestration', 'Image Creation & Management', 'Installation & Configuration', 'Networking & Security', 'Storage & Volumes'],
    description: 'Validates skills in container runtime lifecycle, multi-container deployments using Docker Compose, container bridge networks, and security best practices.',
  },
  {
    id: 'cert-7',
    title: 'SAP BASIS System Administration',
    issuer: 'SAP SE / Enterprise Ecosystem',
    credentialId: 'SAP-BASIS-552109',
    issuedDate: 'Certified',
    skillsValidated: ['SAP System Architecture', 'User & Authorization Management', 'Database Administration', 'TMS Transport Management', 'Network Port Routing & RFCs'],
    description: 'Validates competency in managing the underlying technical foundation of SAP ERP solutions, ensuring continuous database connectivity, client copies, and system monitoring.',
  },
];

export const INITIAL_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Senior Network Engineer & Infrastructure Administrator',
    organization: 'Enterprise Infrastructure Solutions Ltd.',
    location: 'India',
    period: '2021 – Present (3+ Years)',
    summary: 'Lead engineer overseeing 24/7 network operations, perimeter security, WAN connectivity, and multi-tier data center infrastructure for corporate and client sites.',
    responsibilities: [
      'Proactively monitor network health and latency across 500+ switches, routers, and firewalls using PRTG, SNMPv3, and Zabbix.',
      'Configure and maintain Cisco Catalyst 9300/3850 switches, ISR 4000 routers, and Palo Alto PA-440 firewalls.',
      'Architect and manage 25+ corporate VLANs, Inter-VLAN routing, 802.1Q trunks, and Spanning Tree (Rapid PVST+) across all campus floors.',
      'Administer dynamic routing protocols (OSPF Multi-Area and BGP) ensuring low-latency packet routing and redundant ISP failover.',
      'Manage Palo Alto firewall policies, NAT rules, App-ID, Threat Prevention, and GlobalProtect VPN for 200+ remote employees.',
      'Rapidly troubleshoot complex network outages across OSI layers 1 through 7, maintaining an average MTTR under 15 minutes for critical incidents.',
      'Maintain comprehensive network topology diagrams (Visio/Lucidchart), IPAM allocations, change management tickets, and standard operating procedures (SOPs).',
    ],
    technologies: ['Cisco IOS-XE', 'Palo Alto PAN-OS', 'OSPF', 'BGP', 'VLAN/Trunking', 'IPsec VPN', 'Wireshark', 'Ubuntu Server', 'PRTG'],
    metrics: ['99.99% Uptime Maintained', '<15m Critical Incident MTTR', '50+ Secure VPNs Provisioned', 'Zero Security Breaches'],
  },
  {
    id: 'exp-2',
    role: 'Network Support Engineer & System Administrator',
    organization: 'Global IT Network Services',
    location: 'India',
    period: '2018 – 2021 (3 Years)',
    summary: 'Provided tier-2/3 technical network support, configured routing and switching hardware, managed Linux servers, and resolved network connectivity issues.',
    responsibilities: [
      'Configured and deployed Cisco routers and switches for new branch office rollouts, configuring subnets, DHCP relay, and static routing.',
      'Conducted packet captures with Wireshark to diagnose intermittent TCP packet drops, DNS resolution failures, and asymmetric routing loops.',
      'Administered Linux (Ubuntu/RHEL) and Windows Server environments, managing DNS, DHCP scopes, Active Directory user accounts, and firewall daemons.',
      'Configured and resolved Site-to-Site IPsec VPN tunnels connecting branch offices to central headquarters.',
      'Assisted in cloud migration projects, provisioning AWS VPCs, Subnets, Internet Gateways, and Security Groups for hybrid cloud workloads.',
      'Collaborated closely with SAP BASIS teams to resolve RFC connection drops and optimize network bandwidth for ERP transaction processing.',
    ],
    technologies: ['Cisco Catalyst', 'RIPv2/OSPF', 'Static Routing', 'DHCP/DNS', 'Linux (Ubuntu/RHEL)', 'Windows Server', 'AWS VPC', 'SAP BASIS'],
    metrics: ['Resolved 1,200+ Network Tickets', 'Configured 45+ Branch Switch Stacks', 'Reduced User Support Backlog by 40%'],
  },
];

export const INITIAL_KNOWLEDGE_BASE: KnowledgeArticle[] = [
  {
    id: 'kb-1',
    title: 'How to Configure VLAN & Inter-VLAN Routing (Router-on-a-Stick)',
    category: 'Switching',
    readTime: '6 min read',
    level: 'Intermediate',
    summary: 'Complete step-by-step engineering guide to creating 802.1Q sub-interfaces on a Cisco router and configuring trunk ports on Cisco Catalyst switches for secure inter-VLAN communication.',
    prerequisites: ['Cisco switch and router console access', 'VLAN numbering scheme planned (e.g., VLAN 10 Data, VLAN 20 Voice)'],
    symptoms: ['Hosts on VLAN 10 cannot ping hosts on VLAN 20', 'No default gateway IP accessible from client workstations'],
    steps: [
      {
        stepNumber: 1,
        title: 'Create VLANs on the Switch',
        explanation: 'Define the VLAN databases on the access switch.',
        command: `Switch(config)# vlan 10
Switch(config-vlan)# name CORPORATE_DATA
Switch(config-vlan)# exit
Switch(config)# vlan 20
Switch(config-vlan)# name VOIP_PHONES
Switch(config-vlan)# exit`,
        expectedOutput: `VLAN 10 added: Name: CORPORATE_DATA\nVLAN 20 added: Name: VOIP_PHONES`,
      },
      {
        stepNumber: 2,
        title: 'Configure Switchport Trunk to the Router',
        explanation: 'Set the uplink interface towards the router into 802.1Q trunking mode.',
        command: `Switch(config)# interface GigabitEthernet0/1
Switch(config-if)# description UPLINK_TO_ROUTER_G0/0/0
Switch(config-if)# switchport trunk encapsulation dot1q
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk allowed vlan 10,20
Switch(config-if)# no shutdown`,
      },
      {
        stepNumber: 3,
        title: 'Configure Router Sub-Interfaces (Router-on-a-Stick)',
        explanation: 'Enable the physical router interface without an IP, and create virtual sub-interfaces with dot1q encapsulation.',
        command: `Router(config)# interface GigabitEthernet0/0/0
Router(config-if)# no ip address
Router(config-if)# no shutdown
!
Router(config)# interface GigabitEthernet0/0/0.10
Router(config-subif)# description DEFAULT_GW_VLAN_10
Router(config-subif)# encapsulation dot1Q 10
Router(config-subif)# ip address 192.168.10.1 255.255.255.0
!
Router(config)# interface GigabitEthernet0/0/0.20
Router(config-subif)# description DEFAULT_GW_VLAN_20
Router(config-subif)# encapsulation dot1Q 20
Router(config-subif)# ip address 192.168.20.1 255.255.255.0`,
      },
      {
        stepNumber: 4,
        title: 'Verify Connectivity',
        explanation: 'Ping each sub-interface gateway from connected host machines.',
        command: `Switch# show interfaces trunk
Router# show ip interface brief | include GigabitEthernet0/0/0`,
        expectedOutput: `Gi0/0/0.10   192.168.10.1    YES manual up                    up
Gi0/0/0.20   192.168.20.1    YES manual up                    up`,
      },
    ],
    troubleshootingTips: [
      'Always ensure "encapsulation dot1Q <vlan-id>" is executed BEFORE typing the "ip address" command on sub-interfaces.',
      'Check that the native VLAN matches on both ends of the trunk link to avoid Spanning Tree native VLAN mismatch alerts.',
      'Confirm that the physical router interface is NOT in shutdown state.',
    ],
  },
  {
    id: 'kb-2',
    title: 'How to Configure and Troubleshoot OSPF Multi-Area Adjacency',
    category: 'Routing',
    readTime: '8 min read',
    level: 'Advanced',
    summary: 'Learn how to configure Open Shortest Path First (OSPFv2) single and multi-area routing, tune hello/dead timers, and troubleshoot neighbor states stuck in 2-WAY, EXSTART, or EXCHANGE.',
    prerequisites: ['Direct IP connectivity between router interfaces', 'MTU matched across connecting interfaces'],
    symptoms: ['OSPF neighbor state stuck in EXSTART/EXCHANGE', 'Routes not appearing in "show ip route ospf"'],
    steps: [
      {
        stepNumber: 1,
        title: 'Enable OSPF Process and Router-ID',
        explanation: 'Assign a static router-id (typically a loopback address) to ensure deterministic DR/BDR election.',
        command: `Router(config)# interface Loopback0
Router(config-if)# ip address 10.255.255.1 255.255.255.255
Router(config-if)# exit
Router(config)# router ospf 1
Router(config-router)# router-id 10.255.255.1`,
      },
      {
        stepNumber: 2,
        title: 'Advertise Connected Networks into Area 0 (Backbone)',
        explanation: 'Use wildcards to match the specific interfaces to participate in OSPF.',
        command: `Router(config-router)# network 10.0.1.0 0.0.0.3 area 0
Router(config-router)# network 192.168.10.0 0.0.0.255 area 0
Router(config-router)# passive-interface GigabitEthernet0/2`,
      },
      {
        stepNumber: 3,
        title: 'Verify Neighbor State',
        explanation: 'Ensure the adjacency reaches the FULL state.',
        command: `Router# show ip ospf neighbor`,
        expectedOutput: `Neighbor ID     Pri   State           Dead Time   Address         Interface
10.255.255.2      1   FULL/BDR        00:00:36    10.0.1.2        GigabitEthernet0/0/0`,
      },
    ],
    troubleshootingTips: [
      'If stuck in EXSTART/EXCHANGE: This is almost always an MTU mismatch between connected interfaces. Verify with "show ip interface <int> | include MTU" or apply "ip ospf mtu-ignore".',
      'If stuck in 2-WAY: On multi-access broadcast networks, non-DR routers remain in 2-WAY with each other, which is normal.',
      'Ensure Hello (10s) and Dead (40s) timers match exactly on both neighbors.',
    ],
  },
  {
    id: 'kb-3',
    title: 'How to Configure BGP Peering and Verify Route Advertisements',
    category: 'Cisco',
    readTime: '7 min read',
    level: 'Advanced',
    summary: 'A practitioner guide to bringing up an eBGP session with an ISP, verifying TCP port 179 connectivity, advertising enterprise IP prefixes, and verifying with looking glass tools.',
    prerequisites: ['Assigned Autonomous System Number (ASN)', 'Public or private IP peering subnet from ISP'],
    symptoms: ['BGP state stuck in Active or Idle', 'Neighbor established but 0 prefixes received or accepted'],
    steps: [
      {
        stepNumber: 1,
        title: 'Test Layer 3 & TCP 179 Connectivity',
        explanation: 'Ping the ISP peer IP before attempting BGP configuration.',
        command: `Router# ping 198.51.100.2
Router# telnet 198.51.100.2 179`,
        expectedOutput: `Sending 5, 100-byte ICMP Echos to 198.51.100.2, timeout is 2 seconds:
!!!!!
Success rate is 100 percent (5/5)`,
      },
      {
        stepNumber: 2,
        title: 'Configure BGP Neighbor & Network Statement',
        explanation: 'Declare the local AS and remote ISP peer with an exact subnet mask matching the IP routing table.',
        command: `Router(config)# router bgp 65001
Router(config-router)# neighbor 198.51.100.2 remote-as 65100
Router(config-router)# neighbor 198.51.100.2 update-source GigabitEthernet0/0/1
Router(config-router)# network 198.51.100.0 mask 255.255.255.0`,
      },
      {
        stepNumber: 3,
        title: 'Verify BGP Adjacency and Advertised Routes',
        explanation: 'Check that neighbor state is Established and that our owned public prefix is successfully sent.',
        command: `Router# show ip bgp summary
Router# show ip bgp neighbors 198.51.100.2 advertised-routes`,
        expectedOutput: `BGP table version is 3, local router ID is 198.51.100.1
Status codes: s suppressed, d damped, h history, * valid, > best
   Network          Next Hop            Metric LocPrf Weight Path
*> 198.51.100.0/24  0.0.0.0                  0         32768 i`,
      },
    ],
    troubleshootingTips: [
      'If BGP state is "Active": The router is listening for a TCP 179 connection but is unable to establish the handshake. Check for ACLs blocking TCP 179 or wrong neighbor IP.',
      'If BGP state is "Idle": The route to the neighbor is missing, or administrative shutdown is enabled.',
      'For BGP "network" statements to be advertised, the EXACT prefix with matching subnet mask MUST exist in the local routing table (add a null route if needed: "ip route 198.51.100.0 255.255.255.0 Null0").',
    ],
  },
  {
    id: 'kb-4',
    title: 'How to Configure Static & Floating Default Routing with SLA Tracking',
    category: 'Routing',
    readTime: '5 min read',
    level: 'Fundamental',
    summary: 'Configure primary and backup default routes with Cisco IP SLA ICMP echo probes to automatically switch to a secondary cellular or backup ISP link when packet loss occurs.',
    prerequisites: ['Two separate internet links (Primary and Secondary ISP gateways)'],
    symptoms: ['Network remains down during ISP outage despite secondary backup link plugged in'],
    steps: [
      {
        stepNumber: 1,
        title: 'Configure IP SLA Probe on Primary Link',
        explanation: 'Send ICMP echo requests to a public DNS IP (e.g. 8.8.8.8) out the primary interface every 3 seconds.',
        command: `Router(config)# ip sla 1
Router(config-ip-sla)# icmp-echo 8.8.8.8 source-interface GigabitEthernet0/0/0
Router(config-ip-sla)# threshold 1000
Router(config-ip-sla)# timeout 1000
Router(config-ip-sla)# frequency 3
Router(config)# ip sla schedule 1 life forever start-time now
!
Router(config)# track 1 ip sla 1 reachability`,
      },
      {
        stepNumber: 2,
        title: 'Configure Tracked Default Route & Floating Backup',
        explanation: 'Bind the primary default route to Track 1 (AD 1). Configure secondary route with higher AD 200.',
        command: `Router(config)# ip route 8.8.8.8 255.255.255.255 203.0.113.1
Router(config)# ip route 0.0.0.0 0.0.0.0 203.0.113.1 track 1
Router(config)# ip route 0.0.0.0 0.0.0.0 198.51.100.1 200`,
      },
      {
        stepNumber: 3,
        title: 'Test Failover Status',
        explanation: 'Check the IP SLA track state and ensure the route switches to the floating backup when unreachable.',
        command: `Router# show track 1
Router# show ip route 0.0.0.0`,
        expectedOutput: `Track 1
  IP SLA 1 reachability
  Reachability is Up
  1 change, last change 00:15:20
  Latest operation return code: OK`,
      },
    ],
    troubleshootingTips: [
      'Ensure a host-specific static route to the SLA probe destination (8.8.8.8) exists pointing out the primary ISP only; otherwise, when the primary drops, the probe would succeed via the backup link and cause a flapping loop!',
    ],
  },
  {
    id: 'kb-5',
    title: 'How to Troubleshoot End-to-End Network Connectivity (OSI Layer 1 to 7)',
    category: 'Network Security',
    readTime: '9 min read',
    level: 'Intermediate',
    summary: 'A structured, professional engineering troubleshooting methodology: isolating issues across Physical, Data Link, Network, Transport, and Application layers.',
    prerequisites: ['Access to client terminal and network management consoles'],
    symptoms: ['User reports "Internet is down" or "Application server is unreachable"'],
    steps: [
      {
        stepNumber: 1,
        title: 'Layer 1 & 2: Physical & Data Link Checks',
        explanation: 'Verify cable link LEDs, speed/duplex negotiation, and interface errors.',
        command: `$ ip link show
Switch# show interfaces GigabitEthernet1/0/1`,
        expectedOutput: `GigabitEthernet1/0/1 is up, line protocol is up (connected)
  Full-duplex, 1000Mb/s, media type is 10/100/1000BaseTX
  0 input errors, 0 CRC, 0 frame, 0 overrun`,
      },
      {
        stepNumber: 2,
        title: 'Layer 3: IP Address & Default Gateway Ping',
        explanation: 'Check host IP assignment and test ICMP echo to default gateway first.',
        command: `$ ip addr show
$ ping -c 4 192.168.1.1
$ ip route show default`,
      },
      {
        stepNumber: 3,
        title: 'Layer 4: Transport Layer Port Reachability',
        explanation: 'Verify whether the remote TCP port is accepting connections using nc (netcat) or Test-NetConnection.',
        command: `$ nc -zvw3 10.0.0.50 443
$ traceroute -T -p 443 10.0.0.50`,
        expectedOutput: `Connection to 10.0.0.50 443 port [tcp/https] succeeded!`,
      },
      {
        stepNumber: 4,
        title: 'Layer 7: Application Protocol & SSL Validation',
        explanation: 'Test HTTP status codes and TLS handshake certificate validity.',
        command: `$ curl -Iv https://portal.internal.corp`,
        expectedOutput: `HTTP/2 200 OK\nserver: nginx\ndate: Fri, 25 Sep 2026 00:00:00 GMT`,
      },
    ],
    troubleshootingTips: [
      'Never jump straight to reinstalling software or rebooting routers. Follow the bottom-up approach (L1 -> L2 -> L3 -> L4 -> L7) to quickly isolate the exact domain of failure.',
      'CRC errors on switch interfaces almost always point to bad physical copper patching, EMI interference, or duplex mismatch.',
    ],
  },
  {
    id: 'kb-6',
    title: 'How to Troubleshoot DNS Resolution Issues in Linux & Windows',
    category: 'Linux',
    readTime: '6 min read',
    level: 'Intermediate',
    summary: 'Diagnose domain name resolution failures, resolve stale DNS cache, test split-horizon name servers, and inspect /etc/resolv.conf and systemd-resolved.',
    prerequisites: ['Linux shell or Windows PowerShell access'],
    symptoms: ['Host can ping 8.8.8.8 but cannot browse any domain names (e.g. google.com)'],
    steps: [
      {
        stepNumber: 1,
        title: 'Query Name Server with Dig & Trace',
        explanation: 'Perform explicit DNS lookup querying local vs public DNS servers.',
        command: `$ dig internal.corp +trace
$ dig @192.168.1.1 internal.corp A`,
        expectedOutput: `;; ANSWER SECTION:
internal.corp.      300 IN  A   10.0.0.50`,
      },
      {
        stepNumber: 2,
        title: 'Inspect Linux Resolver Configuration',
        explanation: 'Check active DNS servers configured in systemd-resolved or NetworkManager.',
        command: `$ resolvectl status
$ cat /etc/resolv.conf`,
        expectedOutput: `Link 2 (eth0):
  Current DNS Server: 10.0.0.1
  DNS Servers: 10.0.0.1 1.1.1.1`,
      },
      {
        stepNumber: 3,
        title: 'Flush Local DNS Cache',
        explanation: 'Clear cached negative responses (NXDOMAIN) or outdated records.',
        command: `# On Linux (systemd-resolved):
$ sudo resolvectl flush-caches

# On Windows:
PS> Clear-DnsClientCache
PS> ipconfig /flushdns`,
      },
    ],
    troubleshootingTips: [
      'If "dig" works but "curl" fails with could not resolve host: Check "/etc/nsswitch.conf" to ensure "hosts: files dns" is configured.',
      'Check firewall rules for UDP port 53 (and TCP port 53 for large records >512 bytes like DNSSEC).',
    ],
  },
  {
    id: 'kb-7',
    title: 'How to Configure Cisco Standard and Extended ACLs',
    category: 'Cisco',
    readTime: '7 min read',
    level: 'Intermediate',
    summary: 'Master standard (Layer 3 source IP only) and extended (source, destination, protocol, and port numbers) Access Control Lists with placement best practices.',
    prerequisites: ['Cisco router or Layer 3 switch CLI access'],
    symptoms: ['Unauthorized workstations reaching private database servers', 'ACL blocking all traffic due to implicit deny all'],
    steps: [
      {
        stepNumber: 1,
        title: 'Define Extended Named ACL',
        explanation: 'Permit web traffic and DNS from Guest VLAN to the internet, while blocking all access to internal corporate subnets.',
        command: `Router(config)# ip access-list extended GUEST_RESTRICTION
Router(config-ext-nacl)# remark Permit DNS queries to public DNS
Router(config-ext-nacl)# permit udp 192.168.100.0 0.0.0.255 host 8.8.8.8 eq 53
Router(config-ext-nacl)# remark Deny all traffic to internal corporate 10.0.0.0/8
Router(config-ext-nacl)# deny ip 192.168.100.0 0.0.0.255 10.0.0.0 0.255.255.255
Router(config-ext-nacl)# remark Allow all remaining egress to internet
Router(config-ext-nacl)# permit ip 192.168.100.0 0.0.0.255 any`,
      },
      {
        stepNumber: 2,
        title: 'Apply ACL to Ingress Interface',
        explanation: 'Best practice: Extended ACLs should always be placed as close to the traffic SOURCE as possible.',
        command: `Router(config)# interface GigabitEthernet0/0/1
Router(config-if)# description GUEST_WIFI_VLAN
Router(config-if)# ip access-group GUEST_RESTRICTION in`,
      },
      {
        stepNumber: 3,
        title: 'Verify Hit Counters',
        explanation: 'Inspect active ACL permit and deny hit match counters to confirm filtering behavior.',
        command: `Router# show ip access-lists GUEST_RESTRICTION`,
        expectedOutput: `Extended IP access list GUEST_RESTRICTION
    10 permit udp 192.168.100.0 0.0.0.255 host 8.8.8.8 eq domain (245 matches)
    20 deny ip 192.168.100.0 0.0.0.255 10.0.0.0 0.255.255.255 (18 matches)
    30 permit ip 192.168.100.0 0.0.0.255 any (8410 matches)`,
      },
    ],
    troubleshootingTips: [
      'Golden Rule of ACL Placement: Place Extended ACLs as close to the SOURCE as possible (saves network bandwidth). Place Standard ACLs as close to the DESTINATION as possible.',
      'Remember every Cisco ACL concludes with an invisible, silent "deny ip any any". If no permit rule matches, traffic is dropped.',
    ],
  },
  {
    id: 'kb-8',
    title: 'How to Configure Palo Alto Next-Gen Firewall Policies & NAT',
    category: 'Firewall',
    readTime: '8 min read',
    level: 'Advanced',
    summary: 'A step-by-step tutorial on designing security zones, configuring dynamic source NAT (PAT) for internet egress, and writing App-ID security rules in PAN-OS.',
    prerequisites: ['Palo Alto firewall web GUI or SSH CLI access', 'Basic understanding of zones and App-ID'],
    symptoms: ['Internal LAN cannot reach internet after firewall installation', 'App-ID shows "incomplete" or "insufficient-data" in traffic logs'],
    steps: [
      {
        stepNumber: 1,
        title: 'Assign Interfaces to Security Zones',
        explanation: 'All interfaces in PAN-OS must belong to a Layer 3 security zone.',
        command: `admin@PA-440# set zone Trust network layer3 ethernet1/2
admin@PA-440# set zone Untrust network layer3 ethernet1/1
admin@PA-440# set zone DMZ network layer3 ethernet1/3`,
      },
      {
        stepNumber: 2,
        title: 'Create Source Dynamic IP/Port NAT Rule',
        explanation: 'Configure outbound Internet access masquerading internal IPs behind the external interface IP.',
        command: `admin@PA-440# set rulebase nat rules "Outbound_Hide_NAT" \\
  from Trust to Untrust \\
  source 10.0.0.0/16 destination any \\
  service any \\
  source-translation dynamic-ip-and-port interface-address interface ethernet1/1`,
      },
      {
        stepNumber: 3,
        title: 'Create App-ID Enabled Security Rule and Commit',
        explanation: 'Allow specific applications (web-browsing, ssl, dns) rather than generic port numbers.',
        command: `admin@PA-440# set rulebase security rules "Permit_Trust_Internet" \\
  from Trust to Untrust \\
  source 10.0.0.0/16 destination any \\
  application [ web-browsing ssl dns ping ] \\
  service application-default \\
  action allow
admin@PA-440# commit`,
        expectedOutput: `Configuration committed successfully.`,
      },
    ],
    troubleshootingTips: [
      'In PAN-OS, destination zones in Security Rules are evaluated BEFORE destination NAT translation (post-NAT zone, pre-NAT IP address).',
      'Always configure "service application-default" to ensure applications run only on their standard IANA ports (e.g. prevents non-SSL traffic hiding on port 443).',
    ],
  },
];

export const LAB_TOPOLOGIES: {
  id: string;
  name: string;
  description: string;
  devices: NetworkLabDevice[];
  connections: { from: string; to: string; label: string; bandwidth: string }[];
}[] = [
  {
    id: 'topo-core',
    name: 'Enterprise Core Campus Topology',
    description: 'Corporate client workstation connecting through Access Switch, L3 Core Distribution Router, Palo Alto Perimeter Firewall, out to Public Internet.',
    devices: [
      {
        id: 'dev-pc1',
        name: 'Workstation-01 (HR Dept)',
        type: 'pc',
        ip: '192.168.10.45',
        subnet: '255.255.255.0',
        vlan: 'VLAN 10 (Corporate Data)',
        mac: '00:50:56:A1:B2:C3',
        defaultGateway: '192.168.10.1',
        interfaces: [{ name: 'eth0', ip: '192.168.10.45', status: 'up', speed: '1 Gbps' }],
        protocol: 'DHCP Client / TCP/IP',
        status: 'online',
        activeSessions: 8,
      },
      {
        id: 'dev-sw1',
        name: 'Cisco Catalyst 9300 (Access-SW)',
        type: 'switch',
        ip: '192.168.10.2',
        subnet: '255.255.255.0',
        vlan: 'VLAN 10, 20, 99 (Mgmt)',
        mac: '00:1E:49:11:22:33',
        defaultGateway: '192.168.10.1',
        interfaces: [
          { name: 'Gi1/0/1', ip: 'Access VLAN 10', status: 'up', speed: '1 Gbps' },
          { name: 'Gi1/0/48 (Trunk)', ip: 'Trunk (802.1Q)', status: 'up', speed: '10 Gbps' },
        ],
        protocol: 'Rapid PVST+ / 802.1Q',
        status: 'online',
        activeSessions: 64,
        configSnippet: `interface GigabitEthernet1/0/1\n switchport mode access\n switchport access vlan 10\n spanning-tree portfast`,
      },
      {
        id: 'dev-r1',
        name: 'Cisco ISR 4331 (Core Router)',
        type: 'router',
        ip: '10.0.0.1',
        subnet: '255.255.255.252',
        vlan: 'VLAN 10, 20 Sub-interfaces',
        mac: '00:27:0D:33:44:55',
        defaultGateway: '10.0.0.2',
        interfaces: [
          { name: 'Gi0/0/0.10', ip: '192.168.10.1/24', status: 'up', speed: '1 Gbps' },
          { name: 'Gi0/0/1', ip: '10.0.0.1/30', status: 'up', speed: '1 Gbps' },
        ],
        protocol: 'OSPFv2 Area 0 / HSRP',
        status: 'online',
        routingTable: [
          { prefix: '0.0.0.0/0', nextHop: '10.0.0.2', protocol: 'Static', metric: 1, iface: 'Gi0/0/1' },
          { prefix: '192.168.10.0/24', nextHop: 'Direct', protocol: 'Connected', metric: 0, iface: 'Gi0/0/0.10' },
          { prefix: '10.100.0.0/16', nextHop: '10.0.0.2', protocol: 'OSPF', metric: 20, iface: 'Gi0/0/1' },
        ],
        activeSessions: 142,
      },
      {
        id: 'dev-fw1',
        name: 'Palo Alto PA-440 (Next-Gen Firewall)',
        type: 'firewall',
        ip: '203.0.113.5',
        subnet: '255.255.255.248',
        vlan: 'Trust (L3) / Untrust (L3)',
        mac: '00:1B:17:55:66:77',
        defaultGateway: '203.0.113.1',
        interfaces: [
          { name: 'eth1/2 (Trust)', ip: '10.0.0.2/30', status: 'up', speed: '1 Gbps' },
          { name: 'eth1/1 (Untrust)', ip: '203.0.113.5/29', status: 'up', speed: '1 Gbps' },
        ],
        protocol: 'PAN-OS 11 / App-ID / DIPP NAT',
        status: 'online',
        activeSessions: 382,
        configSnippet: `set rulebase security rules Allow-Outbound from Trust to Untrust application [ web-browsing ssl dns ] action allow`,
      },
      {
        id: 'dev-inet',
        name: 'Public Internet Gateway (Tier-1 Telco)',
        type: 'cloud',
        ip: '203.0.113.1',
        subnet: '255.255.255.248',
        vlan: 'Public WAN',
        mac: '00:00:5E:00:01:01',
        defaultGateway: 'N/A',
        interfaces: [{ name: 'WAN0', ip: '203.0.113.1/29', status: 'up', speed: '10 Gbps' }],
        protocol: 'BGP AS 65100 / IP Transit',
        status: 'online',
        activeSessions: 1250,
      },
    ],
    connections: [
      { from: 'dev-pc1', to: 'dev-sw1', label: 'Cat6 UTP (VLAN 10)', bandwidth: '1 Gbps' },
      { from: 'dev-sw1', to: 'dev-r1', label: '802.1Q Fiber Trunk', bandwidth: '10 Gbps' },
      { from: 'dev-r1', to: 'dev-fw1', label: 'Point-to-Point /30', bandwidth: '1 Gbps' },
      { from: 'dev-fw1', to: 'dev-inet', label: 'SFP+ Internet Uplink', bandwidth: '1 Gbps' },
    ],
  },
  {
    id: 'topo-branch',
    name: 'Branch Multi-Host Office Flow',
    description: 'Multiple branch workstation endpoints (PC1, PC2, PC3) feeding into a managed Layer 2 switch, routed over an Edge Router directly to Public Internet.',
    devices: [
      {
        id: 'dev-b-pc1',
        name: 'PC-1 (Sales Dept)',
        type: 'pc',
        ip: '172.16.1.101',
        subnet: '255.255.255.0',
        vlan: 'VLAN 100',
        mac: '00:50:56:B1:01:01',
        defaultGateway: '172.16.1.1',
        interfaces: [{ name: 'eth0', ip: '172.16.1.101', status: 'up', speed: '1 Gbps' }],
        protocol: 'DHCP Client',
        status: 'online',
        activeSessions: 4,
      },
      {
        id: 'dev-b-pc2',
        name: 'PC-2 (Finance Dept)',
        type: 'pc',
        ip: '172.16.1.102',
        subnet: '255.255.255.0',
        vlan: 'VLAN 100',
        mac: '00:50:56:B1:01:02',
        defaultGateway: '172.16.1.1',
        interfaces: [{ name: 'eth0', ip: '172.16.1.102', status: 'up', speed: '1 Gbps' }],
        protocol: 'DHCP Client',
        status: 'online',
        activeSessions: 7,
      },
      {
        id: 'dev-b-pc3',
        name: 'PC-3 (Engineering Dept)',
        type: 'pc',
        ip: '172.16.1.103',
        subnet: '255.255.255.0',
        vlan: 'VLAN 100',
        mac: '00:50:56:B1:01:03',
        defaultGateway: '172.16.1.1',
        interfaces: [{ name: 'eth0', ip: '172.16.1.103', status: 'up', speed: '1 Gbps' }],
        protocol: 'DHCP Client',
        status: 'online',
        activeSessions: 12,
      },
      {
        id: 'dev-b-sw',
        name: 'Branch Switch (Cisco 2960-X)',
        type: 'switch',
        ip: '172.16.1.2',
        subnet: '255.255.255.0',
        vlan: 'VLAN 100 (Branch LAN)',
        mac: '00:1A:A0:77:88:99',
        defaultGateway: '172.16.1.1',
        interfaces: [
          { name: 'Fa0/1', ip: 'Access VLAN 100', status: 'up', speed: '100 Mbps' },
          { name: 'Fa0/2', ip: 'Access VLAN 100', status: 'up', speed: '100 Mbps' },
          { name: 'Fa0/3', ip: 'Access VLAN 100', status: 'up', speed: '100 Mbps' },
          { name: 'Gi0/1', ip: 'Uplink Trunk', status: 'up', speed: '1 Gbps' },
        ],
        protocol: 'Rapid-PVST+ / LACP',
        status: 'online',
        activeSessions: 23,
      },
      {
        id: 'dev-b-rtr',
        name: 'Branch Gateway Router (Cisco 1100)',
        type: 'router',
        ip: '172.16.1.1',
        subnet: '255.255.255.0',
        vlan: 'Native / PAT Gateway',
        mac: '00:23:4E:99:AA:BB',
        defaultGateway: '198.51.100.254',
        interfaces: [
          { name: 'Gi0/0/0 (LAN)', ip: '172.16.1.1/24', status: 'up', speed: '1 Gbps' },
          { name: 'Gi0/0/1 (WAN)', ip: '198.51.100.253/30', status: 'up', speed: '1 Gbps' },
        ],
        protocol: 'NAT/PAT / Static Default Route',
        status: 'online',
        routingTable: [
          { prefix: '0.0.0.0/0', nextHop: '198.51.100.254', protocol: 'Static', metric: 1, iface: 'Gi0/0/1' },
          { prefix: '172.16.1.0/24', nextHop: 'Direct', protocol: 'Connected', metric: 0, iface: 'Gi0/0/0' },
        ],
        activeSessions: 89,
      },
      {
        id: 'dev-b-cloud',
        name: 'Public Internet / Cloud Services',
        type: 'cloud',
        ip: '198.51.100.254',
        subnet: '255.255.255.252',
        vlan: 'Public Internet',
        mac: '00:00:5E:00:01:FF',
        defaultGateway: 'N/A',
        interfaces: [{ name: 'ISP_Uplink', ip: '198.51.100.254/30', status: 'up', speed: '1 Gbps' }],
        protocol: 'eBGP / Transit',
        status: 'online',
        activeSessions: 420,
      },
    ],
    connections: [
      { from: 'dev-b-pc1', to: 'dev-b-sw', label: 'Port Fa0/1', bandwidth: '100 Mbps' },
      { from: 'dev-b-pc2', to: 'dev-b-sw', label: 'Port Fa0/2', bandwidth: '100 Mbps' },
      { from: 'dev-b-pc3', to: 'dev-b-sw', label: 'Port Fa0/3', bandwidth: '100 Mbps' },
      { from: 'dev-b-sw', to: 'dev-b-rtr', label: 'Gigabit Trunk', bandwidth: '1 Gbps' },
      { from: 'dev-b-rtr', to: 'dev-b-cloud', label: 'Broadband Fiber WAN', bandwidth: '300 Mbps' },
    ],
  },
];

export const INITIAL_MESSAGES: ContactMessage[] = [
  {
    id: 'msg-1',
    name: 'Rajesh Verma',
    email: 'rajesh.v@enterprisecorp.in',
    phone: '+919876543210',
    subject: 'Enterprise Campus Migration Project Lead',
    message: 'Hello Afzal, we reviewed your Cisco and Palo Alto project portfolio. We have an upcoming campus switch refresh and multi-area OSPF redesign for our regional offices in India and would love to discuss a Senior Network Engineer opportunity with you.',
    timestamp: '2026-09-24 14:32',
    read: false,
  },
];
