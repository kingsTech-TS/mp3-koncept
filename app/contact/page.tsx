'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
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
            <h1 className="text-4xl font-bold text-foreground">Message Sent!</h1>
            <p className="text-xl text-foreground/70 max-w-lg">
              Thank you for reaching out. Our team has received your message and will get back to you shortly.
            </p>
            <Button size="lg" asChild>
              <Link href="/">Return Home</Link>
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
      
      <div className="py-20 mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div className="space-y-8">
              <div>
                <span className="inline-block px-3 py-1 text-[11px] font-bold tracking-wider uppercase border border-primary/20 text-primary/80 rounded-md mb-6">
                  CONTACT US
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#1a1b4b] leading-tight">
                  Get in Touch
                </h1>
                <p className="text-xl text-foreground/70 mt-6 leading-relaxed">
                  Have a question about our services? Our team is here to help you find the right solution for your institution.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1b4b]">Email Us</h3>
                    <p className="text-foreground/70">mp3instantsms@gmail.com </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1b4b]">Call Us</h3>
                    <p className="text-foreground/70">08129492662, 08059500528</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1b4b]">Visit Us</h3>
                    <p className="text-foreground/70">123 Suit 6, Tedder G. Suit, University of Ibadan, Ibadan</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 md:p-10 shadow-2xl border-primary/10 bg-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/80">First Name</label>
                    <input required type="text" placeholder="John" className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/80">Last Name</label>
                    <input required type="text" placeholder="Doe" className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/80">Email Address</label>
                  <input required type="email" placeholder="john@example.com" className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/80">Message</label>
                  <textarea required rows={4} placeholder="How can we help you?" className="w-full p-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>
                <Button type="submit" className="w-full h-12 text-lg font-bold">Send Message</Button>
              </form>
            </Card>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
