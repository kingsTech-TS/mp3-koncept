'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import {
  BarChart3,
  Shield,
  Zap,
  Users,
  BookOpen,
  Search,
  RefreshCw,
  Database,
} from 'lucide-react';

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

const features = [
  {
    icon: BookOpen,
    title: 'Library Management',
    description: 'Complete library automation system with catalog management, circulation, and patron services.',
  },
  {
    icon: Search,
    title: 'Advanced Search',
    description: 'Powerful full-text search with faceted navigation and relevance ranking.',
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Optimized for speed with response times under 100ms for search queries.',
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Secure data storage with enterprise-grade backup and disaster recovery.',
  },
  {
    icon: Users,
    title: 'User Management',
    description: 'Flexible user roles, permissions, and authentication systems.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption, compliance with GDPR, FERPA, and other standards.',
  },
  {
    icon: RefreshCw,
    title: 'API Integration',
    description: 'RESTful APIs for seamless integration with existing systems.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reports',
    description: 'Comprehensive analytics dashboards and customizable reporting tools.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-balance text-4xl font-bold mb-4">
            Powerful Features for Modern Institutions
          </h2>
          <p className="text-balance text-lg text-foreground/70 max-w-2xl mx-auto">
            Everything you need to manage your library operations efficiently and securely.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card
                key={feature.title}
                className="group relative overflow-hidden border border-border/50 p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary group-hover:text-accent transition-colors" size={24} />
                  </div>

                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-foreground/60">{feature.description}</p>
                </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
