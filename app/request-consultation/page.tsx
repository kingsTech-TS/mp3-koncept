'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Calendar, 
  Clock, 
  MessageSquare, 
  User, 
  Mail, 
  Building2,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function RequestConsultationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <CheckCircle2 size={40} />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Request Received!</h1>
            <p className="text-xl text-foreground/70 max-w-lg">
              Thank you for reaching out. One of our senior consultants will contact you within 24 hours to schedule your session.
            </p>
            <Button size="lg" asChild>
              <a href="/">Return Home</a>
            </Button>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="relative py-20 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left side: Info */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <span className="inline-block px-3 py-1 text-[11px] font-bold tracking-wider uppercase border border-primary/20 text-primary/80 rounded-md mb-6">
                  CONSULTATION
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#1a1b4b] leading-tight">
                  Book a Strategy Session
                </h1>
                <p className="text-xl text-foreground/70 mt-6 leading-relaxed">
                  Get expert guidance on modernising your institution's information systems. Our consultants provide tailored advice on automation, digitisation, and records management.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                {[
                  {
                    icon: Clock,
                    title: "30-Minute Expert Review",
                    desc: "A focused session to understand your current challenges and goals."
                  },
                  {
                    icon: Calendar,
                    title: "Flexible Scheduling",
                    desc: "Choose a time that works best for your team's busy schedule."
                  },
                  {
                    icon: MessageSquare,
                    title: "Actionable Insights",
                    desc: "Receive immediate recommendations and a roadmap for transformation."
                  }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-card border border-border/50 shadow-sm">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <feature.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1b4b]">{feature.title}</h3>
                      <p className="text-sm text-foreground/60">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right side: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-8 md:p-10 shadow-2xl border-primary/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                        <User size={14} className="text-primary" />
                        Full Name
                      </label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                        <Mail size={14} className="text-primary" />
                        Work Email
                      </label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@institution.edu"
                        className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                      <Building2 size={14} className="text-primary" />
                      Institution Name
                    </label>
                    <input 
                      required
                      type="text" 
                      placeholder="University of Technology"
                      className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                      <MessageSquare size={14} className="text-primary" />
                      Primary Area of Interest
                    </label>
                    <select className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
                      <option>Library Automation & ILS</option>
                      <option>Digitisation & Paperless Office</option>
                      <option>Electronic Records Management</option>
                      <option>Digital Libraries & Repositories</option>
                      <option>Metadata, RDA & RFID</option>
                      <option>E-Resources & Open Science</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/80">How can we help you?</label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us about your project requirements..."
                      className="w-full p-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full h-14 text-lg font-bold group">
                    Request Strategy Session
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-[12px] text-center text-foreground/50">
                    By submitting this form, you agree to our privacy policy and consent to being contacted regarding your consultation.
                  </p>
                </form>
              </Card>
            </motion.div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
