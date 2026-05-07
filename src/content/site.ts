import {
  Activity,
  BadgeCheck,
  Building2,
  Cable,
  Camera,
  CheckCircle2,
  Cpu,
  DatabaseZap,
  Fingerprint,
  Globe2,
  HardHat,
  Landmark,
  Layers3,
  LifeBuoy,
  LockKeyhole,
  Network,
  Radio,
  ScanFace,
  ShieldCheck,
  Siren,
  Sparkles,
  Waypoints,
  Wifi,
} from "lucide-react";

export const site = {
  name: "Brinker Solutions",
  legalName: "Brinker Solutions LTD",
  tagline: "Innovate. Secure. Succeed.",
  description:
    "Enterprise IT, security, communication infrastructure, and integrated software solutions for organizations across Africa and beyond.",
  email: "info@brinker.co.ke",
  phones: {
    nairobi: "+254 724 624 756",
    mombasa: "+254 11 294 8571",
  },
  offices: [
    {
      name: "Nairobi Office",
      address: "10th Floor Pinetree Plaza, Kamburu Drive, Ngong Road, Nairobi.",
      phone: "+254 724 624 756",
      mapUrl: "https://maps.app.goo.gl/YHwq83ytYZPCpMzLA",
    },
    {
      name: "Mombasa Office",
      address: "TSS Tower, 1st Floor, Nkrumah Road",
      phone: "+254 11 294 8571",
      mapUrl: "https://maps.app.goo.gl/tvqj75F671DgYyqh9",
    },
  ],
} as const;

export const mainNav = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about-us" },
  { title: "Services", href: "/services" },
  { title: "Solutions", href: "/what-we-offer" },
  { title: "Projects", href: "/projects" },
  { title: "Contact Us", href: "/contact-us" },
] as const;

export const stats = [
  { value: "10+", label: "Years delivering enterprise technology" },
  { value: "2", label: "Regional offices in Kenya" },
  { value: "24/7", label: "Support mindset for critical systems" },
  { value: "6", label: "Core solution domains" },
] as const;

export const heroCallouts = [
  {
    title: "Communication Infrastructure",
    summary: "Secure connectivity, radio, fiber, LAN, WiFi, and public safety networks.",
    icon: Radio,
  },
  {
    title: "Homeland Security",
    summary: "Integrated surveillance, access control, scanning, intrusion, and analytics systems.",
    icon: ShieldCheck,
  },
  {
    title: "Data Centers",
    summary: "Reliable, redundant infrastructure for always-on operations.",
    icon: DatabaseZap,
  },
] as const;

export const services = [
  {
    title: "Communication Infrastructure",
    summary:
      "Secure, scalable, high-speed network solutions for enterprise, government, and mission-critical teams.",
    href: "/what-we-offer#communication-infrastructure",
    icon: Network,
    items: ["Two-way radio", "Unified communication", "Fiber rollout", "LAN and WiFi"],
  },
  {
    title: "Homeland Security",
    summary:
      "Integrated safety and security systems for access control, surveillance, intrusion detection, and public safety.",
    href: "/what-we-offer#homeland-security",
    icon: Landmark,
    items: ["Access control", "IP video", "Baggage scanners", "Analytics"],
  },
  {
    title: "Design & Consultancy Services",
    summary:
      "Technical design, planning, solution architecture, deployment consulting, and lifecycle advisory.",
    href: "/services#design-consultancy",
    icon: Layers3,
    items: ["Architecture", "Planning", "Deployment", "Lifecycle support"],
  },
  {
    title: "Data Centers",
    summary:
      "Reliable data center infrastructure, networking, connectivity, redundancy, and operational support.",
    href: "/what-we-offer#communication-infrastructure",
    icon: DatabaseZap,
    items: ["Infrastructure", "Connectivity", "Redundancy", "Operations"],
  },
  {
    title: "Safety Systems & PPE",
    summary:
      "Fire detection, voice evacuation, fire suppression, building management, and safety equipment solutions.",
    href: "/what-we-offer#life-safety-systems",
    icon: HardHat,
    items: ["Fire detection", "Evacuation", "Suppression", "Safety PPE"],
  },
  {
    title: "SaaS & Software Integration",
    summary:
      "ERP, CRM, healthcare, logistics, education, cloud, cybersecurity, and analytics software solutions.",
    href: "/what-we-offer#saas-software-solutions",
    icon: Cpu,
    items: ["ERP and CRM", "Healthcare systems", "Logistics POS", "Cybersecurity"],
  },
] as const;

export const solutionCards = [
  {
    title: "Advanced unified security and safety solutions",
    summary:
      "Bring surveillance, access control, intrusion detection, analytics, and life-safety systems into one operational view.",
    icon: ShieldCheck,
  },
  {
    title: "Digital infrastructure",
    summary:
      "Build the resilient networks, data centers, communication channels, and connectivity foundations that modern operations need.",
    icon: Waypoints,
  },
  {
    title: "Digital transformation",
    summary:
      "Modernize workflows with integrated software, cloud services, analytics, and business systems built for scale.",
    icon: Sparkles,
  },
] as const;

export const solutionGroups = [
  {
    id: "communication-infrastructure",
    title: "Communication Infrastructure",
    summary:
      "Reliable communications and network infrastructure for enterprise, public safety, and mission-critical environments.",
    icon: Radio,
    items: [
      "Data Center Infrastructure",
      "Two-Way Radio Systems",
      "Unified Communication Systems",
      "Public Safety LTE",
      "PtP and PtMP Networks",
      "Metro-Ethernet & Fiber Rollout",
      "Local Area Networks (LAN)",
      "WiFi Solutions",
    ],
  },
  {
    id: "life-safety-systems",
    title: "Life Safety Systems",
    summary:
      "Life-safety systems designed to protect people, facilities, and continuity across complex buildings and campuses.",
    icon: Siren,
    items: [
      "Fire Detection Systems",
      "Voice Evacuation Systems",
      "Fire Suppression",
      "Fire Strategy",
      "Building Management System",
      "Safety PPE",
    ],
  },
  {
    id: "biometric-identification-solutions",
    title: "Biometric Identification Solutions",
    summary:
      "Identity verification, access control, and healthcare integrations for secure, auditable digital journeys.",
    icon: Fingerprint,
    items: [
      "Biometric authentication",
      "Identity verification",
      "Access control",
      "EMR integration",
      "HIMS integration",
      "Medical e-claims integration",
    ],
  },
  {
    id: "saas-software-solutions",
    title: "SaaS & Software Solutions",
    summary:
      "Integrated business systems that connect finance, healthcare, logistics, education, and operational workflows.",
    icon: Globe2,
    items: [
      "ERP",
      "CRM",
      "Healthcare EMR",
      "ADT",
      "HIMS",
      "Medical e-claims",
      "Benefits management",
      "Logistics POS",
      "Terminal Operating Systems (TOS)",
      "Education SERP",
    ],
  },
  {
    id: "homeland-security",
    title: "Homeland Security & Integrated Security Systems",
    summary:
      "Integrated security infrastructure for public safety, port, industrial, commercial, and critical-infrastructure operations.",
    icon: LockKeyhole,
    items: [
      "Communication radios",
      "Baggage scanners",
      "Power fences",
      "Intrusion sensors",
      "Asset tracking",
      "Number plate recognition",
      "Integrated Building Management Systems (IBMS)",
      "CCTV and video analytics",
      "Unified group communication",
      "Network audio and public address",
    ],
  },
] as const;

export const values = [
  {
    title: "Aim",
    summary:
      "Help organizations adopt reliable, cost-effective technologies that improve continuity, safety, and performance.",
    icon: Activity,
  },
  {
    title: "Vision",
    summary: "To be the leading IT and security solutions provider in Africa and beyond.",
    icon: ScanFace,
  },
  {
    title: "Mission",
    summary: "Deliver innovative, reliable, and high-quality IT solutions.",
    icon: BadgeCheck,
  },
] as const;

export const whyChooseUs = [
  {
    title: "Proven industry expertise",
    summary: "A practical team with enterprise technology, security, communication, and infrastructure delivery experience.",
    icon: CheckCircle2,
  },
  {
    title: "24/7 support and reliability",
    summary: "Critical systems need disciplined support, fast escalation paths, and a partner that understands uptime.",
    icon: LifeBuoy,
  },
  {
    title: "Innovative and scalable solutions",
    summary: "Architectures are selected for long-term fit, integration readiness, and operational growth.",
    icon: Cable,
  },
  {
    title: "Long-term client partnerships",
    summary: "Brinker works beyond installation to support modernization, optimization, and continuous improvement.",
    icon: Building2,
  },
] as const;

export const capabilities = [
  { title: "Networking Solutions", summary: "LAN, WiFi, fiber optic, and secure connectivity for teams of every scale.", icon: Wifi },
  { title: "Security Systems", summary: "Fire suppression, biometric access control, CCTV, and analytics for total safety.", icon: Camera },
  { title: "Enterprise Software", summary: "ERP and CRM systems that optimize workflows and improve customer management.", icon: Cpu },
  { title: "Communication Devices", summary: "Two-way radios, unified communication, and public safety LTE for connected teams.", icon: Radio },
] as const;

export const clients = [
  { name: "NFT Autoports Freight Terminals Ltd", logo: "/images/clients/nft-autoports.png" },
  { name: "Ethiopian Airlines", logo: "/images/clients/ethiopian-airlines.png" },
  { name: "Kenya Ports Authority", logo: "/images/clients/kenya-ports-authority.png" },
  { name: "County Government of Mombasa", logo: "/images/clients/county-government-mombasa.png" },
  { name: "Portside Freight Terminals Ltd", logo: "/images/clients/portside-freight-terminals.png" },
  { name: "ADD Airport Services", logo: "/images/clients/add-airport-services.png" },
  { name: "Kenya Airports Authority", logo: "/images/clients/kenya-airports-authority.png" },
  { name: "Kenya Power", logo: "/images/clients/kenya-power.png" },
  { name: "KI EnergyTech", logo: "/images/clients/ki-energytech.png" },
  { name: "Kenya Railways", logo: "/images/clients/kenya-railways.png" },
  { name: "Sama", logo: "/images/clients/sama.png" },
  { name: "Ministry of Mining, Blue Economy and Maritime Affairs", logo: "/images/clients/ministry-mining-blue-economy-maritime-affairs.png" },
  { name: "SC Johnson", logo: "/images/clients/sc-johnson.png" },
  { name: "Mitchell Cotts", logo: "/images/clients/mitchell-cotts.png" },
] as const;

export const testimonials = [
  {
    name: "Fahad Adil",
    role: "CEO",
    company: "NorthGas Ltd.",
    quote:
      "Brinker Solutions has been a trusted partner, delivering robust enterprise communication systems. Their ongoing support and technical excellence have significantly improved our operational connectivity.",
  },
  {
    name: "Eyal Azar",
    role: "MD",
    company: "KI Energy",
    quote:
      "Brinker enhanced our energy reliability through tailored network, power backup, and infrastructure solutions. Their support ensures seamless operations across our solar projects.",
  },
  {
    name: "Captain William Ruto",
    role: "MD",
    company: "KPA",
    quote:
      "Brinker Solutions continues to deliver outstanding network, security, and automation solutions. Their reliability and expertise have supported our modernization efforts.",
  },
] as const;

export const projects = [
  {
    title: "Mission-critical communication modernization",
    sector: "Public safety and infrastructure",
    summary:
      "Unified communication, radio, and network architecture for teams that need dependable field and command connectivity.",
    status: "Content validation required",
  },
  {
    title: "Integrated security operations upgrade",
    sector: "Ports and logistics",
    summary:
      "Access control, CCTV, number plate recognition, and centralized monitoring concepts for high-throughput facilities.",
    status: "Content validation required",
  },
  {
    title: "Enterprise cloud and software integration",
    sector: "Corporate operations",
    summary:
      "ERP, CRM, analytics, cloud, and cybersecurity integration patterns to simplify operational visibility.",
    status: "Content validation required",
  },
] as const;

export const pageIntros = {
  about: {
    title: "About Us",
    subtitle: "Empowering Businesses with Technology.",
    summary:
      "Brinker Solutions was established in 2015 with offices in Nairobi and Mombasa. We deliver enterprise technology, security systems, and communication infrastructure across East Africa.",
  },
  services: {
    title: "Services",
    subtitle: "Innovative Solutions, Tailored for You.",
    summary:
      "A focused portfolio of IT, security, communication, software, safety, and consultancy capabilities for organizations that need systems they can trust.",
  },
  solutions: {
    title: "Solutions",
    subtitle: "Empowering Businesses with Next-Gen IT & Security Solutions.",
    summary:
      "Detailed solution groups for communication infrastructure, life safety, biometrics, SaaS, and integrated security systems.",
  },
  projects: {
    title: "Projects",
    subtitle: "Delivery experience across infrastructure, security, and operational modernization.",
    summary:
      "A case-study ready structure for Brinker’s implementation work. Current project examples should be validated with stakeholders before launch.",
  },
  contact: {
    title: "Contact Us",
    subtitle: "Let’s Build Something Great Together.",
    summary:
      "Reach the Brinker team through the form, direct email, phone, or office locations in Nairobi and Mombasa.",
  },
} as const;
