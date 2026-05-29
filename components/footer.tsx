import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
              <span className="font-semibold text-foreground">MP3 Koncept</span>
            </div>
            <p className="text-sm text-foreground/60">
              Enterprise solutions for library automation and document digitization.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#features" className="text-foreground/60 hover:text-foreground transition-colors">Features</Link></li>
              <li><Link href="/#solutions" className="text-foreground/60 hover:text-foreground transition-colors">Solutions</Link></li>
              <li><Link href="/docs" className="text-foreground/60 hover:text-foreground transition-colors">Documentation</Link></li>
              <li><Link href="/#pricing" className="text-foreground/60 hover:text-foreground transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#case-studies" className="text-foreground/60 hover:text-foreground transition-colors">Case Studies</Link></li>
              <li><Link href="/#training" className="text-foreground/60 hover:text-foreground transition-colors">Training</Link></li>
              <li><Link href="/#testimonials" className="text-foreground/60 hover:text-foreground transition-colors">Testimonials</Link></li>
              <li><Link href="/#blog" className="text-foreground/60 hover:text-foreground transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 text-accent flex-shrink-0" />
                <a href="mailto:info@mp3koncept.com" className="text-foreground/60 hover:text-foreground transition-colors">
                  info@mp3koncept.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 text-accent flex-shrink-0" />
                <a href="tel:+1234567890" className="text-foreground/60 hover:text-foreground transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-accent flex-shrink-0" />
                <span className="text-foreground/60">
                  123 Enterprise Ave, Tech City, TC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-foreground/60">
              © 2024 MP3 Multisystems Koncept. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-foreground/60 hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-foreground/60 hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-foreground/60 hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
