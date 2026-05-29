import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, AlertCircle } from 'lucide-react';

export function DocsContent() {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-foreground/60 mb-8">
        <a href="/docs" className="hover:text-foreground transition-colors">
          Documentation
        </a>
        <span>/</span>
        <span className="text-foreground">Getting Started</span>
      </nav>

      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Getting Started</h1>
        <p className="text-lg text-foreground/70">
          Welcome to MP3 Koncept documentation. This guide will help you get up and running with our enterprise solutions.
        </p>
      </div>

      {/* Table of Contents */}
      <Card className="mb-8 p-6 bg-card/50 border-primary/20 backdrop-blur-sm">
        <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="text-primary">📑</span> On this page
        </h2>
        <ul className="space-y-2 text-sm">
          {['Introduction', 'Key Features', 'Next Steps', 'Getting Help'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary hover:underline">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </Card>

      {/* Content Sections */}
      <div className="space-y-12">
        {/* Introduction */}
        <section id="introduction">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Introduction</h2>
          <p className="text-foreground/70 mb-4">
            MP3 Koncept is a comprehensive platform designed for modern institutions that need robust library management, document digitization, and enterprise software solutions. Our system is built on proven technologies and designed with enterprise scalability in mind.
          </p>
          <p className="text-foreground/70">
            Whether you&apos;re a university library, public library system, or specialized institutional library, our platform adapts to your unique needs and workflows.
          </p>
        </section>

        {/* Key Features */}
        <section id="key-features">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {[
              'Full-featured library management system',
              'Advanced document digitization with OCR',
              'Powerful search and discovery interface',
              'Enterprise-grade security and compliance',
              'RESTful API for integrations',
              'Comprehensive reporting and analytics',
            ].map((feature) => (
              <div key={feature} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/50">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground/70">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Code Example */}
        <section id="code-example">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Quick Integration Example</h2>
          <Card className="bg-foreground/5 border border-border/50 p-4 mb-4 overflow-x-auto">
            <pre className="text-sm text-foreground/80 font-mono">
              {`// Initialize the MP3 Koncept SDK
import { MP3Koncept } from '@mp3koncept/sdk';

const client = new MP3Koncept({
  apiKey: 'your-api-key',
  baseUrl: 'https://api.mp3koncept.com'
});

// Fetch library catalog
const books = await client.catalog.search({
  query: 'library automation',
  limit: 10
});

console.log(books);`}
            </pre>
          </Card>
          <p className="text-sm text-foreground/60 flex items-start gap-2">
            <Code size={16} className="mt-0.5" />
            View the <a href="/docs/api" className="text-primary hover:underline">API Reference</a> for more details.
          </p>
        </section>

        {/* Info Box */}
        <Card className="bg-accent/10 border border-accent/30 p-6">
          <div className="flex gap-4">
            <AlertCircle className="text-accent flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Pro Tip</h3>
              <p className="text-foreground/70">
                Set up your development environment first by following our <a href="#" className="text-accent hover:underline font-medium">Installation Guide</a>. This will ensure you have all required dependencies configured correctly.
              </p>
            </div>
          </div>
        </Card>

        {/* Next Steps */}
        <section id="next-steps">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Next Steps</h2>
          <div className="space-y-3">
            {[
              { title: 'Installation', desc: 'Set up MP3 Koncept in your environment' },
              { title: 'Quick Start Guide', desc: 'Follow our step-by-step tutorial' },
              { title: 'API Documentation', desc: 'Explore available endpoints and integration options' },
            ].map((step) => (
              <Button
                key={step.title}
                variant="outline"
                className="w-full justify-between h-auto p-4 mb-2"
              >
                <div className="text-left">
                  <div className="font-semibold text-foreground">{step.title}</div>
                  <div className="text-sm text-foreground/60">{step.desc}</div>
                </div>
                <ArrowRight size={20} className="text-primary" />
              </Button>
            ))}
          </div>
        </section>

        {/* Getting Help */}
        <section id="getting-help">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Getting Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: 'Documentation',
                desc: 'Comprehensive guides and API reference',
              },
              {
                title: 'Community Forum',
                desc: 'Connect with other users and get support',
              },
              {
                title: 'Support Team',
                desc: 'Contact our enterprise support team',
              },
            ].map((help) => (
              <Card key={help.title} className="p-4 bg-card/50 border-border/50">
                <h3 className="font-semibold text-foreground mb-2">{help.title}</h3>
                <p className="text-sm text-foreground/60 mb-4">{help.desc}</p>
                <Button variant="ghost" size="sm" className="w-full">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Navigation */}
      <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
        <Button variant="outline">← Previous</Button>
        <Button>Next →</Button>
      </div>
    </article>
  );
}
