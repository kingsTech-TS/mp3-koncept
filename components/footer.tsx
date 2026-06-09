import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/20" />
              <span className="font-black text-2xl tracking-tighter text-[#1a1b4b]">MP3 KONCEPT</span>
            </div>
            <p className="text-base text-foreground/50 leading-relaxed font-medium">
              Driving the knowledge economy through world-class information systems and enterprise software solutions.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-6">
            <h4 className="font-black text-sm uppercase tracking-widest text-[#1a1b4b]">Product</h4>
            <ul className="space-y-4">
              <li><Link href="/#services" className="text-foreground/50 hover:text-primary transition-colors font-medium">Services</Link></li>
              <li><Link href="/#solutions" className="text-foreground/50 hover:text-primary transition-colors font-medium">Solutions</Link></li>
              <li><Link href="/request-consultation" className="text-foreground/50 hover:text-primary transition-colors font-medium">Request Quote</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h4 className="font-black text-sm uppercase tracking-widest text-[#1a1b4b]">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/#about" className="text-foreground/50 hover:text-primary transition-colors font-medium">About Us</Link></li>
              <li><Link href="/contact" className="text-foreground/50 hover:text-primary transition-colors font-medium">Support</Link></li>
              <li><Link href="/privacy" className="text-foreground/50 hover:text-primary transition-colors font-medium">Privacy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-black text-sm uppercase tracking-widest text-[#1a1b4b]">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-black uppercase tracking-wider text-primary/40">Email</p>
                  <a href="mailto:imp3instantsms@gmail.com" className="text-sm font-bold text-foreground/70 hover:text-primary transition-colors break-all">
                    imp3instantsms@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-black uppercase tracking-wider text-primary/40">Phone</p>
                  <a href="tel:+2348129492662" className="text-sm font-bold text-foreground/70 hover:text-primary transition-colors">
                    08129492662, 08059500528
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-black uppercase tracking-wider text-primary/40">Address</p>
                  <span className="text-sm font-bold text-foreground/70 leading-snug">
                    Tedder Hall, University of Ibadan, Nigeria
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 mt-20 pt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm font-bold text-foreground/30 uppercase tracking-[0.2em]">
              © 2026 MP3 Multisystems Koncept
            </p>
            <div className="flex gap-8">
              <Link href="/privacy" className="text-xs font-black uppercase tracking-widest text-foreground/30 hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-xs font-black uppercase tracking-widest text-foreground/30 hover:text-primary transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
