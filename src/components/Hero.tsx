/**
 * ====================================================
 * HERO SECTION
 * ====================================================
 * 
 * This component displays the main hero/home section.
 * 
 * TO EDIT:
 * - Content: Modify in src/data/siteData.ts (hero object)
 * - Background image: Generated below, or replace with your own
 */

import { hero } from "@/data/siteData";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-law-firm.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* 
          TO EDIT BACKGROUND IMAGE:
          Replace the import above with your own image, or change the URL below
        */}
        <img
          src={heroImage}
          alt="Law firm office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse-soft" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Trusted Legal Excellence Since 2001
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            {hero.headline}
          </h1>

          {/* Subheadline */}
          <p
            className="text-xl md:text-2xl text-secondary font-medium mb-4 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {hero.subheadline}
          </p>

          {/* Description */}
          <p
            className="text-lg text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            {hero.description}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-gold-dark text-secondary-foreground font-semibold px-8 py-6 text-lg shadow-gold hover:shadow-lg transition-all"
            >
              <a href={hero.ctaLink}>
                {hero.ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-6 text-lg"
            >
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-bounce"
      >
        <span className="text-sm">Scroll</span>
        <ChevronDown className="h-5 w-5" />
      </a>
    </section>
  );
};

export default Hero;