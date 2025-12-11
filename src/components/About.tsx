/**
 * ====================================================
 * ABOUT US SECTION
 * ====================================================
 * 
 * This component displays the About Us section.
 * 
 * TO EDIT: Modify in src/data/siteData.ts (about object)
 * - Title, subtitle, description
 * - Vision and mission statements
 * - Statistics
 */

import { about } from "@/data/siteData";
import { Scale, Target, Eye } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            About Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            {about.title}
          </h2>
          <p className="text-muted-foreground text-lg">{about.subtitle}</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left: Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Scale className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Our Story
              </h3>
            </div>
            <div className="space-y-4">
              {about.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right: Vision & Mission Cards */}
          <div className="space-y-6">
            {/* Vision Card */}
            <div className="bg-primary text-primary-foreground p-8 rounded-xl shadow-elevated">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary-foreground/10 rounded-lg">
                  <Eye className="h-5 w-5 text-secondary" />
                </div>
                <h4 className="font-heading text-xl font-semibold">
                  {about.vision.title}
                </h4>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                {about.vision.content}
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-card border border-border p-8 rounded-xl shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Target className="h-5 w-5 text-secondary" />
                </div>
                <h4 className="font-heading text-xl font-semibold text-foreground">
                  {about.mission.title}
                </h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {about.mission.content}
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {about.stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-xl border border-border hover:border-secondary/50 hover:shadow-card transition-all"
            >
              <span className="block font-heading text-4xl lg:text-5xl font-bold text-gradient-gold">
                {stat.value}
              </span>
              <span className="block text-muted-foreground mt-2">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;