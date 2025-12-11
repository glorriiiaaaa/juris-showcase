/**
 * ====================================================
 * PRACTICES SECTION
 * ====================================================
 * 
 * This component displays the legal practice areas with flip cards.
 * 
 * TO EDIT: Modify in src/data/siteData.ts (practices array)
 * - Add, remove, or modify practice areas
 * - Each practice has: title, icon, shortDescription, fullDescription
 */

import { practices } from "@/data/siteData";
import { 
  Scale, 
  Building2, 
  Users, 
  Home, 
  Lightbulb, 
  Briefcase,
  LucideIcon 
} from "lucide-react";

// Icon mapping based on practice icon names
const iconMap: { [key: string]: LucideIcon } = {
  Scale,
  Building2,
  Users,
  Home,
  Lightbulb,
  Briefcase,
};

const Practices = () => {
  return (
    <section id="practices" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Our Expertise
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Practice Areas
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive legal services tailored to your unique needs
          </p>
        </div>

        {/* Practice Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => {
            const Icon = iconMap[practice.icon] || Scale;
            return (
              <div
                key={index}
                className="flip-card h-80 cursor-pointer group"
              >
                <div className="flip-card-inner relative w-full h-full">
                  {/* Front of Card */}
                  <div className="flip-card-front absolute inset-0 bg-card rounded-xl border border-border shadow-card p-8 flex flex-col items-center justify-center text-center">
                    <div className="p-4 bg-primary rounded-xl mb-6 group-hover:bg-secondary transition-colors duration-300">
                      <Icon className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                      {practice.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {practice.shortDescription}
                    </p>
                    <span className="mt-4 text-secondary text-sm font-medium">
                      Hover to learn more →
                    </span>
                  </div>

                  {/* Back of Card */}
                  <div className="flip-card-back absolute inset-0 bg-primary rounded-xl p-8 flex flex-col justify-center">
                    <h3 className="font-heading text-xl font-bold text-primary-foreground mb-4">
                      {practice.title}
                    </h3>
                    <p className="text-primary-foreground/80 leading-relaxed mb-6">
                      {practice.fullDescription}
                    </p>
                    <a
                      href="#contact"
                      className="inline-flex items-center text-secondary hover:text-gold-light font-semibold transition-colors"
                    >
                      Schedule Consultation
                      <span className="ml-2">→</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Practices;