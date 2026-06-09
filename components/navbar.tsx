'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'Solutions', href: '/#solutions' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 mb-[10px]">
      <div className="absolute inset-0 bg-background/70 backdrop-blur-xl border-b border-border/50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg shrink-0 group transition-transform hover:scale-[1.02] active:scale-[0.98]">
            <Image 
              src="/logo.png" 
              alt="MP3 Koncept Logo" 
              width={180} 
              height={60} 
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-bold text-foreground/60 transition-all hover:text-primary relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact">
              <Button variant="ghost" className="font-bold text-sm hover:bg-primary/5 transition-colors">
                Get in Touch
              </Button>
            </Link>
            <Link href="/request-consultation">
              <Button size="sm" className="font-bold text-sm px-6 rounded-lg shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all active:scale-95">
                Request Consultation
              </Button>
            </Link>
          </div>

          {/* Tablet & Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-2xl border border-border shadow-2xl rounded-3xl overflow-hidden p-6 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center px-4 py-3 text-lg font-bold text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-6 mt-6 border-t border-border/50">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" size="lg" className="w-full font-bold rounded-xl h-14">
                    Get in Touch
                  </Button>
                </Link>
                <Link href="/request-consultation" onClick={() => setIsOpen(false)}>
                  <Button size="lg" className="w-full font-bold rounded-xl h-14 shadow-xl shadow-primary/10">
                    Request Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
