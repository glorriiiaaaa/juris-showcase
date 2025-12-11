/**
 * ====================================================
 * TEAM SECTION
 * ====================================================
 * 
 * This component displays the team members.
 * 
 * TO EDIT: Modify in src/data/siteData.ts (team array)
 * - Add or remove team members
 * - Each member has: name, position, education, description, email, phone, image
 */

import { team } from "@/data/siteData";
import { Mail, Phone, GraduationCap } from "lucide-react";

const Team = () => {
  return (
    <section id="team" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Our Team
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Meet Our Legal Experts
          </h2>
          <p className="text-muted-foreground text-lg">
            Experienced attorneys dedicated to protecting your interests
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden shadow-card hover:shadow-elevated transition-all group"
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden bg-muted">
                {/* 
                  TO EDIT TEAM PHOTOS:
                  Replace placeholder images in src/data/siteData.ts
                  with actual team member photo paths or URLs
                */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium mb-3">
                  {member.position}
                </p>
                
                {/* Education */}
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <GraduationCap className="h-4 w-4 text-secondary" />
                  <span>{member.education}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {member.description}
                </p>

                {/* Contact Links */}
                <div className="flex flex-col gap-2 pt-4 border-t border-border">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-sm text-foreground hover:text-secondary transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="truncate">{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-2 text-sm text-foreground hover:text-secondary transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>{member.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;