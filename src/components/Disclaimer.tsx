/**
 * ====================================================
 * DISCLAIMER COMPONENT
 * ====================================================
 * 
 * This component displays the legal disclaimer modal.
 * 
 * TO EDIT: Modify the disclaimer content in src/data/siteData.ts
 */

import { useState, useEffect } from "react";
import { disclaimer, firmInfo } from "@/data/siteData";
import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DisclaimerProps {
  onAccept: () => void;
}

const Disclaimer = ({ onAccept }: DisclaimerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate in after mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    setTimeout(onAccept, 300);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/95 backdrop-blur-sm">
      <div
        className={`max-w-2xl w-full mx-4 bg-card rounded-lg shadow-elevated transform transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Header */}
        <div className="bg-primary text-primary-foreground px-8 py-6 rounded-t-lg">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-secondary/20 rounded-full">
              <Scale className="h-8 w-8 text-secondary" />
            </div>
            <div>
              <h1 className="text-2xl font-heading font-bold">{firmInfo.name}</h1>
              <p className="text-primary-foreground/80 text-sm">{firmInfo.tagline}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-6 max-h-[50vh] overflow-y-auto">
          <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
            {disclaimer.title}
          </h2>
          <div className="prose prose-sm text-muted-foreground leading-relaxed">
            {disclaimer.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h3 key={index} className="font-semibold text-foreground mt-4 mb-2">
                    {paragraph.replace(/\*\*/g, '')}
                  </h3>
                );
              }
              if (paragraph.includes('**')) {
                const parts = paragraph.split('**');
                return (
                  <p key={index} className="mb-3">
                    {parts.map((part, i) => 
                      i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part
                    )}
                  </p>
                );
              }
              return <p key={index} className="mb-3">{paragraph}</p>;
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-muted/50 rounded-b-lg border-t border-border">
          <Button
            onClick={handleAccept}
            className="w-full bg-primary hover:bg-navy-light text-primary-foreground font-semibold py-6 text-lg transition-all hover:shadow-lg"
          >
            {disclaimer.buttonText}
          </Button>
          <p className="text-center text-xs text-muted-foreground mt-3">
            By clicking the button above, you acknowledge that you have read and understood this disclaimer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;