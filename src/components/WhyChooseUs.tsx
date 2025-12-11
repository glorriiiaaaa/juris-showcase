/**
 * ====================================================
 * WHY CHOOSE US SECTION
 * ====================================================
 * 
 * This component displays the benefits/features section.
 * 
 * TO EDIT: Modify in src/data/siteData.ts (whyChooseUs object)
 * - Title and subtitle
 * - Points array (add, remove, or modify bullet points)
 */

import { whyChooseUs } from "@/data/siteData";
import { 
  CheckCircle2, 
  Award, 
  Users, 
  MessageCircle, 
  DollarSign, 
  Clock, 
  Lock 
} from "lucide-react";

// Icon mapping for visual variety
const iconMap: { [key: number]: typeof CheckCircle2 } = {
  0: Award,
  1: Users,
  2: MessageCircle,
  3: DollarSign,
  4: Clock,
  5: Lock,
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Our Advantages
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            {whyChooseUs.title}
          </h2>
          <p className="text-primary-foreground/70 text-lg">{whyChooseUs.subtitle}</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.points.map((point, index) => {
            const Icon = iconMap[index] || CheckCircle2;
            return (
              <div
                key={index}
                className="group p-6 bg-primary-foreground/5 backdrop-blur-sm rounded-xl border border-primary-foreground/10 hover:border-secondary/50 hover:bg-primary-foreground/10 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/20 rounded-lg group-hover:bg-secondary/30 transition-colors">
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-2">
                      {point.title}
                    </h3>
                    <p className="text-primary-foreground/70 leading-relaxed">
                      {point.description}
                    </p>
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

export default WhyChooseUs;