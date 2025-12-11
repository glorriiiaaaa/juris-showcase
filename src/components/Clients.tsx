/**
 * ====================================================
 * CLIENTS SECTION
 * ====================================================
 * 
 * This component displays the infinite scrolling client logos.
 * 
 * TO EDIT:
 * - Client logos: Modify in src/data/siteData.ts (clients array)
 * - Replace placeholder images with actual client logos
 */

import { clients } from "@/data/siteData";

const Clients = () => {
  // Duplicate the clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Trusted By
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2">
            Our Esteemed Clients
          </h2>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/50 to-transparent z-10" />

        {/* Scrolling Logos */}
        <div className="flex animate-scroll">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              {/* 
                TO EDIT CLIENT LOGOS:
                Replace the placeholder images in src/data/siteData.ts
                with actual client logo paths or URLs
              */}
              <div className="w-40 h-20 bg-card rounded-lg border border-border flex items-center justify-center p-4 hover:border-secondary/50 transition-colors">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;