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
  ArrowRight
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
  <span className={cn("inline-block px-3 py-1 text-[11px] font-bold tracking-wider uppercase border border-primary/20 text-primary/80 rounded-md mb-8", className)}>
    {children}
  </span>
);

const PinwheelPart = ({ icon: Icon, title, angle, color }: { icon: any, title: string, angle: number, color: string }) => (
  <div 
    className="absolute w-full h-full flex items-center justify-center transition-transform duration-700 ease-in-out group-hover:scale-105"
    style={{ transform: `rotate(${angle}deg)` }}
  >
    <div 
      className={cn("w-1/2 h-1/2 absolute top-0 left-0 origin-bottom-right flex items-center justify-center transition-all duration-500", color)}
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
    >
      <div 
        className="flex flex-col items-center justify-center text-white"
        style={{ transform: `rotate(-45deg) translate(-10%, -20%)` }}
      >
        <Icon className="w-8 h-8 md:w-12 md:h-12 mb-3 drop-shadow-md" strokeWidth={1.5} />
        <span className="font-bold text-sm md:text-xl tracking-tight">{title}</span>
      </div>
    </div>
  </div>
);

export function ServicesV2() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-32">
        
        {/* 1. Library Automation & Integrated Library Systems */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 md:space-y-10"
        >
          <div className="max-w-5xl">
            <Badge>CORE SERVICE</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-[52px] font-extrabold text-[#1a1b4b] leading-tight mb-6 md:mb-8">
              Library Automation & Integrated Library Systems
            </h2>
            <p className="text-base md:text-lg lg:text-[19px] text-foreground/70 leading-relaxed max-w-4xl">
              We deploy and configure industry-leading Integrated Library Systems (ILS) and Library Management Software tailored to your institution&apos;s scale and complexity. From cataloguing to circulation, every module is optimised for your workflows.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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
              <div key={i} className="p-6 md:p-10 bg-primary/5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-primary/5">
                <h3 className="text-xl md:text-[22px] font-bold text-[#1a1b4b] mb-3 md:mb-4">{item.title}</h3>
                <p className="text-sm md:text-base lg:text-[17px] text-foreground/70 leading-relaxed">{item.desc}</p>
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
          className="space-y-8 md:space-y-10"
        >
          <div className="max-w-5xl">
            <Badge>CORE SERVICE</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-[52px] font-extrabold text-[#1a1b4b] leading-tight mb-8 md:mb-12">
              Digitisation & Paperless Office Solutions
            </h2>
            
            <div className="space-y-10 md:space-y-14">
              <div>
                <h3 className="text-xl md:text-[22px] font-bold text-[#1a1b4b] mb-4 md:mb-5">Documents & Office Digitisation</h3>
                <p className="text-base md:text-lg lg:text-[19px] text-foreground/70 leading-relaxed max-w-5xl">
                  We transform paper-based records and office documents into structured, searchable digital assets. Our digitisation services include scanning, OCR processing, indexing, and quality assurance — ensuring your information is accessible, secure, and compliant.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl md:text-[22px] font-bold text-[#1a1b4b] mb-4 md:mb-5">Paperless Office Deployment</h3>
                <p className="text-base md:text-lg lg:text-[19px] text-foreground/70 leading-relaxed max-w-5xl">
                  We design and deploy end-to-end paperless office environments, integrating document management systems, workflow automation, and digital signature solutions to eliminate manual processes and reduce operational costs.
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
          className="space-y-8 md:space-y-10"
        >
          <div className="max-w-5xl">
            <Badge>CORE SERVICE</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-[52px] font-extrabold text-[#1a1b4b] leading-tight mb-6 md:mb-8">
              Electronic Records Management
            </h2>
            <p className="text-base md:text-lg lg:text-[19px] text-foreground/70 leading-relaxed max-w-4xl mb-8 md:mb-12">
              Effective records management is the backbone of organisational accountability and compliance. We deploy Electronic Records Management Systems (ERMS) that ensure your records are created, classified, retained, and disposed of in accordance with policy and regulation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 md:gap-x-20 gap-y-10 md:gap-y-16">
            {[
              {
                icon: Folder,
                title: 'Records Classification',
                desc: 'Design of file plans and metadata schemas aligned to your organisational structure.'
              },
              {
                icon: ShieldCheck,
                title: 'Access & Security Controls',
                desc: 'Role-based permissions ensuring sensitive records are protected and auditable.'
              },
              {
                icon: ClipboardCheck,
                title: 'Retention & Disposal',
                desc: 'Automated retention schedules supporting regulatory compliance and legal requirements.'
              },
              {
                icon: Presentation,
                title: 'Staff Training',
                desc: 'Practical training programmes that embed records management culture across your organisation.'
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-4 md:gap-6">
                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={1.2} />
                <div>
                  <h3 className="text-xl md:text-[22px] font-bold text-[#1a1b4b] mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-sm md:text-base lg:text-[17px] text-foreground/70 leading-relaxed">{item.desc}</p>
                </div>
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
          className="space-y-8 md:space-y-10"
        >
          <div>
            <Badge>CORE SERVICE</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-[52px] font-extrabold text-[#1a1b4b] leading-tight mb-8 md:mb-16">
              Digital Libraries & Institutional Repositories
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
            <div className="aspect-[16/10] md:aspect-[1.5/1] bg-primary/5 rounded-2xl flex items-center justify-center border border-primary/10 overflow-hidden relative group order-2 lg:order-1">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                 <div className="text-primary/20 flex flex-col items-center gap-4">
                   <div className="w-12 md:w-16 h-1 bg-primary/10 rounded-full" />
                   <div className="w-20 md:w-24 h-1 bg-primary/10 rounded-full" />
                 </div>
              </div>
              
              <div className="space-y-10 md:space-y-16 order-1 lg:order-2">
                <div>
                  <h3 className="text-xl md:text-[22px] font-bold text-[#1a1b4b] mb-4 md:mb-5">Institutional Repository Deployment</h3>
                  <p className="text-base md:text-lg lg:text-[18px] text-foreground/70 leading-relaxed">
                    We deploy and configure open-source repository platforms (DSpace, EPrints, and others) to capture, preserve, and disseminate your institution&apos;s scholarly output — including theses, research papers, and grey literature.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl md:text-[22px] font-bold text-[#1a1b4b] mb-4 md:mb-5">Digital Library Deployment</h3>
                  <p className="text-base md:text-lg lg:text-[18px] text-foreground/70 leading-relaxed">
                    From platform selection to content ingestion and user interface design, we build digital libraries that are discoverable, accessible, and aligned with international standards for digital preservation.
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
          className="space-y-8 md:space-y-10"
        >
          <div className="max-w-5xl">
            <Badge>CORE SERVICE</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-[52px] font-extrabold text-[#1a1b4b] leading-tight mb-6 md:mb-8">
              Metadata, RDA & RFID Integration
            </h2>
            <p className="text-base md:text-lg lg:text-[19px] text-foreground/70 leading-relaxed max-w-4xl mb-8 md:mb-12">
              Accurate metadata is the foundation of discoverability. We provide expert metadata generation services using RDA (Resource Description and Access) standards, and integrate RFID technology to streamline physical collection management and self-service operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: 'Metadata Generation',
                desc: 'Creation of high-quality, standards-compliant metadata records for print and digital collections.'
              },
              {
                title: 'RDA Cataloguing',
                desc: 'Transition from AACR2 to RDA-compliant cataloguing practices, improving interoperability and discovery.'
              },
              {
                title: 'RFID Integration',
                desc: 'End-to-end RFID tagging, hardware installation, and system integration for smart library operations.'
              }
            ].map((item, i) => (
              <div key={i} className="p-6 md:p-10 bg-card border border-primary/10 border-l-[6px] border-l-primary rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-xl md:text-[22px] font-bold text-[#1a1b4b] mb-4 md:mb-5">{item.title}</h3>
                <p className="text-sm md:text-base lg:text-[17px] text-foreground/70 leading-relaxed">{item.desc}</p>
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
          className="space-y-8 md:space-y-10"
        >
          <div className="max-w-5xl">
            <Badge>CORE SERVICE</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-[52px] font-extrabold text-[#1a1b4b] leading-tight mb-8 md:mb-12">
              E-Resources, Open Science & Curation
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: Database,
                title: 'E-Resources Subscription',
                desc: 'Curated access to academic databases, journals, and digital collections tailored to your institution\'s research needs and budget.'
              },
              {
                icon: Unlock,
                title: 'Open Science Training',
                desc: 'Workshops and training on open access publishing, research data management, and open science practices for researchers and librarians.'
              },
              {
                icon: Users,
                title: 'E-Resources Curation',
                desc: 'Ongoing curation, licensing support, and usage analytics to maximise the value of your electronic resource investments.'
              }
            ].map((item, i) => (
              <div key={i} className="p-6 md:p-10 bg-primary/5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-primary/5">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center mb-5 md:mb-6">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-[22px] font-bold text-[#1a1b4b] mb-3 md:mb-4">{item.title}</h3>
                <p className="text-sm md:text-base lg:text-[17px] text-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 7. About (Formerly Who We Are) */}
        <motion.div 
          id="about"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 md:space-y-10"
        >
          <div className="max-w-5xl">
            <Badge>ABOUT</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-[52px] font-extrabold text-[#1a1b4b] leading-tight mb-8 md:mb-12">
              Expert Consultancy for the Modern Information Age
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
            <div className="p-8 md:p-12 bg-primary rounded-2xl text-white">
              <h3 className="text-xl md:text-[24px] font-bold mb-4 md:mb-6">Our Mission</h3>
              <p className="text-base md:text-lg lg:text-[19px] leading-relaxed opacity-90">
                We partner with libraries, institutions, and organisations to design and deploy information systems that are efficient, sustainable, and future-ready. Our team brings deep domain expertise in Library and Information Science combined with hands-on technical implementation experience.
              </p>
            </div>
            
            <div className="space-y-6 md:space-y-8 pt-0 md:pt-4">
              <h3 className="text-xl md:text-[22px] font-bold text-[#1a1b4b]">Why Organisations Choose Us</h3>
              <ul className="space-y-3 md:space-y-4">
                {[
                  'Proven track record across diverse sectors',
                  'End-to-end implementation support',
                  'Customised training and capacity building',
                  'Standards-compliant methodologies (RDA, RFID, Dublin Core)',
                  'Dedicated post-deployment support'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 md:gap-4 text-sm md:text-base lg:text-[17px] text-foreground/70">
                    <span className="text-primary font-bold mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 8. Our Approach */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 md:space-y-10"
        >
          <div className="max-w-5xl">
            <Badge>OUR APPROACH</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-[52px] font-extrabold text-[#1a1b4b] leading-tight mb-6 md:mb-8">
              A Structured Path to Digital Transformation
            </h2>
            <p className="text-base md:text-lg lg:text-[19px] text-foreground/70 leading-relaxed max-w-4xl mb-10 md:mb-16">
              Every engagement follows a clear, phased methodology designed to minimise disruption and maximise adoption. We work closely with your stakeholders at every stage to ensure solutions are fit for purpose and sustainable.
            </p>
          </div>
          
          <div className="relative py-10 md:py-24 flex flex-col items-center">
            {/* Proper Pinwheel Graphic */}
            <div className="relative w-72 h-72 md:w-[500px] md:h-[500px] transition-all duration-1000 group cursor-pointer hover:rotate-12">
              <div className="absolute inset-0 rounded-full border-8 border-primary/5 p-4 md:p-12 shadow-inner">
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm transition-transform duration-700 group-hover:rotate-[360deg]">
                  <PinwheelPart icon={Search} title="Assessment" angle={0} color="bg-primary/95" />
                  <PinwheelPart icon={Settings} title="Design" angle={90} color="bg-primary/85" />
                  <PinwheelPart icon={Folder} title="Deployment" angle={180} color="bg-primary/75" />
                  <PinwheelPart icon={Presentation} title="Training" angle={270} color="bg-primary/65" />
                </div>
              </div>
              {/* Center Dot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-16 md:h-16 bg-white rounded-full shadow-2xl z-20 flex items-center justify-center border-4 border-primary/10 transition-transform duration-500 group-hover:scale-110">
                <div className="w-4 h-4 md:w-6 md:h-6 bg-primary rounded-full animate-pulse" />
              </div>
            </div>
            
            <p className="text-sm md:text-base lg:text-[17px] text-foreground/70 text-center max-w-3xl mt-12 md:mt-24 leading-relaxed italic border-l-4 border-primary/20 pl-6 py-2">
              "Our phased approach ensures that each stage builds on the last — from initial assessment through to long-term support."
            </p>
          </div>
        </motion.div>

        {/* 9. Get Started */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 md:space-y-10"
        >
          <div className="max-w-5xl">
            <Badge>GET STARTED</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-[52px] font-extrabold text-[#1a1b4b] leading-tight mb-8 md:mb-12">
              Ready to Modernise Your Information Systems?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
            <div className="p-8 md:p-12 bg-primary rounded-2xl text-white order-1">
              <h3 className="text-xl md:text-[24px] font-bold mb-4 md:mb-6">Let&apos;s Start the Conversation</h3>
              <p className="text-base md:text-lg lg:text-[19px] leading-relaxed opacity-90 mb-8 md:mb-10">
                Whether you&apos;re exploring automation for the first time or looking to upgrade existing systems, our consultants are ready to understand your needs and propose a tailored solution.
              </p>
              <Link href="/request-consultation">
                <Button className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 font-bold h-12 md:h-14 px-6 md:px-8 rounded-lg text-base md:text-lg transition-colors group">
                  Request a Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="space-y-8 md:space-y-10 order-2">
              <div>
                <h3 className="text-xl md:text-[22px] font-bold text-[#1a1b4b] mb-4 md:mb-6">Our Service Areas</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
                  {[
                    'Library Automation & ILS',
                    'Digitisation & Paperless Office',
                    'Electronic Records Management',
                    'Digital Libraries & Repositories',
                    'Metadata, RDA & RFID',
                    'E-Resources & Open Science'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 md:gap-4 text-sm md:text-base lg:text-[17px] text-foreground/70">
                      <span className="text-primary font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 md:p-8 bg-sky-100 rounded-xl flex gap-4 md:gap-6 items-start">
                <Info className="w-5 h-5 md:w-6 md:h-6 text-sky-600 mt-1 shrink-0" />
                <p className="text-sm md:text-[16px] text-sky-900 leading-relaxed">
                  <span className="font-bold">MP3 Multisystems Koncept</span> — Your trusted partner in Library and Information Science consultancy and digital transformation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
