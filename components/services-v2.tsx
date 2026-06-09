'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { 
  Folder, 
  Lock, 
  ClipboardCheck, 
  Presentation,
  ShieldCheck,
  Database,
  Unlock,
  Users,
  Info,
  Search,
  Settings,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  HardDrive,
  Globe,
  Monitor
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={cn("inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-black tracking-[0.1em] uppercase border border-primary/20 text-primary bg-primary/5 rounded-full mb-8", className)}>
    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
    {children}
  </span>
);

const PinwheelPart = ({ icon: Icon, title, angle, color }: { icon: any, title: string, angle: number, color: string }) => (
  <div 
    className="absolute w-full h-full flex items-center justify-center transition-transform duration-700 ease-in-out group-hover:scale-[1.03]"
    style={{ transform: `rotate(${angle}deg)` }}
  >
    <div 
      className={cn("w-1/2 h-1/2 absolute top-0 left-0 origin-bottom-right flex items-center justify-center transition-all duration-500 shadow-inner", color)}
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
    >
      <div 
        className="flex flex-col items-center justify-center text-white drop-shadow-lg"
        style={{ transform: `rotate(-45deg) translate(-12%, -12%)` }}
      >
        <Icon className="w-8 h-8 md:w-16 md:h-16 mb-2 md:mb-6" strokeWidth={1} />
        <span className="font-black text-[10px] md:text-2xl tracking-tight uppercase whitespace-nowrap">{title}</span>
      </div>
    </div>
  </div>
);

export function ServicesV2() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-32 md:space-y-48">
        
        {/* 1. Library Automation & Integrated Library Systems */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="max-w-5xl space-y-8">
            <Badge>CORE SERVICE</Badge>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#1a1b4b] leading-[0.95] tracking-tight">
              Library Automation & <br className="hidden md:block" />
              <span className="text-primary/40">Integrated Systems</span>
            </h2>
            <p className="text-lg md:text-2xl text-foreground/60 leading-relaxed max-w-4xl font-medium">
              We deploy and configure industry-leading Integrated Library Systems (ILS) tailored to your institution&apos;s scale. From cataloguing to circulation, every module is optimised for your workflows.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: 'ILS Deployment',
                desc: 'Full installation, configuration, and migration of library management platforms.'
              },
              {
                title: 'Module Integration',
                desc: 'Seamless integration of acquisition, cataloguing, circulation, and reporting modules.'
              },
              {
                title: 'Staff Training',
                desc: 'Comprehensive training programmes ensuring your team operates the system confidently.'
              }
            ].map((item, i) => (
              <div key={i} className="group p-8 md:p-12 bg-card rounded-[2rem] border border-border/50 shadow-sm hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500">
                <div className="h-2 w-12 bg-primary/20 rounded-full mb-8 group-hover:w-20 transition-all duration-500" />
                <h3 className="text-2xl font-black text-[#1a1b4b] mb-4">{item.title}</h3>
                <p className="text-base text-foreground/50 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 2. Digitisation & Paperless Office Solutions */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="max-w-5xl space-y-8">
            <Badge>CORE SERVICE</Badge>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#1a1b4b] leading-[0.95] tracking-tight">
              Digitisation & <br className="hidden md:block" />
              <span className="text-primary/40">Paperless Solutions</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-[#1a1b4b]">Documents Digitisation</h3>
                <p className="text-lg text-foreground/60 leading-relaxed font-medium">
                  We transform paper-based records into structured digital assets. Our services include scanning, OCR processing, indexing, and quality assurance.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-[#1a1b4b]">Paperless Office</h3>
                <p className="text-lg text-foreground/60 leading-relaxed font-medium">
                  We design and deploy end-to-end paperless environments, integrating document management and workflow automation to eliminate manual processes.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. Electronic Records Management */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="max-w-5xl space-y-8">
            <Badge>CORE SERVICE</Badge>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#1a1b4b] leading-[0.95] tracking-tight">
              Electronic Records <br className="hidden md:block" />
              <span className="text-primary/40">Management (ERMS)</span>
            </h2>
            <p className="text-lg md:text-2xl text-foreground/60 leading-relaxed max-w-4xl font-medium">
              Effective records management is the backbone of organisational accountability. We deploy ERMS that ensure your records are created, classified, and disposed of in accordance with regulation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Folder,
                title: 'Classification',
                desc: 'Design of file plans and metadata schemas.'
              },
              {
                icon: ShieldCheck,
                title: 'Security',
                desc: 'Role-based permissions and audit logs.'
              },
              {
                icon: ClipboardCheck,
                title: 'Retention',
                desc: 'Automated schedules for compliance.'
              },
              {
                icon: Presentation,
                title: 'Training',
                desc: 'Embedding a records management culture.'
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col p-8 bg-card rounded-[2rem] border border-border/50 hover:border-primary/20 transition-all duration-300">
                <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-black text-[#1a1b4b] mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4. Digital Libraries & Institutional Repositories */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="max-w-5xl space-y-8">
            <Badge>CORE SERVICE</Badge>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#1a1b4b] leading-[0.95] tracking-tight">
              Digital Libraries & <br className="hidden md:block" />
              <span className="text-primary/40">Repositories</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="aspect-[16/10] bg-primary/5 rounded-[3rem] flex items-center justify-center border border-primary/10 overflow-hidden relative group order-2 lg:order-1">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
                 <div className="text-primary/10 flex flex-col items-center gap-6">
                   <div className="w-20 h-2 bg-primary/20 rounded-full animate-pulse" />
                   <div className="w-32 h-2 bg-primary/20 rounded-full animate-pulse delay-75" />
                   <div className="w-24 h-2 bg-primary/20 rounded-full animate-pulse delay-150" />
                 </div>
              </div>
              
              <div className="space-y-12 order-1 lg:order-2">
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-[#1a1b4b]">Institutional Repositories</h3>
                  <p className="text-lg text-foreground/60 leading-relaxed font-medium">
                    We deploy open-source platforms like DSpace and EPrints to capture, preserve, and disseminate your scholarly output.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-[#1a1b4b]">Digital Library Deployment</h3>
                  <p className="text-lg text-foreground/60 leading-relaxed font-medium">
                    From selection to ingestion, we build digital libraries that are discoverable and aligned with international preservation standards.
                  </p>
                </div>
              </div>
          </div>
        </motion.div>

        {/* 5. Metadata, RDA & RFID Integration */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="max-w-5xl space-y-8">
            <Badge>CORE SERVICE</Badge>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#1a1b4b] leading-[0.95] tracking-tight">
              Metadata, RDA & <br className="hidden md:block" />
              <span className="text-primary/40">RFID Integration</span>
            </h2>
            <p className="text-lg md:text-2xl text-foreground/60 leading-relaxed max-w-4xl font-medium">
              Accurate metadata is the foundation of discoverability. We provide expert generation services and integrate RFID technology to streamline collection management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Metadata Generation',
                desc: 'Creation of high-quality, standards-compliant records.'
              },
              {
                title: 'RDA Cataloguing',
                desc: 'Transition to RDA-compliant practices for discovery.'
              },
              {
                title: 'RFID Integration',
                desc: 'End-to-end tagging and system integration for smart libraries.'
              }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-card border border-border/50 border-l-[8px] border-l-primary rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500">
                <h3 className="text-xl font-black text-[#1a1b4b] mb-4">{item.title}</h3>
                <p className="text-base text-foreground/50 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 6. E-Resources, Open Science & Curation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="max-w-5xl space-y-8">
            <Badge>CORE SERVICE</Badge>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#1a1b4b] leading-[0.95] tracking-tight">
              E-Resources & <br className="hidden md:block" />
              <span className="text-primary/40">Open Science</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: 'Subscriptions',
                desc: 'Curated access to academic databases and journals.'
              },
              {
                icon: Unlock,
                title: 'Open Science',
                desc: 'Workshops on open access publishing and data management.'
              },
              {
                icon: Users,
                title: 'Curation',
                desc: 'Licensing support and usage analytics for value maximization.'
              }
            ].map((item, i) => (
              <div key={i} className="group p-10 bg-primary/5 rounded-[3rem] border border-primary/5 hover:bg-white hover:border-primary/20 hover:shadow-2xl transition-all duration-500">
                <div className="w-14 h-14 bg-primary rounded-[1.25rem] flex items-center justify-center mb-8 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-black text-[#1a1b4b] mb-4">{item.title}</h3>
                <p className="text-base text-foreground/50 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 7. Digital Preservation & Advanced Records Management */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="max-w-5xl space-y-8">
            <Badge>CORE SERVICE</Badge>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#1a1b4b] leading-[0.95] tracking-tight">
              Digital Preservation & <br className="hidden md:block" />
              <span className="text-primary/40">Records Management</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="p-10 bg-card border border-border/50 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center gap-6 mb-8">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <ShieldCheck size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-[#1a1b4b]">Digital Preservation</h3>
                </div>
                <p className="text-lg text-foreground/60 leading-relaxed font-medium mb-8">
                  We preserve content that is already in digital form, from digitized library content to "born digital" assets.
                </p>
                <div className="space-y-6">
                  <h4 className="font-black text-[#1a1b4b] flex items-center gap-3 text-lg">
                    <Info size={20} className="text-primary" />
                    Key Activities:
                  </h4>
                  <ul className="grid grid-cols-1 gap-4">
                    {[
                      'Disk imaging and legacy recovery',
                      'Migration to modern formats',
                      'Best practices format guidance',
                      'Preservation policy development'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 text-base text-foreground/50 font-medium">
                        <CheckCircle2 size={20} className="text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-10 bg-primary/5 rounded-[3rem] border border-primary/10 hover:bg-white hover:border-primary/20 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center gap-6 mb-8">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <HardDrive size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-[#1a1b4b]">ERMS / EDMS</h3>
                </div>
                <p className="text-lg text-foreground/60 leading-relaxed font-medium">
                  Secure and reliable offsite records storage and management. We provide personalized solutions for every document lifecycle.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 8. Web Development & Digital Identity */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="max-w-5xl space-y-8">
            <Badge>CORE SERVICE</Badge>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#1a1b4b] leading-[0.95] tracking-tight">
              Web Development & <br className="hidden md:block" />
              <span className="text-primary/40">Digital Identity</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-10">
              <div className="flex gap-8 items-start">
                <div className="h-16 w-16 rounded-3xl bg-primary flex items-center justify-center text-white shrink-0 shadow-2xl shadow-primary/20">
                  <Globe size={32} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-[#1a1b4b]">Strategic Web Dev</h3>
                  <p className="text-lg text-foreground/60 leading-relaxed font-medium">
                    We identify key audience needs and goals to develop websites that truly work.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="h-16 w-16 rounded-3xl bg-accent flex items-center justify-center text-white shrink-0 shadow-2xl shadow-accent/20">
                  <Monitor size={32} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-[#1a1b4b]">Custom Design</h3>
                  <p className="text-lg text-foreground/60 leading-relaxed font-medium">
                    Our designers create custom-tailored designs that promote your brand identity.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative p-1 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[3.5rem]">
              <div className="bg-white rounded-[3rem] p-12 shadow-2xl">
                <p className="text-2xl md:text-3xl font-black text-[#1a1b4b] leading-tight italic tracking-tight">
                  "Visuals that promote your product, not overshadow your message."
                </p>
                <div className="mt-10 flex items-center gap-6">
                  <div className="h-1.5 w-16 bg-primary rounded-full" />
                  <span className="font-black text-primary uppercase tracking-widest text-xs">Creative Team</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 9. About US (Formerly Who We Are) */}
        <motion.div 
          id="about"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-24 md:space-y-32"
        >
          <div className="max-w-5xl space-y-8">
            <Badge>ABOUT US</Badge>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#1a1b4b] leading-[0.95] tracking-tight">
              Expert Software & <br className="hidden md:block" />
              <span className="text-primary/40">Information Solutions</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div className="space-y-12">
              <div className="p-12 bg-[#1a1b4b] rounded-[3.5rem] text-white shadow-2xl shadow-[#1a1b4b]/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
                <h3 className="text-3xl font-black mb-8 relative z-10">Who We Are</h3>
                <div className="space-y-6 text-lg md:text-xl leading-relaxed opacity-80 font-medium relative z-10">
                  <p>
                    MP3 Multisystems Koncept implements hardware and software related projects of any complexity. We develop matchless solutions to increase efficiency and competitive advantage.
                  </p>
                  <p>
                    A team of Architects, Engineers and Librarians driving the knowledge economy through world-class information systems.
                  </p>
                </div>
              </div>

              <div className="p-12 bg-card border border-border/50 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all duration-500">
                <h3 className="text-2xl font-black text-[#1a1b4b] mb-8">Our Commitment</h3>
                <div className="space-y-6 text-base md:text-lg text-foreground/50 leading-relaxed font-medium">
                  <p>
                    Management of IT for organizations is like legal advice or accounting — it is not inherently a do-it-yourself prospect.
                  </p>
                  <p>
                    Smart people need quality vendors of reliable hardware, software, and support. We are those trusted allies.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-[#1a1b4b] uppercase tracking-widest text-sm">Social Innovation</h3>
                <p className="text-lg md:text-xl text-foreground/60 leading-relaxed font-medium italic border-l-8 border-primary/20 pl-8">
                  We allow talented youth from poor backgrounds and physically challenged persons to access professional opportunities and earn higher income.
                </p>
              </div>

              <div className="space-y-10">
                <h3 className="text-2xl font-black text-[#1a1b4b]">Service Areas</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { title: 'Digitization Content', desc: 'Conversion, ebook, newspaper & archive.' },
                    { title: 'Data Services', desc: 'Entry, verification, and records management.' },
                    { title: 'Research Services', desc: 'Internet, field and market research.' },
                    { title: 'Image Processing', desc: 'Enhancement, retouching, and cropping.' },
                    { title: 'Back Office', desc: 'Finance, accounting and human resources.' }
                  ].map((service, i) => (
                    <div key={i} className="flex gap-6 p-6 rounded-3xl bg-primary/5 border border-primary/5 hover:bg-white hover:border-primary/20 hover:shadow-xl transition-all duration-500">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      <div>
                        <h4 className="font-black text-[#1a1b4b] text-lg mb-1">{service.title}</h4>
                        <p className="text-sm text-foreground/50 font-medium">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 10. Our Approach */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="max-w-5xl space-y-8">
            <Badge>OUR APPROACH</Badge>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#1a1b4b] leading-[0.95] tracking-tight">
              A Structured Path to <br className="hidden md:block" />
              <span className="text-primary/40">Transformation</span>
            </h2>
            <p className="text-lg md:text-2xl text-foreground/60 leading-relaxed max-w-4xl font-medium">
              Every engagement follows a clear, phased methodology designed to minimise disruption and maximise adoption.
            </p>
          </div>
          
          <div className="relative py-20 flex flex-col items-center">
            {/* Proper Pinwheel Graphic */}
            <div className="relative w-72 h-72 md:w-[600px] md:h-[600px] transition-all duration-1000 group cursor-pointer">
              <div className="absolute inset-0 rounded-full border-[16px] border-primary/5 p-4 md:p-16 shadow-inner animate-[spin_20s_linear_infinite] group-hover:pause">
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm">
                  <PinwheelPart icon={Search} title="Assess" angle={0} color="bg-primary" />
                  <PinwheelPart icon={Settings} title="Design" angle={90} color="bg-primary/90" />
                  <PinwheelPart icon={Folder} title="Deploy" angle={180} color="bg-primary/80" />
                  <PinwheelPart icon={Presentation} title="Train" angle={270} color="bg-primary/70" />
                </div>
              </div>
              {/* Center Dot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full shadow-2xl z-20 flex items-center justify-center border-8 border-background transition-transform duration-500 group-hover:scale-110">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full animate-pulse" />
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-foreground/40 text-center max-w-3xl mt-24 leading-relaxed font-black uppercase tracking-[0.2em]">
              Phased • Structured • Sustainable
            </p>
          </div>
        </motion.div>

        {/* 11. Get Started */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="max-w-5xl space-y-8">
            <Badge>GET STARTED</Badge>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#1a1b4b] leading-[0.95] tracking-tight">
              Ready to <span className="text-primary/40">Modernise?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="p-12 bg-primary rounded-[3.5rem] text-white shadow-2xl shadow-primary/20 relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
              <h3 className="text-3xl font-black mb-8 relative z-10">Let&apos;s Start</h3>
              <p className="text-xl leading-relaxed opacity-90 mb-12 font-medium relative z-10">
                Whether exploring automation for the first time or looking to upgrade, our consultants are ready to propose a tailored solution.
              </p>
              <Link href="/request-consultation" className="relative z-10 inline-block">
                <Button className="bg-white text-primary hover:bg-white/90 font-black h-16 px-10 rounded-2xl text-lg transition-all shadow-xl hover:shadow-2xl active:scale-95 group">
                  Book a Session
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {[
                'Library Automation & ILS',
                'Digitisation & Paperless',
                'Electronic Records (ERMS)',
                'Digital Repositories',
                'Metadata & RFID',
                'E-Resources & Open Science',
                'Digital Preservation',
                'Strategic Web Development'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 text-lg font-black text-[#1a1b4b]/60 uppercase tracking-tighter hover:text-primary transition-colors cursor-default group">
                  <span className="w-8 h-px bg-primary/20 group-hover:w-12 transition-all" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
