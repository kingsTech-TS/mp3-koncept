import { Card } from '@/components/ui/card';
import { GraduationCap, Building2, BookMarked, Users2 } from 'lucide-react';

const solutions = [
  {
    icon: GraduationCap,
    title: 'Academic Libraries',
    description: 'Solutions tailored for university and college libraries with advanced research support capabilities.',
    features: ['Research Commons', 'Course Reserves', 'E-Resource Management', 'Integration with LMS'],
  },
  {
    icon: Building2,
    title: 'Public Libraries',
    description: 'Comprehensive systems for public library networks with community engagement features.',
    features: ['Community Programs', 'Patron Engagement', 'Mobile Services', 'Multi-Branch Management'],
  },
  {
    icon: BookMarked,
    title: 'Special Libraries',
    description: 'Specialized solutions for corporate, medical, and law libraries with unique requirements.',
    features: ['Specialized Indexing', 'Compliance Management', 'Knowledge Bases', 'Expert Systems'],
  },
  {
    icon: Users2,
    title: 'Institutional Networks',
    description: 'Enterprise solutions for library consortiums and multi-institutional systems.',
    features: ['Resource Sharing', 'Union Catalog', 'Network Analytics', 'Centralized Management'],
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-balance text-4xl font-bold mb-4">
            Industry-Specific Solutions
          </h2>
          <p className="text-balance text-lg text-foreground/70 max-w-2xl mx-auto">
            Customized platforms for different types of libraries and institutions.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <Card
                key={solution.title}
                className="group relative overflow-hidden border border-border/50 p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary group-hover:text-accent transition-colors" size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-3">{solution.title}</h3>

                  {/* Description */}
                  <p className="text-foreground/70 mb-6">{solution.description}</p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground/60">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
