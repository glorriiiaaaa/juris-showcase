/**
 * ====================================================
 * WHATSAPP FLOATING BUTTON
 * ====================================================
 * 
 * This component displays the floating WhatsApp icon.
 * 
 * TO EDIT:
 * - WhatsApp number: Modify in src/data/siteData.ts (firmInfo.whatsappNumber)
 * - Format: Country code + number without spaces or symbols (e.g., "15551234567")
 */

import { firmInfo } from "@/data/siteData";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const whatsappUrl = `https://wa.me/${firmInfo.whatsappNumber}?text=Hello! I'd like to inquire about your legal services.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-6 bottom-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative">
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
        
        {/* Button */}
        <div className="relative p-4 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all group-hover:scale-110">
          <MessageCircle className="h-7 w-7 text-white" fill="currentColor" />
        </div>

        {/* Tooltip */}
        <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-foreground" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppFloat;