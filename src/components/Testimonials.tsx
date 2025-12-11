/**
 * ====================================================
 * TESTIMONIALS SECTION
 * ====================================================
 * 
 * This component displays client testimonials in a carousel.
 * 
 * TO EDIT: Modify in src/data/siteData.ts (testimonials array)
 * - Add or remove testimonials
 * - Each testimonial has: name, position, message, image
 */

import { useState, useEffect } from "react";
import { testimonials } from "@/data/siteData";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(goToNext, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from those who have experienced our commitment to excellence
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl border border-border shadow-elevated p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 p-4 bg-secondary rounded-xl shadow-gold">
              <Quote className="h-8 w-8 text-secondary-foreground" />
            </div>

            {/* Testimonial Content */}
            <div
              className={`transition-all duration-500 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 pt-6">
                "{testimonials[currentIndex].message}"
              </blockquote>

              <div className="flex items-center gap-4">
                {/* Author Image */}
                <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Author Info */}
                <div>
                  <p className="font-heading font-bold text-foreground text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].position}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4 md:-mx-16">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrev}
                className="pointer-events-auto bg-card border-border hover:bg-muted hover:border-secondary shadow-card rounded-full h-12 w-12"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="pointer-events-auto bg-card border-border hover:bg-muted hover:border-secondary shadow-card rounded-full h-12 w-12"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-secondary w-8"
                    : "bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;