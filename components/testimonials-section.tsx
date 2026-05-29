import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'MP3 Koncept transformed our library operations. The automation features alone saved us hundreds of hours per year.',
    author: 'Dr. Sarah Mitchell',
    role: 'Director, University Library System',
    institution: 'State University',
    rating: 5,
  },
  {
    quote: 'The document digitization capabilities are exceptional. Our entire archive is now searchable and accessible.',
    author: 'James Chen',
    role: 'Head of Collections',
    institution: 'Metropolitan Public Library',
    rating: 5,
  },
  {
    quote: 'Best investment we made for our institution. The customer support team is responsive and knowledgeable.',
    author: 'Maria Rodriguez',
    role: 'IT Director',
    institution: 'Tech Institute Library',
    rating: 5,
  },
  {
    quote: 'The API integration was seamless. We were able to connect our existing systems without any hassle.',
    author: 'David Thompson',
    role: 'Systems Administrator',
    institution: 'Corporate Research Center',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-balance text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-balance text-lg text-foreground/70 max-w-2xl mx-auto">
            Trusted by hundreds of institutions worldwide. Read their success stories.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.author}
              className="group relative overflow-hidden border border-border/50 p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all" />

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/80 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  <p className="text-sm text-foreground/50">{testimonial.institution}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
