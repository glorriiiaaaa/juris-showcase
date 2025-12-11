/**
 * ====================================================
 * HEADER COMPONENT
 * ====================================================
 * 
 * This component displays the navigation header.
 * 
 * TO EDIT:
 * - Logo: Replace the Scale icon or add your logo image
 * - Navigation links: Modify in src/data/siteData.ts (navigation array)
 * - Firm name: Modify in src/data/siteData.ts (firmInfo.name)
 */

import { useState, useEffect } from "react";
import { navigation, firmInfo } from "@/data/siteData";
import { Scale, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-card py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            {/* 
              TO EDIT LOGO: 
              Replace the Scale icon with your logo image:
              <img src="/path-to-your-logo.png" alt={firmInfo.name} className="h-10" />
            */}
            <div className={`p-2 rounded-lg transition-colors ${
              isScrolled ? "bg-primary" : "bg-primary-foreground/10"
            }`}>
              <Scale className={`h-7 w-7 ${isScrolled ? "text-secondary" : "text-secondary"}`} />
            </div>
            <div>
              <span className={`font-heading text-xl font-bold tracking-tight ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}>
                {firmInfo.name}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`link-underline font-medium transition-colors ${
                  isScrolled
                    ? "text-foreground hover:text-secondary"
                    : "text-primary-foreground/90 hover:text-primary-foreground"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${firmInfo.phone}`} className={`flex items-center gap-2 ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}>
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">{firmInfo.phone}</span>
            </a>
            <Button
              asChild
              className="bg-secondary hover:bg-gold-dark text-secondary-foreground font-semibold px-6"
            >
              <a href="#contact">Free Consultation</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <nav className={`flex flex-col gap-2 p-4 rounded-lg ${
            isScrolled ? "bg-muted" : "bg-primary-foreground/10 backdrop-blur-sm"
          }`}>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                  isScrolled
                    ? "text-foreground hover:bg-background"
                    : "text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                {item.name}
              </a>
            ))}
            <Button
              asChild
              className="mt-2 bg-secondary hover:bg-gold-dark text-secondary-foreground font-semibold"
            >
              <a href="#contact" onClick={handleNavClick}>Free Consultation</a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;