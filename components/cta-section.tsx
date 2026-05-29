import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10 border-y border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Heading */}
          <h2 className="text-balance text-4xl font-bold">
            Ready to Transform Your Institution?
          </h2>

          {/* Subheading */}
          <p className="text-balance text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Start your free trial today and experience how MP3 Koncept can streamline your library operations and unlock new possibilities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="group">
              Start Free Trial
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Mail size={18} className="mr-2" />
              Schedule Demo
            </Button>
          </div>

          {/* Note */}
          <p className="text-sm text-foreground/60">
            No credit card required. 30-day free trial includes full access to all features.
          </p>
        </div>
      </div>
    </section>
  );
}
